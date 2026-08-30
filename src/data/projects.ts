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

export const projects: Project[] = [
  {
    id: "masticod",
    name: "MASTICOD (En desarrollo)",
    subtitle: "Sistema Comercial Multinegocio",
    description: "Una plataforma diseñada para transformar una PC convencional en el centro operativo de distintos tipos de negocios, integrando ventas, inventario, compras, finanzas, CRM y Business Intelligence.",
    stack: ["Next.js", "React", "TypeScript", "NestJS", "PostgreSQL", "Docker"],
    features: [
      "Gestión empresarial",
      "Ventas",
      "Compras",
      "Inventario",
      "Finanzas",
      "CRM",
      "Recursos Humanos",
      "Business Intelligence",
    ],
    accent: "terra",
    links: [],
  },
  {
    id: "raices",
    name: "Acuerdo Social (En desarrollo)",
    subtitle: "Plataforma de participación comunitaria",
    description:
      "Espacio digital para conectar ciudadanos, comunidades y proyectos sociales a través de publicaciones, convocatorias, geolocalización y gamificación.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Leaflet",
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
    accent: "sage",
    links: [],
  },
  {
    id: "mini-ml",
    name: "Mini ML Platform",
    subtitle: "Machine Learning para todos",
    description:
      "Aplicación web para experimentar con modelos de Machine Learning sin construir todo el pipeline manualmente: desde los datos hasta el análisis.",
    stack: [
      "Python",
      "Django",
      "React",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "Gemini API",
    ],
    features: [
      "Preparación de datos",
      "Transformación de variables",
      "Entrenamiento",
      "Evaluación",
      "Visualización",
      "Análisis con IA",
    ],
    accent: "mustard",
    links: [ ],
  },
  {
    id: "agenda",
    name: "Agenda+",
    subtitle: "Plataforma de productividad empresarial",
    description:
      "Sistema de gestión de trabajo que combina Scrum y Kanban en una misma experiencia, con sprints, roles, permisos y seguimiento de tareas.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "Node.js"],
    features: [
      "Kanban",
      "Scrum",
      "Sprints",
      "Story Points",
      "Gestión de equipos",
      "Roles y permisos",
      "Aplicación web y móvil",
    ],
    accent: "ocean",
    links: [{ label: "Explorar proyecto", href: "https://agendamas.infocod.codes/" }],
  },
];