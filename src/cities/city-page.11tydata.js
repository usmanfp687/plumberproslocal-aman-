import statesData from '../../data/states.js';
import { getFaqsPool } from '../../data/faqsPool.js';
import { getTestimonialsPool } from '../../data/testimonialsPool.js';
import { getWhyChoosePool } from '../../data/whyChoosePool.js';
import { getWhoWeArePool } from '../../data/whoWeArePool.js';

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
    metaTitle: (data) => {
      const city = data.item.city.name;
      const state = data.item.state.abbr;
      const rand = getSeededRandom(`title-${data.item.city.slug}`);
      const titles = [
        `Emergency Plumber in ${city}, ${state} | Same Day Service`,
        `Best Plumber in ${city}, ${state} | 24/7 Emergency Plumbing`,
        `${city} Plumber | Licensed & Insured | Fast Response`,
        `Plumbing Services in ${city}, ${state} | Drain Cleaning & More`,
        `#1 Plumber Near Me in ${city}, ${state} | Call Now`,
      ];
      return titles[Math.floor(rand() * titles.length)];
    },
    metaDesc: (data) => {
      const city = data.item.city.name;
      const state = data.item.state.abbr;
      const rand = getSeededRandom(`desc-${data.item.city.slug}`);
      const descs = [
        `Need a plumber in ${city}, ${state}? We offer 24/7 emergency plumbing, drain cleaning, water heater repair, and pipe leak fixes. Licensed, insured, same-day service. Call now!`,
        `Top-rated plumber serving ${city}, ${state}. Fast emergency response for burst pipes, clogged drains, water heater repairs & more. Get a free estimate today!`,
        `Trusted plumbing company in ${city}, ${state}. We fix leaks, clogs, water heaters, sewer lines & more. Available 24/7. Locally owned & operated. Call (855) 605-2377.`,
      ];
      return descs[Math.floor(rand() * descs.length)];
    },
    h1Title: (data) => {
      const city = data.item.city.name;
      const state = data.item.state.abbr;
      const rand = getSeededRandom(`h1-${data.item.city.slug}`);
      const h1s = [
        `Emergency Plumber in ${city}, ${state}`,
        `Your Trusted ${city} Plumber`,
        `Plumbing Services in ${city}, ${state}`,
      ];
      return h1s[Math.floor(rand() * h1s.length)];
    },
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
      return shuffleArray(allFaqs, rand).slice(0, 10);
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
    whoWeAreContent: (data) => {
      const city = data.item.city;
      const state = data.item.state;
      const rand = getSeededRandom(`${city.slug}-${state.slug}`);
      const allWhoWeAre = getWhoWeArePool(city, state, data.site.BRAND);
      return allWhoWeAre[Math.floor(rand() * allWhoWeAre.length)];
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
      let text = `${city.name} homeowners and businesses trust our licensed local plumbers for all plumbing needs — from emergency pipe repairs and drain cleaning to water heater installations and sewer line inspections.`;
      const coldStates = ['WI','MN','MI','NY','IL','ND','SD','OH','PA','ME','VT','NH','IA','MA','MT','WY','CO','ID'];
      const hotStates = ['FL','TX','AZ','NV','NM'];
      if (coldStates.includes(state.abbr)) {
        text = `During severe winters, ${city.name} homes are especially vulnerable to frozen pipes, burst water lines, and failing water heaters. Our plumbers respond fast with emergency repairs, pipe thawing services, and full replumbing to protect your home and family.`;
      } else if (hotStates.includes(state.abbr)) {
        text = `${city.name}'s intense summer heat places extreme strain on water heaters, outdoor pipes, and slab plumbing. Our master plumbers are experts at diagnosing heat-related pipe issues, slab leak repairs, and emergency water heater replacements in this climate.`;
      }
      return text;
    },
    ratingValue: (data) => {
      const rand = getSeededRandom(`rating-${data.item.city.slug}`);
      return (4.7 + rand() * 0.28).toFixed(1);
    },
    reviewCount: (data) => {
      const rand = getSeededRandom(`rating-${data.item.city.slug}`);
      return (80 + Math.floor(rand() * 320)).toString();
    }
  }
};
