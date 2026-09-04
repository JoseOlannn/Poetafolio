export type Project = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  stack: string[];
  features: string[];
  accent: "terra" | "mustard" | "sage" | "ocean";
  links: { label: string; href: string }[];
};

export const projectsData = {
  es: [
    {
      id: "dataspilot",
      name: "DATASPILOT (En desarrollo)",
      subtitle: "Data-Driven ERP & Copiloto Empresarial",
      description: "Un ERP de nueva generación que actúa como un copiloto inteligente (Data Pilot) para tu negocio. Centraliza y analiza datos en tiempo real para optimizar y automatizar la toma de decisiones en ventas, inventario, finanzas, CRM y RR. HH.",
      stack: ["NestJS", "PostgreSQL", "Docker", "Data Analytics", "System Design", "Arquitectura Modular", "RBAC"],
      features: [
        "Dashboard Analítico Avanzado",
        "Copiloto de decisiones comerciales",
        "Inventario Predictivo",
        "Ventas y Facturación",
        "Gestión Financiera en tiempo real",
        "CRM basado en datos",
        "Recursos Humanos",
        "Business Intelligence (BI)",
      ],
      accent: "terra" as const,
      links: [],
    },
    {
      id: "raices",
      name: "Acuerdo Social (En desarrollo)",
      subtitle: "Plataforma de participación comunitaria",
      description:
        "Plataforma digital de participación ciudadana que combina interacción comunitaria, geolocalización, convocatorias, gamificación y comunicación en tiempo real. Integra Inteligencia Artificial para el análisis de comentarios y contenido general de la plataforma.",
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "PostgreSQL",
        "Leaflet",
        "Inteligencia Artificial"
      ],
      features: [
        "Feed comunitario",
        "Publicaciones",
        "Geolocalización",
        "Convocatorias",
        "Notificaciones en tiempo real",
        "Gamificación",
        "Autenticación",
      ],
      accent: "sage" as const,
      links: [],
    },
    {
      id: "mini-ml",
      name: "Mini ML Platform",
      subtitle: "Machine Learning para todos",
      description:
        "Plataforma web para democratizar experimentación con Machine Learning, automatizando preparación de datos, transformación de variables, entrenamiento, evaluación y análisis asistido por IA (lee resultados y métricas para explicar los datos).",
      stack: [
        "Python",
        "Django",
        "React",
        "scikit-learn",
        "ML",
        "Data Processing",
        "AI-assisted Analysis",
      ],
      features: [
        "Preparación de datos",
        "Transformación de variables",
        "Entrenamiento",
        "Evaluación",
        "Visualización",
        "Análisis con IA",
      ],
      accent: "mustard" as const,
      links: [ ],
    },
    {
      id: "agenda",
      name: "Agenda+",
      subtitle: "Plataforma de productividad empresarial",
      description:
        "Sistema de gestión de trabajo que combina Scrum y Kanban en una misma experiencia, con sprints, roles, permisos, seguimiento de tareas, y un asistente IA script integrado para interactuar con la plataforma.",
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "Node.js", "Asistente IA"],
      features: [
        "Kanban",
        "Scrum",
        "Sprints",
        "Story Points",
        "Gestión de equipos",
        "Roles y permisos",
        "Aplicación web y móvil",
      ],
      accent: "ocean" as const,
      links: [{ label: "Explorar proyecto", href: "https://agendamas.infocod.codes/" }],
    },
    {
      id: "wattio",
      name: "Wattio",
      subtitle: "Aplicación móvil para cotizaciones eléctricas",
      description:
        "Aplicación móvil para cotización de instalaciones eléctricas, gestión de materiales, precios y proyectos. El sistema funciona de manera local (offline-first) almacenando la información directamente en el dispositivo, incluyendo cálculo de costos y generación de cotizaciones para técnicos.",
      stack: ["React Native", "TypeScript", "SQLite", "Offline-first", "Mobile App"],
      features: [
        "Cotizaciones",
        "Gestión de materiales",
        "Modo offline",
        "Cálculo de costos",
        "Gestión de proyectos",
      ],
      accent: "terra" as const,
      links: [],
    },
    {
      id: "wc-prediction",
      name: "World Cup ML Predictor",
      subtitle: "Modelo de predicción deportiva",
      description:
        "Modelo de Machine Learning desarrollado para predecir los resultados de los partidos del mundial. Mediante el análisis de datos históricos, estadísticas de equipos y métricas de rendimiento, el modelo logró una precisión comprobada del 60% al 70%.",
      stack: ["Python", "scikit-learn", "Pandas", "Machine Learning", "Data Analysis", "Jupyter"],
      features: [
        "Análisis predictivo",
        "Procesamiento de datos históricos",
        "Entrenamiento de modelos",
        "Evaluación de precisión (60-70%)",
      ],
      accent: "mustard" as const,
      links: [],
    },
  ],
  en: [
    {
      id: "dataspilot",
      name: "DATASPILOT (In development)",
      subtitle: "Data-Driven ERP & Business Copilot",
      description: "A next-generation ERP acting as an intelligent copilot (Data Pilot) for businesses. It centralizes and analyzes real-time data to optimize and automate decision-making across sales, inventory, finance, CRM, and HR.",
      stack: ["NestJS", "PostgreSQL", "Docker", "Data Analytics", "System Design", "Modular Architecture", "RBAC"],
      features: [
        "Advanced Analytics Dashboard",
        "Business Decision Copilot",
        "Predictive Inventory",
        "Sales & Invoicing",
        "Real-time Financial Management",
        "Data-driven CRM",
        "Human Resources",
        "Business Intelligence (BI)",
      ],
      accent: "terra" as const,
      links: [],
    },
    {
      id: "raices",
      name: "Social Agreement (In development)",
      subtitle: "Community participation platform",
      description:
        "Digital citizen participation platform combining community interaction, geolocation, events, gamification and real-time communication. Integrates Artificial Intelligence to analyze comments and the platform's overall content.",
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "PostgreSQL",
        "Leaflet",
        "Artificial Intelligence"
      ],
      features: [
        "Community feed",
        "Posts",
        "Geolocation",
        "Events",
        "Real-time notifications",
        "Gamification",
        "Authentication",
      ],
      accent: "sage" as const,
      links: [],
    },
    {
      id: "mini-ml",
      name: "Mini ML Platform",
      subtitle: "Machine Learning for everyone",
      description:
        "Web platform to democratize Machine Learning experimentation, automating data preparation, variable transformation, training, evaluation and AI-assisted analysis (reads results and metrics to explain the data).",
      stack: [
        "Python",
        "Django",
        "React",
        "scikit-learn",
        "ML",
        "Data Processing",
        "AI-assisted Analysis",
      ],
      features: [
        "Data preparation",
        "Variable transformation",
        "Training",
        "Evaluation",
        "Visualization",
        "AI Analysis",
      ],
      accent: "mustard" as const,
      links: [ ],
    },
    {
      id: "agenda",
      name: "Agenda+",
      subtitle: "Enterprise productivity platform",
      description:
        "Work management system combining Scrum and Kanban in a single experience, with sprints, roles, permissions, task tracking, and an integrated AI script assistant to interact with the platform.",
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "Node.js", "AI Assistant"],
      features: [
        "Kanban",
        "Scrum",
        "Sprints",
        "Story Points",
        "Team management",
        "Roles & permissions",
        "Web and mobile app",
      ],
      accent: "ocean" as const,
      links: [{ label: "Explore project", href: "https://agendamas.infocod.codes/" }],
    },
    {
      id: "wattio",
      name: "Wattio",
      subtitle: "Mobile application for electrical quotes",
      description:
        "Mobile application for quoting electrical installations, managing materials, prices and projects. The system works locally (offline-first) storing information directly on the device, including cost calculation and quote generation for technicians.",
      stack: ["React Native", "TypeScript", "SQLite", "Offline-first", "Mobile App"],
      features: [
        "Quotes generation",
        "Materials management",
        "Offline mode",
        "Cost calculation",
        "Project management",
      ],
      accent: "terra" as const,
      links: [],
    },
    {
      id: "wc-prediction",
      name: "World Cup ML Predictor",
      subtitle: "Sports prediction model",
      description:
        "Machine Learning model developed to predict World Cup match results. By analyzing historical data, team statistics and performance metrics, the model achieved a proven accuracy of 60% to 70%.",
      stack: ["Python", "scikit-learn", "Pandas", "Machine Learning", "Data Analysis", "Jupyter"],
      features: [
        "Predictive analysis",
        "Historical data processing",
        "Model training",
        "Accuracy evaluation (60-70%)",
      ],
      accent: "mustard" as const,
      links: [],
    },
  ]
};