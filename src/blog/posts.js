// Blog articles. Plain data so both the React pages (src/App.jsx) and the build-time pre-render
// (scripts/build.mjs via src/seo.js) can read them.
//
// Text supports three inline marks:
//   **bold**            [link text](/path or https://...)            [^sourceKey]  (citation)
// Citations are numbered in order of first use, and the matching source is listed at the end of
// the article. Every factual figure should carry a citation.

export const blogPath = '/blog';
export const blogAuthor = 'FPCA Technologies';

export const blogPosts = [
  // ---------------------------------------------------------------------------------------------
  {
    slug: 'open-pit-mining-power-options',
    title: 'Diesel, battery, trolley or cable: four ways to power open-pit mining machines',
    seoTitle: 'Diesel, Battery, Trolley or Cable: Powering Open-Pit Mining Machines',
    description:
      'A practical guide to the four ways of powering excavators, shovels, drills and haul trucks in open-pit mines, with real examples from India and around the world.',
    topic: 'Open-pit mining',
    datePublished: '2026-11-02',
    dateModified: '2026-11-02',
    readingMinutes: 10,
    hero: {
      src: '/blog/open-pit-mining-power-options/hero.webp',
      og: '/blog/open-pit-mining-power-options/og.jpg',
      width: 1600,
      height: 900,
      alt: 'Illustration of an open-pit mine in cross-section showing four ways to power machines: a diesel haul truck, an electric shovel fed by a trailing cable, a haul truck under overhead trolley lines on the ramp, and a battery truck at a charger.',
      caption: 'The four ways to power open-pit machines. Illustration by FPCA Technologies.',
    },
    summary: [
      'Diesel still powers most open-pit machines. At the metal mines covered by one industry study, diesel burned by mobile equipment made up about 45% of all final energy use.[^ceec]',
      'Cable-powered electric shovels and excavators have worked in mines for decades. They are the most proven electric option for machines that dig in one area, but the cable limits how they move.',
      'Trolley assist runs haul trucks on overhead power lines up the main ramp. Mines report large diesel savings and faster climbs, but the lines suit ramps that stay in place for years.',
      'Battery haul trucks are moving from trials to the first large fleets. Weight, charging time and grid capacity are the main hurdles.',
      'There is no single winner. Most mines will mix these options by machine type, ramp layout, and the price and source of their electricity.',
    ],
    body: [
      { type: 'p', text: 'Walk around almost any open-pit mine and nearly everything that moves runs on diesel: haul trucks, most excavators, dozers, drills and water carts. That is starting to change. Volatile fuel prices, pressure to cut emissions and better electric machines are pushing miners to look at electricity.' },
      { type: 'p', text: 'But "going electric" is not one decision. There are four ways to power open-pit machines, and each suits some machines and mine layouts far better than others. This guide explains each one with real examples from India and abroad, so you can judge what could work at your mine.' },

      { type: 'h2', id: 'why-now', text: 'Why this matters now' },
      { type: 'p', text: 'Diesel for mobile equipment is often a mine’s largest single energy use. A study for the Coalition for Eco-Efficient Comminution (CEEC) of copper, gold, iron ore, nickel and lithium mines found that diesel burned in mobile equipment made up about 45% of their final energy use; the rest was electricity.[^ceec] Diesel is also the main source of direct emissions at many sites. The International Council on Mining and Metals (ICMM) says that typically 30–50% of a mine site’s direct (Scope 1) emissions come from diesel haul trucks.[^icmm] At Rio Tinto’s Pilbara iron ore operations in Australia, diesel makes up about 70% of total carbon emissions.[^rio]' },
      { type: 'p', text: 'Cost and price risk matter as much as emissions. Coal India says the price of industrial diesel at most of its subsidiaries rose by about 54%, from ₹92 a litre in mid-March 2026 to ₹142 a litre on 1 April 2026, and that its diesel consumption in 2025-26 was around 4.19 lakh kilolitres (about 419 million litres).[^cil]' },
      { type: 'p', text: 'Open-pit mining is also where India mines almost all of its coal. In 2024-25, opencast mines produced 1,015.7 million tonnes of the country’s 1,047.5 million tonnes of coal, about 97%.[^moc]' },

      { type: 'h2', id: 'diesel', text: '1. Diesel: flexible and familiar, but costly to run' },
      { type: 'p', text: 'Diesel’s strength is freedom. A diesel machine can go anywhere on the site, refuels in minutes and needs no power lines or cables. Operators, mechanics and dealers everywhere know it.' },
      { type: 'p', text: 'Its weaknesses show up in the running costs:' },
      {
        type: 'ul',
        items: [
          '**Fuel cost and price swings.** Fuel is often the largest single cost of loading and hauling. A 2025 study of an open-pit copper mine in the Democratic Republic of the Congo found that fuel made up 63% of hauling costs and 59% of loading costs.[^mboyo]',
          '**Wasted energy.** A US Department of Energy study of mining put the efficiency of diesel equipment at 45% at best, and closer to 30% for the older machines in use. The rest of the fuel’s energy is lost, mostly as heat.[^doe]',
          '**Exhaust.** The World Health Organization’s cancer agency, IARC, classifies diesel engine exhaust as carcinogenic to humans, with sufficient evidence that it causes lung cancer.[^iarc]',
          '**Engines to maintain.** Engines, fuel systems and exhaust treatment all need regular service and periodic overhauls.',
        ],
      },
      { type: 'p', text: 'For the numbers behind this, see our worked example in [The real cost of diesel in an open-pit mine](/blog/diesel-cost-open-pit-mining).' },

      { type: 'h2', id: 'cable', text: '2. Cable power: the proven electric option for shovels, excavators and drills' },
      { type: 'p', text: 'Electric machines fed by a trailing cable are not new. Large electric rope shovels have dug in open pits for decades. Power comes from the grid to a substation in the pit, then through a heavy, flexible cable that the machine drags behind it as it works.' },
      {
        type: 'ul',
        items: [
          'Komatsu’s 4100XPC rope shovel can be supplied at 6,000, 6,600, 7,200 or 11,000 volts on 50 Hz networks.[^komatsu4100]',
          'Caterpillar’s 6060 electric hydraulic mining shovel has two 1,000 kW motors fed at 6.0, 6.6 or 7.2 kV.[^cat6060]',
          'Liebherr delivered BHP’s first electric excavator, an R 9400 E, to its Yandi iron ore mine in Western Australia in 2024.[^liebherrbhp] Fortescue says each of its cable-powered electric excavators saves around one million litres of diesel a year.[^fortescueexc]',
          'Drills can run on cable too. Sandvik’s DR416iE electric blasthole drill is offered with a 420-metre cable reel.[^sandvik]',
        ],
      },
      { type: 'p', text: 'Indian coal mines use them as well. Coal India buys 20 cubic-metre electric rope shovels through central procurement,[^cileed] and in April 2025 BEML delivered its 21 cubic-metre BRS-21 electric rope shovel to Northern Coalfields’ Nigahi mine.[^bemlshovel]' },
      { type: 'p', text: 'Even so, electric shovels are a small share of the world fleet. They made up about 1.5% of the surface mining machines counted by GlobalData at the end of 2023.[^globaldata2024]' },
      { type: 'p', text: '**The trade-offs.** Cable machines need a medium-voltage network and substations in the pit. Their reach is limited by the cable, moves take planning, and the cable has to be protected from trucks, rock and rough handling. Managing that cable is one of the main day-to-day challenges of this option. We cover it in [Trailing cables in open-pit mines](/blog/trailing-cables-open-pit-mines).' },

      { type: 'h2', id: 'trolley', text: '3. Trolley assist: haul trucks on overhead lines' },
      { type: 'p', text: 'Haul trucks burn the most fuel climbing out of the pit fully loaded. Trolley assist strings overhead power lines along the main ramp. Diesel-electric trucks raise a pantograph, like a tram, and run on grid power while they climb. Off the line, the diesel engine takes over again.' },
      {
        type: 'ul',
        items: [
          'At Kansanshi in Zambia, a loaded truck climbs a 10% grade at about 23 km/h on trolley power, compared with about 11 km/h on diesel. In 2017 the mine said its trucks had burned some 8 million litres of diesel a year climbing out of the pit before trolley assist was installed.[^kansanshi2017]',
          'The mine’s owner, First Quantum, now reports about 14 km of trolley lines and 128 trolley-enabled trucks in Zambia, and up to 90% less diesel on up-ramps.[^fqm2025]',
          'At Copper Mountain in Canada, BC Hydro reported in 2022 that trucks on a new 1 km trolley line could climb at 20 km/h instead of 8 km/h, and that each would displace about 400 litres of diesel an hour while on the line.[^bchydro]',
          'At Boliden’s Aitik mine in Sweden, a 700-metre pilot line doubled truck speed on the ramp from 15 to 30 km/h and cut diesel use by 830 cubic metres a year.[^boliden]',
        ],
      },
      { type: 'p', text: '**The trade-offs.** Trolley lines are fixed infrastructure. They pay off on long ramps that stay in place for years, not on short-lived haul roads. Trucks need electric drives and pantographs, and the mine needs megawatts of grid capacity at the ramp.' },

      { type: 'h2', id: 'battery', text: '4. Battery: from trials to the first fleets' },
      { type: 'p', text: 'Battery machines promise electric power without cables or overhead lines. For open-pit haul trucks, they are moving from trials to the first large orders, with China in the lead:' },
      {
        type: 'ul',
        items: [
          'GlobalData tracked 387 battery-electric surface mining trucks by March 2025, 72% of them in China.[^globaldata2026]',
          'At Huaneng’s Yimin open-pit coal mine in China, 100 autonomous battery trucks began operating in 2025. XCMG, which supplied them, says their batteries can be swapped automatically in under six minutes,[^xcmg] and each truck carries a 568 kWh battery.[^globaldata2026]',
          'Fortescue has agreed a deal worth up to US$2.8 billion with Liebherr for about 360 battery haul trucks, 55 electric excavators and 60 battery dozers by 2030.[^fortescueasx]',
          'In December 2025, two Caterpillar 793 XE battery trucks arrived at BHP’s Jimblebar mine in Australia for a joint trial with Rio Tinto.[^bhpcat]',
          'Hitachi trialled a battery truck at Kansanshi that recharges while driving under the trolley lines. International Mining reports that Hitachi aims to commercialise it in its 2027 financial year.[^hitachi]',
        ],
      },
      { type: 'p', text: 'In India, BEML unveiled a 35-tonne battery-electric dump truck with a 300 kWh battery in April 2026.[^bemlbattery] As of November 2026, we had found no public report of a battery haul truck trial at a Coal India mine.' },
      { type: 'p', text: '**The trade-offs.** Batteries are heavy and need a lot of charging power. A study of Sweden’s Aitik mine estimated that a 2,000 kWh truck battery would weigh about 13 tonnes.[^lindgren] In 2022, Hitachi said today’s battery trucks could run for only 1 to 3 hours between charges, against a full day on a diesel tank.[^emj2022] Charging big fleets also needs a big grid connection: McKinsey estimated that replacing the 27 diesel haul trucks at a sample open-pit iron ore mine, and the loading and auxiliary equipment that works with them, with electric versions would more than double the mine’s electricity demand.[^mckinsey]' },

      { type: 'h2', id: 'compare', text: 'Which option fits which machine?' },
      {
        type: 'table',
        caption: 'How the four options fit open-pit machines today: our assessment, drawing on the examples in this article.',
        head: ['Machine', 'Diesel', 'Cable', 'Trolley assist', 'Battery'],
        rows: [
          ['Rope shovels and large excavators', 'Common (hydraulic excavators)', 'Proven for decades', 'Not used', 'Rare at this size'],
          ['Blasthole drills', 'Common', 'Proven', 'Not used', 'Emerging: battery to move, cable to drill[^epiroc]'],
          ['Haul trucks', 'The default', 'Not practical over long hauls', 'Proven on long, fixed ramps', 'First fleets, mainly in China; trials and large orders in Australia'],
          ['Dozers', 'The default', 'Rare', 'Not used', 'In development; first orders placed[^fortescueasx]'],
        ],
      },

      { type: 'h2', id: 'questions', text: 'Questions to ask before you choose' },
      {
        type: 'ul',
        items: [
          '**How long will this pit, bench or ramp stay in place?** Trolley lines and fixed power networks need years to pay back.',
          '**How much spare grid capacity does the mine have?** Electric fleets need megawatts, and grid upgrades take time.',
          '**What does useful energy cost you?** Compare the cost of a litre of diesel with the cost of the grid power that does the same work. Our [worked example](/blog/diesel-cost-open-pit-mining) shows how.',
          '**Where does your electricity come from?** The CO2 saving depends on how clean your power is.',
          '**Who will manage the cables, and how?** Cable damage and handling strongly affect whether electric shovels pay off. See [our guide to trailing cables](/blog/trailing-cables-open-pit-mines).',
          '**What do equipment makers support in your region?** Service and spare parts matter as much as the machine.',
        ],
      },

      { type: 'h2', id: 'fpca', text: 'Where FPCA fits' },
      {
        type: 'callout',
        tone: 'fpca',
        title: 'Our approach, and its limits',
        paragraphs: [
          'FPCA Technologies is developing a way to run electric machines on grid power without dragging cables across the ground. Elevated, grid-connected docking ports are placed around the work area. A drone makes the connection between a cable reel on the machine and the nearest port, then powers down while grid electricity flows to the machine. As the machine advances, the drone moves the connection to the next port.',
          'It is designed for machines that work within an area, such as excavators, loaders and drills. It is not meant for haul trucks travelling long distances, where trolley assist and batteries fit better. The system is in prototype development, and the performance figures on our website are design targets, not field results.',
        ],
      },
      {
        type: 'figure',
        src: '/application-construction.webp',
        width: 1938,
        height: 812,
        alt: 'FPCA concept illustration: an excavator connected by a raised cable to elevated grid-connected docking ports, with a drone moving the connection to the next port as the machine advances.',
        caption: 'FPCA concept illustration: the drone moves the power connection from port to port as the machine advances.',
      },
    ],
    sources: {
      ceec: { title: 'Mining Energy Consumption 2021', publisher: 'Coalition for Eco-Efficient Comminution (CEEC), report by engeco', date: '2021', url: 'https://www.ceecthefuture.org/resources?task=download&file=publication_file&id=3701' },
      icmm: { title: 'The art of the possible: how collaboration is driving the transformation of large haul truck fleets', publisher: 'International Council on Mining and Metals (ICMM)', date: '5 August 2024', url: 'https://www.icmm.com/en-gb/comment/2024/art-of-the-possible' },
      rio: { title: 'Rio Tinto conducts first renewable diesel trial across Pilbara iron ore operations (exhibit to SEC filing)', publisher: 'Rio Tinto', date: '26 February 2025', url: 'https://www.sec.gov/Archives/edgar/data/863064/000162828025009379/ex17d26pilbaradiesel.htm' },
      cil: { title: 'CIL insulates Indian coal users from increasing input costs', publisher: 'Coal India Limited', date: '10 April 2026', url: 'https://nsearchives.nseindia.com/corporate/COALINDIA_10042026123818_Press_Release.pdf' },
      moc: { title: 'Production of raw coal from opencast and underground mines during the last ten years', publisher: 'Ministry of Coal, Government of India', date: 'accessed November 2026', url: 'https://coal.gov.in/sites/default/files/2021-01/Production-Opencast-and-Under-ground-mines-durin-last-ten-years.pdf' },
      mboyo: { title: 'Mboyo et al., Distribution of operating costs along the value chain of an open-pit copper mine', publisher: 'Applied Sciences (MDPI)', date: '5 February 2025', url: 'https://www.mdpi.com/2076-3417/15/3/1602' },
      doe: { title: 'Mining Industry Energy Bandwidth Study', publisher: 'US Department of Energy', date: 'c. 2007', url: 'https://www.energy.gov/sites/prod/files/2013/11/f4/mining_bandwidth.pdf' },
      iarc: { title: 'IARC: Diesel engine exhaust carcinogenic', publisher: 'International Agency for Research on Cancer (WHO)', date: '12 June 2012', url: 'https://www.iarc.who.int/news-events/iarc-diesel-engine-exhaust-carcinogenic' },
      komatsu4100: { title: '4100XPC electric rope shovel', publisher: 'Komatsu', date: 'accessed November 2026', url: 'https://www.komatsu.com/en-in/products/equipment/electric-rope-shovels/4100xpc' },
      cat6060: { title: '6060 hydraulic mining shovel (electric)', publisher: 'Caterpillar', date: 'accessed November 2026', url: 'https://www.cat.com/en_US/products/new/equipment/hydraulic-mining-shovels/hydraulic-mining-shovels/131600.html' },
      liebherrbhp: { title: 'BHP’s first electric excavator', publisher: 'Liebherr', date: '22 August 2024', url: 'https://liebherr.com/shared/media/corporate/news/news_2024/08/22/min/liebherr-press-release-bhps-first-electric-excavator.pdf' },
      fortescueexc: { title: 'Fortescue adds another electric excavator, says it is saving a million litres of diesel per unit', publisher: 'RenewEconomy', date: '8 April 2026', url: 'https://reneweconomy.com.au/fortescue-adds-another-electric-excavator-says-it-saving-a-million-litres-of-diesel-per-unit/' },
      sandvik: { title: 'Sandvik electrifies its largest intelligent rotary blasthole drill', publisher: 'Sandvik', date: 'June 2024', url: 'https://www.mining.sandvik/en/news-and-media/news-archive/2024/06/sandvik-electrifies-its-largest-intelligent-rotary-blasthole-drill/' },
      cileed: { title: 'Engineering & Equipment Division', publisher: 'Coal India Limited', date: 'accessed November 2026', url: 'https://www.coalindia.in/departments/eed/' },
      bemlshovel: { title: 'BEML unveils India’s largest indigenously developed rope shovel', publisher: 'BEML Limited', date: '29 April 2025', url: 'https://www.bemlindia.in/wp-content/uploads/2025/04/ropeShovel.pdf' },
      globaldata2024: { title: 'Mining equipment: carrying the load', publisher: 'Mining Technology (GlobalData)', date: '21 August 2024', url: 'https://www.mining-technology.com/features/mining-equipment-carrying-the-load/' },
      kansanshi2017: { title: 'Big, clean, green machines', publisher: 'Mining for Zambia', date: '4 April 2017', url: 'https://miningforzambia.com/big-clean-green-machines/' },
      fqm2025: { title: '2025 Climate Change Report', publisher: 'First Quantum Minerals', date: 'May 2026', url: 'https://www.first-quantum.com/wp-content/uploads/2026/05/2025-climate-change-report.pdf' },
      bchydro: { title: 'Copper Mountain’s powerful first step towards net-zero mining', publisher: 'BC Hydro', date: '15 February 2022', url: 'https://www.bchydro.com/news/conservation/2022/copper-mountain-mine-electrification.html' },
      boliden: { title: 'Climate transport', publisher: 'Boliden', date: 'accessed November 2026', url: 'https://www.boliden.com/news/climate-transport/' },
      globaldata2026: { title: 'Yimin coal mine: what 100 AI-driven electric trucks taught the mining sector', publisher: 'Mining Technology (GlobalData)', date: '2 March 2026', url: 'https://www.mining-technology.com/features/yimin-coal-mine-what-electric-trucks-taught-mining/' },
      xcmg: { title: 'World’s first 100 autonomous all-electric mining trucks begin operations at Huaneng Yimin mine', publisher: 'XCMG via PR Newswire', date: '28 May 2025', url: 'https://www.prnewswire.com/apac/news-releases/worlds-first-100-autonomous-all-electric-mining-trucks-officially-begin-operations-at-huaneng-yimin-mine-302466834.html' },
      fortescueasx: { title: 'ASX release: Fortescue and Liebherr partnership', publisher: 'Fortescue', date: '25 September 2024', url: 'https://announcements.asx.com.au/asxpdf/20240925/pdf/0688bpx8vhhksb.pdf' },
      bhpcat: { title: 'BHP and Rio Tinto welcome first Caterpillar battery-electric haul trucks to the Pilbara', publisher: 'BHP', date: '5 December 2025', url: 'https://www.bhp.com/news/media-centre/releases/2025/12/bhp-and-rio-tinto-welcome-first-caterpillar-battery-electric-haul-trucks-to-the-pilbara' },
      hitachi: { title: 'First Quantum and Hitachi commission battery-electric mining truck at Kansanshi', publisher: 'International Mining', date: '16 April 2026', url: 'https://im-mining.com/2026/04/16/first-quantum-and-hitachi-commission-worlds-first-battery-electric-mining-truck-at-kansanshi-mine-in-zambia/' },
      bemlbattery: { title: 'BEML unveils India’s first indigenous 35-ton electric dump truck', publisher: 'BEML Limited', date: '10 April 2026', url: 'https://www.bemlindia.in/wp-content/uploads/2026/04/pressrelease_100426.pdf' },
      lindgren: { title: 'Lindgren et al., Drive-cycle simulations of battery-electric large haul trucks for open-pit mining with electric roads', publisher: 'Energies (MDPI)', date: '2 July 2022', url: 'https://www.mdpi.com/1996-1073/15/13/4871' },
      emj2022: { title: 'Powering trucks for the long haul', publisher: 'Engineering & Mining Journal (E&MJ), hosted by ABB', date: 'May 2022', url: 'https://library.e.abb.com/public/3b1c7e23e29541219a8307c13c42ffe5/Haul%20Truck%20Power_%20EMJ_May22.pdf' },
      mckinsey: { title: 'Electrifying mines could double their electricity demand', publisher: 'McKinsey & Company', date: '24 April 2023', url: 'https://www.mckinsey.com/industries/metals-and-mining/our-insights/electrifying-mines-could-double-their-electricity-demand' },
      epiroc: { title: 'First-ever battery-electric drill rig showcased', publisher: 'Creamer Media', date: '24 October 2024', url: 'https://newsletter.en.creamermedia.com/article/first-ever-battery-electric-drill-rig-showcased-2024-10-24' },
    },
  },

  // ---------------------------------------------------------------------------------------------
  {
    slug: 'diesel-cost-open-pit-mining',
    title: 'The real cost of diesel in an open-pit mine, and what grid power could change',
    seoTitle: 'The Real Cost of Diesel in Open-Pit Mining, With a Worked Example',
    description:
      'How much diesel big excavators and haul trucks burn, what it costs in India and abroad in 2026, and a step-by-step comparison with grid power that you can redo with your own numbers.',
    topic: 'Open-pit mining',
    datePublished: '2026-11-02',
    dateModified: '2026-11-02',
    readingMinutes: 9,
    hero: {
      src: '/blog/diesel-cost-open-pit-mining/hero.webp',
      og: '/blog/diesel-cost-open-pit-mining/og.jpg',
      width: 1600,
      height: 900,
      alt: 'Bar chart of the cost of one working hour for a 300-tonne class excavator in India: about ₹21,655 on bulk diesel, ₹15,327 on diesel at the pump price, and ₹6,673 on grid power.',
      caption: 'Worked example from this article: energy cost of one working hour for a 300-tonne class excavator. Chart by FPCA Technologies.',
    },
    summary: [
      'A 300-tonne class excavator burns about 160 litres of diesel an hour, and a 230-tonne haul truck 120 to 200 litres, according to Caterpillar data.[^cathandbook]',
      'Industrial diesel in India became much more expensive in 2026. In June, bulk diesel in Delhi was priced at ₹134.50 a litre, against ₹95.20 at the pump.[^bt]',
      'In our worked example, grid power does the same digging for about 30–45% of the diesel cost per hour, before electricity duty and surcharges, and before counting electric machines, power lines and cables.',
      'On India’s average grid today, switching to grid power saves money but not CO2: emissions are about the same or slightly higher. CO2 savings come as the electricity gets cleaner.',
      'Your result depends on your tariff, working hours and how you handle cables. Use the formula below with your own numbers.',
    ],
    body: [
      { type: 'p', text: 'Fuel is one of the biggest running costs in an open-pit mine. Knowing what it costs per hour of digging helps you judge whether electric machines would pay off.' },
      { type: 'p', text: 'This article works it out step by step for one large excavator, with a source or a stated assumption for every figure, and compares it with doing the same work on grid electricity. Change the inputs to match your mine.' },

      { type: 'h2', id: 'fuel-use', text: 'How much diesel do big machines burn?' },
      { type: 'p', text: 'Caterpillar publishes typical fuel use for its mining machines, based on telematics data from machines at work. The table converts its figures to litres per hour. Caterpillar’s low, medium and high figures assume the machine idles 50%, 30% and 10% of the time.[^cathandbook]' },
      {
        type: 'table',
        caption: 'Typical fuel use of Caterpillar mining machines, in litres per hour (converted from US gallons).',
        head: ['Machine', 'Class', 'Low', 'Medium', 'High'],
        rows: [
          ['Cat 777G haul truck', 'about 90 t payload[^cat777]', '45', '59', '73'],
          ['Cat 785 haul truck', 'about 145 t payload[^cat785]', '67', '88', '110'],
          ['Cat 789 haul truck', 'about 190 t payload[^cat789]', '101', '135', '169'],
          ['Cat 793F haul truck', 'about 230 t payload[^cat793]', '121', '159', '196'],
          ['Cat 6030 hydraulic shovel', 'about 300 t operating weight[^cat6030]', '–', '161', '–'],
          ['Cat 6040 hydraulic shovel', 'about 410 t operating weight[^cat6040]', '–', '203', '–'],
        ],
        note: 'For the larger shovels, Caterpillar gives one typical figure, shown in the Medium column.',
      },
      { type: 'p', text: 'Machines also burn fuel while they wait. A 2026 report by the US Lawrence Berkeley National Laboratory cites simulations in which haul trucks queuing at a shovel burned about 0.12 litres a minute, or about 7 litres an hour.[^lbnl]' },

      { type: 'h2', id: 'prices', text: 'What diesel costs in 2026' },
      {
        type: 'ul',
        items: [
          '**India.** Industrial and bulk buyers pay a different price from motorists, and the gap widened sharply this year. Coal India says industrial diesel at most of its subsidiaries rose from ₹92 a litre in mid-March to ₹142 on 1 April 2026.[^cil] In June, diesel cost ₹95.20 a litre at Delhi pumps while bulk sales were priced at ₹134.50, and on 11 June the government told industrial users to buy from bulk sale points rather than pumps.[^bt]',
          '**Australia.** On 30 October 2026, the wholesale (terminal gate) price of diesel in Perth was 258.8 cents a litre including GST.[^aip] Businesses can claim back fuel tax on off-road use: 53.7 cents a litre from August 2026.[^ato]',
          '**South Africa.** In October 2026, the wholesale price of 0.05% sulphur diesel was about R31.95 a litre in Gauteng.[^fiasa]',
        ],
      },
      { type: 'p', text: 'Electricity tariffs change too, but differently. In Chhattisgarh, for example, the state regulator sets the tariff for mines once a year, with a monthly fuel and power purchase adjustment on top.[^cspdcl]' },

      { type: 'h2', id: 'energy', text: 'Where the energy goes' },
      { type: 'p', text: 'A litre of diesel holds about 10 to 11 kWh of energy.[^epa] Only part of it does useful work. A US Department of Energy study of mining cited 45% efficiency for diesel equipment but used 30%, because much of the equipment in use is older.[^doe] A simulation study of large diesel-electric haul trucks assumed the engine and generator turn fuel into electricity at about 40% efficiency.[^lindgren] The rest is lost, mostly as heat.' },
      { type: 'p', text: 'Electric drives waste much less. Under EU rules, most large low-voltage motors must be about 95–97% efficient at full load,[^eumotors] and variable-speed drives are typically 95–97% efficient at full load.[^doevsd] Allowing for cables and transformers on site, we estimate that roughly 85–90% of the electricity bought from the grid ends up as useful work.' },
      {
        type: 'figure',
        src: '/blog/diesel-cost-open-pit-mining/energy-flow.webp',
        width: 1600,
        height: 900,
        alt: 'Chart comparing what happens to 100 units of energy bought. Diesel machine: about 35 units become useful work and about 65 are lost. Grid-powered electric machine: about 89 units become useful work and about 11 are lost.',
        caption: 'Out of every 100 units of energy a mine buys, a diesel machine turns about 35 into useful work and a grid-powered electric machine about 89. These are our estimates from this article’s sources; power-station losses are not included.',
      },
      { type: 'p', text: 'So to replace one litre of diesel, an electric machine needs roughly 3.4 to 4.5 kWh from the grid if the diesel engine is 30 to 40% efficient, and about 5 kWh at 45%. We use 3.9 kWh per litre below: about 10 kWh of energy × 35% engine efficiency ÷ 89% electric efficiency. A simulation study of large haul trucks at Sweden’s Aitik mine found a similar ratio: 229 kWh from an electric road replaced 60 litres of diesel, about 3.8 kWh per litre.[^lindgren]' },

      { type: 'h2', id: 'worked-example', text: 'Worked example: a 300-tonne excavator, diesel or grid power' },
      { type: 'p', text: 'Here is the comparison for a 300-tonne class hydraulic excavator in India. Every input is listed, so you can change any of them.' },
      {
        type: 'table',
        caption: 'Inputs',
        head: ['Input', 'Value', 'Source or note'],
        rows: [
          ['Diesel use', '161 litres an hour', 'Caterpillar 6030 typical figure[^cathandbook]'],
          ['Working hours', '6,000 a year (500 a month)', 'Our assumption: use yours'],
          ['Diesel price', '₹95.20 (pump) or ₹134.50 (bulk) a litre', 'Delhi, June 2026[^bt]'],
          ['Grid energy needed', '630 kWh an hour', '161 litres × 3.9 kWh'],
          ['Power factor', '0.95', 'Our assumption. The tariff bills kVAh, so 630 kWh ≈ 663 kVAh'],
          ['Energy charge', '₹7.80 per kVAh', 'Chhattisgarh tariff for mines, 33 kV supply, from 1 July 2026[^cspdcl]'],
          ['Demand charge', '₹500 per kVA a month, on 1,500 kVA', 'Same tariff. The 1,500 kVA contract demand is our assumption'],
        ],
      },
      {
        type: 'table',
        caption: 'Cost of one working hour',
        head: ['', 'Diesel at ₹95.20', 'Diesel at ₹134.50', 'Grid power'],
        rows: [
          ['Energy', '₹15,327', '₹21,655', '₹5,173'],
          ['Demand charge', '–', '–', '₹1,500'],
          ['**Total per hour**', '**₹15,327**', '**₹21,655**', '**₹6,673**'],
          ['Total per year (6,000 hours)', '₹9.2 crore', '₹13.0 crore', '₹4.0 crore'],
        ],
      },
      { type: 'p', text: 'Two notes on fairness. The diesel prices are Delhi prices including taxes, while the grid cost excludes electricity duty and the monthly fuel and power purchase adjustment. And since 11 June 2026 industrial users have been told to buy at bulk prices, so the pump-price column is a best case for diesel.[^bt]' },
      { type: 'p', text: 'On these assumptions, grid power does an hour of digging for about ₹6,700, against ₹15,300 to ₹21,700 on diesel. That is a saving of about ₹8,700 to ₹15,000 an hour, or ₹5.2 to 9.0 crore a year. Put another way, grid power does the work of one litre of diesel for about ₹41.' },
      { type: 'p', text: 'Is the scale realistic? Fortescue says each of its electric excavators saves around one million litres of diesel a year.[^fortescueexc] Our example machine burns about 970,000 litres a year (161 litres × 6,000 hours).' },
      {
        type: 'callout',
        tone: 'note',
        title: 'What this example leaves out',
        items: [
          'The extra purchase price of an electric machine, if any, and its financing.',
          'Substations, power lines and trailing cables, and the people and downtime needed to handle cables.',
          'Electricity duty, the monthly fuel and power purchase adjustment, taxes and meter charges.',
          'Differences in maintenance, availability and machine life.',
          'Time-of-day pricing. The Chhattisgarh tariff for mines charges 80% of the normal energy rate from 9 am to 5 pm and 120% from 5 pm to 11 pm.[^cspdcl] For round-the-clock work this averages about 98% of the normal rate.',
        ],
      },
      {
        type: 'callout',
        tone: 'formula',
        title: 'Redo it with your own numbers',
        items: [
          'Diesel cost per hour = litres per hour × diesel price',
          'Grid energy per hour (kWh) ≈ litres per hour × 3.9',
          'Grid cost per hour = (kWh ÷ power factor) × energy charge + (demand charge per kVA × billing demand ÷ working hours per month)',
          'Then add the costs this example leaves out, and compare the totals over the machine’s working life.',
        ],
      },

      { type: 'h2', id: 'co2', text: 'What about CO2? The honest answer' },
      { type: 'p', text: 'Burning a litre of diesel releases about 2.7 kg of CO2.[^epa] Our example excavator therefore emits about 430 kg of CO2 an hour.' },
      { type: 'p', text: 'Grid electricity is not free of CO2 either. India’s grid averaged 0.727 tonnes of CO2 per megawatt-hour in 2023-24, according to the Central Electricity Authority.[^cea] At that rate, the 630 kWh the electric machine needs each hour come with about 460 kg of CO2.' },
      { type: 'p', text: '**So on India’s average grid today, moving an excavator from diesel to grid power saves money but not CO2: in our example it emits slightly more, about 460 kg against 430 kg an hour.** In this example, CO2 savings start once the electricity emits less than about 0.69 tonnes of CO2 per MWh, for example with solar or wind supply, or in countries with low-carbon grids.' },
      { type: 'p', text: 'Some benefits do not depend on the grid at all: no diesel exhaust at the working face,[^iarc] less noise and heat, and no engine to service.' },

      { type: 'h2', id: 'hidden-costs', text: 'Diesel costs that are easy to miss' },
      {
        type: 'ul',
        items: [
          '**Price risk.** As 2026 showed, the price a mine pays for diesel can rise by half in a few weeks.[^cil]',
          '**Idling.** Machines burn fuel while they wait, such as trucks queuing at the shovel.[^lbnl]',
          '**Fuel logistics.** Storage tanks, fuel trucks, refuelling time and fuel management all cost money.',
          '**Health and the working environment.** Diesel exhaust causes lung cancer, according to IARC.[^iarc]',
        ],
      },

      { type: 'h2', id: 'always-cheaper', text: 'So is grid power always cheaper?' },
      { type: 'p', text: 'Not automatically. At 2026 diesel prices the energy saving is large, but it has to pay for electric machines, the power network and cable handling. A machine that works few hours a year, or a site far from the grid, may not make the case. A busy excavator in a long-life pit with good grid access is far more likely to.' },
      { type: 'p', text: 'The hardest part is often not the price of electricity but getting it to a machine that moves. That is the cable problem, covered in [Trailing cables in open-pit mines](/blog/trailing-cables-open-pit-mines). For an overview of all the options, see [four ways to power open-pit mining machines](/blog/open-pit-mining-power-options).' },

      { type: 'h2', id: 'fpca', text: 'Where FPCA fits' },
      {
        type: 'callout',
        tone: 'fpca',
        title: 'Our approach, and its limits',
        paragraphs: [
          'FPCA Technologies is developing a way to connect working machines to grid power automatically, keeping the power cable raised between elevated docking ports instead of lying on the ground. The aim is to make savings like those above easier to reach for excavators and other machines that work within an area.',
          'The system is in prototype development, and the performance figures on our website are design targets, not field results.',
        ],
      },
      {
        type: 'figure',
        src: '/blog/diesel-cost-open-pit-mining/fpca-concept.webp',
        width: 848,
        height: 478,
        alt: 'Frame from FPCA’s concept animation: an excavator with a machine-mounted cable reel, connected through a raised cable guide to a docking port fed by an underground supply.',
        caption: 'Frame from FPCA’s concept animation: a machine-mounted reel, a raised cable guide and an elevated docking port.',
      },
    ],
    sources: {
      cat777: { title: '777 off-highway truck', publisher: 'Caterpillar', date: 'accessed November 2026', url: 'https://www.cat.com/en_GB/products/new/equipment/off-highway-trucks/off-highway-trucks/115560.html' },
      cat785: { title: '785 mining truck', publisher: 'Caterpillar', date: 'accessed November 2026', url: 'https://www.cat.com/en_US/products/new/equipment/off-highway-trucks/mining-trucks/104480.html' },
      cat789: { title: '789 mining truck', publisher: 'Caterpillar', date: 'accessed November 2026', url: 'https://www.cat.com/en_ID/products/new/equipment/off-highway-trucks/mining-trucks/116180.html' },
      cat6040: { title: '6040 hydraulic mining shovel', publisher: 'Caterpillar', date: 'accessed November 2026', url: 'https://www.cat.com/en_US/products/new/equipment/hydraulic-mining-shovels/hydraulic-mining-shovels/131020.html' },
      cathandbook: { title: 'Caterpillar Performance Handbook: fuel consumption tables', publisher: 'Caterpillar (via Wheeler Cat)', date: 'December 2022', url: 'https://wheelercat.com/wp-content/uploads/2023/01/Cat-Performance-Handbook-from-VST-fuel-consumption-2022-12-09T21-20-09.pdf' },
      cat793: { title: '793F mining truck', publisher: 'Caterpillar', date: 'accessed November 2026', url: 'https://www.cat.com/en_ID/products/new/equipment/off-highway-trucks/mining-trucks/18092621.html' },
      cat6030: { title: '6030 hydraulic mining shovel', publisher: 'Caterpillar', date: 'accessed November 2026', url: 'https://www.cat.com/en_US/products/new/equipment/hydraulic-mining-shovels/hydraulic-mining-shovels/102960.html' },
      lbnl: { title: 'Szum and Breunig, Diesel fuel consumption in prominent US open-pit mines: site-level estimates', publisher: 'Lawrence Berkeley National Laboratory', date: 'January 2026', url: 'https://eta-publications.lbl.gov/sites/default/files/2026-02/diesel_fuel_consumption_in_prominent_u.s_open-pit_mines_site-level_estimates.pdf' },
      cil: { title: 'CIL insulates Indian coal users from increasing input costs', publisher: 'Coal India Limited', date: '10 April 2026', url: 'https://nsearchives.nseindia.com/corporate/COALINDIA_10042026123818_Press_Release.pdf' },
      bt: { title: 'Govt bars bulk purchases of petrol, diesel at pumps; here’s why', publisher: 'Business Today', date: '12 June 2026', url: 'https://www.businesstoday.in/india/story/govt-bars-bulk-purchases-of-petrol-diesel-at-pumps-heres-why-536535-2026-06-12' },
      aip: { title: 'Terminal gate prices', publisher: 'Australian Institute of Petroleum', date: 'price for 30 October 2026, accessed 2 November 2026', url: 'https://www.aip.com.au/pricing/terminal-gate-prices' },
      ato: { title: 'Fuel tax credit rates for business, 1 July 2026 to 30 June 2027', publisher: 'Australian Taxation Office', date: 'accessed November 2026', url: 'https://www.ato.gov.au/businesses-and-organisations/income-deductions-and-concessions/incentives-and-concessions/fuel-schemes/fuel-tax-credits-business/rates-business/from-1-july-2026-to-30-june-2027' },
      fiasa: { title: 'Fuel prices: current and past', publisher: 'Fuels Industry Association of South Africa', date: 'October 2026', url: 'https://fuelsindustry.org.za/consumer-information/fuel-prices-current-past/' },
      cspdcl: { title: 'Tariff schedule FY 2026-27', publisher: 'Chhattisgarh State Power Distribution Company (CSPDCL)', date: 'from 1 July 2026', url: 'https://cspdcl.co.in/CSEB/Files/tariff_schedule_fy2627.pdf' },
      epa: { title: 'Emission Factors for Greenhouse Gas Inventories (GHG Emission Factors Hub 2025)', publisher: 'US Environmental Protection Agency', date: 'January 2025', url: 'https://www.epa.gov/system/files/documents/2025-01/ghg-emission-factors-hub-2025.pdf' },
      doe: { title: 'Mining Industry Energy Bandwidth Study', publisher: 'US Department of Energy', date: 'c. 2007', url: 'https://www.energy.gov/sites/prod/files/2013/11/f4/mining_bandwidth.pdf' },
      lindgren: { title: 'Lindgren et al., Drive-cycle simulations of battery-electric large haul trucks for open-pit mining with electric roads', publisher: 'Energies (MDPI)', date: '2 July 2022', url: 'https://www.mdpi.com/1996-1073/15/13/4871' },
      eumotors: { title: 'Commission Regulation (EU) 2019/1781 on ecodesign requirements for electric motors and variable speed drives (text via LawPlayer)', publisher: 'European Union', date: '2019, as amended', url: 'https://lawplayer.com/eu/act/32019R1781' },
      doevsd: { title: 'Motor Systems Tip Sheet #11: Adjustable speed drive part-load efficiency', publisher: 'US Department of Energy', date: 'November 2012', url: 'https://www.energy.gov/sites/prod/files/2014/04/f15/motor_tip_sheet11.pdf' },
      fortescueexc: { title: 'Fortescue adds another electric excavator, says it is saving a million litres of diesel per unit', publisher: 'RenewEconomy', date: '8 April 2026', url: 'https://reneweconomy.com.au/fortescue-adds-another-electric-excavator-says-it-saving-a-million-litres-of-diesel-per-unit/' },
      cea: { title: 'CO2 Baseline Database for the Indian Power Sector, User Guide version 20.0', publisher: 'Central Electricity Authority, Government of India', date: 'December 2024', url: 'https://cea.nic.in/wp-content/uploads/2021/03/User_Guide_Version_20.0.pdf' },
      iarc: { title: 'IARC: Diesel engine exhaust carcinogenic', publisher: 'International Agency for Research on Cancer (WHO)', date: '12 June 2012', url: 'https://www.iarc.who.int/news-events/iarc-diesel-engine-exhaust-carcinogenic' },
    },
  },

  // ---------------------------------------------------------------------------------------------
  {
    slug: 'trailing-cables-open-pit-mines',
    title: 'Trailing cables in open-pit mines: why they cost time and money, and how to manage them better',
    seoTitle: 'Trailing Cables in Open-Pit Mines: Risks, Rules and Best Practices',
    description:
      'Why trailing cables on electric shovels, excavators and drills get damaged, what the safety rules require in India, the US and Western Australia, and 10 practices that cut damage and downtime.',
    topic: 'Open-pit mining',
    datePublished: '2026-11-02',
    dateModified: '2026-11-02',
    readingMinutes: 9,
    hero: {
      src: '/blog/trailing-cables-open-pit-mines/hero.webp',
      og: '/blog/trailing-cables-open-pit-mines/og.jpg',
      width: 1600,
      height: 900,
      alt: 'Illustration of an electric shovel in an open pit fed by a trailing cable from a pit substation, with numbered markers where cables are most often damaged: at haul road crossings, below the highwall, at tight bends near the machine and during manual handling.',
      caption: 'Where trailing cables are most often damaged. Illustration by FPCA Technologies.',
    },
    summary: [
      'Electric shovels and excavators get their power through trailing cables that carry thousands of volts and can weigh about 15 kg a metre.[^qld]',
      'Falling rock and machines running over cables cause more than half of surface mining cable failures, according to cable maker Prysmian.[^prysmian]',
      'Most trailing-cable injuries in a large US study happened while people were handling cables, and the fatal cases described here involved work on equipment that had not been isolated and locked out.',
      'Planning routes and crossings, mechanising handling, tracking every cable and strict lockout reduce damage, downtime and risk.',
    ],
    body: [
      { type: 'p', text: 'Electric shovels and excavators are the most proven way to run big open-pit machines on electricity. Their weak point is the cable that feeds them. A damaged trailing cable stops one of the most productive machines in the pit, and a damaged live cable can kill.' },
      { type: 'p', text: 'This guide explains how trailing cables are used, what goes wrong, what the rules require and which practices reduce damage and downtime, whatever equipment you run.' },

      { type: 'h2', id: 'how-it-works', text: 'How a trailing cable feeds an open-pit machine' },
      { type: 'p', text: 'Power reaches the pit through a medium-voltage network and is fed from transportable substations, such as the 66/11 kV transportable substation at an open-cut coal mine in New South Wales described in a 2025 safety alert.[^nswalert] From there, a heavy, flexible trailing cable runs to the machine.' },
      {
        type: 'ul',
        items: [
          '**Voltage.** Large machines run at medium voltage. Komatsu’s 4100XPC rope shovel, for example, can be supplied at 6,000, 6,600, 7,200 or 11,000 volts on 50 Hz networks.[^komatsu4100]',
          '**Cable types.** In North America, Type SHD-GC cable is made for shovels, draglines and drills. It has shielded power conductors, two ground wires and a ground-check conductor that lets the protection detect a broken earth.[^southwire] Australian surface mines use cables made to AS/NZS 2802, such as Type 409 for draglines, drills and face shovels.[^tratos] In India, IS 14494 covers elastomer-insulated flexible cables for use in mines.[^bis]',
          '**Weight.** One metre of 11 kV Type 409 cable weighs about 15 kg,[^qld] so a few hundred metres weigh several tonnes. It cannot be moved safely by hand.',
        ],
      },

      { type: 'h2', id: 'costs', text: 'Why trailing cables cost time and money' },
      { type: 'p', text: 'Cable makers and safety studies point to the same few causes of damage:' },
      {
        type: 'ul',
        items: [
          '**Falling rock and run-overs.** Prysmian says falling rock and run-overs cause more than half of all surface mining cable failures.[^prysmian] A US Bureau of Mines survey of surface mines also found cables run over by mobile equipment and cut by rock among the most common causes.[^usbm]',
          '**Rough handling.** The same survey found many cables damaged while being moved or transported.[^usbm]',
          '**Overloading on reels.** Cable wound on a reel cannot shed heat as well, so its current rating must be reduced: in Prysmian’s guidance, to 85% with one layer on the reel and 35% with four.[^prysmian]',
          '**Too much tension and poor splices.** Cable maker AmerCable lists excessive tension and poor temporary splices among the main causes of failure.[^amercable]',
        ],
      },
      { type: 'p', text: 'The bigger cost is usually downtime, not the cable. Prysmian says the cost of cable-related downtime often exceeds the cost of the cable itself, and that its recommended practices can cut downtime by up to 50%.[^prysmian] These are a manufacturer’s estimates. The best way to know your own numbers is to record every failure and its cause.' },
      { type: 'p', text: 'Moving the machine adds more. Relocating a shovel costs production time,[^ualberta] and its cable has to be moved, rerouted and protected each time.' },

      { type: 'h2', id: 'safety', text: 'The safety risks' },
      { type: 'p', text: 'Trailing cables carry enough energy to kill, and they lie where people and machines work.' },
      {
        type: 'ul',
        items: [
          'A study of electrical injuries in US mining from 2000 to 2009 counted 865 injuries, 39 of them fatal. Trailing cables were involved in about 9% of the injuries where the equipment was identified, mostly in underground coal mines, and 71% of those trailing-cable injuries happened while workers were handling the cable. Two deaths occurred when machines struck a trailing cable and their frames became energised.[^homce]',
          'In 2020, at a US surface sand mine, a bulldozer damaged a trailing cable. After the cable was spliced, the mine superintendent was electrocuted in a 4,160-volt electrical enclosure that had not been locked out.[^msha]',
          'In 2018, at a surface coal mine in West Virginia, a highwall miner operator who had been repairing the machine’s 7,200-volt trailing cable was electrocuted inside its on-board high-voltage transformer enclosure. A foreman at a substation about 1.5 miles away was switching the power on and off at his request by text message, and the switch was not locked or tagged out.[^wv]',
          'In India, electricity caused 29 of the 528 fatal accidents in coal mines from 2013 to 2022, according to the Directorate General of Mines Safety (DGMS).[^dgms]',
        ],
      },
      { type: 'p', text: 'The lessons are consistent. Both deaths described above involved work on cable-fed equipment that had not been isolated, locked out and tested, and in the US study two people died when machines struck a cable and their frames became energised.' },

      { type: 'h2', id: 'rules', text: 'What the rules require' },
      { type: 'p', text: 'Rules differ by country but cover the same ground. This is a summary, not legal advice: check the current rules that apply to your mine.' },
      {
        type: 'ul',
        items: [
          '**United States.** Federal rules for surface mines (30 CFR Part 77, Subpart G) require short-circuit protection by automatic circuit breakers, marked disconnecting devices that show visibly when the power is off, well-made splices, protection of trailing cables from damage by mobile equipment, no making or breaking of connections under load, and rubber gloves when handling energised medium- and high-voltage trailing cables.[^cfr]',
          '**Western Australia.** Trailing and reeling cables must meet AS/NZS 2802 and include a pilot core that cuts off the power if the earth circuit breaks. Earth-continuity protection must be tested routinely: the regulator’s guidance says every three months at surface operations, and every month at quarries, dredges and underground mines.[^wa] Cable repairs and testing follow AS/NZS 1747.[^as1747]',
          '**India.** Electrical installations in mines come under the Central Electricity Authority (Measures relating to Safety and Electric Supply) Regulations, 2023, which have a chapter of additional requirements for mines.[^cea] Flexible mining cables are covered by IS 14494, which is under compulsory BIS certification.[^bis]',
        ],
      },

      { type: 'h2', id: 'practices', text: '10 practices that cut cable damage and downtime' },
      {
        type: 'ol',
        items: [
          '**Identify every cable.** Give each cable, plug and outlet a unique ID, and keep its test and repair history.[^qld] Record every failure and its cause.[^prysmian]',
          '**Plan the route before the move.** Keep cables away from blasting areas and from rockfall below highwalls.[^prysmian]',
          '**Never let traffic drive over a cable.** Bury cables at road crossings or use arched cable bridges, and mark cable routes clearly.[^prysmian][^wa]',
          '**Mechanise handling.** Use machine-mounted reels, cable reel trucks or cable handlers instead of pulling cable by hand. One maker’s machine-mounted reel holds 300 metres of cable rated up to 15 kV.[^conductix] The US survey found that strains, sprains, slips, falls and being struck by cable were by far the most common cable-handling accidents.[^usbm]',
          '**Pull gently.** Move cable in several short loops rather than one long drag, limit tension and respect the minimum bending radius.[^prysmian][^amercable]',
          '**Derate cable on reels.** Reduce the current rating for each layer of cable wound on a reel.[^prysmian]',
          '**Monitor the earth.** Use earth-continuity (ground-check) and earth-leakage protection, and test that it trips.[^littelfuse][^wa]',
          '**Inspect and test routinely.** Have machine operators inspect cables visually in place as a routine, inspect and test cables, earths and protection after every relocation, and audit the system regularly.[^qld]',
          '**Repair to the standard.** Only competent people should repair and test cables (in Australia, to AS/NZS 1747), and splices must be mechanically strong, well insulated and sealed.[^qld][^as1747][^cfr] In the 2020 US accident above, none of the people involved were certified electricians.[^msha]',
          '**Lock out, tag out and test before touching.** Isolate at the source, lock and tag it, then prove dead every conductor you could touch, including the line side of switches inside enclosures, and earth high-voltage conductors before work begins, as your high-voltage procedures require. The accidents above show why.[^msha][^wv]',
        ],
      },

      { type: 'h2', id: 'future', text: 'Where cable handling is heading' },
      { type: 'p', text: 'The trend is to take people out of cable handling, with machine-mounted reels, remote-controlled cable handlers and better monitoring. Some mines also power shovels from a mobile generator during long moves: in 2017, Teck’s Elk Valley coal mines in Canada did this for rope shovels moving between pits.[^mtu]' },
      { type: 'p', text: 'For a wider view of how open-pit machines can be powered, see [four ways to power open-pit mining machines](/blog/open-pit-mining-power-options). For the cost case, see [the real cost of diesel in an open-pit mine](/blog/diesel-cost-open-pit-mining).' },

      { type: 'h2', id: 'fpca', text: 'Where FPCA fits' },
      {
        type: 'callout',
        tone: 'fpca',
        title: 'Our approach, and its limits',
        paragraphs: [
          'FPCA Technologies is developing a system that keeps the power cable raised between elevated, grid-connected docking ports instead of lying across the pit floor. A drone moves the connection to the next port as the machine advances, so nobody has to drag or reconnect a cable by hand.',
          'The system is in prototype development. It does not replace the rules and practices above, and the performance figures on our website are design targets, not field results.',
        ],
      },
      {
        type: 'figure',
        src: '/blog/trailing-cables-open-pit-mines/fpca-concept.webp',
        width: 848,
        height: 478,
        alt: 'Frame from FPCA’s concept animation: a tractor working on grid power through a raised tether guided clear of the machine and the ground, with a cable reel on the machine.',
        caption: 'Frame from FPCA’s concept animation: a raised guide keeps the tether clear of the machine and the ground.',
      },
    ],
    sources: {
      qld: { title: 'Mines Safety Bulletin No. 6: Handling and management of surface trailing cables', publisher: 'Queensland Department of Mines and Energy (now Resources Safety & Health Queensland)', date: '19 April 2000', url: 'https://www.rshq.qld.gov.au/safety-notices/mines/handling-and-management-of-surface-trailing-cables' },
      prysmian: { title: 'Surface Mining Cable Care & Maintenance', publisher: 'Prysmian North America', date: 'undated (published online April 2025)', url: 'https://na.prysmian.com/sites/na.prysmian.com/files/2025-04/SPL-MIN-0002-0924_Surface%20Mining%20Cable%20Care%20&%20Maintenance%20Guide.pdf' },
      nswalert: { title: 'Safety Alert SA25-04: Electric shock from 11 kV ethylene propylene rubber insulated cable', publisher: 'NSW Resources Regulator', date: 'September 2025', url: 'https://www.resources.nsw.gov.au/sites/default/files/2025-09/safety-alert-sa-25-04-electric-shock-from-11kv-ethylene-propylene-rubber-insulated-cable.pdf' },
      komatsu4100: { title: '4100XPC AC electric rope shovel brochure', publisher: 'Komatsu Mining', date: '2018', url: 'https://www.komatsu.com/-/media/brochures/shovels/en-4100xpcac01-0218-v2.ashx' },
      southwire: { title: 'Type SHD-GC mining cable specification sheet', publisher: 'Southwire', date: 'accessed November 2026', url: 'https://media.iewc.com/SpecificationSheets/Southwire_TypeSHD-GC_SS.pdf' },
      tratos: { title: 'Type 409 trailing feeder cable to AS/NZS 2802', publisher: 'Tratos', date: 'accessed November 2026', url: 'https://tratosgroup.com/?p=38490' },
      bis: { title: 'IS 14494:2019 Elastomer insulated flexible cables for use in mines', publisher: 'Bureau of Indian Standards', date: 'accessed November 2026', url: 'https://services.bis.gov.in/php/BIS_2.0/bisconnect/knowyourstandards/Indian_standards/isdetails_mnd/6400' },
      usbm: { title: 'Cable Handling in Surface Mines', publisher: 'Pincock, Allen & Holt for the US Bureau of Mines', date: '19 September 1980', url: 'https://stacks.cdc.gov/view/cdc/234451/cdc_234451_DS1.pdf' },
      amercable: { title: 'A primer on cable damage and related failure of Tiger brand mining cables', publisher: 'AmerCable', date: '2025', url: 'https://amercable.com/storage/2025/02/TT_Primary-Causes-of-Failure-1_25.pdf' },
      ualberta: { title: 'Gong and Askari-Nasab, Short-term scheduling optimization for in-pit crushing and stockpiling operations considering shovel movement', publisher: 'Mining Optimization Laboratory, University of Alberta', date: 'c. 2025', url: 'https://sites.ualberta.ca/MOL/DataFiles/2025_Papers/102_Gong.pdf' },
      homce: { title: 'Homce and Cawley, Electrical injuries in the US mining industry, 2000–2009', publisher: 'Transactions of the Society for Mining, Metallurgy & Exploration', date: '2013', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4558412/' },
      msha: { title: 'Fatality report: July 9, 2020 (Hudson Sand Mine)', publisher: 'US Mine Safety and Health Administration (MSHA)', date: '2020', url: 'https://www.msha.gov/data-reports/fatality-reports/2020/july-9-2020-fatality/final-report' },
      wv: { title: 'Fatal accident report, Bundy Auger Mining', publisher: 'West Virginia Office of Miners’ Health, Safety and Training', date: '2018', url: 'https://minesafety.wv.gov/PDFs/FATAL%202-2018%20Bundy%20Auger%20Mining.pdf' },
      dgms: { title: 'SANKET: Statistical Analysis & Numbers, Key Evaluation of Trends in coal mine accidents', publisher: 'Directorate General of Mines Safety (DGMS)', date: 'February 2024', url: 'https://dgms.gov.in/writereaddata/UploadFile/sanket0404_2024.pdf' },
      cfr: { title: '30 CFR Part 77, Subpart G: Trailing cables', publisher: 'US Electronic Code of Federal Regulations', date: 'current', url: 'https://www.ecfr.gov/current/title-30/chapter-I/subchapter-O/part-77/subpart-G' },
      wa: { title: 'Electricity: trailing and reeling cables', publisher: 'WorkSafe Western Australia', date: 'updated 6 May 2025', url: 'https://www.worksafe.wa.gov.au/electricity-trailing-and-reeling-cables' },
      as1747: { title: 'AS/NZS 1747: Reeling, trailing and feeder cables used for mining: repair, testing and fitting of accessories', publisher: 'Australian Business Licence and Information Service', date: 'accessed November 2026', url: 'https://ablis.business.gov.au/service/wa/as-nzs-1747-2003-reeling-trailing-and-feeder-cables-used-for-mining-repair-testing-and-fitting-of-accessories/29631' },
      cea: { title: 'CEA (Measures relating to Safety and Electric Supply) Regulations, 2023: presentation', publisher: 'Central Electricity Authority', date: 'undated (c. November 2024)', url: 'https://irade.org/presentation-21-22nd-Nov2024/CEA%20Measures%20Relating%20to%20Safety%20and%20Electric%20Supply%20Regulations.pdf' },
      conductix: { title: 'Trailing cable reel', publisher: 'Conductix-Wampfler', date: '2025', url: 'https://cdn.conductix.com.cn/cdn/ff/wlA75XITwLWxbCUs569P06lgBSrLMzZ6uKL4VulwT0M/1753949401/public/downloads/PRB7100-0004-EN%20Trailing%20Cable%20Reel.pdf' },
      littelfuse: { title: 'SE-134C / SE-135 ground-fault ground-check monitor datasheet', publisher: 'Littelfuse', date: 'accessed November 2026', url: 'https://www.littelfuse.com/~/media/files/littelfuse/technical-resources/documents/data-sheets/littelfuse_protectionrelays_se_134c_se_135_datasheet.pdf' },
      mtu: { title: 'Generator set powers rope shovel during pit-to-pit moves', publisher: 'mtu (Rolls-Royce Power Systems)', date: '20 February 2017', url: 'https://www.mtu-solutions.com/na/en/casestudies/powergen/generator_set_powers_rope_shovel_during_pit-to-pit_moves.html' },
    },
  },
];

export function getBlogPost(slug) {
  return blogPosts.find((post) => post.slug === slug) || null;
}
