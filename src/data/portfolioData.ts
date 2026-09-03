export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'estudio-55' | 'automotive' | 'roblox';
  categoryLabel: string;
  clientOrContext: string;
  year: string;
  heroImage: string;
  gallery: string[];
  videoUrl?: string; // Ruta a video .mp4 o .webm (ej: '/videos/turnaround-auto.mp4')
  tags: string[];
  tools: string[];
  description: string;
  processBreakdown: string[];
  deliverables: string[];
  featured?: boolean;
}

export interface PortfolioConfig {
  personal: {
    name: string;
    role: string;
    subrole: string;
    currentStudio: string;
    location: string;
    targetRole: string;
    headline: string;
    bioParagraphs: string[];
    email: string;
    linkedin: string;
    artstation: string;
    github?: string;
    resumePdf: string;
  };
  stats: {
    label: string;
    value: string;
  }[];
  experience: {
    period: string;
    role: string;
    company: string;
    location: string;
    description: string;
    keyAchievements: string[];
    toolsUsed: string[];
  }[];
  skillCategories: {
    title: string;
    skills: { name: string; level: string; featured?: boolean }[];
  }[];
  projects: ProjectItem[];
}

export const portfolioData: PortfolioConfig = {
  personal: {
    name: "Diseñador Industrial & 3D Artist",
    role: "Industrial Designer & 3D Render Artist",
    subrole: "Specialized in Automotive, Hard-Surface & Roblox Game Art",
    currentStudio: "Estudio 55",
    location: "Argentina (Disponible para trabajo remoto)",
    targetRole: "Render Artist - Driving Empire @ Voldex",
    headline:
      "Diseño industrial aplicado a visuales 3D de alto impacto: iluminación cinemática, proporciones automotrices y renders de marketing optimizados para gaming.",
    bioParagraphs: [
      "Con formación en Diseño Industrial y experiencia profesional en Estudio 55, combino el rigor formal del diseño de productos y superficies complejas con la estética dinámica y vibrante que exige la industria del gaming.",
      "Mi enfoque une modelado hard-surface de alta precisión, comprensión física de materiales PBR (pinturas automotrices multicapa, metales, fibra de carbono, vidrios ópticos) y técnicas de iluminación cinematográfica en Blender para producir renders comerciales y miniaturas (thumbnails) de alto CTR para títulos líderes como Driving Empire en Roblox.",
      "Trabajo con velocidad y consistencia bajo pipelines organizados, adaptando el arte a las directrices de marcas y socios de licenciamiento (automotrices y deportivas)."
    ],
    email: "tu-email@gmail.com", // Cambiar por tu correo real
    linkedin: "https://www.linkedin.com/",
    artstation: "https://www.artstation.com/",
    github: "https://github.com/",
    resumePdf: "/cv/CV-Disenador-Industrial.pdf" // Podés colocar tu CV en formato PDF en public/cv/
  },

  stats: [
    { value: "+3 Años", label: "Diseño 3D & Renderizado" },
    { value: "Estudio 55", label: "Proyectos Comerciales Reales" },
    { value: "Hard-Surface", label: "Especialidad en Vehículos & Props" },
    { value: "Roblox Ready", label: "Pipelines para Marketing & Gaming" }
  ],

  experience: [
    {
      period: "Actualidad",
      role: "Diseñador Industrial & Render Artist 3D",
      company: "Estudio 55",
      location: "Argentina",
      description:
        "Desarrollo de productos, modelado CAD / poligonal de superficies complejas, renderizado fotorealista y visualización comercial para clientes de diversas industrias.",
      keyAchievements: [
        "Dirección y ejecución de renders de catálogo y comerciales con iluminación de estudio y exteriores.",
        "Manejo de materiales complejos: pinturas metalizadas, texturas procedurales, ensamble de piezas mecánicas.",
        "Optimización de tiempos de entrega para iteraciones rápidas y aprobaciones de clientes."
      ],
      toolsUsed: ["Blender", "Photoshop", "CAD / SolidWorks / Rhino", "Premiere Pro", "Cycles / Eevee"]
    },
    {
      period: "Proyectos Seleccionados",
      role: "3D Vehicle & Game Render Artist",
      company: "Proyectos de Especialización Gaming & Automotriz",
      location: "Remoto",
      description:
        "Creación de conceptos automotrices, iluminación dramática y composición de miniaturas de marketing (thumbnails 16:9) adaptadas al ecosistema de Roblox y juegos de conducción masivos.",
      keyAchievements: [
        "Composiciones dinámicas con sensación de velocidad, cámaras en plano holandés y desenfoque de movimiento.",
        "Integración de modelos en entornos de Roblox Studio y retoque final publicitario en Photoshop.",
        "Generación de turnarounds de vehículos en video optimizados para redes y trailers."
      ],
      toolsUsed: ["Blender", "Roblox Studio", "Adobe Photoshop", "Premiere Pro"]
    }
  ],

  skillCategories: [
    {
      title: "3D Modeling & Rendering",
      skills: [
        { name: "Blender (Cycles / Eevee)", level: "Avanzado", featured: true },
        { name: "Roblox Studio", level: "Dominio de entorno & lighting", featured: true },
        { name: "Modelado Hard-Surface", level: "Avanzado", featured: true },
        { name: "Materiales PBR & Shaders Automotrices", level: "Avanzado", featured: true },
        { name: "CAD (SolidWorks / Rhino)", level: "Diseño Industrial", featured: false },
        { name: "Substance 3D Painter", level: "Texturizado", featured: false }
      ]
    },
    {
      title: "Post-Producción & Edición",
      skills: [
        { name: "Adobe Photoshop", level: "Composición & Marketing Art", featured: true },
        { name: "Adobe Premiere Pro", level: "Edición de video & Turnarounds", featured: true },
        { name: "Color Grading & FX", level: "Avanzado", featured: false },
        { name: "Diseño de Thumbnails / Miniaturas", level: "Alto CTR", featured: true }
      ]
    },
    {
      title: "Metodología & Soft Skills",
      skills: [
        { name: "Proporciones & Estética Automotriz", level: "Criterio Industrial", featured: true },
        { name: "Entrega Rápida & Iteración", level: "Fast-Paced", featured: true },
        { name: "Atención al Detalle & Feedback", level: "Colaborativo", featured: false },
        { name: "Gestión de Pipelines (Jira/Asana/Monday)", level: "Organizado", featured: false }
      ]
    }
  ],

  projects: [
    {
      id: "driving-empire-hypercar",
      title: "Driving Empire: Hypercar Racing Showcase",
      subtitle: "Render promocional y estudio de iluminación para vehículo de alta gama en Roblox",
      category: "roblox",
      categoryLabel: "Roblox & Gaming",
      clientOrContext: "Concepto para Driving Empire / Voldex",
      year: "2026",
      heroImage: "/projects/roblox-driving-empire-hero.svg",
      gallery: [
        "/projects/roblox-driving-empire-hero.svg",
        "/projects/automotive-gt-render.svg",
        "/projects/roblox-thumbnail-mockup.svg"
      ],
      tags: ["Roblox Art", "Blender Cycles", "Automotive Lighting", "Photoshop"],
      tools: ["Blender 4.x", "Roblox Studio", "Adobe Photoshop"],
      description:
        "Pieza pensada para marketing y portada in-game de Driving Empire. Se trabajó la postura del vehículo, la aerodinámica visual y un esquema de iluminación con contrastes vivos (luces de neón nocturnas vs. reflejos de carrocería en fibra de carbono) para captar inmediatamente la atención del jugador en el catálogo de Roblox.",
      processBreakdown: [
        "Importación y optimización de malla automotriz en Blender.",
        "Configuración de shaders PBR específicos: clearcoat reflectivo, textura de neumáticos y pinzas de freno.",
        "Setup de iluminación de 3 puntos enriquecido con luces puntuales de borde (rim lights).",
        "Pase a Photoshop para aberración cromática sutil, resplandores (bloom), partículas de polvo y corrección de curvas."
      ],
      deliverables: ["Render 4K en plano 3/4 frontal", "Miniatura 16:9 con tipografía de impacto", "Turnaround en video 1080p 60fps"],
      featured: true
    },
    {
      id: "roblox-marketing-thumbnail",
      title: "Driving Empire: Marketing Thumbnail (16:9)",
      subtitle: "Diseño visual de portada orientado a alto CTR para la plataforma Roblox",
      category: "roblox",
      categoryLabel: "Roblox & Gaming",
      clientOrContext: "Ecosistema Roblox / Marketing Art",
      year: "2026",
      heroImage: "/projects/roblox-thumbnail-mockup.svg",
      gallery: [
        "/projects/roblox-thumbnail-mockup.svg",
        "/projects/roblox-driving-empire-hero.svg"
      ],
      tags: ["Thumbnail", "Marketing", "Roblox Studio", "Photoshop"],
      tools: ["Adobe Photoshop", "Blender", "Roblox Studio"],
      description:
        "Desarrollo de thumbnail promocional de formato 16:9 con encuadre cinematográfico en ángulo bajo para otorgar dinamismo y escala al auto. Integración de elementos gráficos que comunican velocidad y evento de temporada sin saturar la composición.",
      processBreakdown: [
        "Estudio de las miniaturas con mejor rendimiento en el feed de juegos de carreras en Roblox.",
        "Render de base con cámara ultra-angular y motion blur focalizado en el fondo.",
        "Tratamiento de color saturado y contraste optimizado para destacar en pantallas móviles y monitores."
      ],
      deliverables: ["Thumbnail 1920x1080 optimizado para Roblox", "Variación de icono cuadrado para eventos"],
      featured: true
    },
    {
      id: "estudio55-device-packaging",
      title: "Estudio 55: Dispositivo Electrónico & Packaging",
      subtitle: "Desarrollo formal industrial, ensamble de componentes y render comercial de estudio",
      category: "estudio-55",
      categoryLabel: "Estudio 55",
      clientOrContext: "Estudio 55 — Proyecto Comercial",
      year: "2025",
      heroImage: "/projects/estudio55-product-1.svg",
      gallery: [
        "/projects/estudio55-product-1.svg",
        "/projects/estudio55-product-2.svg"
      ],
      tags: ["Diseño Industrial", "Estudio 55", "Hard-Surface", "Product Render"],
      tools: ["CAD / Blender", "KeyShot / Cycles", "Photoshop"],
      description:
        "Proyecto desarrollado en Estudio 55 enfocado en la concepción estética, ergonomía y visualización comercial de un dispositivo de consumo. Se cuidaron radios de curvatura, particiones de moldes y acabados superficiales (anodizado mate y policarbonato traslúcido).",
      processBreakdown: [
        "Definición formal y modelado técnico con control de tangencias continuas (G2).",
        "Generación de renders de catálogo con fondo sin fin e iluminación difusa de softbox.",
        "Planos de detalle para destacar acabados texturados y puertos de conexión."
      ],
      deliverables: ["Renders de alta resolución para presentación comercial", "Vistas ortogonales de catálogo"],
      featured: true
    },
    {
      id: "estudio55-enclosure-hardsurface",
      title: "Estudio 55: Enclosure Técnico Hard-Surface",
      subtitle: "Modelado de carcasa con tolerancias mecánicas y visualización en contexto de uso",
      category: "estudio-55",
      categoryLabel: "Estudio 55",
      clientOrContext: "Estudio 55 — Desarrollo de Producto",
      year: "2025",
      heroImage: "/projects/estudio55-product-2.svg",
      gallery: [
        "/projects/estudio55-product-2.svg",
        "/projects/estudio55-product-1.svg"
      ],
      tags: ["Estudio 55", "Manufactura", "Materiales PBR", "Render Técnico"],
      tools: ["Blender", "SolidWorks / CAD", "Photoshop"],
      description:
        "Carcasa técnica donde el desafío principal consistió en equilibrar requerimientos de resistencia y ventilación con una presencia visual moderna y premium.",
      processBreakdown: [
        "Modelado de nervaduras de ventilación y encastres mecánicos.",
        "Set de materiales en plástico de ingeniería con rugosidad realista y microtexturas de inyección.",
        "Renderizado en entorno de iluminación mixta (interior técnico y luz ambiental)."
      ],
      deliverables: ["Renders de ensamble explotado", "Vistas de detalle de ventilación y acabados"],
      featured: false
    },
    {
      id: "automotive-gt3-lighting",
      title: "Cinematic GT3: Estudio de Iluminación Automotriz",
      subtitle: "Exploración de reflejos de chapa, pintura perlada y tomas cinematográficas",
      category: "automotive",
      categoryLabel: "Automotive & 3D",
      clientOrContext: "Proyecto Personal / Automotive Studies",
      year: "2025",
      heroImage: "/projects/automotive-gt-render.svg",
      gallery: [
        "/projects/automotive-gt-render.svg",
        "/projects/automotive-night-track.svg"
      ],
      tags: ["Automotive", "Blender Cycles", "Lighting Study", "Car Shading"],
      tools: ["Blender Cycles", "Adobe Photoshop", "Lightroom"],
      description:
        "Estudio exhaustivo de iluminación automotriz en estudio oscuro. El objetivo fue acentuar la musculatura de los pasos de rueda y las tomas de aire mediante reflectores alargados (strip boxes) y gradientes de luz calculados.",
      processBreakdown: [
        "Alineación de cámaras con lentes de 85mm para minimizar distorsión y resaltar proporciones elegantes.",
        "Shader automotriz con flake metálico, capa de laca transparente y mapas de rugosidad en neumáticos.",
        "Postprocesado para elevar el rango dinámico y contraste de luces especulares."
      ],
      deliverables: ["Serie de 4 renders de detalle (frontal, 3/4 trasero, llanta, cockpit)", "Video loop de cámara giratoria"],
      featured: true
    },
    {
      id: "automotive-night-track",
      title: "Night Race Track: Luces de Freno & Asfalto Húmedo",
      subtitle: "Escena de pista nocturna con efectos de iluminación dinámica y atmósfera",
      category: "automotive",
      categoryLabel: "Automotive & 3D",
      clientOrContext: "Racing Art Exploration",
      year: "2025",
      heroImage: "/projects/automotive-night-track.svg",
      gallery: [
        "/projects/automotive-night-track.svg",
        "/projects/automotive-gt-render.svg"
      ],
      tags: ["Night Scene", "Atmospheric Render", "Volumetrics", "Racing"],
      tools: ["Blender Eevee / Cycles", "Photoshop", "Premiere Pro"],
      description:
        "Composición de alta velocidad en circuito nocturno. Uso de niebla volumétrica y luces de freno traseras reflejadas en asfalto húmedo para transmitir adrenalina y acción inmediata.",
      processBreakdown: [
        "Modelado y dispersión de gotas y charcos con mapas PBR en el suelo de la pista.",
        "Luces LED emisivas configuradas con caída de luz realista y destellos ópticos anamórficos.",
        "Retoque en Photoshop para destellos de lente y grano cinematográfico."
      ],
      deliverables: ["Render panorámico de acción", "Animación corta en bucle de 6 segundos"],
      featured: false
    }
  ]
};
