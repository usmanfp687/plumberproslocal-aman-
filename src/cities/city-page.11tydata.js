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
      const rand = getSeededRandom(`${data.item.city.slug}-${data.item.state.slug}`);
      const variation = Math.floor(rand() * 3);
      
      const titles = [
        `Expert Electrician in ${city}, ${state} | 24/7 Fast & Local Repair`,
        `Top Rated Electrician in ${city}, ${state} | Reliable Same Day`,
        `Best Local Electrician ${city}, ${state} | Emergency Repair Service`
      ];
      return titles[variation];
    },
    metaDesc: (data) => {
      const city = data.item.city.name;
      const state = data.item.state.abbr;
      const rand = getSeededRandom(`${data.item.city.slug}-${data.item.state.slug}`);
      const variation = Math.floor(rand() * 3);
      
      const descs = [
        `Searching for a trusted electrician in ${city}, ${state}? We offer 24/7 emergency electrical repairs, panel upgrades, and home wiring. Call our team today!`,
        `Need an affordable electrician in ${city}, ${state}? Our highly skilled experts deliver guaranteed same-day electrical services, circuit troubleshooting & repairs.`,
        `Hire the best local electrician in ${city}, ${state}. We specialize in reliable home wiring, rapid emergency power restoration, and circuit breaker installations.`
      ];
      return descs[variation];
    },
    h1Title: (data) => {
      const city = data.item.city.name;
      const state = data.item.state.abbr;
      const rand = getSeededRandom(`${data.item.city.slug}-${data.item.state.slug}`);
      const variation = Math.floor(rand() * 3);
      
      const h1s = [
        `Expert Electrician in ${city}, ${state}`,
        `Top Rated Electricians in ${city}, ${state}`,
        `Local Emergency Electrician in ${city}, ${state}`
      ];
      return h1s[variation];
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
      let text = `${city.name} homeowners and businesses can rely on our licensed local electricians for all electrical needs ?" from emergency repairs to routine maintenance and installations.`;
      const coldStates = ['WI','MN','MI','NY','IL','ND','SD','OH','PA','ME','VT','NH','IA','MA','MT','WY','CO','ID'];
      const hotStates = ['FL','TX','AZ','NV','NM'];
      if (coldStates.includes(state.abbr)) {
        text = `During severe winter storms and blizzards, ${city.name} homes are especially vulnerable to massive grid failures and deadly power outages. Our electricians respond fast with emergency generator installations, panel heavy-ups, and severe weather fault repairs to protect your family.`;
      } else if (hotStates.includes(state.abbr)) {
        text = `${city.name}'s extreme summer heat forces air conditioning units to run continuously, placing immense strain on aging electrical panels. Our master electricians are experts at balancing loads, upgrading overloaded circuits, and preventing catastrophic panel meltdowns in this climate.`;
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
