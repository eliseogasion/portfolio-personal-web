export interface ProjectItem {
  id: string;
  specCode: string;
  title: string;
  subtitle: string;
  category: 'automotive-oem' | 'cinematic-game' | 'estudio-55';
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
      company: "Teknis",
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
      company: "Teknis",
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
        { name: "Roblox Studio", level: "Lighting & Real-time Assets", featured: true },
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
      heroImage: "/projects/vw-amarok-headlights.jpg",
      gallery: [
        "/projects/vw-amarok-headlights.jpg",
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
      clientOrContext: "Renault LatAm / Teknis",
      year: "2023 — Present",
      heroImage: "/projects/renault-h1312-panels.svg",
      gallery: [
        "/projects/renault-h1312-panels.svg",
        "/projects/vw-amarok-headlights.jpg"
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
      id: "ferioli-hydrocrane-animation",
      specCode: "FERIOLI-CRANE-3D",
      title: "Ferioli: Hydraulic Crane Kinematics & 3D Animation",
      subtitle: "SolidWorks CAD adaptation, model optimization, extra asset modeling, full PBR shading, and mechanical animation for national manufacturer Ferioli",
      category: "cinematic-game",
      categoryLabel: "3D Animation & CAD",
      clientOrContext: "Ferioli (Heavy Equipment Manufacturer)",
      year: "2024",
      heroImage: "/projects/ferioli-hidrogrua-hero.png",
      gallery: [
        "/projects/ferioli-hidrogrua-hero.png",
        "/projects/ferioli-hidrogrua-detail.png"
      ],
      videoUrl: "/videos/ferioli-hidrogrua-animation.mp4",
      tags: ["Ferioli", "SolidWorks to Blender", "Mechanical Rigging", "PBR Materials", "Cinematic Animation"],
      tools: ["SolidWorks", "Blender (Cycles)", "KeyShot", "Adobe Premiere Pro"],
      description:
        "Comprehensive 3D animation and mechanical visualization project for national crane manufacturer Ferioli. Received engineering SolidWorks CAD models and successfully adapted them in Blender: optimized geometry and retopology, modeled auxiliary operational assets, developed custom industrial PBR shaders (powder coating, hydraulic chrome rams, warning decals), and fully rigged the multi-stage telescopic boom, hydraulic cylinders, and stabilizers for realistic kinematic motion animation.",
      processBreakdown: [
        "Imported complex SolidWorks manufacturing assemblies into Blender and retopologized high-density CAD geometry.",
        "Modeled auxiliary hardware assets, flexible hydraulic lines, chassis mountings, and operational decals.",
        "Built custom PBR shader materials: weathered industrial coatings, reflective hydraulic chrome, and warning graphics.",
        "Engineered kinematic mechanical rigging and keyframed the multi-stage extension, rotation, and stabilizer sequences for commercial video."
      ],
      engineeringSpecs: [
        { label: "Client", value: "Ferioli (National Crane Manufacturer)" },
        { label: "CAD Origin", value: "SolidWorks Assembly" },
        { label: "3D & Animation", value: "Blender (Cycles)" },
        { label: "Deliverable", value: "High-Definition Mechanical Animation" }
      ],
      deliverables: ["Full-sequence mechanical animation (60fps)", "High-resolution technical renders", "Optimized 3D asset library"],
      featured: true
    },
    {
      id: "estudio55-manifiesto-craft",
      specCode: "E55-MNFST-BATCH01",
      title: "Estudio 55: Manifiesto Collection & Author Furniture",
      subtitle: "Personal design studio and active venture: author furniture pieces, physical craft, and commercial visualization",
      category: "estudio-55",
      categoryLabel: "Estudio 55 // Venture",
      clientOrContext: "Estudio 55 (Independent Studio & Venture)",
      year: "2024 — Present",
      heroImage: "/projects/estudio55-silla-enzo.png",
      gallery: [
        "/projects/estudio55-silla-enzo.png",
        "/projects/estudio55-mesa-saar.png",
        "/projects/estudio55-living.png",
        "/projects/estudio55-mesa-hans.png"
      ],
      videoUrl: "/videos/estudio55-silla-video.mp4",
      tags: ["Estudio 55", "Author Furniture", "Design Philosophy", "Physical Craft", "3D Visualization"],
      tools: ["Blender Cycles", "SolidWorks / CAD", "KeyShot", "Photoshop"],
      description:
        "Estudio 55 is my independent furniture design studio and ongoing entrepreneurial venture, run in parallel with my engineering career. It serves as my personal creative laboratory to express my own design philosophy: conceiving author furniture pieces (Enzo Chair, Ponti Chair, Saar Table), bridging physical craft with digital 3D visualization, and curating an authentic brand identity.",
      processBreakdown: [
        "Conceptualized author furniture collection guided by honest construction and timeless proportions.",
        "Engineered 3D models and verified mechanical joinery for workshop production.",
        "Created photorealistic commercial renders and animated joinery showcases for direct catalog presentation.",
        "Managed active brand operations: creative direction, production runs, and digital presence."
      ],
      engineeringSpecs: [
        { label: "Studio", value: "Estudio 55 (Founder & Creative Director)" },
        { label: "Venture Status", value: "Active Parallel Studio" },
        { label: "Design Scope", value: "Author Furniture & Brand Identity" },
        { label: "Key Pieces", value: "Enzo Chair, Saar Table, Hans Table" }
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
      id: "porsche-911-gt3rs-launch",
      specCode: "P911-GT3RS-STUDY",
      title: "Porsche 911 GT3 RS: License Launch & Material Study",
      subtitle: "4K marketing key visual, multi-layer PBR shader exploration, and macro optical breakdown for automotive gaming",
      category: "cinematic-game",
      categoryLabel: "3D & Game Art",
      clientOrContext: "Automotive Art & Gaming Exploration",
      year: "2026",
      heroImage: "/projects/porsche-gt3rs-hero.svg",
      gallery: [
        "/projects/porsche-gt3rs-hero.svg",
        "/projects/porsche-gt3rs-headlight.svg",
        "/projects/porsche-gt3rs-wheel-carbon.svg"
      ],
      tags: ["Porsche 911 GT3 RS", "Blender Cycles", "Automotive Shaders", "Marketing Key Art", "Matrix LED Optics"],
      tools: ["Blender (Cycles)", "Adobe Photoshop", "PBR Materials", "Roblox Studio"],
      description:
        "High-fidelity automotive render showcase and marketing launch asset designed for digital game storefronts. Explores realistic multi-layer automotive finishes (Guards Red tri-coat clearcoat, exposed carbon fiber twill, anisotropic carbon-ceramic brake rotors) combined with precise matrix LED headlight optics and cinematic studio illumination.",
      processBreakdown: [
        "Staged 16:9 dynamic low-angle composition optimized for high click-through rates across mobile and desktop gaming storefronts.",
        "Calibrated physically accurate PBR shader materials: deep metallic clearcoat, exposed gloss carbon weave, and matte aerodynamic splitters.",
        "Engineered multi-layer matrix LED headlight optical elements with realistic internal refraction and lens dispersion.",
        "Balanced studio softbox arrays with directional rim lights to sculpt the aerodynamic contours and aggressive active wing profile."
      ],
      engineeringSpecs: [
        { label: "Subject", value: "Porsche 911 GT3 RS (992)" },
        { label: "Key Art Ratio", value: "16:9 Cinematic (4K Master)" },
        { label: "Rendering Engine", value: "Blender (Cycles PBR)" },
        { label: "Optics Detail", value: "4-Point Matrix LED System" }
      ],
      deliverables: [
        "4K Hero Promotional Key Visual",
        "Macro Headlight Optics Study",
        "Wheel & Carbon Fiber Material Breakdown"
      ],
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
