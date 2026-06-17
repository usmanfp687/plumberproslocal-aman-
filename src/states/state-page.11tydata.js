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
    faqs: (data) => {
      const state = data.state;
      const rand = getSeededRandom(state.slug);
      const allFaqs = getFaqsPool(null, state, data.site.BRAND, data.site.PHONE);
      return shuffleArray(allFaqs, rand).slice(0, 5);
    },
    testimonials: (data) => {
      const state = data.state;
      const rand = getSeededRandom(state.slug);
      const allTestimonials = getTestimonialsPool(null, state, data.site.BRAND);
      return shuffleArray(allTestimonials, rand).slice(0, 3);
    },
    whyChooseContent: (data) => {
      const state = data.state;
      const rand = getSeededRandom(state.slug);
      const allWhyChoose = getWhyChoosePool(null, state, data.site.BRAND);
      return allWhyChoose[Math.floor(rand() * allWhyChoose.length)];
    },
    localRiskText: (data) => {
      const state = data.state;
      let text = `${state.name} homeowners and businesses can rely on our licensed local plumbers for all plumbing needs — from emergency repairs to routine maintenance.`;
      const coldStates = ['WI','MN','MI','NY','IL','ND','SD','OH','PA','ME','VT','NH','IA','MA','MT','WY','CO','ID'];
      const hotStates = ['FL','TX','AZ','NV','NM'];
      if (coldStates.includes(state.abbr)) {
        text = `During freezing winter months, ${state.name} homes are especially vulnerable to frozen and burst pipes. Our plumbers respond fast to prevent water damage and restore your plumbing system quickly.`;
      } else if (hotStates.includes(state.abbr)) {
        text = `${state.name}'s heat and hard water conditions can accelerate pipe corrosion and water heater wear. Our local plumbers are experienced with the unique plumbing challenges in this climate.`;
      }
      return text;
    }
  }
};
