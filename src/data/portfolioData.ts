export interface ProjectItem {
  id: string;
  specCode: string;
  title: string;
  subtitle: string;
  category: 'automotive-oem' | 'roblox-gaming' | 'estudio-55' | 'product-sim';
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
    targetRole: string;
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
    role: "Industrial Designer & Automotive 3D Surface Artist",
    subrole: "Real-World OEM Surfacing (VW / Renault) & Cinematic Game Renders",
    location: "Córdoba, Argentina (Remote Worldwide)",
    phone: "(+54) 351 522-1863",
    email: "eliseogasion@gmail.com",
    linkedin: "https://www.linkedin.com/in/eliseo-gasion",
    artstation: "https://www.artstation.com/",
    resumePdf: "/cv/CV-Eliseo-Gasion.pdf",
    englishLevel: "Inglés Avanzado B2 (Conversacional & Técnico Fluido)",
    targetRole: "Render Artist - Driving Empire @ Voldex",
    headline:
      "+5 años diseñando superficies automotrices complejas (Volkswagen Amarok 2024, Renault H1312) aplicadas a renders 3D de alto impacto visual para el ecosistema Roblox y gaming.",
    bioParagraphs: [
      "Soy Diseñador Industrial egresado de la Universidad Nacional de Córdoba (FAUD UNC) y Técnico Electrónico. Durante los últimos 5 años he trabajado en la industria automotriz internacional modelando superficies complejas Clase A y G2 en CATIA V5 para clientes como Volkswagen (faros Amarok 2024), Renault (fenders, paragolpes y consolas H1312) y F2J Lighting (Francia).",
      "Esa comprensión matemática y formal de los volúmenes, la aerodinámica y los materiales reales (laca bicapa, policarbonato óptico, texturas de inyección y fibra de carbono) es mi mayor diferencial a la hora de componer e iluminar vehículos en Blender y Photoshop.",
      "Mi objetivo es aportar esta experiencia al equipo de Driving Empire en Voldex: creando renders comerciales, miniaturas de marketing (thumbnails 16:9) y assets de vehículos que combinan el atractivo de la cultura automotriz con la velocidad y consistencia que exige el mercado de Roblox."
    ]
  },

  telemetryStats: [
    { value: "+5 AÑOS", label: "EXPERIENCIA AUTOMOTRIZ", subtext: "Volkswagen, Renault, Valeo" },
    { value: "AMAROK '24", label: "SUPERFICIES ÓPTICAS", subtext: "Faros con F2J Lighting Francia" },
    { value: "CATIA + BLENDER", label: "PIPELINE COMPLETO", subtext: "CAD de precisión a Cycles & Studio" },
    { value: "B2 ENGLISH", label: "EQUIPOS GLOBALES", subtext: "Trabajo remoto con Arg, Bra, Ita" }
  ],

  experience: [
    {
      period: "JUN 2023 — ACTUALIDAD",
      role: "Ingeniero de Producto y Diseñador",
      company: "SD Ingeniería",
      location: "Córdoba, Argentina",
      highlight: "Proyecto Renault H1312 Latam",
      description:
        "Diseño CAD e ingeniería de componentes plásticos exteriores e interiores para el proyecto H1312 de Renault: fenders, paragolpes, paneles laterales y consolas centrales. Análisis de viabilidad productiva y tolerancias de montaje.",
      keyAchievements: [
        "Desarrollo de partes plásticas complejas con control de líneas de partición y ángulos de desmolde.",
        "Aseguramiento de viabilidad técnica y factibilidad de ensamble en línea de producción serie.",
        "Visualización y renders técnicos para validación formal con la casa matriz de Renault."
      ],
      toolsUsed: ["CATIA V5", "SolidWorks", "KeyShot", "Blender", "Photoshop"]
    },
    {
      period: "DIC 2022 — MAY 2023",
      role: "Diseñador 3D & Animador",
      company: "BIRCLE",
      location: "Remoto",
      highlight: "Assets 3D & Animación Digital",
      description:
        "Modelado de assets 3D de alta fidelidad, texturizado procedimental y animación de secuencias en bucle para colecciones digitales y entornos web interactivos.",
      keyAchievements: [
        "Optimización de topología y mallas poligonales para rendimiento en tiempo real.",
        "Creación de shaders dinámicos e iluminación de estudio cinematográfica.",
        "Renderizado y compresión de video optimizados para plataformas web."
      ],
      toolsUsed: ["Blender", "Photoshop", "Premiere Pro", "After Effects"]
    },
    {
      period: "OCT 2022 — NOV 2022",
      role: "Ingeniero de Producto",
      company: "VOLT MOTORS",
      location: "Córdoba, Argentina",
      highlight: "Vehículos Eléctricos Nacionales",
      description:
        "Desarrollo de diseño e integración de nuevas partes plásticas exteriores e interiores para la línea de vehículos eléctricos Volt (ópticas, tableros, paneles interiores y dispositivos de montaje).",
      keyAchievements: [
        "Integración de grupos ópticos frontales y traseros cumpliendo normativas de visibilidad.",
        "Diseño ergonómico de consolas y tableros para vehículos eléctricos urbanos."
      ],
      toolsUsed: ["SolidWorks", "KeyShot", "AutoCAD", "CAD Surfacing"]
    },
    {
      period: "JUN 2022 — SEP 2022",
      role: "Harness Electrical Conceptor",
      company: "Renault Argentina (Externo Segula)",
      location: "Córdoba, Argentina",
      highlight: "Maqueta Numérica & ADAS / Multimedia",
      description:
        "Mantenimiento y actualización de maqueta numérica de cableado eléctrico y sistemas ADAS/Multimedia para proyectos de producción en serie de Renault.",
      keyAchievements: [
        "Gestión de cambios de ingeniería según análisis de factibilidad con proveedores internacionales.",
        "Integración en entorno colaborativo 3D multinacional."
      ],
      toolsUsed: ["CATIA V5 ENOVIA", "Maqueta Numérica Renault"]
    },
    {
      period: "JUN 2020 — MAY 2022",
      role: "Ingeniero de Producto & Modelador de Superficies",
      company: "SD Ingeniería",
      location: "Córdoba, Argentina",
      highlight: "Faros Volkswagen Amarok 2024 Latam",
      description:
        "Integrante del equipo internacional (Argentina, Brasil, Italia) a cargo del diseño completo de los faros para la Volkswagen Amarok 2024 Latam. Desarrollo de superficies ópticas complejas e ingeniería inversa para F2J Lighting (Francia).",
      keyAchievements: [
        "Modelado de superficies complejas Clase A y G2 en CATIA V5 (Generative Shape Design).",
        "Implantación de superficies reflectivas y ópticas con estricto control de dispersión lumínica.",
        "Ingeniería inversa y digitalización a partir de nubes de puntos de Scan 3D para F2J Lighting y bici eléctrica 'Zoov'."
      ],
      toolsUsed: ["CATIA V5 GSD", "Scan 3D / Ingeniería Inversa", "SolidWorks", "KeyShot"]
    }
  ],

  education: [
    {
      degree: "Diseñador Industrial",
      institution: "Universidad Nacional de Córdoba (FAUD UNC)",
      period: "2017 — 2023",
      details:
        "Tesis de grado: 'Desarrollo de un simulador de vuelo enfocado a la fase inicial de aprendizaje'. Diseño de cabina, ergonomía de controles y estructura electromecánica."
    },
    {
      degree: "Técnico Electrónico y en Telecomunicaciones",
      institution: "Instituto Técnico Salesiano Villada",
      period: "2010 — 2016 (Promedio 8.05)",
      details:
        "Programación en C++, electrónica analógica y de potencia, automatización industrial con PLC y protocolos de comunicación de datos (Modbus, RS485)."
    }
  ],

  skillCategories: [
    {
      title: "Modelado 3D & Superficies",
      code: "01 // 3D_SURFACING",
      skills: [
        { name: "CATIA V5 (GSD & Superficies Complejas)", level: "Avanzado OEM", featured: true },
        { name: "Blender (Cycles, Eevee & Geometry)", level: "Avanzado", featured: true },
        { name: "SolidWorks (Surface & Weldments)", level: "Avanzado", featured: true },
        { name: "Roblox Studio (Lighting & Assets)", level: "Game Ready", featured: true },
        { name: "KeyShot (Renderizado de Estudio)", level: "Avanzado", featured: false },
        { name: "Ingeniería Inversa & Scan 3D", level: "Profesional", featured: false }
      ]
    },
    {
      title: "Composición & Postproducción",
      code: "02 // VISUAL_POST",
      skills: [
        { name: "Adobe Photoshop (Marketing & Retoque)", level: "Avanzado", featured: true },
        { name: "Adobe Premiere Pro (Turnarounds & Edición)", level: "Profesional", featured: true },
        { name: "Diseño de Thumbnails Roblox (Alto CTR)", level: "Especialidad", featured: true },
        { name: "Shaders PBR & Pintura Automotriz Multicapa", level: "Avanzado", featured: true },
        { name: "Iluminación Cinemática de Vehículos", level: "Avanzado", featured: false }
      ]
    },
    {
      title: "Criterio Industrial & Idiomas",
      code: "03 // METHODOLOGY",
      skills: [
        { name: "Inglés Técnico & Conversacional B2", level: "Fluido", featured: true },
        { name: "Proporciones & Aerodinámica Vehicular", level: "Diseño Industrial", featured: true },
        { name: "Entrega Rápida bajo Pipelines Ágiles", level: "Fast-Paced", featured: true },
        { name: "Colaboración Internacional (Arg / Bra / Ita / Fr)", level: "Senior", featured: false }
      ]
    }
  ],

  projects: [
    {
      id: "estudio55-coleccion-manifiesto",
      specCode: "E55-MNFST-BATCH01",
      title: "Estudio 55: Colección Manifiesto & Mecanizado CNC",
      subtitle: "Diseño de mobiliario de autor, encastres vistos al descubierto y renders comerciales fotorrealistas",
      category: "estudio-55",
      categoryLabel: "Estudio 55 / Venture",
      clientOrContext: "Estudio 55 (Emprendimiento Propio)",
      year: "2024 — Actualidad",
      heroImage: "/projects/estudio55-silla-enzo.png",
      gallery: [
        "/projects/estudio55-silla-enzo.png",
        "/projects/estudio55-mesa-saar.png",
        "/projects/estudio55-living.png",
        "/projects/estudio55-mesa-hans.png"
      ],
      videoUrl: "/videos/estudio55-silla-video.mp4",
      tags: ["Estudio 55", "Madera Maciza", "Mecanizado CNC", "Renders Comerciales", "Blender Cycles"],
      tools: ["Blender Cycles", "SolidWorks / CATIA", "Aspire (CNC G-Code)", "KeyShot", "Photoshop"],
      description:
        "Fundación y desarrollo integral de Estudio 55. Creación de la Colección Manifiesto (Silla Enzo, Silla Ponti, Mesa Saar y Mesa Hans). El proyecto sintetiza mi perfil multidisciplinar: desde la concepción formal y planos de corte CNC en Laurel macizo de 2 pulgadas, hasta la producción de renders comerciales fotorrealistas con shaders precisos de madera y laca mate para canales de venta directa.",
      processBreakdown: [
        "Concepción formal racionalista inspirada en Enzo Mari y Gio Ponti, con foco en ensambles vistos.",
        "Modelado CAD paramétrico y programación de trayectorias CNC (G-Code) para corte milimétrico en taller.",
        "Setup de iluminación y texturizado PBR en Blender: veta de madera natural, rugosidad de laca poliuretánica mate y tapizados.",
        "Generación de turnarounds cinemáticos en video y piezas gráficas para lanzamiento comercial del Batch 01."
      ],
      engineeringSpecs: [
        { label: "Proyecto", value: "Estudio 55 (Cincuenta y Cinco)" },
        { label: "Rol", value: "Fundador, Diseñador & 3D Artist" },
        { label: "Fabricación", value: "Mecanizado CNC + Laurel Macizo 2\"" },
        { label: "Lanzamiento", value: "Batch 01 Limitado y Numerado" }
      ],
      deliverables: [
        "Línea de mobiliario producida en taller",
        "Renders de catálogo fotorrealistas",
        "Video promocional de uniones cinemáticas (MP4 60fps)",
        "Estrategia de marca y manual de identidad"
      ],
      featured: true
    },
    {
      id: "vw-amarok-2024-headlights",
      specCode: "VW-AMK-2024-OPTICS",
      title: "Volkswagen Amarok 2024: Optical Surfaces & Headlights",
      subtitle: "Diseño de superficies complejas Clase A para faros en equipo internacional (Arg, Bra, Ita) con F2J Lighting Francia",
      category: "automotive-oem",
      categoryLabel: "Automotive OEM",
      clientOrContext: "Volkswagen Latam / F2J Lighting (Valeo)",
      year: "2020 — 2022",
      heroImage: "/projects/vw-amarok-headlights.svg",
      gallery: [
        "/projects/vw-amarok-headlights.svg",
        "/projects/renault-h1312-panels.svg",
        "/projects/driving-empire-hypercar.svg"
      ],
      tags: ["Volkswagen", "CATIA V5", "Superficies Complejas GSD", "F2J Lighting", "OEM Automotive"],
      tools: ["CATIA V5 (Generative Shape Design)", "Scan 3D", "KeyShot", "Photoshop"],
      description:
        "Participación clave en el equipo multinacional para el desarrollo de los faros de la Volkswagen Amarok 2024. El trabajo abarcó el modelado de superficies ópticas de alta exigencia formal, asegurando tangencias continuas G2/G3, integración de módulos LED y viabilidad técnica para F2J Lighting (Francia) bajo estándares de calidad Volkswagen.",
      processBreakdown: [
        "Recepción de pliegos de estilo y nubes de puntos de escaneo 3D para ingeniería inversa.",
        "Construcción matemática de superficies complejas en CATIA V5 respetando radios mínimos y requerimientos de óptica reflectiva.",
        "Coordinación técnica con ingenieros de Brasil e Italia para validar tolerancias de fijación y desmolde.",
        "Generación de renders de visualización fotorealista en KeyShot para aprobación de directores de diseño."
      ],
      engineeringSpecs: [
        { label: "Cliente", value: "Volkswagen / F2J Lighting" },
        { label: "Software Primario", value: "CATIA V5 (GSD)" },
        { label: "Continuidad", value: "Superficies Clase A (G2/G3)" },
        { label: "Equipo", value: "Multinacional (Arg, Bra, Ita)" }
      ],
      deliverables: ["Modelos 3D de superficies ópticas para producción", "Renders de validación de ensamble", "Documentación técnica de despiece"],
      featured: true
    },
    {
      id: "renault-h1312-exterior",
      specCode: "RNLT-H1312-PANELS",
      title: "Renault H1312 Latam: Exterior Body Panels & Consoles",
      subtitle: "Ingeniería de producto y diseño CAD de fenders, paragolpes, paneles laterales y consolas centrales",
      category: "automotive-oem",
      categoryLabel: "Automotive OEM",
      clientOrContext: "Renault Latam / SD Ingeniería",
      year: "2023 — Actualidad",
      heroImage: "/projects/renault-h1312-panels.svg",
      gallery: [
        "/projects/renault-h1312-panels.svg",
        "/projects/vw-amarok-headlights.svg"
      ],
      tags: ["Renault Latam", "Bodywork", "Fenders & Bumpers", "CATIA V5", "Plastic Injection"],
      tools: ["CATIA V5", "SolidWorks", "KeyShot", "Photoshop"],
      description:
        "Desarrollo integral de componentes plásticos de carrocería e interior para el nuevo proyecto H1312 de Renault destinado al mercado latinoamericano. Enfoque riguroso en continuidad de líneas de carácter del auto, gaps estéticos y viabilidad de inyección plástica.",
      processBreakdown: [
        "Modelado de fenders, paragolpes y embellecedores exteriores a partir del concept car inicial.",
        "Diseño de la consola central interior atendiendo a ergonomía, almacenamiento y fijaciones rápidas.",
        "Estudio de factibilidad de línea de montaje y desmolde en serie.",
        "Renders de presentación de conjunto en contexto de carrocería completa."
      ],
      engineeringSpecs: [
        { label: "Cliente", value: "Renault Latam" },
        { label: "Componentes", value: "Fenders, Bumpers, Consola" },
        { label: "Proceso", value: "Inyección de polímeros automotrices" },
        { label: "Plataforma", value: "H1312 Producción en Serie" }
      ],
      deliverables: ["Archivos CAD finales para matricería", "Simulaciones de ensamble", "Renders comerciales de validación"],
      featured: true
    },
    {
      id: "driving-empire-hypercar-showcase",
      specCode: "VLDX-DRV-EMP-2026",
      title: "Driving Empire: Hypercar Racing & Marketing Showcase",
      subtitle: "Render promocional 16:9 con iluminación cinematográfica de estudio para el catálogo de Roblox",
      category: "roblox-gaming",
      categoryLabel: "Roblox & Gaming",
      clientOrContext: "Concepto para Voldex Games / Driving Empire",
      year: "2026",
      heroImage: "/projects/driving-empire-hypercar.svg",
      gallery: [
        "/projects/driving-empire-hypercar.svg",
        "/projects/vw-amarok-headlights.svg"
      ],
      tags: ["Roblox Art", "Driving Empire", "Blender Cycles", "Automotive Lighting", "Thumbnail 16:9"],
      tools: ["Blender 4.x (Cycles)", "Roblox Studio", "Adobe Photoshop", "Adobe Premiere Pro"],
      description:
        "Proyecto desarrollado específicamente como propuesta visual para Voldex Games. Aplica los principios del diseño automotriz real a la estética vibrante de Driving Empire: encuadre 3/4 frontal agresivo, luces de recorte que destacan la aerodinámica del alerón y difusor, y shaders PBR optimizados para generar impacto visual instantáneo en el feed de Roblox.",
      processBreakdown: [
        "Alineación y preparación de geometría de vehículo deportivo en Blender.",
        "Creación de shaders automotrices: pintura aperlada con flake reflectivo, neumáticos texturados y pinzas de freno en naranja competición.",
        "Setup de iluminación de 3 puntos enriquecido con tiras LED cenitales para marcar la silueta superior.",
        "Grading en Photoshop: realce de brillo especular, partículas sutiles y balance de color para pantallas móviles."
      ],
      engineeringSpecs: [
        { label: "Formato", value: "16:9 Promocional & 4K Render" },
        { label: "Motor", value: "Blender Cycles + Roblox Studio" },
        { label: "Objetivo", value: "Alto CTR en Feed de Juegos" },
        { label: "Target", value: "Driving Empire @ Voldex" }
      ],
      deliverables: ["Render de marketing 4K", "Thumbnail 1920x1080 adaptado a Roblox", "Loop animado de cámara 60fps"],
      featured: true
    },
    {
      id: "volt-motors-electric-vehicle",
      specCode: "VOLT-EV-COMPONENTS",
      title: "VOLT Motors: Electric Vehicle Optics & Ergonomics",
      subtitle: "Integración de componentes plásticos, ópticas y paneles de instrumentos para movilidad eléctrica urbana",
      category: "automotive-oem",
      categoryLabel: "Automotive OEM",
      clientOrContext: "Volt Motors Argentina",
      year: "2022",
      heroImage: "/projects/volt-motors-ev.svg",
      gallery: [
        "/projects/volt-motors-ev.svg",
        "/projects/renault-h1312-panels.svg"
      ],
      tags: ["Electric Vehicles", "Volt Motors", "Cockpit Ergonomics", "Plastics Integration"],
      tools: ["SolidWorks", "KeyShot", "AutoCAD", "Photoshop"],
      description:
        "Desarrollo e integración de piezas de carrocería e interior para la gama de vehículos 100% eléctricos Volt Motors. Enfoque en aligeramiento de componentes, integración de grupos ópticos LED y ergonomía de habitáculo.",
      processBreakdown: [
        "Relevamiento de ergonomía de conducción y accesibilidad al tablero principal.",
        "Modelado de carcasas de faros delanteros y traseros con ensambles a presión y fijaciones ocultas.",
        "Diseño de dispositivos y calibres para la línea de montaje de la planta."
      ],
      engineeringSpecs: [
        { label: "Vehículo", value: "City Car 100% Eléctrico" },
        { label: "Áreas", value: "Ópticas, Tablero, Dispositivos" },
        { label: "Fabricante", value: "Volt Motors" }
      ],
      deliverables: ["Modelos 3D de producción", "Planos de montaje y tolerancias", "Renders comerciales"],
      featured: false
    },
    {
      id: "flight-simulator-thesis",
      specCode: "SIM-FLIGHT-FAUD-UNC",
      title: "Flight Simulator: Cockpit Hardware & Ergonomics",
      subtitle: "Tesis de Grado en Diseño Industrial: Desarrollo de simulador de vuelo para fase inicial de entrenamiento",
      category: "product-sim",
      categoryLabel: "Simulación & Especiales",
      clientOrContext: "FAUD Universidad Nacional de Córdoba",
      year: "2023",
      heroImage: "/projects/flight-simulator-cockpit.svg",
      gallery: [
        "/projects/flight-simulator-cockpit.svg",
        "/projects/driving-empire-hypercar.svg"
      ],
      tags: ["Tesis de Grado", "Simulador de Vuelo", "Cockpit Design", "Ergonomía", "Hardware"],
      tools: ["SolidWorks", "Blender", "KeyShot", "C++ / Electrónica"],
      description:
        "Tesis de grado para la titulación como Diseñador Industrial en la Universidad Nacional de Córdoba. Diseño integral de un simulador de vuelo enfocado en la instrucción aeronáutica inicial: cabina inmersiva, palancas y cuadrante de potencia ergonómicos, y estructura metálica modular.",
      processBreakdown: [
        "Estudio antropométrico y ergonómico de cabinas de aviones de entrenamiento.",
        "Modelado de controles mecánicos (yoke, pedales y throttle) con respuesta táctil realista.",
        "Integración de sensores electrónicos e interfaz física con software de simulación.",
        "Construcción y renderizado fotorealista de la cabina completa."
      ],
      engineeringSpecs: [
        { label: "Institución", value: "FAUD UNC (Universidad Nacional de Córdoba)" },
        { label: "Proyecto", value: "Tesis de Grado Diseñador Industrial" },
        { label: "Especialidad", value: "Simulación & Hardware Inmersivo" }
      ],
      deliverables: ["Prototipo funcional a escala", "Renders cinemáticos de cabina", "Planos constructivos completos"],
      featured: true
    },
    {
      id: "bircle-3d-digital-assets",
      specCode: "BRCL-3D-ASSETS-MOTION",
      title: "BIRCLE: 3D Asset Creation & Cinematic Motion",
      subtitle: "Diseño y animación de assets 3D coleccionables para entornos virtuales",
      category: "product-sim",
      categoryLabel: "Simulación & Especiales",
      clientOrContext: "BIRCLE 3D Studio",
      year: "2022 — 2023",
      heroImage: "/projects/bircle-3d-assets.svg",
      gallery: [
        "/projects/bircle-3d-assets.svg",
        "/projects/driving-empire-hypercar.svg"
      ],
      tags: ["Digital Assets", "Blender", "Motion Graphics", "3D Animation", "Real-Time"],
      tools: ["Blender 3D", "Adobe Photoshop", "Premiere Pro", "After Effects"],
      description:
        "Creación de assets tridimensionales estilizados y realistas, con énfasis en iluminación dinámica, shaders procedurales y bucles de animación fluidos para plataformas digitales.",
      processBreakdown: [
        "Modelado y texturizado de piezas complejas con optimización de recuento poligonal.",
        "Animación de cámaras cinemáticas con giros orbitales de 360 grados.",
        "Postproducción y etalonaje en Premiere Pro para exhibición en alta fidelidad."
      ],
      engineeringSpecs: [
        { label: "Estudio", value: "BIRCLE 3D" },
        { label: "Técnica", value: "Animation Loops & Procedural Shaders" },
        { label: "Software", value: "Blender + Adobe Suite" }
      ],
      deliverables: ["Assets 3D optimizados", "Animaciones en video MP4 60fps", "Renders de estudio en alta resolución"],
      featured: false
    }
  ]
};
