import statesData from '../../data/states.js';
import { getFaqsPool } from '../../data/faqsPool.js';
import { getTestimonialsPool } from '../../data/testimonialsPool.js';
import { getWhyChoosePool } from '../../data/whyChoosePool.js';

function getSeededRandom(seedString) {
  let seed = 0;
  for (let i = 0; i < seedString.length; i++) {
    seed = (seed * 31 + seedString.charCodeAt(i)) % 2147483647;
  }
  if (seed <= 0) seed += 2147483646;
  return function() {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

function shuffleArray(array, randomFunc) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(randomFunc() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default {
  eleventyComputed: {
    nearbyCities: (data) => {
      const stateObj = statesData.find(s => s.slug === data.item.state.slug);
      if (!stateObj) return [];
      return stateObj.cities.filter(c => c.slug !== data.item.city.slug).slice(0, 14);
    },
    faqs: (data) => {
      const city = data.item.city;
      const state = data.item.state;
      const rand = getSeededRandom(`${city.slug}-${state.slug}`);
      const allFaqs = getFaqsPool(city, state, data.site.BRAND, data.site.PHONE);
      return shuffleArray(allFaqs, rand).slice(0, 5);
    },
    testimonials: (data) => {
      const city = data.item.city;
      const state = data.item.state;
      const rand = getSeededRandom(`${city.slug}-${state.slug}`);
      const allTestimonials = getTestimonialsPool(city, state, data.site.BRAND);
      return shuffleArray(allTestimonials, rand).slice(0, 3);
    },
    whyChooseContent: (data) => {
      const city = data.item.city;
      const state = data.item.state;
      const rand = getSeededRandom(`${city.slug}-${state.slug}`);
      const allWhyChoose = getWhyChoosePool(city, state, data.site.BRAND);
      return allWhyChoose[Math.floor(rand() * allWhyChoose.length)];
    },
    contentVariation: (data) => {
      const city = data.item.city;
      const state = data.item.state;
      const rand = getSeededRandom(`${city.slug}-${state.slug}`);
      return Math.floor(rand() * 3);
    },
    titleVariation: (data) => {
      const city = data.item.city;
      const state = data.item.state;
      const rand = getSeededRandom(`${city.slug}-${state.slug}`);
      return Math.floor(rand() * 2);
    },
    titleSuffix: (data) => {
      return data.titleVariation === 0 ? 'Same Day Service' : 'Emergency Service';
    },
    localRiskText: (data) => {
      const city = data.item.city;
      const state = data.item.state;
      let text = `${city.name} homeowners and businesses can rely on our licensed local plumbers for all plumbing needs — from emergency repairs to routine maintenance and installations.`;
      const coldStates = ['WI','MN','MI','NY','IL','ND','SD','OH','PA','ME','VT','NH','IA','MA','MT','WY','CO','ID'];
      const hotStates = ['FL','TX','AZ','NV','NM'];
      if (coldStates.includes(state.abbr)) {
        text = `During freezing winter months, ${city.name} homes are especially vulnerable to frozen and burst pipes. Our plumbers respond fast with emergency pipe thawing, repair, and prevention to protect your home.`;
      } else if (hotStates.includes(state.abbr)) {
        text = `${city.name}'s heat and hard water conditions can accelerate pipe corrosion and water heater wear. Our plumbers are experienced with the unique plumbing challenges in this climate and deliver lasting solutions.`;
      }
      return text;
    },
    ratingValue: (data) => {
      const rand = getSeededRandom(`rating-${data.item.city.slug}`);
      return (4.7 + rand() * 0.25).toFixed(1);
    },
    reviewCount: (data) => {
      const rand = getSeededRandom(`rating-${data.item.city.slug}`);
      return (60 + Math.floor(rand() * 200)).toString();
    }
  }
};
