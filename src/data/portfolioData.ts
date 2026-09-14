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
  disclaimer?: string;
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
    estudio55Instagram: string;
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
    role: "Industrial Designer & Product Engineer",
    subrole: "Product Engineering & High-Fidelity 3D Visualization",
    location: "Córdoba, Argentina (Available Worldwide / Remote)",
    phone: "(+54) 351 522-1863",
    email: "eliseogasion@gmail.com",
    linkedin: "https://www.linkedin.com/in/eliseo-gasion",
    estudio55Instagram: "https://www.instagram.com/estudio.55_/",
    resumePdf: "/cv/CV-Eliseo-Gasion-Render-Artist.pdf",
    englishLevel: "B2 Upper-Intermediate / Fluent Technical & Conversational English",
    availability: "Available for Remote Product Design & Visualization Roles",
    headline:
      "Industrial Designer specialized in product engineering and high-fidelity 3D visualization. Backed by +5 years developing Class-A automotive components for leading global automakers—including Volkswagen, Stellantis, Renault, and Toyota—bridging rigorous CAD feasibility with aesthetic clarity and realistic visual communication.",
    bioParagraphs: [
      "I am an Industrial Designer graduated from the National University of Córdoba (FAUD UNC) with an Electronic & Telecommunications technician background. At Teknis, my core focus has been product industrialization: receiving styling Class-A surfaces from design teams and engineering complete production-ready plastic parts (structural ribbing, bosses, snap-fits, mold parting lines, and draft angles) for high-pressure polymer injection across serial vehicle programs for Volkswagen, Stellantis, Renault, and Toyota.",
      "My profile bridges two essential disciplines: the analytical rigor of automotive product engineering (injection tooling feasibility, assembly packaging, DFM) and the aesthetic power of high-fidelity 3D visualization. I leverage Blender and digital post-production to communicate mechanical and automotive design with clarity and realism.",
      "In parallel, I run Estudio 55—an independent furniture and product design studio where I explore author pieces, physical prototyping, and direct commercial visualization."
    ]
  },

  telemetryStats: [
    { value: "+5 YEARS", label: "AUTOMOTIVE DFM & PLASTICS", subtext: "Class-A to Injection Tooling" },
    { value: "GLOBAL OEMS", label: "VW • STELLANTIS • TOYOTA", subtext: "Serial Production Programs" },
    { value: "CATIA + BLENDER", label: "CAD TO CINEMATIC", subtext: "Micron accuracy to art renders" },
    { value: "FOUNDER", label: "ESTUDIO 55 LAB", subtext: "Author furniture & venture" }
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
      highlight: "State-Funded Electric Vehicle (Program Halted)",
      description:
        "Product engineering in the engineering department of Volt Motors, a Cordoba-based startup developing a state-funded electric urban vehicle. Owned lighting components end-to-end: housing design, manufacturing tooling, and on-vehicle assembly integration, working directly with mold-makers on fiberglass-lamination tooling. The program was frozen after public funding cuts and never reached production.",
      keyAchievements: [
        "Designed headlight and taillight housings with molds, fixtures, and assembly tooling for fiberglass-laminated construction.",
        "Surfaced complex geometries and developed tooling in CATIA V5; issued complete technical drawing packages for manufacturing.",
        "Integrated lighting assemblies from part design through fabrication to final on-vehicle mounting."
      ],
      toolsUsed: ["CATIA V5 (Surfacing & Tooling)", "Fiberglass Mold Tooling", "Technical Drawings", "Assembly Fixtures"]
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
        { name: "Adobe Photoshop & Premiere", level: "Retouching & Video", featured: true }
      ]
    },
    {
      title: "Real-time & Fabrication",
      code: "ENGINE_FABRICATION",
      skills: [
        { name: "Roblox Studio", level: "Self-taught, actively learning", featured: false },
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
      heroImage: "/projects/vw-amarok-headlights-main.jpg",
      gallery: [
        "/projects/vw-amarok-headlights-main.jpg",
        "/projects/vw-amarok-headlights-front.jpg",
        "/projects/vw-amarok-headlights-explode.jpg",
        "/projects/vw-amarok-headlights-04.jpg"
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
      id: "renault-niagara-h1312",
      specCode: "RNLT-NIAGARA-H1312",
      title: "Renault Niagara Pickup (Project H1312): Exterior Bodywork & Cockpit Console",
      subtitle: "Production DFM & Class-A plastic engineering for Renault's upcoming 2026 half-ton pickup (Santa Isabel Assembly Plant, Córdoba)",
      category: "automotive-oem",
      categoryLabel: "Automotive OEM",
      clientOrContext: "Renault LatAm / Teknis (Santa Isabel Assembly Plant)",
      year: "2023 — Present (SOP Late 2026)",
      heroImage: "/projects/renault-niagara-front-fascia.png",
      gallery: [
        "/projects/renault-niagara-front-fascia.png",
        "/projects/renault-niagara-front-grille.png",
        "/projects/renault-niagara-cpillar-cladding.png",
        "/projects/renault-niagara-cpillar-fasteners.png",
        "/projects/renault-niagara-roof-spoiler.png",
        "/projects/renault-niagara-roof-bracket.png",
        "/projects/renault-niagara-roof-interface.png",
        "/projects/renault-niagara-console-assembly.png",
        "/projects/renault-niagara-console-detail.png",
        "/projects/renault-niagara-console-carrier.png",
        "/projects/renault-niagara-console-subassembly.png"
      ],
      tags: ["Renault Niagara", "Project H1312", "CATIA V5", "Plastic Injection DFM", "Santa Isabel Plant", "Bumper Assembly", "Center Console"],
      tools: ["CATIA V5", "SolidWorks", "KeyShot", "Photoshop"],
      description:
        "Comprehensive serial production engineering of exterior body claddings and interior cockpit architecture for Renault's new half-ton Niagara pickup (Project H1312), slated for mass production at the historic Santa Isabel assembly plant in Córdoba, Argentina (late 2026). Transitioned styling Class-A surfaces into fully industrialized injection-molded components complying with strict OEM dimensional tolerances, clearance envelopes, and tooling requirements.",
      processBreakdown: [
        "Front Fascia & Grille: Industrialized the multi-piece front bumper assembly, integrating honeycomb radiator mesh, lower skid plate, sensor brackets, and the illuminated Renault diamond emblem mount.",
        "C-Pillar & Cargo Bed Interface: Engineered the exterior cabin-to-bed transition molding with embossed diamond texture and integrated brand diamond, designing internal rib grids, clip towers, and fastener clearances against the BIW sheet metal.",
        "Aerodynamic Roof Deflector: Designed the upper cabin spoiler and its high-stiffness inner mounting bracket for vibration-free serial assembly.",
        "Driver Cockpit Center Console: Developed the complete structural injection carrier featuring a deep rib matrix, cable routing channels, and modular snap-fit bezels for storage, HVAC controls, and gear selector integration."
      ],
      engineeringSpecs: [
        { label: "Vehicle Program", value: "Renault Niagara Pickup (Project H1312)" },
        { label: "Manufacturing Plant", value: "Santa Isabel (Córdoba, Argentina)" },
        { label: "Production Launch", value: "Late 2026 (Serial SOP)" },
        { label: "Primary Software", value: "CATIA V5 (Part Design & Assembly)" },
        { label: "Materials", value: "Automotive Injection Polymers (PP+EPDM, ABS-PC)" },
        { label: "Fastening Systems", value: "Doghouse Bosses, Snap Clips & BIW Weld Studs" }
      ],
      deliverables: [
        "Tooling-ready 3D CAD parametric models (CATIA V5)",
        "Mold parting line, draft angle & sink mark validation",
        "BIW interface clash analysis & gap/flushness compliance studies"
      ],
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
      heroImage: "/projects/ferioli-hidrogrua-hero.jpg",
      gallery: [
        "/projects/ferioli-hidrogrua-hero.jpg",
        "/projects/ferioli-hidrogrua-detail.jpg"
      ],
      videoUrl: "/videos/ferioli-hidrogrua-animation.mp4",
      tags: ["Ferioli", "SolidWorks to Blender", "Mechanical Rigging", "PBR Materials", "Cinematic Animation"],
      tools: ["SolidWorks", "Blender (Cycles)", "Adobe Premiere Pro"],
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
        "/projects/estudio55-mesa-saar.jpeg",
        "/projects/estudio55-living.jpeg",
        "/projects/estudio55-mesa-hans.png"
      ],
      videoUrl: "/videos/estudio55-silla-video.mp4",
      tags: ["Estudio 55", "Author Furniture", "Design Philosophy", "Physical Craft", "3D Visualization"],
      tools: ["Blender Cycles", "SolidWorks / CAD", "Photoshop"],
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
      id: "porsche-911-turbo-930",
      specCode: "P930-TURBO-1975",
      title: "Porsche 911 Turbo 3.0 (Type 930, 1975)",
      subtitle: "Historic automotive visualization, studio lighting architecture, and material study of the legendary 1975 930 Turbo",
      category: "cinematic-game",
      categoryLabel: "3D & Game Art",
      clientOrContext: "Speculative Concept & Candidacy Study // Driving Empire (Voldex)",
      year: "2026",
      heroImage: "/projects/porsche-930-driving-empire.jpg",
      gallery: [
        "/projects/porsche-930-driving-empire.jpg",
        "/projects/porsche-930-sunset-drift.jpg",
        "/projects/porsche-930-cyber-hangar.jpg",
        "/projects/porsche-930-turbo-hero.png",
        "/projects/porsche-930-turbo-process.png",
        "/projects/porsche-930-turbo-process-shaders.png"
      ],
      tags: ["Porsche 911 Turbo (930)", "Driving Empire Study", "Voldex Candidacy", "1975 Classic", "Blender Cycles", "Fuchs Wheels", "Whale Tail Wing"],
      tools: ["Blender (Cycles)", "Photoshop", "PBR Shaders"],
      description:
        "Speculative 3D promotional key art and vehicle asset study created specifically to demonstrate automotive game-art capabilities and pipeline alignment for Voldex's Driving Empire. Features an authentic 1975 Porsche 911 Turbo 3.0 (Type 930) rendered across typical in-game promotional scenarios: coastal highway sunset action, high-tech customization hangar, and editorial showroom presentation.",
      disclaimer:
        "Disclaimer: This is an independent, non-commercial speculative concept and portfolio demonstration piece created to showcase 3D automotive artistry, lighting, and marketing asset capabilities for application review. 'Driving Empire' and 'Voldex' names and logos are trademarks and intellectual property of Voldex LLC.",
      processBreakdown: [
        "Calibrated classic G-series wide-body proportions, flare arches, and iconic 5-leaf Fuchs modular rims.",
        "Authored stylized in-game promotional key art scenarios matching Driving Empire's lighting aesthetic and visual tone.",
        "Developed action compositions including golden hour high-speed cornering and underground tuning bay atmospheres.",
        "Balanced high-fidelity automotive DFM / CAD appreciation with real-time game art presentation standards."
      ],
      engineeringSpecs: [
        { label: "Vehicle", value: "Porsche 911 Turbo 3.0 (Type 930)" },
        { label: "Model Year", value: "1975 (First-Gen Production Turbo)" },
        { label: "Aero Feature", value: "Original Whale Tail Rear Spoiler" },
        { label: "Wheels", value: "Classic Fuchs 5-Spoke (Black / Polished Lip)" }
      ],
      deliverables: [
        "4K Master Studio Render",
        "PBR Material & Anodized Metal Shaders",
        "High-Resolution Visual Assets for Gaming & Editorial"
      ],
      featured: true
    },
    {
      id: "volt-motors-electric-vehicle",
      specCode: "VOLT-EV-COMPONENTS",
      title: "VOLT Motors: Electric Vehicle Lighting & Manufacturing Tooling",
      subtitle: "End-to-end lighting development and fiberglass tooling for a state-funded urban EV (program halted before production)",
      category: "automotive-oem",
      categoryLabel: "Automotive OEM",
      clientOrContext: "Volt Motors",
      year: "2022",
      heroImage: "/projects/volt-motors-ev-main.jpg",
      gallery: [
        "/projects/volt-motors-ev-main.jpg",
        "/projects/volt-motors-ev-mockup.jpg",
        "/projects/volt-motors-ev-side-panel.jpg"
      ],
      tags: ["Electric Vehicles", "Volt Motors", "Lighting Systems", "CATIA V5", "Fiberglass Tooling"],
      tools: ["CATIA V5 (Surfacing & Tooling)", "Fiberglass Lamination Molds", "Technical Drawings"],
      description:
        "Product engineering for Volt Motors' state-funded electric urban vehicle program in Cordoba. Owned lighting components integrally: housing design, mold and fixture development for fiberglass lamination with local mold-makers, and assembly integration — from part design to on-vehicle mounting. A purely engineering role with no visualization tasks. The program was frozen following public funding cuts and never reached serial production.",
      processBreakdown: [
        "Designed headlight and taillight housings for fiberglass-laminated construction.",
        "Developed molds, tooling, and assembly fixtures together with local mold-makers (matriceria).",
        "Surfaced complex geometries in CATIA V5 and issued complete technical drawing packages for manufacturing and assembly."
      ],
      engineeringSpecs: [
        { label: "Vehicle Program", value: "State-funded electric urban vehicle (prototype stage)" },
        { label: "Scope", value: "Lighting components, molds & assembly tooling" },
        { label: "Manufacturing", value: "Fiberglass lamination (matriceria)" },
        { label: "Program Status", value: "Halted — funding cuts, pre-production" }
      ],
      deliverables: ["Tooling and mold CAD models", "Manufacturing drawing packages", "Assembly tooling & integration support"],
      featured: false
    }
  ]
};
