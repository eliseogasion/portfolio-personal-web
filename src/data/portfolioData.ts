export interface ProjectItem {
  id: string;
  specCode: string;
  title: string;
  subtitle: string;
  category: 'automotive-oem' | 'cinematic-game' | 'estudio-55' | 'simulation-product';
  categoryLabel: string;
  clientOrContext: string;
  year: string;
  heroImage: string;
  gallery: string[];
  videoUrl?: string;
  tags: string[];
  tools: string[];
  description: string;
  processBreakdown: string[];
  engineeringSpecs: { label: string; value: string }[];
  deliverables: string[];
  featured?: boolean;
}

export interface PortfolioConfig {
  personal: {
    name: string;
    role: string;
    subrole: string;
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    artstation: string;
    resumePdf: string;
    englishLevel: string;
    availability: string;
    headline: string;
    bioParagraphs: string[];
  };
  telemetryStats: {
    label: string;
    value: string;
    subtext: string;
  }[];
  experience: {
    period: string;
    role: string;
    company: string;
    location: string;
    highlight: string;
    description: string;
    keyAchievements: string[];
    toolsUsed: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    period: string;
    details: string;
  }[];
  skillCategories: {
    title: string;
    code: string;
    skills: { name: string; level: string; featured?: boolean }[];
  }[];
  projects: ProjectItem[];
}

export const portfolioData: PortfolioConfig = {
  personal: {
    name: "Eliseo Gasión",
    role: "Industrial Designer & 3D Automotive Artist",
    subrole: "Complex Class-A Surfacing & Cinematic 3D Rendering",
    location: "Córdoba, Argentina (Available Worldwide / Remote)",
    phone: "(+54) 351 522-1863",
    email: "eliseogasion@gmail.com",
    linkedin: "https://www.linkedin.com/in/eliseo-gasion",
    artstation: "https://www.artstation.com/",
    resumePdf: "/cv/CV-Eliseo-Gasion.pdf",
    englishLevel: "B2 Upper-Intermediate / Fluent Technical & Conversational English",
    availability: "Available for Remote Creative & 3D Artist Roles",
    headline:
      "Bridging heavy industrial precision with artistic vision: 5+ years shaping Class-A automotive surfaces (Volkswagen Amarok 2024, Renault H1312) combined with a deep passion for cinematic lighting, game aesthetics, and high-impact 3D rendering.",
    bioParagraphs: [
      "I am an Industrial Designer graduated from the National University of Córdoba (FAUD UNC) with an Electronic & Telecommunications technician background. Over the past 5+ years, I have engineered complex Class-A and G2 surfaces in CATIA V5 for leading OEM automakers including Volkswagen (2024 Amarok headlight optical systems) and Renault (H1312 fenders, bumpers, and center consoles).",
      "While my professional foundation is rooted in rigorous engineering, I have always nurtured a passionate, dedicated creative side as a 3D artist. I master lighting, composition, shaders, and visual storytelling in Blender, Photoshop, and real-time environments to turn technical geometry into striking, emotionally charged visuals.",
      "In parallel, I founded Estudio 55—an industrial design venture where I design and manufacture solid wood furniture through CNC machining, producing commercial photorealistic renders and visual assets from concept to final market delivery."
    ]
  },

  telemetryStats: [
    { value: "+5 YEARS", label: "AUTOMOTIVE SURFACING", subtext: "Volkswagen, Renault, Valeo" },
    { value: "AMAROK '24", label: "CLASS-A HEADLIGHTS", subtext: "F2J Lighting (France) & VW" },
    { value: "CATIA + BLENDER", label: "CAD TO CINEMATIC", subtext: "Micron accuracy to art renders" },
    { value: "FOUNDER", label: "ESTUDIO 55 LAB", subtext: "CNC craft, 3D ads & venture" }
  ],

  experience: [
    {
      period: "JUN 2023 — PRESENT",
      role: "Product Engineer & Industrial Designer",
      company: "SD Ingeniería",
      location: "Córdoba, Argentina",
      highlight: "Renault H1312 Latam Program",
      description:
        "CAD design and engineering of exterior and interior automotive plastic components for Renault's H1312 platform: fenders, front/rear bumpers, lateral claddings, and center consoles. Production feasibility and assembly line analysis.",
      keyAchievements: [
        "Developed complex plastic injection parts with precise parting lines, draft angles, and structural ribs.",
        "Ensured functional fitment, gap consistency, and technical feasibility for high-volume serial production.",
        "Delivered technical 3D visualization renders for international design sign-offs with Renault headquarters."
      ],
      toolsUsed: ["CATIA V5", "SolidWorks", "KeyShot", "Blender", "Photoshop"]
    },
    {
      period: "DEC 2022 — MAY 2023",
      role: "3D Artist & Animator",
      company: "BIRCLE",
      location: "Remote",
      highlight: "Digital 3D Assets & Motion",
      description:
        "Created high-fidelity 3D assets, procedural PBR shading, and cinematic 360-degree animation loops for digital art collections and interactive real-time displays.",
      keyAchievements: [
        "Optimized polygon topology and UV unwrapping for fluid real-time rendering.",
        "Designed studio lighting rigs and atmospheric particle compositing in Blender and Premiere Pro.",
        "Rendered high-framerate video turnarounds tailored for web showcase."
      ],
      toolsUsed: ["Blender", "Photoshop", "Premiere Pro", "After Effects"]
    },
    {
      period: "OCT 2022 — NOV 2022",
      role: "Product Engineer",
      company: "VOLT MOTORS",
      location: "Córdoba, Argentina",
      highlight: "Urban Electric Vehicles",
      description:
        "Product design and integration of interior and exterior plastic assemblies for Volt's 100% electric vehicle lineup, including headlights, taillights, dashboards, and assembly jigs.",
      keyAchievements: [
        "Integrated front and rear lighting modules adhering to automotive regulatory visibility standards.",
        "Designed ergonomic dashboard components and assembly fixtures for factory floor integration."
      ],
      toolsUsed: ["SolidWorks", "KeyShot", "AutoCAD", "Industrial Surfacing"]
    },
    {
      period: "JUN 2022 — SEP 2022",
      role: "Harness Electrical Conceptor",
      company: "Renault Argentina (External via Segula)",
      location: "Córdoba, Argentina",
      highlight: "Digital Mockup & ADAS/Multimedia",
      description:
        "Maintained and updated 3D digital mockups for electrical harnesses and ADAS/multimedia architectures across ongoing serial production programs.",
      keyAchievements: [
        "Managed engineering change requests (ECR) coordinated with global automotive suppliers.",
        "Validated packaging constraints within CATIA V5 ENOVIA multi-disciplinary environments."
      ],
      toolsUsed: ["CATIA V5 ENOVIA", "Renault DMU Tools"]
    },
    {
      period: "JUN 2020 — MAY 2022",
      role: "Product Engineer & Surfacing Specialist",
      company: "SD Ingeniería",
      location: "Córdoba, Argentina",
      highlight: "Volkswagen Amarok 2024 Headlights",
      description:
        "Core member of the multinational engineering team (Argentina, Brazil, Italy) responsible for the complete headlight development for the Volkswagen Amarok 2024. Modeled complex optical surfaces in CATIA V5 and executed 3D scan reverse engineering for F2J Lighting (France).",
      keyAchievements: [
        "Modeled G2 continuous Class-A reflective and optical surfaces using CATIA V5 Generative Shape Design.",
        "Reverse-engineered laser 3D scan point clouds for F2J Lighting (France) and the 'Zoov' electric bicycle project.",
        "Prepared high-end presentation renders in KeyShot for automotive styling approvals."
      ],
      toolsUsed: ["CATIA V5 (GSD)", "3D Laser Scanning / Reverse Engineering", "SolidWorks", "KeyShot"]
    }
  ],

  education: [
    {
      degree: "Bachelor of Industrial Design",
      institution: "National University of Córdoba (FAUD UNC)",
      period: "2017 — 2023",
      details:
        "Graduation Thesis: 'Development of an immersive flight training simulator for initial phase pilot instruction'. Cockpit layout, ergonomic throttle/yoke mechanisms, and structural engineering."
    },
    {
      degree: "Electronics & Telecommunications Technician",
      institution: "Instituto Técnico Salesiano Villada",
      period: "2010 — 2016 (GPA 8.05 / 10)",
      details:
        "C++ programming, power and analog electronics, industrial PLC automation, and communication protocols (Modbus, RS485)."
    }
  ],

  skillCategories: [
    {
      title: "CAD & Automotive Surfacing",
      code: "SURFACING_CAD",
      skills: [
        { name: "CATIA V5 (GSD & Part Design)", level: "Class-A OEM Surfacing", featured: true },
        { name: "SolidWorks", level: "Parametric Modeling", featured: true },
        { name: "3D Scanning & Reverse Engineering", level: "Scan-to-CAD", featured: false }
      ]
    },
    {
      title: "Rendering & Post-Production",
      code: "RENDERING_ART",
      skills: [
        { name: "Blender (Cycles & Eevee)", level: "Lighting & PBR Shading", featured: true },
        { name: "KeyShot", level: "Studio Vehicle Renders", featured: true },
        { name: "Adobe Photoshop & Premiere", level: "Retouching & Video", featured: true }
      ]
    },
    {
      title: "Real-time & Fabrication",
      code: "ENGINE_FABRICATION",
      skills: [
        { name: "Roblox Studio", level: "Self-taught • Personal Projects", featured: true },
        { name: "CNC Machining (CAM / G-Code)", level: "Digital Fabrication", featured: false },
        { name: "Technical English", level: "B2 Upper-Intermediate", featured: true }
      ]
    }
  ],

  projects: [
    {
      id: "vw-amarok-2024-headlights",
      specCode: "VW-AMK-2024-OPTICS",
      title: "Volkswagen Amarok 2024: Headlight Optical Systems",
      subtitle: "Complex Class-A optical surfacing developed with an international team (Arg, Bra, Ita) for F2J Lighting France & Valeo",
      category: "automotive-oem",
      categoryLabel: "Automotive OEM",
      clientOrContext: "Volkswagen LatAm / F2J Lighting (France)",
      year: "2020 — 2022",
      heroImage: "/projects/vw-amarok-headlights.svg",
      gallery: [
        "/projects/vw-amarok-headlights.svg",
        "/projects/renault-h1312-panels.svg",
        "/projects/driving-empire-hypercar.svg"
      ],
      tags: ["Volkswagen", "CATIA V5", "Class-A Surfacing", "Headlight Optics", "F2J Lighting France"],
      tools: ["CATIA V5 (GSD)", "3D Laser Scan", "KeyShot", "Adobe Photoshop"],
      description:
        "Played a core role in the international engineering team responsible for the optical surface modeling of the 2024 Volkswagen Amarok headlights. The challenge required crafting G2/G3 continuous mathematical surfaces, integrating micro-LED projectors, and complying with stringent photometric standards for F2J Lighting (France) and Volkswagen OEM guidelines.",
      processBreakdown: [
        "Ingested clay styling scans and reverse-engineered raw 3D point clouds.",
        "Built mathematical Class-A curvature-continuous surfaces in CATIA V5 with tight reflection lines.",
        "Coordinated with optics engineers across Argentina, Brazil, and Italy to guarantee beam focal accuracy and molding feasibility.",
        "Generated photorealistic ray-traced validation renders in KeyShot for executive styling reviews."
      ],
      engineeringSpecs: [
        { label: "Client", value: "Volkswagen / F2J Lighting France" },
        { label: "Primary Software", value: "CATIA V5 (Generative Shape Design)" },
        { label: "Surface Continuity", value: "Class-A (G2/G3 Curvature)" },
        { label: "Team Setup", value: "Multinational (Arg, Bra, Ita)" }
      ],
      deliverables: ["Production-ready optical CAD surface models", "Assembly validation renders", "Technical tooling documentation"],
      featured: true
    },
    {
      id: "renault-h1312-exterior",
      specCode: "RNLT-H1312-PANELS",
      title: "Renault H1312 LatAm: Exterior Body Panels & Consoles",
      subtitle: "Production engineering of front/rear bumpers, wheel-arch fenders, body claddings, and center consoles",
      category: "automotive-oem",
      categoryLabel: "Automotive OEM",
      clientOrContext: "Renault LatAm / SD Ingeniería",
      year: "2023 — Present",
      heroImage: "/projects/renault-h1312-panels.svg",
      gallery: [
        "/projects/renault-h1312-panels.svg",
        "/projects/vw-amarok-headlights.svg"
      ],
      tags: ["Renault", "Bodywork", "Fenders & Bumpers", "Plastic Injection", "CATIA V5"],
      tools: ["CATIA V5", "SolidWorks", "KeyShot", "Photoshop"],
      description:
        "Engineered major exterior and interior plastic assemblies for Renault's new H1312 vehicle platform in Latin America. Emphasized seamless body character lines, tight flush tolerances, and manufacturing compliance for high-pressure polymer injection.",
      processBreakdown: [
        "Modeled fenders, aerodynamic splitters, and bumper assemblies from initial design sketches.",
        "Engineered the driver cockpit center console balancing ergonomics, modular storage, and snap-fit assemblies.",
        "Analyzed assembly-line sequencing and tooling draft angles to avoid sink marks and weld lines.",
        "Delivered full-vehicle digital mockup integration renders for management reviews."
      ],
      engineeringSpecs: [
        { label: "Client", value: "Renault LatAm" },
        { label: "Assemblies", value: "Fenders, Bumpers, Center Console" },
        { label: "Material Process", value: "Automotive Grade Polymer Injection" },
        { label: "Status", value: "Production Tooling Phase" }
      ],
      deliverables: ["Final tooling-ready 3D CAD files", "Assembly gap studies", "Commercial validation renders"],
      featured: true
    },
    {
      id: "apex-gt-hypercar-cinematic",
      specCode: "APX-GT-CINEMATIC",
      title: "Apex GT Hypercar: Cinematic Lighting & Game Showcase",
      subtitle: "16:9 marketing key visual, dynamic lighting rig, and high-CTR composition for racing game ecosystems",
      category: "cinematic-game",
      categoryLabel: "Cinematic & Game Art",
      clientOrContext: "Automotive Art Exploration & Game Concept",
      year: "2026",
      heroImage: "/projects/driving-empire-hypercar.svg",
      gallery: [
        "/projects/driving-empire-hypercar.svg",
        "/projects/vw-amarok-headlights.svg"
      ],
      tags: ["Game Art", "Blender Cycles", "Automotive Lighting", "16:9 Marketing", "Roblox Ecosystem"],
      tools: ["Blender 4.x (Cycles)", "Roblox Studio", "Adobe Photoshop", "Premiere Pro"],
      description:
        "An artistic showcase translating real-world automotive proportions into an electrifying, high-CTR gaming visual. Featuring aggressive 3/4 front framing, rim lighting that chisels the aerodynamic diffuser, and physically calibrated metallic clearcoat shaders engineered to stand out on mobile screens and desktop storefronts.",
      processBreakdown: [
        "Imported and retopologized high-poly vehicle mesh for optimal ray-tracing in Blender Cycles.",
        "Built PBR multi-layer shaders: deep metallic flake, realistic tire rubber scuff, and heated competition orange brake calipers.",
        "Crafted a custom studio lighting environment with overhead softboxes and precision edge strip lights.",
        "Color graded in Photoshop: lens flares, atmospheric dust particulates, and calibrated contrast for high click-through rates."
      ],
      engineeringSpecs: [
        { label: "Aspect Ratio", value: "16:9 Key Art & 4K Render" },
        { label: "Render Engine", value: "Blender Cycles + Roblox Studio" },
        { label: "Focus", value: "High-CTR Marketing Visual" },
        { label: "Pipeline", value: "Concept to Live-Ops Turnaround" }
      ],
      deliverables: ["4K Marketing Hero Render", "1920x1080 Game Thumbnail", "60fps Cinematic Turntable Loop"],
      featured: true
    },
    {
      id: "estudio55-manifiesto-craft",
      specCode: "E55-MNFST-BATCH01",
      title: "Estudio 55: Manifiesto Collection & CNC Craftsmanship",
      subtitle: "Bespoke solid wood furniture line, visible CNC joinery, and photorealistic commercial e-commerce renders",
      category: "estudio-55",
      categoryLabel: "Estudio 55 // Venture",
      clientOrContext: "Estudio 55 (Personal Design Studio & Brand)",
      year: "2024 — Present",
      heroImage: "/projects/estudio55-silla-enzo.png",
      gallery: [
        "/projects/estudio55-silla-enzo.png",
        "/projects/estudio55-mesa-saar.png",
        "/projects/estudio55-living.png",
        "/projects/estudio55-mesa-hans.png"
      ],
      videoUrl: "/videos/estudio55-silla-video.mp4",
      tags: ["Estudio 55", "Solid Timber", "CNC Machining", "Commercial Renders", "Blender Cycles"],
      tools: ["Blender Cycles", "SolidWorks / CATIA", "Aspire (CNC Toolpaths)", "KeyShot", "Photoshop"],
      description:
        "Founded Estudio 55 to merge industrial engineering with timeless artisanal furniture design. The Manifiesto Collection (Enzo Chair, Ponti Chair, Saar Table, Hans Table) showcases my end-to-end capabilities: from parametric CAD design, CNC toolpath programming in 2-inch solid Laurel timber, and workshop prototyping, to photorealistic commercial renders and marketing videos.",
      processBreakdown: [
        "Formulated rationalist design language celebrating visible joinery as authentic craft.",
        "Programmed multi-axis CNC G-Code toolpaths ensuring zero-tolerance friction fits.",
        "Calibrated PBR shaders in Blender: natural wood grain pores, polyurethane matte finishes, and authentic studio reflections.",
        "Directed marketing assets, animated turnaround video, and visual catalog for the limited numbered Batch 01."
      ],
      engineeringSpecs: [
        { label: "Studio", value: "Estudio 55 (Founder & Lead Designer)" },
        { label: "Material", value: "2-Inch Solid Laurel Timber / Matte Finish" },
        { label: "Production", value: "Precision CNC Machining + Hand Finishing" },
        { label: "Commercial Rollout", value: "Batch 01 Limited & Numbered Series" }
      ],
      deliverables: [
        "Workshop-manufactured furniture lineup",
        "E-commerce photorealistic renders",
        "Cinematic joinery promo video (MP4 60fps)",
        "Brand manual and visual identity system"
      ],
      featured: true
    },
    {
      id: "flight-simulator-thesis",
      specCode: "SIM-FLIGHT-FAUD-UNC",
      title: "Flight Simulator: Cockpit Hardware & Ergonomics",
      subtitle: "Industrial Design Degree Thesis: Ergonomic cockpit, tactile flight controls, and mechanical hardware simulation",
      category: "simulation-product",
      categoryLabel: "Simulation & Hardware",
      clientOrContext: "FAUD National University of Córdoba (Degree Thesis)",
      year: "2023",
      heroImage: "/projects/flight-simulator-cockpit.svg",
      gallery: [
        "/projects/flight-simulator-cockpit.svg",
        "/projects/driving-empire-hypercar.svg"
      ],
      tags: ["Industrial Design Thesis", "Flight Simulator", "Cockpit Ergonomics", "Hardware Simulation"],
      tools: ["SolidWorks", "Blender", "KeyShot", "Electronics & C++"],
      description:
        "Graduation thesis project for the Industrial Design degree at FAUD UNC. Designed a fully functional flight simulator cockpit for initial-phase pilot instruction, emphasizing tactile feedback, realistic control column (yoke), throttle quadrant ergonomics, and modular mechanical structure.",
      processBreakdown: [
        "Conducted anthropometric research on civil aviation training cockpits.",
        "Engineered modular mechanical mechanisms for yoke, rudder pedals, and throttle quadrant with authentic resistance.",
        "Integrated electronic sensors with simulation software for real-time response.",
        "Produced comprehensive engineering drawings and photorealistic cockpit renders."
      ],
      engineeringSpecs: [
        { label: "Institution", value: "FAUD UNC (National University of Córdoba)" },
        { label: "Thesis Scope", value: "Flight Training Simulator Hardware" },
        { label: "Specialty", value: "Ergonomics, Mechanical CAD & Simulation" }
      ],
      deliverables: ["Functional scaled prototype", "Cinematic cockpit renders", "Complete manufacturing drawings"],
      featured: true
    },
    {
      id: "volt-motors-electric-vehicle",
      specCode: "VOLT-EV-COMPONENTS",
      title: "VOLT Motors: Electric Vehicle Optics & Dashboard",
      subtitle: "Component packaging, exterior lighting, and dashboard ergonomics for urban electric vehicles",
      category: "automotive-oem",
      categoryLabel: "Automotive OEM",
      clientOrContext: "Volt Motors",
      year: "2022",
      heroImage: "/projects/volt-motors-ev.svg",
      gallery: [
        "/projects/volt-motors-ev.svg",
        "/projects/renault-h1312-panels.svg"
      ],
      tags: ["Electric Vehicles", "Volt Motors", "Cockpit Ergonomics", "Lighting Modules"],
      tools: ["SolidWorks", "KeyShot", "AutoCAD", "Photoshop"],
      description:
        "Engineered interior and exterior body assemblies for Volt Motors' 100% electric vehicle platform. Focused on lightweight plastic integration, aerodynamic front/rear lighting modules, and driver dashboard ergonomics.",
      processBreakdown: [
        "Studied driver ergonomics and instrument cluster visibility.",
        "Modeled front and rear light housings with concealed snap-fit mounting tabs.",
        "Designed assembly fixtures and inspection gauges for the production line."
      ],
      engineeringSpecs: [
        { label: "Vehicle Type", value: "100% Electric Urban Vehicle" },
        { label: "Scope", value: "Optics, Dashboard, Assembly Jigs" },
        { label: "Manufacturer", value: "Volt Motors" }
      ],
      deliverables: ["Production 3D models", "Tolerance & assembly prints", "Commercial renders"],
      featured: false
    }
  ]
};
