import { ProductItem, ServiceItem, InfrastructurePillar } from '../types';

export const COMPANY_INFO = {
  name: 'Micro Technocam Equipments Pvt. Ltd.',
  shortName: 'MTCE',
  establishedYear: 2010,
  tagline: 'Precision Heavy Engineering & Industrial Machinery',
  headquarters: 'Joratarai Industrial Area, Durg - 491001, Chhattisgarh, India',
  phonePrimary: '+91 788 235 4890',
  phoneSales: '+91 942 524 6711',
  phoneEmergency: '+91 982 718 3402',
  emailSales: 'sales@microtechnocam.com',
  emailTender: 'tenders@microtechnocam.com',
  emailInfo: 'contact@microtechnocam.com',
  workingHours: 'Mon - Sat: 8:30 AM - 6:30 PM IST (Emergency Support: 24/7)',
  certifications: ['ISO 9001:2015 Certified', 'Make in India Registered', 'IBR Compliant Fabrication'],
};

export const KEY_METRICS = [
  {
    value: '15+',
    unit: 'Years',
    label: 'Industry Leadership',
    detail: 'Continuous manufacturing operations since 2010 in Durg industrial belt.',
  },
  {
    value: '500+',
    unit: 'Units',
    label: 'Industrial Deployments',
    detail: 'Supplied to premier integrated steel plants, rolling mills & foundries across India.',
  },
  {
    value: '150',
    unit: 'Tons',
    label: 'Max Handling Capacity',
    detail: 'Heavy-duty fabrication bay engineered for ultra-heavy cranes and ladles.',
  },
  {
    value: '100%',
    unit: 'In-House',
    label: 'NDT Quality Assurance',
    detail: 'Ultrasonic, MPI, dye penetrant, and certified load deflection testing on-site.',
  },
];

export const PRODUCTS_DATA: ProductItem[] = [
  // 1. Steel Melting Shop (SMS) Equipment
  {
    id: 'continuous-casting-machines',
    name: 'Continuous Casting Machines (CCM)',
    category: 'sms-equipment',
    categoryLabel: 'Steel Melting Shop (SMS)',
    shortDescription: 'High-speed 1 to 4 strand curved continuous billet and slab casting machines with automated dummy bar systems.',
    fullDescription: 'MTCE manufactures heavy-duty, high-production Continuous Casting Machines (CCM) built for demanding steel melting shops. Engineered with heavy structural frames, rigid mold oscillation units, motorized withdrawal and straightening units, hydraulic shear cutters, and automated dummy bar storage.',
    image: '/src/assets/images/steel_melting_equipment_1790962064205.jpg',
    capacity: '1 to 4 Strands | 6m to 11m Radius',
    standards: ['IS 807', 'IS 3177', 'DIN 15018'],
    keyFeatures: [
      'Variable speed mold oscillator with sinusoidal movement',
      'Multi-stage secondary cooling water spray header',
      'Heavy-duty withdrawal and straightening unit (WD/ST)',
      'Automated rigid dummy bar charging and storage'
    ],
    specifications: [
      { label: 'Casting Radius', value: '4.0m / 6.0m / 9.0m / 11.0m' },
      { label: 'Section Sizes', value: '80x80mm up to 250x250mm Billets' },
      { label: 'Number of Strands', value: '1, 2, 3, or 4 Strands' },
      { label: 'Casting Speed', value: 'Up to 3.8 meters / minute' },
      { label: 'Cooling Control', value: 'Automated PLC Water Header Distribution' },
    ],
    applications: ['Mini Steel Plants', 'Integrated Steel Plants', 'Alloy Steel Melting Units']
  },
  {
    id: 'ladle-refining-furnace',
    name: 'Ladle Refining Furnaces (LRF)',
    category: 'sms-equipment',
    categoryLabel: 'Steel Melting Shop (SMS)',
    shortDescription: '10T to 75T secondary metallurgy refining units featuring electro-hydraulic electrode regulation and water-cooled roofs.',
    fullDescription: 'Designed for precision desulfurization, degassing, and tight alloy composition control in liquid steel. Features copper-clad electrode arms, heavy water-cooled tubular roofs with swing mechanisms, and automated bottom argon bubbling systems.',
    image: '/src/assets/images/steel_melting_equipment_1790962064205.jpg',
    capacity: '10 to 75 Metric Tons',
    standards: ['IEEE standards', 'IS 807', 'ISO 9001:2015'],
    keyFeatures: [
      'Electro-hydraulic proportional electrode regulation system',
      'Water-cooled roof with fume extraction port',
      'Argon gas porous plug bubbling integration with PLC flow control',
      'Heavy-duty alloy wire feeding guide mechanism'
    ],
    specifications: [
      { label: 'Ladle Capacity', value: '10 Ton - 75 Ton heat capacity' },
      { label: 'Electrode Diameter', value: '250mm - 450mm graphite electrodes' },
      { label: 'Transformer Rating', value: '2.5 MVA - 18 MVA' },
      { label: 'Roof Lifting Mechanism', value: 'Hydraulic Cylinder Swivel' },
      { label: 'Heating Rate', value: '3.5°C to 5.0°C / minute' },
    ],
    applications: ['Secondary Steel Refining', 'Special Steel Forging', 'Alloy Ingot Casting']
  },
  {
    id: 'aod-converter-vessels',
    name: 'AOD Converters & Scrap Buckets',
    category: 'sms-equipment',
    categoryLabel: 'Steel Melting Shop (SMS)',
    shortDescription: 'Argon Oxygen Decarburization vessels and high-capacity clamshell/orange-peel scrap charging buckets.',
    fullDescription: 'Custom-built AOD vessels with trunnion rings, drive tilting mechanisms, and gas mixing skids. MTCE also manufactures heavy-gauge clamshell scrap charging buckets with bottom-release triggers engineered to withstand thermal cycling and severe impact.',
    image: '/src/assets/images/steel_melting_equipment_1790962064205.jpg',
    capacity: '15T to 50T Vessel | Up to 40 m³ Bucket',
    standards: ['IS 2825', 'ASME Section VIII', 'IS 807'],
    keyFeatures: [
      'Precision machined trunnion ring and water-cooled lip flange',
      'Dual electric motor planetary drive with mechanical fail-safe brake',
      'Submerged multi-tuyere gas shroud injection system',
      'Reinforced clamshell bucket shell with high-abrasion wear plates'
    ],
    specifications: [
      { label: 'Vessel Volume', value: '15 Ton to 50 Ton Liquid Metal' },
      { label: 'Tilting Speed', value: '0.1 to 1.5 RPM (Inverter driven)' },
      { label: 'Tuyere Configuration', value: '2 to 5 bottom gas injectors' },
      { label: 'Bucket Capacity', value: '10 m³ to 45 m³ volumetric' },
      { label: 'Discharge Type', value: 'Clamshell bottom-drop / Rope operated' },
    ],
    applications: ['Stainless Steel Manufacturing', 'High Chrome Castings', 'Scrap Yard Feeding']
  },

  // 2. Electric Overhead Cranes & Hoists
  {
    id: 'double-girder-eot-crane',
    name: 'Heavy Duty Double Girder EOT Cranes',
    category: 'eot-cranes',
    categoryLabel: 'Electric Overhead Cranes & Hoists',
    shortDescription: 'Class IV / M8 Mill Duty overhead cranes up to 150 Ton capacity engineered for molten metal handling and heavy slab yards.',
    fullDescription: 'MTCE Double Girder EOT Cranes are the backbone of high-intensity metal plants. Featuring box girder construction with internal diaphragm stiffeners, hardened forged alloy steel wheels, heavy open-winch crab hoists, dual fail-safe thruster brakes, and heat insulation shields for molten steel ladles.',
    image: '/src/assets/images/eot_crane_heavy_duty_1790962047356.jpg',
    capacity: '10 Ton to 150 Ton | Spans up to 36 Meters',
    standards: ['IS 3177:1999', 'IS 4137 (Mill Duty)', 'FEM 1.001'],
    keyFeatures: [
      'Heavy-duty box type girder fabricated with 100% full penetration welds',
      'Rotary limit switches and gravity emergency backup limits',
      'Variable Frequency Drive (VFD) for micro-inching speeds on all motions',
      'Molten metal heat radiation thermal shield and flame-proof cabling'
    ],
    specifications: [
      { label: 'Safe Working Load (SWL)', value: '10T, 25T, 50T, 80T, 100T, 125T, 150T' },
      { label: 'Crane Span', value: '10.0m to 36.0m' },
      { label: 'Duty Classification', value: 'Class IV / Class M7-M8 (Severe Mill Duty)' },
      { label: 'Main Hoisting Speed', value: '2.5 to 8.0 m/min (Micro-speed enabled)' },
      { label: 'Cross Travel Speed', value: '15 to 30 m/min' },
      { label: 'Long Travel Speed', value: '25 to 60 m/min' },
    ],
    applications: ['Ladle Handling in SMS', 'TMT Bar Rolling Mills', 'Foundry Pouring Bays', 'Heavy Fabrications']
  },
  {
    id: 'goliath-gantry-cranes',
    name: 'Goliath & Semi-Goliath Cranes',
    category: 'eot-cranes',
    categoryLabel: 'Electric Overhead Cranes & Hoists',
    shortDescription: 'Outdoor rail-mounted gantry and portal cranes with cantilever overhangs, storm locks, and all-weather electrical enclosures.',
    fullDescription: 'Custom-designed for outdoor storage yards, scrap yards, rail loading terminals, and precast concrete plants. Available in single leg (Semi-Goliath) or dual leg full-portal configurations with motorized rail clamps and storm anchor systems.',
    image: '/src/assets/images/eot_crane_heavy_duty_1790962047356.jpg',
    capacity: '5 Ton to 80 Ton | Span up to 40 Meters',
    standards: ['IS 3177', 'IS 807', 'BS 466'],
    keyFeatures: [
      'Tubular and box A-frame leg geometry with high lateral stiffness',
      'Hydraulic rail clamps and mechanical storm anchors for wind resistance',
      'Cantilever extensions on one or both sides for truck bed loading',
      'IP65 operator cabin with 360-degree panoramic glass view'
    ],
    specifications: [
      { label: 'Lifting Capacity', value: '5T to 80T SWL' },
      { label: 'Rail Track Span', value: '12m to 40m + Cantilevers up to 8m' },
      { label: 'Lift Height', value: '6m to 24m above rail level' },
      { label: 'Travel Mechanism', value: 'Multi-wheel bogie drive with VFD synchronization' },
      { label: 'Weather Protection', value: 'Zinc chromate primer + Polyurethane high-durability coat' },
    ],
    applications: ['Steel Stockyards', 'Billet Yard Stacking', 'Scrap Storage Terminals', 'Inland Container Depots']
  },
  {
    id: 'magnet-grab-cranes',
    name: 'Electromagnetic & Grab Bucket Cranes',
    category: 'eot-cranes',
    categoryLabel: 'Electric Overhead Cranes & Hoists',
    shortDescription: 'Specialized scrap and bulk material cranes equipped with deep-field lifting magnets and electro-hydraulic grab buckets.',
    fullDescription: 'Engineered for high-cycle continuous unloading of pig iron, scrap, DRI, and bulk aggregates. Features backup battery discharge systems to prevent load drops during power fluctuations, and motorized cable reeling drums.',
    image: '/src/assets/images/eot_crane_heavy_duty_1790962047356.jpg',
    capacity: '10 Ton to 35 Ton | 24/7 Scrap Handling',
    standards: ['IS 3177', 'IS 4137', 'DIN 15020'],
    keyFeatures: [
      'Dual hook configuration or spreader beam with circular/rectangular magnets',
      'Automatic 20-minute battery backup system with audio-visual alarm',
      'Four-rope mechanical or electro-hydraulic clamshell grab bucket',
      'Anti-sway control logic programmed in main crane PLC'
    ],
    specifications: [
      { label: 'Magnet Capacity', value: 'Up to 3,500 kg cold scrap per lift' },
      { label: 'Grab Volume', value: '1.5 m³ to 6.0 m³ bucket capacity' },
      { label: 'Duty Cycle', value: 'Class IV / Class 4 Continuous (ED 60%)' },
      { label: 'Cable Reeling', value: 'Torque motor driven tension spool' },
    ],
    applications: ['Induction Furnace Charging', 'Scrap Segregation', 'Iron Ore & DRI Handling']
  },

  // 3. Conveyor & Processing Systems
  {
    id: 'sponge-iron-conveyors',
    name: 'Sponge Iron (DRI) Handling Conveyors',
    category: 'conveyor-systems',
    categoryLabel: 'Conveyor & Processing Systems',
    shortDescription: 'Heat and abrasion-resistant troughed belt conveyors, enclosed screw conveyors, and high-temperature bucket elevators.',
    fullDescription: 'Custom-built bulk conveying systems engineered specifically for direct reduced iron (DRI), sinter, coal, and flux handling. Includes dust-tight transfer chutes, impact bed cradles, ceramic-lagged drive pulleys, and zero-speed motion switches.',
    image: '/src/assets/images/heavy_fabrication_bay_1790962142549.jpg',
    capacity: '50 TPH to 1,200 TPH | Belt Widths 650mm to 1600mm',
    standards: ['IS 11592', 'IS 4776', 'CEMA Standards'],
    keyFeatures: [
      'HR (Heat Resistant) Grade belt ratings up to 180°C continuous',
      'Ceramic tile lined transfer chutes to prevent material wear',
      'Gravity / hydraulic take-up units for tension stabilization',
      'Emergency pull-cord switches and belt sway monitors along the entire span'
    ],
    specifications: [
      { label: 'Handling Capacity', value: '50 to 1,200 Metric Tons/Hour' },
      { label: 'Belt Widths', value: '650, 800, 1000, 1200, 1400, 1600 mm' },
      { label: 'Conveyor Length', value: 'Modular spans up to 1.5 km' },
      { label: 'Drive Units', value: 'Shaft-mounted helical bevel gearboxes with fluid couplings' },
      { label: 'Idler Rollers', value: 'Heavy duty sealed-for-life deep groove ball bearings' },
    ],
    applications: ['DRI Plants', 'Sinter Plants', 'Thermal Power Coal Handling', 'Cement Plants']
  },
  {
    id: 'industrial-ball-mills',
    name: 'Industrial Ball Mills & Grinding Units',
    category: 'conveyor-systems',
    categoryLabel: 'Conveyor & Processing Systems',
    shortDescription: 'Heavy-duty dry and wet continuous grinding mills equipped with manganese alloy liners and precision girth gear drives.',
    fullDescription: 'Heavy structural mill shells fabricated from high-tensile steel plates with automated submerged arc welding. Used for fine grinding of quartz, coal, iron ore, and refractory minerals. Features lubricated trunnion bearings and heavy cast girth gears.',
    image: '/src/assets/images/heavy_fabrication_bay_1790962142549.jpg',
    capacity: '5 TPH to 100 TPH | Mill Diameter 1.8m to 4.2m',
    standards: ['IS 2825', 'AGMA Standards', 'ISO 9001:2015'],
    keyFeatures: [
      'Stress-relieved mill shell with precision CNC machined flange ends',
      'Cast alloy steel high-chrome or manganese bolt-on replaceable liners',
      'Girth gear & pinion drive with continuous spray lubrication unit',
      'Hydrostatic / hydrodynamic white-metal babbitt trunnion bearings'
    ],
    specifications: [
      { label: 'Shell Diameter', value: '1,800 mm to 4,200 mm' },
      { label: 'Shell Length', value: '3,000 mm to 12,000 mm' },
      { label: 'Motor Rating', value: '150 kW to 2,200 kW Slip-ring / Squirrel Cage' },
      { label: 'Discharge Type', value: 'Grate discharge / Trunnion overflow' },
      { label: 'Grinding Media', value: 'Forged high-carbon chrome alloy steel balls' },
    ],
    applications: ['Mineral Processing', 'Pellet Plants', 'Coal Pulverization', 'Refractory Manufacturing']
  },
  {
    id: 'rolling-mill-equipment',
    name: 'Rolling Mill Stands & Roller Tables',
    category: 'conveyor-systems',
    categoryLabel: 'Conveyor & Processing Systems',
    shortDescription: '2-High and 3-High roughing, intermediate, and finishing stands for TMT rebar, structural angles, and channel sections.',
    fullDescription: 'Rigid cast and fabricated housing stands built to withstand massive separating forces during high-speed rolling. Includes motorized screw-down mechanisms, universal mill spindles, high-speed motorized runout tables, and automatic cooling bed transfer racks.',
    image: '/src/assets/images/heavy_fabrication_bay_1790962142549.jpg',
    capacity: '150mm to 550mm Mill Stand Sizes',
    standards: ['IS 807', 'DIN Standards', 'Industrial Mill Duty'],
    keyFeatures: [
      'Stress-relieved cast steel chocks with four-row cylindrical roller bearings',
      'Motorized and manual precision roll gap adjustment',
      'Hardened steel bevel pinion gear reducers with forced oil lubrication',
      'Variable speed motorized roller conveyors with abrasive resistant rollers'
    ],
    specifications: [
      { label: 'Stand Sizes', value: '180, 250, 320, 400, 450, 500, 550 mm' },
      { label: 'Configuration', value: '2-High Reversible / 3-High Roughing / Housingless' },
      { label: 'Product Range', value: '8mm - 40mm TMT Bars, Wire Rod, Channels & Angles' },
      { label: 'Table Conveyor Speed', value: 'Up to 18 m/s finishing delivery' },
    ],
    applications: ['TMT Bar Mills', 'Wire Rod Mills', 'Structural Steel Rolling Plants']
  },

  // 4. Hydro-Mechanical & Heavy Fabricated Equipment
  {
    id: 'motorized-transfer-cars',
    name: 'Motorized Ladle & Scrap Transfer Cars',
    category: 'hydro-mechanical',
    categoryLabel: 'Hydro-Mechanical & Heavy Fabrication',
    shortDescription: 'Heavy-duty rail-mounted motorized transfer cars with cable reel drives or onboard diesel-hydraulic power up to 120 Ton.',
    fullDescription: 'Custom-engineered transfer cars designed for harsh steel mill environments. Equipped with thermal refractory lining, heat radiation deflectors, heavy axle assemblies with spherical roller bearings, and dual emergency braking for hot liquid metal transfer.',
    image: '/src/assets/images/steel_melting_equipment_1790962064205.jpg',
    capacity: '20 Ton to 120 Ton Payload',
    standards: ['IS 807', 'IS 3177', 'Mill Duty Standards'],
    keyFeatures: [
      'Heavy structural welded steel chassis designed for concentrated hot loads',
      'Cast steel heat-treated double flanged rail wheels',
      'Dual helical geared motors with electronic soft-start/stop drives',
      'Heat refractory top deck shield to protect motor and driveline'
    ],
    specifications: [
      { label: 'Payload Capacity', value: '20 Ton, 40 Ton, 75 Ton, 100 Ton, 120 Ton' },
      { label: 'Rail Gauge', value: '1,676 mm (Broad gauge) / Custom Mill Track' },
      { label: 'Travel Speed', value: '5 to 25 m/min with variable acceleration' },
      { label: 'Power Supply', value: 'Cable Reeling Drum (CRD) / Conductor Rail / Battery' },
      { label: 'Safety Devices', value: 'Spring buffers, rail sweeps, warning siren & beacon' },
    ],
    applications: ['SMS Ladle Transfer to CCM', 'Billet Yard Transfer', 'Scrap Bucket Logistics']
  },
  {
    id: 'steel-girder-bridges',
    name: 'Steel Plate Girder Bridges & Heavy Structures',
    category: 'hydro-mechanical',
    categoryLabel: 'Hydro-Mechanical & Heavy Fabrication',
    shortDescription: 'Welded steel plate girder bridges, industrial gantry structures, and blast furnace shell components fabricated under strict NDT.',
    fullDescription: 'High-tonnage structural fabrication complying with railway and highway bridge standards. Utilizing ultrasonic tested high-tensile plates, automatic submerged arc welding, CNC multi-head profile cutting, and blast cleaning to SA 2.5 standards.',
    image: '/src/assets/images/heavy_fabrication_bay_1790962142549.jpg',
    capacity: 'Span up to 45 Meters | Single Piece Girders up to 40T',
    standards: ['IRS (Indian Railway Standards)', 'IRC', 'IS 800', 'IS 1029'],
    keyFeatures: [
      'Automated beam welding line ensuring minimal thermal distortion',
      'Full radiographic and ultrasonic weld inspection',
      'Pre-assembly and trial erection in shop floor prior to dispatch',
      'Multi-coat epoxy and polyurethane heavy industrial paint systems'
    ],
    specifications: [
      { label: 'Span Length', value: '12.0m to 45.0m span' },
      { label: 'Plate Thickness', value: '10mm up to 80mm structural grade E250/E350' },
      { label: 'Welding Process', value: 'Automated Submerged Arc Welding (SAW) + FCAW' },
      { label: 'Surface Preparation', value: 'Shot blasting to Swedish SA 2.5 standard' },
    ],
    applications: ['Rail & Road Bridges', 'Industrial Factory Shed Gantries', 'Heavy Crane Runways']
  },
  {
    id: 'penstock-sluice-gates',
    name: 'Penstock Pipes, Sluice Gates & Vessels',
    category: 'hydro-mechanical',
    categoryLabel: 'Hydro-Mechanical & Heavy Fabrication',
    shortDescription: 'Engineered high-pressure hydro-mechanical penstock pipes, radial crest gates, and heavy pressure vessels.',
    fullDescription: 'MTCE manufactures certified hydro-mechanical components for irrigation schemes, mini-hydro power plants, and industrial water cooling circuits. Built with rigorous hydraulic pressure testing and anti-cavitation surface treatments.',
    image: '/src/assets/images/heavy_fabrication_bay_1790962142549.jpg',
    capacity: 'Pipe Diameters up to 3.5m | Gates up to 10m x 8m',
    standards: ['IS 2825', 'ASME Sec VIII', 'IS 4622'],
    keyFeatures: [
      'Heavy plate roll bending up to 45mm plate thickness',
      'Stainless steel clad sealing faces for zero-leakage sluice closure',
      'Hydraulic hoist cylinder or motorized wire rope drum gate operators',
      'Hydrostatic pressure proof testing certified by third-party inspection'
    ],
    specifications: [
      { label: 'Penstock Diameter', value: '800mm to 3,500mm' },
      { label: 'Design Head', value: 'Up to 250 meters water column' },
      { label: 'Gate Types', value: 'Radial Tainter Gates, Vertical Lift Slide Gates, Flap Gates' },
      { label: 'Operating System', value: 'Electro-hydraulic power pack with manual override' },
    ],
    applications: ['Hydroelectric Power Plants', 'Irrigation Barrages', 'Water Treatment & Canal Networks']
  }
];

export const INFRASTRUCTURE_PILLARS: InfrastructurePillar[] = [
  {
    id: 'heavy-bay',
    title: 'Heavy Fabrication Bay & High-Bay Assembly',
    summary: '45,000+ sq.ft covered workshop engineered specifically for high-tonnage structural assembly and vertical clearance.',
    capacityDetail: '60 Metric Ton tandem crane lifting capacity with 14-meter clear hook height under crane hook.',
    machinery: [
      'Double Girder Shop EOT Cranes (30T + 30T tandem lift)',
      'Heavy assembly platen tables with calibrated leveling pads',
      'Motorized roll turning rotators for cylindrical vessels up to 50T',
      'Heavy hydraulic plate bending roll (rolls up to 45mm thick plates)'
    ],
    standards: 'Built to IS 800 standards for continuous industrial manufacturing.'
  },
  {
    id: 'cnc-cutting',
    title: 'CNC Multi-Head Profile & Plate Processing',
    summary: 'Computerized thermal cutting and drilling technology for millimeter-accurate plate preparation.',
    capacityDetail: 'Multi-torch CNC plasma and oxy-fuel cutting up to 150mm thick carbon steel plates.',
    machinery: [
      'High-definition CNC Plasma cutting bed (3.5m x 14m bed size)',
      'Multi-torch Oxy-Fuel profiling system with optical tracing backup',
      'Heavy-duty plate beveling and edge preparation milling machines',
      'CNC Radial drilling machines with arm radius up to 2.5 meters'
    ],
    standards: 'Dimensional tolerances maintained to ISO 2768-m.'
  },
  {
    id: 'welding-machining',
    title: 'Submerged Arc Welding & Precision Machining',
    summary: 'Automated continuous seam welding and large-capacity horizontal boring for bearing chocks and wheel assemblies.',
    capacityDetail: 'Floor-type horizontal boring and milling machines with 160mm spindle diameter.',
    machinery: [
      'Tractor-mounted Submerged Arc Welding (SAW) column & boom systems',
      'CO2 MIG / MAG pulsed welding stations with ER70S-6 filler wires',
      'Floor type Horizontal Boring machine (Travel: X=6000mm, Y=2500mm)',
      'Heavy-duty Lathes with 1.8m swing over bed and 8m center distance'
    ],
    standards: 'Welder qualifications per ASME Section IX & AWS D1.1.'
  },
  {
    id: 'testing-lab',
    title: 'In-House NDT & Mechanical Testing Laboratory',
    summary: 'Rigorous non-destructive testing and quality assurance procedures before any equipment leaves the factory.',
    capacityDetail: '100% full-volume ultrasonic testing of critical crane girders, shafts, and welds.',
    machinery: [
      'Digital Ultrasonic Flaw Detectors (UT) with multi-frequency probes',
      'Magnetic Particle Inspection (MPI) yoke equipment for surface cracks',
      'Liquid Dye Penetrant Inspection (DPI) kits',
      'Hardness testers (Equotip / Poldi) and calibrated dial deflection gauges',
      'Third-party inspection coordination (TUV, DNV, SGS, Bureau Veritas, RITES)'
    ],
    standards: 'Level-II certified NDT inspectors in accordance with ASNT SNT-TC-1A.'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'turnkey-epc',
    title: 'Turnkey Erection & Commissioning',
    description: 'Comprehensive mechanical installation, laser shaft alignment, crane runway surveying, and dynamic no-load/full-load commissioning by our senior site engineers.',
    sla: 'Dedicated On-Site Engineering Crew',
    features: [
      'Precision laser alignment for crane rails and rolling mill drives',
      'Electrical control panel cabling and VFD parameter tuning',
      'Certified 125% overload proof testing with water weights / test loads',
      'Statutory inspection liaison with factory inspectors and safety boards'
    ],
    badge: 'EPC Support'
  },
  {
    id: 'amc-maintenance',
    title: 'Annual Maintenance Contracts (AMC)',
    description: 'Scheduled preventive maintenance programs tailored for steel plants and foundries to eliminate unplanned downtime and extend equipment operating life.',
    sla: 'Guaranteed Periodic Audit Cycles',
    features: [
      'Monthly mechanical and electrical audit of hoists, brakes, and drives',
      'Ultrasonic rail alignment checks and girder camber verification',
      'Lubrication scheduling, oil sampling, and gearbox vibration analysis',
      'Comprehensive maintenance health logs and parts replacement forecasts'
    ],
    badge: 'Zero-Downtime Focus'
  },
  {
    id: 'emergency-breakdown',
    title: 'Emergency Breakdown & Rapid Field Repair',
    description: '24/7 on-call technical team dispatched promptly to industrial plants across Chhattisgarh, Odisha, Jharkhand, Maharashtra, and Madhya Pradesh.',
    sla: '24/7 Rapid Response Dispatch',
    features: [
      'Emergency mobilization of certified welders, fitters, and electricians',
      'In-situ shaft machining, bearing replacement, and wire rope changing',
      'Emergency motor rewinding and VFD controller troubleshooting',
      'Direct factory warehouse dispatch of standard replacement spares'
    ],
    badge: '24/7 Priority'
  },
  {
    id: 'crane-modernization',
    title: 'Crane Modernization & Span Modifications',
    description: 'Upgrading legacy slip-ring cranes to modern VFD closed-loop vector drives, radio remote controls (RRC), and span extensions/curtailments.',
    sla: 'Turnkey Retrofitting',
    features: [
      'Conversion from operator cabin/pendant to multi-channel wireless radio remote',
      'Girder span modifications and load capacity up-gradation engineering',
      'Replacement of obsolete open-busbar systems with shrouded DSL busbars',
      'Anti-sway electronic logic and smart proximity collision sensors installation'
    ],
    badge: 'Modernization'
  }
];

export const CLIENT_TESTIMONIALS = [
  {
    quote: 'MTCE delivered two 80-Ton mill duty EOT cranes for our new SMS expansion within the committed 16-week window. The precision of the VFD controls and rigidity of the box girders under continuous molten metal duty have been exemplary.',
    author: 'Rajesh K. Sharma',
    role: 'Vice President (Projects)',
    company: 'Sponge & Power Steel Complex, Raipur',
    location: 'Raipur, Chhattisgarh'
  },
  {
    quote: 'Their 3-strand continuous casting machine engineering is on par with European designs but engineered specifically for Indian raw material conditions. Commissioning was completed 10 days ahead of schedule.',
    author: 'D. N. Sengupta',
    role: 'Chief Operating Officer',
    company: 'Alloy & Structural Rolling Mills',
    location: 'Rourkela Industrial Area, Odisha'
  },
  {
    quote: 'When our primary scrap crane gearbox suffered a severe breakdown, MTCE emergency repair crew arrived at our Durg plant within 3 hours. They rebuilt the gear cluster and had us running before our blast furnace backlog.',
    author: 'Manish Verma',
    role: 'General Manager (Maintenance)',
    company: 'Integrated Steel & Sponge Iron Ltd.',
    location: 'Bhilai / Durg Corridor'
  }
];
