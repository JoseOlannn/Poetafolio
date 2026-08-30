export type SkillGroup = {
  title: string;
  accent: "terra" | "mustard" | "sage" | "ocean";
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Core",
    accent: "terra",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "NestJS", "Python"],
  },
  {
    title: "Data",
    accent: "mustard",
    skills: ["Pandas", "NumPy", "scikit-learn", "Power BI", "SQL"],
  },
  {
    title: "Cloud & DevOps",
    accent: "ocean",
    skills: ["AWS", "Docker", "GitHub", "Linux", "CI/CD", "IaC"],
  },
  {
    title: "Ecosistema",
    accent: "sage",
    skills: ["Angular", "Ionic", "Django", "PHP", "Java"],
  },
];

export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export const process: ProcessStep[] = [
  {
    index: "01",
    title: "Entender",
    description:
      "Identifico el problema y el contexto antes de escribir una sola línea de código.",
  },
  {
    index: "02",
    title: "Diseñar",
    description:
      "Transformo las necesidades en arquitectura, interfaces y flujos claros.",
  },
  {
    index: "03",
    title: "Construir",
    description:
      "Desarrollo con tecnologías modernas, código mantenible y buenas prácticas.",
  },
  {
    index: "04",
    title: "Analizar",
    description:
      "Uso datos, métricas y BI para entender cómo se comporta el producto.",
  },
  {
    index: "05",
    title: "Desplegar",
    description:
      "Automatizo procesos y preparo la aplicación para entornos reales con Cloud y DevOps.",
  },
];

export const philosophy: string[] = [
  "Código limpio.",
  "Interfaces humanas.",
  "Datos que cuentan historias.",
  "Tecnología con propósito.",
];