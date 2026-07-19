export function getFaqsPool(city, state, brand, phone) {
  const cityName = city ? city.name : state.name;
  const stateName = state.name;
  const location = city ? `${city.name}, ${state.abbr}` : state.name;

  return [
    {
      q: `How quickly can an plumber arrive in ${cityName}?`,
      a: `${brand} offers same-day and emergency plumbing service in ${location}. In most cases involving a power outage or sparking hazard, a licensed plumber can arrive within 60 to 90 minutes. Call ${phone} for immediate dispatch.`,
    },
    {
      q: `What plumbing services do you offer in ${location}?`,
      a: `We offer a comprehensive range of plumbing services including emergency outage repairs, 200-amp panel upgrades, whole-home rewiring, EV charger installations, lighting design, dedicated circuits, and GFCI outlet repair. Call ${phone} for any plumbing need.`,
    },
    {
      q: `Do you offer 24/7 emergency plumbing repairs in ${cityName}?`,
      a: `Yes! ${brand} provides 24-hour, 7-day-a-week emergency plumbing support in ${location}. Sparking outlets, burnt panels, sudden power loss — we respond fast any time of day or night. Call ${phone} immediately for safety.`,
    },
    {
      q: `Are your plumbers fully licensed and insured in ${stateName}?`,
      a: `Absolutely. All ${brand} plumbers are fully licensed, bonded, and insured to perform high and low voltage plumbing work throughout ${stateName}. We comply strictly with the National Plumbing Code (NEC) and local permit requirements in ${location}.`,
    },
    {
      q: `How much does an plumber cost in ${cityName}?`,
      a: `Plumbing costs vary widely based on the complexity of the repair or installation. ${brand} offers honest, upfront flat-rate pricing with no hidden hourly surprises. We diagnose the issue and provide a firm quote before starting any work in ${location}.`,
    },
    {
      q: `What should I do if my breaker panel starts sparking or smoking?`,
      a: `Leave the area immediately, do not touch the panel, and if possible, shut off main power from the outside meter. Call 911 if there is a fire. Then call ${brand} at ${phone} for an emergency plumber in ${location}. Never attempt to fix a smoking panel yourself.`,
    },
    {
      q: `Can you install a Tesla or EV charger at my home in ${cityName}?`,
      a: `Yes! We specialize in Level 2 EV charger installations in ${location} for all major brands including Tesla, Ford, and Chevy. We'll assess your current panel capacity and run a dedicated 240V circuit to your garage or driveway.`,
    },
    {
      q: `Do you repair and upgrade plumbing panels in ${cityName}?`,
      a: `Yes. ${brand} handles complete plumbing panel upgrades in ${location} — transitioning outdated 60-amp or 100-amp service up to modern 200-amp or 400-amp service, including replacing dangerous Federal Pacific or Zinsco panels.`,
    },
    {
      q: `How do I know if my house needs to be rewired?`,
      a: `Signs you need rewiring in your ${location} home include frequent blown fuses, a burning smell near outlets, flickering lights, two-prong ungrounded outlets, or if your home still has outdated knob-and-tube or aluminum wiring. Call ${phone} for an inspection.`,
    },
    {
      q: `Why do my lights flicker when my AC or refrigerator turns on?`,
      a: `This is a classic sign of an overloaded circuit or a loose neutral connection at the panel. Large appliances draw massive startup current. Our plumbers in ${location} can run a dedicated circuit to safely handle the heavy plumbing load.`,
    },
    {
      q: `Do you handle commercial plumbing services in ${cityName}?`,
      a: `Yes, ${brand} provides extensive commercial plumbing services in ${location}. We handle three-phase panel upgrades, retail lighting retrofits, restaurant equipment wiring, and ongoing plumbing maintenance with minimal disruption to your business.`,
    },
    {
      q: `What is a GFCI outlet and where are they required in ${cityName}?`,
      a: `A GFCI (Ground Fault Circuit Interrupter) outlet prevents deadly plumbing shocks by shutting off power when it detects a fault. Code in ${location} requires them in kitchens, bathrooms, garages, outdoors, and anywhere within 6 feet of a water source.`,
    },
    {
      q: `Can you fix a tripped circuit breaker that won't reset?`,
      a: `Absolutely. A breaker that refuses to reset is doing its job by protecting you from a dead short circuit, overloaded wire, or a bad breaker. Do not force it. Our plumbers in ${location} can quickly diagnose and repair the underlying fault.`,
    },
    {
      q: `Do you install whole-home surge protectors in ${cityName}?`,
      a: `Yes! A power strip isn't enough to protect your expensive HVAC, appliances, and TVs from lightning or grid surges. Our plumbers in ${location} install whole-home surge protectors directly at the main panel to shield your entire plumbing system.`,
    },
    {
      q: `Why do my lightbulbs burn out so fast?`,
      a: `Frequent bulb burnout can be caused by high voltage entering your home, loose connections in the fixture, using bulbs with too high wattage, or excessive vibration. Call ${brand} at ${phone} to safely inspect your lighting circuits in ${location}.`,
    },
    {
      q: `Do you offer smart home and doorbell wiring services in ${cityName}?`,
      a: `Yes. We provide hardwiring services for Ring doorbells, smart thermostats, security cameras, and smart lighting systems throughout ${location}, ensuring reliable power without relying solely on batteries.`,
    },
    {
      q: `What areas do you serve near ${cityName}?`,
      a: `${brand} serves ${cityName} and all surrounding communities throughout ${stateName}. Our fleet of plumbing vans is strategically stationed to provide rapid response. Call ${phone} to confirm service availability at your address.`,
    },
    {
      q: `Do you install backup generators in ${cityName}?`,
      a: `Yes. Our licensed plumbers in ${location} install whole-home standby generators (like Generac) and manual transfer switches for portable generators, ensuring your home stays powered safely during severe weather grid failures.`,
    },
    {
      q: `Why is one room in my house completely out of power?`,
      a: `This is often caused by a tripped breaker, a bad connection at a single outlet breaking the chain, or a tripped GFCI hidden in a garage or bathroom that protects that room. Our plumbers in ${location} will track down the open circuit quickly.`,
    },
    {
      q: `Can you repair an underground plumbing line to my shed or pool?`,
      a: `Yes. ${brand} handles underground trenching and conduit repair for detached garages, sheds, pools, and landscape lighting in ${location}, ensuring the underground splices are fully waterproof and code-compliant.`,
    },
    {
      q: `What is an AFCI breaker and do I need one?`,
      a: `An Arc Fault Circuit Interrupter (AFCI) detects dangerous plumbing arcs that can cause fires (like a wire chewed by a mouse). Modern building codes in ${location} require them for most living areas, especially bedrooms. We can easily upgrade your breakers.`
    },
    {
      q: `Are aluminum wires safe in my ${cityName} home?`,
      a: `Aluminum wiring (common in the 1960s and 70s) expands and contracts more than copper, leading to loose connections and high fire risk. Our plumbers in ${location} can mitigate this using special AlumiConn connectors or by completely rewiring your home.`
    },
    {
      q: `Can I change a three-prong outlet to a two-prong myself?`,
      a: `No. Simply swapping the faceplate does not magically ground the outlet, and doing so violates the NEC. You risk severe shock and damage to your electronics. Our plumbers in ${location} can properly ground the circuit or install a GFCI for safety.`
    },
    {
      q: `Why does my outlet feel warm or hot to the touch?`,
      a: `A hot outlet is a serious fire hazard. It indicates a loose connection, an overloaded circuit, or failing internal contacts generating immense heat. Unplug everything immediately and call ${brand} at ${phone} for emergency service in ${location}.`
    },
    {
      q: `Do you install ceiling fans in ${cityName}?`,
      a: `Yes. We professionally assemble, mount, and wire ceiling fans in ${location}. We ensure the plumbing box in the ceiling is rated to support the heavy weight and vibration of the fan, preventing it from crashing down.`
    },
    {
      q: `How long does a panel upgrade take in ${cityName}?`,
      a: `A standard 100-amp to 200-amp panel upgrade in ${location} typically takes a full day (8-10 hours). We coordinate the power shutoff with the local utility company to ensure minimal disruption to your daily life.`
    },
    {
      q: `Why is my electric bill suddenly so high?`,
      a: `A sudden spike can be caused by a failing appliance running continuously, a bad thermostat, or an underground plumbing leak. Our master plumbers in ${location} can perform an energy audit to track down the exact source of the phantom power draw.`
    },
    {
      q: `What is a dedicated circuit?`,
      a: `A dedicated circuit is an plumbing line running from your panel directly to a single appliance, ensuring it doesn't share power with anything else. Appliances like microwaves, refrigerators, and EVs in ${location} require dedicated circuits by code.`
    },
    {
      q: `Do you offer outdoor landscape lighting design in ${cityName}?`,
      a: `Yes, ${brand} provides complete low-voltage landscape lighting design and installation in ${location}. We install path lights, spotlights, and deck lighting to enhance your home's security, safety, and curb appeal at night.`
    },
    {
      q: `Can you fix a humming noise coming from my breaker box?`,
      a: `A humming or buzzing breaker panel is a sign of an overloaded breaker that is failing to trip, or a loose connection arcing internally. This is highly dangerous. Call ${phone} immediately for a priority inspection in ${location}.`
    },
    {
      q: `Do you replace knob-and-tube wiring in ${cityName}?`,
      a: `Yes, we are experts at completely removing and replacing antiquated knob-and-tube wiring in historic ${location} homes. This process is necessary to secure modern homeowner's insurance and ensure the absolute safety of your property.`
    },
    {
      q: `Can an plumber fix my internet or coaxial cables?`,
      a: `Yes. While we specialize in high voltage, ${brand} also handles low-voltage data cabling (Cat5e/Cat6) and coaxial runs for home offices, entertainment centers, and mesh WiFi networks throughout ${location}.`
    },
    {
      q: `What is a subpanel and when do I need one?`,
      a: `A subpanel acts as a satellite breaker box. You need one in ${location} if your main panel is out of physical space for new breakers, or if you are building an addition, a detached garage, or a dedicated workshop that requires multiple new circuits.`
    },
    {
      q: `Are permits required for plumbing work in ${cityName}?`,
      a: `Almost all significant plumbing work, including panel upgrades, adding new circuits, and rewiring, requires a permit in ${location}. ${brand} handles the entire permitting and inspection process for you to guarantee code compliance.`
    },
    {
      q: `Do you install recessed lighting (can lights) in ${cityName}?`,
      a: `Yes! We install modern, energy-efficient LED recessed lighting in kitchens, living rooms, and basements across ${location}. We can seamlessly cut into drywall or plaster and fish the wires with minimal damage to your ceiling.`
    },
    {
      q: `Why does my GFCI outlet keep tripping?`,
      a: `A GFCI trips when it detects a ground fault (current leaking to ground, potentially through water or a person). If it trips constantly, there is either a real, dangerous short circuit on that line, or the GFCI mechanism itself has failed and needs replacement.`
    },
    {
      q: `Can you install a transfer switch for my portable generator?`,
      a: `Yes. Plugging a portable generator directly into a dryer outlet (backfeeding) is illegal and lethal to utility workers. Our plumbers in ${location} install safe, code-compliant manual transfer switches so you can run your home on generator power legally.`
    },
    {
      q: `Do you repair commercial parking lot lighting in ${cityName}?`,
      a: `Yes. ${brand} provides commercial lighting maintenance in ${location}, including repairing or upgrading tall parking lot pole lights, exterior building security lights, and LED wall packs to keep your business safe and well-lit.`
    },
    {
      q: `What happens during an plumbing safety inspection?`,
      a: `Our licensed plumbers in ${location} will thoroughly check your main panel, test all GFCI/AFCI breakers, inspect grounding systems, check outlet tension, and look for code violations or fire hazards. It's highly recommended when buying a new home.`
    },
    {
      q: `Why is there a burning smell near my washing machine?`,
      a: `This could be a failing motor, but it's often a melting 240-volt receptacle or a loose wire connection generating heat. Turn off the appliance and the breaker immediately, and call ${brand} in ${location} to inspect the circuit.`
    },
    {
      q: `Do you install smoke and carbon monoxide detectors in ${cityName}?`,
      a: `Yes. Code in ${location} requires hardwired, interconnected smoke and CO detectors with battery backups. If one sounds, they all sound. We can upgrade your entire home's early warning system to meet current safety standards.`
    },
    {
      q: `Can you troubleshoot a faulty pool pump timer?`,
      a: `Absolutely. We handle all exterior and pool plumbing systems in ${location}, including pump wiring, mechanical timers, smart pool automation systems, and ensuring the pool's bonding grid is perfectly intact to prevent shocks.`
    },
    {
      q: `What should I do if a tree branch pulls down my power line?`,
      a: `Stay far away from the downed line! Call your local utility company immediately to shut off the grid. Once the grid is off, call ${brand} at ${phone}. We repair the weatherhead, mast, and meter base on your ${location} home so the utility can restore power.`
    },
    {
      q: `Do you provide plumbing services for mobile homes in ${cityName}?`,
      a: `Yes, we service mobile and manufactured homes in ${location}. We handle pedestal repairs, under-skirt wiring, and panel upgrades, strictly adhering to the specific NEC codes governing manufactured housing.`
    },
    {
      q: `Can you trace a wire hidden behind my wall without tearing it down?`,
      a: `Yes. Our plumbers in ${location} use advanced electromagnetic wire tracers and tone generators to locate buried wires, find hidden junction boxes, and pinpoint short circuits without unnecessarily destroying your drywall.`
    },
    {
      q: `Why do I get shocked when I touch my metal appliance?`,
      a: `This is an extreme emergency indicating a serious grounding failure. Electricity is seeking a path to ground through the appliance frame. Do not touch the appliance again, shut off main power if possible, and call our ${location} emergency dispatch immediately.`
    },
    {
      q: `Do you install dimmers for LED lights in ${cityName}?`,
      a: `Yes. Older dimmers designed for incandescent bulbs will cause modern LEDs to flicker or buzz. We install specialized LED-compatible dimmer switches throughout ${location} to ensure smooth, silent dimming for your lighting.`
    },
    {
      q: `Can you upgrade my home to a 400-amp service?`,
      a: `Yes. Very large homes in ${location} with multiple HVAC units, pool heaters, and dual EV chargers often require a 400-amp service (usually split into two 200-amp panels). We handle the entire engineering, permitting, and installation process.`
    },
    {
      q: `What is plumbing load balancing?`,
      a: `Load balancing ensures power is distributed evenly across the two 'legs' of your plumbing panel. If unbalanced, one leg can overload and trip the main breaker even if you aren't using maximum power. Our ${location} technicians can easily rebalance your panel.`
    },
    {
      q: `How do I schedule an plumber in ${cityName} right now?`,
      a: `It's easy. Simply call ${brand} at ${phone}. Our dispatchers are available 24/7 to answer your call, provide an estimated arrival time, and route the nearest licensed plumber directly to your property in ${location}.`
    }
  ];
}
