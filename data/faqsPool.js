export function getFaqsPool(city, state, brand, phone) {
  const cityName = city ? city.name : state.name;
  const stateName = state.name;
  const location = city ? `${city.name}, ${state.abbr}` : state.name;

  return [
    {
      q: `How quickly can a plumber arrive in ${cityName}?`,
      a: `${brand} offers same-day and emergency plumbing service in ${location}. In most cases, a licensed plumber can arrive within 60 minutes of your call. Call ${phone} now for immediate dispatch.`,
    },
    {
      q: `What plumbing services do you offer in ${location}?`,
      a: `We offer a full range of plumbing services in ${location} including emergency plumbing, drain cleaning, water heater repair and installation, pipe repair, toilet and faucet repair, sewer line services, leak detection, and more. Call ${phone} for any plumbing need.`,
    },
    {
      q: `Do you offer 24/7 emergency plumbing in ${cityName}?`,
      a: `Yes! ${brand} provides 24-hour, 7-day-a-week emergency plumbing in ${location}. Burst pipes, major leaks, sewage backups — we respond fast any time of day or night. Call ${phone} immediately.`,
    },
    {
      q: `Are your plumbers licensed and insured in ${stateName}?`,
      a: `Absolutely. All ${brand} plumbers are fully licensed, bonded, and insured to perform plumbing work throughout ${stateName}. We comply with all local codes and permit requirements in ${location}.`,
    },
    {
      q: `How much does plumbing service cost in ${cityName}?`,
      a: `Plumbing costs vary by the type and complexity of the repair. ${brand} offers honest, upfront pricing with no hidden fees. We provide a free estimate before starting any work in ${location}. Call ${phone} for a quote.`,
    },
    {
      q: `What should I do if I have a burst pipe in ${cityName}?`,
      a: `First, shut off your main water supply valve immediately to stop the flow of water. Then call ${brand} at ${phone} for emergency plumbing in ${location}. Our plumbers will arrive fast to assess and repair the burst pipe.`,
    },
    {
      q: `Can you fix a clogged drain same day in ${cityName}?`,
      a: `Yes! We offer same-day drain cleaning and clog removal services in ${location}. Whether it's a kitchen sink, bathroom drain, or main sewer line, our plumbers arrive fast with professional equipment. Call ${phone} today.`,
    },
    {
      q: `Do you repair and install water heaters in ${cityName}?`,
      a: `Yes. ${brand} handles all water heater services in ${location} — repair, replacement, and new installation of traditional tank water heaters and tankless units. Most water heater replacements can be done same day.`,
    },
    {
      q: `How do I know if I have a hidden water leak in my ${cityName} home?`,
      a: `Signs of hidden leaks include an unexpectedly high water bill, sounds of running water when all taps are off, wet spots on walls or floors, or low water pressure. Call ${brand} at ${phone} for professional leak detection in ${location}.`,
    },
    {
      q: `How long does drain cleaning take in ${cityName}?`,
      a: `Most drain cleaning jobs in ${location} take 1–2 hours depending on the severity and location of the clog. Hydro-jetting for main sewer lines may take a bit longer. We'll give you a time estimate when we arrive.`,
    },
    {
      q: `Do you handle sewer line repair in ${cityName}?`,
      a: `Yes. ${brand} provides complete sewer line services in ${location} including camera inspection, root removal, sewer line repair, and full sewer line replacement using modern trenchless methods when possible.`,
    },
    {
      q: `What is a tankless water heater and should I get one in ${cityName}?`,
      a: `Tankless water heaters heat water on demand rather than storing it in a tank, providing endless hot water and up to 30% energy savings. They're a great investment for ${location} homes with multiple bathrooms or high hot water demands.`,
    },
    {
      q: `Can you fix a running toilet in ${cityName}?`,
      a: `Absolutely. A running toilet can waste hundreds of gallons of water per day. Our plumbers in ${location} can quickly diagnose and repair the flapper, fill valve, or flush mechanism to stop the waste. Call ${phone} today.`,
    },
    {
      q: `Do you provide plumbing services for commercial properties in ${cityName}?`,
      a: `Yes, ${brand} serves both residential and commercial clients in ${location}. We handle plumbing for restaurants, offices, retail spaces, and multi-unit buildings with minimal disruption to your operations.`,
    },
    {
      q: `What causes low water pressure in my ${cityName} home?`,
      a: `Common causes include corroded pipes, a failing pressure regulator, mineral buildup, or a leak in your plumbing system. Our licensed plumbers in ${location} can diagnose and fix low water pressure issues quickly. Call ${phone}.`,
    },
    {
      q: `How do I prevent drain clogs in my ${cityName} home?`,
      a: `Avoid pouring grease down drains, use drain screens to catch hair and debris, flush drains monthly with hot water and baking soda, and schedule annual professional drain cleaning in ${cityName} to keep pipes clear.`,
    },
    {
      q: `Do you offer repiping services in ${cityName}?`,
      a: `Yes. If your home has old galvanized, polybutylene, or corroded pipes, ${brand} offers full and partial repiping services in ${location} using copper or PEX pipe to restore water quality and pressure throughout your home.`,
    },
    {
      q: `What areas do you serve near ${cityName}?`,
      a: `${brand} serves ${cityName} and surrounding communities throughout ${stateName}. Call ${phone} to confirm service availability in your specific area.`,
    },
    {
      q: `Do you install gas lines in ${cityName}?`,
      a: `Yes. Our licensed plumbers in ${location} are certified for gas line installation, repair, and leak testing. We handle gas lines for appliances, outdoor grills, generators, and whole-house systems safely and to code.`,
    },
    {
      q: `How do I turn off water to my house in an emergency in ${cityName}?`,
      a: `Locate your main water shut-off valve, usually near the water meter at the front of your home or in the basement/crawl space. Turn it clockwise to shut off. Then call ${brand} at ${phone} for emergency plumbing in ${location}.`,
    },
    {
      q: `Why is my garbage disposal smelling in ${cityName}?`,
      a: `Food particles can rot inside the unit. Try grinding ice cubes and lemon peels, or flush it with baking soda and vinegar. If it persists or drains slowly, call ${brand} for professional garbage disposal repair in ${location}.`,
    },
    {
      q: `What is water hammer and can you fix it in ${cityName}?`,
      a: `Water hammer is a loud banging noise caused by water suddenly stopping in the pipes. Yes, our plumbers in ${location} can install water hammer arrestors or secure loose pipes to fix this problem completely.`,
    },
    {
      q: `Why does my toilet bubble when the bathtub drains?`,
      a: `This usually indicates a clog in your main sewer line or a blocked vent pipe. Because it affects multiple fixtures, you should call ${brand} at ${phone} for professional sewer line inspection in ${location} before a sewage backup occurs.`,
    },
    {
      q: `Do you install water softeners for hard water in ${cityName}?`,
      a: `Yes, ${location} often has hard water which can ruin appliances and pipes. ${brand} installs high-quality whole-house water softeners and filtration systems to protect your home's plumbing.`,
    },
    {
      q: `Can tree roots really damage my sewer line in ${cityName}?`,
      a: `Absolutely. Tree roots are drawn to the moisture and nutrients in sewer pipes. Once they enter through a tiny crack, they grow rapidly, causing major clogs and pipe collapse. We use camera inspections to locate roots in ${location}.`,
    },
    {
      q: `My water heater is making a popping noise. Is this dangerous?`,
      a: `Popping or rumbling noises mean mineral sediment has built up at the bottom of the tank and is boiling the water trapped underneath. Our plumbers in ${location} can flush the tank or replace the unit if the tank is corroded.`,
    },
    {
      q: `Do you repair outdoor hose bibs in ${cityName}?`,
      a: `Yes. Leaking outdoor faucets are common, especially after a freezing winter. ${brand} can repair your leaky spigot or upgrade it to a frost-free hose bib to prevent future freezing in ${location}.`,
    },
    {
      q: `Why is my dishwasher backing up into the sink?`,
      a: `This is usually caused by a clogged garbage disposal or a blockage in the shared sink drain line. Our drain cleaning specialists in ${location} can clear the blockage fast so both fixtures drain properly.`,
    },
    {
      q: `My toilet rocks when I sit on it. Is that a problem?`,
      a: `Yes, a rocking toilet can damage the wax ring seal underneath, leading to hidden leaks and rotted subflooring. Call ${brand} at ${phone} to have a licensed plumber in ${location} properly secure and reseal the toilet.`,
    },
    {
      q: `How long do water heaters typically last in ${cityName}?`,
      a: `Traditional tank water heaters last about 8-12 years, while tankless models can last up to 20 years with proper maintenance. If your unit in ${location} is over 10 years old and having issues, replacement is often the most cost-effective option.`,
    },
    {
      q: `Can you fix polybutylene pipes in my ${cityName} home?`,
      a: `Polybutylene pipes are notoriously defective and prone to sudden bursting. We strongly recommend completely repiping homes with polybutylene. Contact ${brand} for a repiping consultation in ${location}.`,
    },
    {
      q: `Do you replace washing machine hoses in ${cityName}?`,
      a: `Yes. Old rubber washing machine hoses are a leading cause of home flooding. We can replace them with durable stainless steel braided hoses for peace of mind in your ${location} home.`,
    },
    {
      q: `Why does my hot water smell like rotten eggs in ${cityName}?`,
      a: `This smell usually comes from a reaction between the anode rod inside your water heater and bacteria in the water. Our plumbers in ${location} can replace the anode rod and flush the tank to eliminate the odor.`,
    },
    {
      q: `What is a backflow preventer and do I need one in ${cityName}?`,
      a: `A backflow preventer stops contaminated water from flowing backwards into your clean water supply. Many municipalities in ${stateName} require them for sprinkler systems or commercial buildings. We install and test backflow preventers in ${location}.`,
    },
    {
      q: `How do I test my sump pump in ${cityName}?`,
      a: `Slowly pour a bucket of water into the sump pit until the float rises and activates the pump. It should quickly drain the water and turn off. If it doesn't, call ${brand} immediately for sump pump repair in ${location} before the next storm.`,
    },
    {
      q: `Why is my shower drain constantly clogging with hair?`,
      a: `Hair easily binds with soap scum inside the P-trap. If liquid drain cleaners aren't working, or if the clog is deep, call ${brand} in ${location}. We use professional snakes to fully extract the clog without damaging your pipes.`,
    },
    {
      q: `Can you install plumbing for a bathroom remodel in ${cityName}?`,
      a: `Yes! ${brand} provides expert plumbing installation for remodels in ${location}. We can move pipes, install new shower valves, set tubs, and hook up vanities to ensure your new bathroom's plumbing is perfect.`,
    },
    {
      q: `Is a leaky faucet really a big deal in ${cityName}?`,
      a: `A faucet dripping once per second wastes over 3,000 gallons of water a year, spiking your water bill. It also causes unnecessary wear on the fixture. Call ${brand} at ${phone} to fix the drip quickly in ${location}.`,
    },
    {
      q: `Do you offer commercial hydro-jetting in ${cityName}?`,
      a: `Yes. Restaurants and commercial properties in ${location} often suffer from heavy grease and sludge buildup. Our high-pressure hydro-jetting service clears the toughest commercial line blockages entirely.`,
    },
    {
      q: `How can I tell if my main sewer line is clogged in ${cityName}?`,
      a: `Signs of a main line clog include water backing up into your bathtub when the toilet is flushed, gurgling drains, and sewage odors. This is an emergency. Call ${brand} immediately at ${phone} for service in ${location}.`,
    }
  ];
}
