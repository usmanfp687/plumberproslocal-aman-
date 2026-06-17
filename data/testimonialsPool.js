export function getTestimonialsPool(city, state, brand) {
  const cityName = city ? city.name : state.name;

  return [
    {
      text: `I had a burst pipe at 2 AM and ${brand} answered immediately. The plumber arrived within 45 minutes and had everything fixed before morning. Incredible service in ${cityName}!`,
      author: 'Michael T.',
    },
    {
      text: `Our water heater died on a Friday evening. ${brand} came out to ${cityName} the same night and installed a new unit. Hot water by Saturday morning. Highly recommend!`,
      author: 'Sarah K.',
    },
    {
      text: `I've used ${brand} in ${cityName} twice now — once for a clogged sewer line and once for a dripping faucet. Both times they were on time, professional, and reasonably priced.`,
      author: 'James R.',
    },
    {
      text: `Found a slow leak under my kitchen sink that had been damaging the cabinet. The ${brand} team diagnosed it in minutes and fixed it perfectly. Great service in ${cityName}!`,
      author: 'David L.',
    },
    {
      text: `Called at 7 AM on a Sunday and they were here by 9. Fixed my clogged main drain line quickly with no mess. This is the best plumber in ${cityName}!`,
      author: 'Emily C.',
    },
    {
      text: `${brand} installed a new tankless water heater in our ${cityName} home. The team was knowledgeable, fast, and left the work area spotless. We love the endless hot water!`,
      author: 'Robert M.',
    },
    {
      text: `I was worried about a sewer smell in my ${state.name} home. ${brand} did a camera inspection and found a cracked pipe. They repaired it quickly and the smell is completely gone. Great work!`,
      author: 'Amanda P.',
    },
    {
      text: `Top-notch plumbing service from start to finish. If you live near ${cityName} and need a plumber, ${brand} is the only call you need to make. Honest, fast, and professional.`,
      author: 'John W.',
    },
    {
      text: `We run a restaurant in ${cityName} and had a grease clog in our main kitchen drain. ${brand} came after hours so we wouldn't lose business, and had us running again by morning.`,
      author: 'Jessica B.',
    },
    {
      text: `After years of low water pressure, ${brand} diagnosed corroded galvanized pipes throughout my ${cityName} home. Their repiping crew finished in two days. Pressure is perfect now!`,
      author: 'William H.',
    },
    {
      text: `${brand} is the best plumber I've found in ${cityName}. They repaired my toilet, replaced a leaking faucet, and did a full drain cleaning all in one visit. Efficient and honest!`,
      author: 'Olivia S.',
    },
    {
      text: `Called for an emergency — sewage backup in my basement. The ${brand} team in ${cityName} responded within the hour, thoroughly cleaned everything, and unclogged the main line. Lifesavers!`,
      author: 'Daniel V.',
    },
    {
      text: `${brand} installed a whole-house water filtration system in our ${cityName} home. The difference in water quality is incredible. The installation was clean and professional. Highly recommend!`,
      author: 'Rachel G.',
    },
    {
      text: `My garbage disposal was leaking and jamming constantly. The technician from ${brand} in ${cityName} replaced it in under an hour. Great price and great service!`,
      author: 'Thomas F.',
    },
    {
      text: `If you need a reliable plumber in ${state.name}, this is the only number you need. ${brand} fixed a major leak under our house quickly and professionally. Thank you ${brand}!`,
      author: 'Samantha J.',
    },
    {
      text: `The sump pump in our ${cityName} basement failed during a huge storm. ${brand} came out immediately, pumped out the water, and installed a heavy-duty replacement. They saved our basement!`,
      author: 'Kevin D.',
    },
    {
      text: `I had a very old home in ${state.name} with polybutylene pipes that kept leaking. The team from ${brand} did a complete whole-house repipe in just 3 days with barely any drywall damage. Fantastic work.`,
      author: 'Linda G.',
    },
    {
      text: `Our toilet was rocking and leaking around the base. The plumber from ${brand} arrived in ${cityName} exactly on time, replaced the wax ring, and secured the toilet perfectly. Very polite and clean.`,
      author: 'Mark E.',
    },
    {
      text: `An outdoor hose bib froze and burst over the winter. ${brand} came out to ${cityName} the next morning, fixed the pipe, and installed a frost-free valve so it won't happen again. Very smart!`,
      author: 'Nancy W.',
    },
    {
      text: `Our kitchen sink backed up completely right before Thanksgiving! I called ${brand} in a panic. They had a tech at my ${cityName} house within 2 hours who snaked the line and saved the holiday.`,
      author: 'Patricia O.',
    },
    {
      text: `We kept having recurring clogs in our main line. ${brand} used a camera to inspect the pipe in our ${state.name} yard and found massive tree roots. They cleared it with a hydro jetter and the drain works like new!`,
      author: 'Christopher B.',
    },
    {
      text: `My water heater was making terrifying popping noises. The ${brand} technician arrived in ${cityName}, explained it was sediment buildup, and quickly flushed the tank. Honest guys who don't oversell!`,
      author: 'Karen N.',
    },
    {
      text: `We had a hidden slab leak that was driving up our water bill. ${brand} used electronic leak detection to find the exact spot under our ${cityName} floor and repaired it without tearing up the whole house.`,
      author: 'Steven P.',
    },
    {
      text: `We hired ${brand} to handle all the rough-in plumbing for our master bathroom remodel in ${cityName.split(',')[0]}. They moved drains, installed a custom shower valve, and hooked everything up flawlessly.`,
      author: 'Jennifer A.',
    },
    {
      text: `Hard water was destroying our appliances in ${state.name}. The team from ${brand} installed a premium water softener and the difference is night and day. Even my skin feels better!`,
      author: 'Matthew T.',
    },
    {
      text: `Our commercial building in ${cityName} had 50-year-old cast iron pipes that drained very slowly. ${brand} hydro-jetted the entire system over the weekend. Great commercial plumbing service!`,
      author: 'Richard L.',
    },
    {
      text: `I got three quotes for a sewer line replacement in ${cityName}. ${brand} wasn't the absolute cheapest, but they were the most honest and professional. The work was top quality and passed inspection instantly.`,
      author: 'Susan M.',
    },
    {
      text: `I highly recommend ${brand}. The dispatcher was friendly, the plumber arrived in ${cityName} when promised, wore shoe covers, fixed my leaky shower valve, and charged exactly what was quoted.`,
      author: 'Charles Y.',
    },
    {
      text: `We needed a gas line run for our new outdoor kitchen grill in ${cityName}. The plumbers from ${brand} were fully licensed, pulled the necessary permits, and did a perfectly clean installation.`,
      author: 'Anthony R.',
    },
    {
      text: `I've been a homeowner in ${state.name} for 30 years and ${brand} is the best plumbing contractor I've ever hired. Transparent pricing, excellent communication, and flawless workmanship.`,
      author: 'Betty H.',
    }
  ];
}
