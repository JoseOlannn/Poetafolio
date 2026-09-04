export type SkillGroup = {
  title: string;
  accent: "terra" | "mustard" | "sage" | "ocean";
  icon?: string;
  skills: string[];
};

export const skillGroupsData = {
  es: [
    {
      title: "Desarrollo de Software",
      accent: "terra" as const,
      skills: ["Python", "TypeScript", "JavaScript", "Java", "C/C++", "PHP", "React", "Next.js", "Angular", "Node.js", "NestJS", "Django", "Desarrollo Web", "Frontend", "Backend", "APIs", "Arquitectura de Software"],
    },
    {
      title: "Bases de Datos",
      accent: "ocean" as const,
      skills: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "SQL", "Modelado de Datos", "Diseño de Bases de Datos", "Consultas y Optimización"],
    },
    {
      title: "Data, BI & AI",
      accent: "mustard" as const,
      skills: ["Python", "Pandas", "NumPy", "scikit-learn", "Power BI", "Business Intelligence", "Data Analysis", "Data Visualization", "Machine Learning", "Inteligencia Artificial"],
    },
    {
      title: "Ingeniería & Metodologías",
      accent: "sage" as const,
      skills: ["POO", "Arquitectura MVC", "Diseño de Sistemas", "Scrum", "Kanban", "Clean Code", "Buenas Prácticas", "Resolución de Problemas", "Documentación Técnica"],
    },
    {
      title: "Cloud & DevOps",
      accent: "ocean" as const,
      skills: ["AWS", "Microsoft Azure", "Google Cloud", "Oracle Cloud", "Docker", "Git", "GitHub", "Linux", "CI/CD", "IaC", "Cloud Architecture", "Cloud Fundamentals", "Version Control", "Containerización"],
    },
    {
      title: "Ecosistema",
      accent: "terra" as const,
      skills: ["Ionic", "Tkinter", "Arduino", "Microsoft 365", "Automatización", "Integración de APIs", "Herramientas de Productividad"],
    },
  ],
  en: [
    {
      title: "Software Development",
      accent: "terra" as const,
      skills: ["Python", "TypeScript", "JavaScript", "Java", "C/C++", "PHP", "React", "Next.js", "Angular", "Node.js", "NestJS", "Django", "Web Development", "Frontend", "Backend", "APIs", "Software Architecture"],
    },
    {
      title: "Databases",
      accent: "ocean" as const,
      skills: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "SQL", "Data Modeling", "Database Design", "Queries & Optimization"],
    },
    {
      title: "Data, BI & AI",
      accent: "mustard" as const,
      skills: ["Python", "Pandas", "NumPy", "scikit-learn", "Power BI", "Business Intelligence", "Data Analysis", "Data Visualization", "Machine Learning", "Artificial Intelligence"],
    },
    {
      title: "Engineering & Methodologies",
      accent: "sage" as const,
      skills: ["OOP", "MVC Architecture", "System Design", "Scrum", "Kanban", "Clean Code", "Best Practices", "Problem Solving", "Technical Documentation"],
    },
    {
      title: "Cloud & DevOps",
      accent: "ocean" as const,
      skills: ["AWS", "Microsoft Azure", "Google Cloud", "Oracle Cloud", "Docker", "Git", "GitHub", "Linux", "CI/CD", "IaC", "Cloud Architecture", "Cloud Fundamentals", "Version Control", "Containerization"],
    },
    {
      title: "Ecosystem",
      accent: "terra" as const,
      skills: ["Ionic", "Tkinter", "Arduino", "Microsoft 365", "Automation", "API Integration", "Productivity Tools"],
    },
  ]
};

export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export const processData = {
  es: [
    {
      index: "01",
      title: "Entender",
      description: "Identifico el problema y el contexto antes de escribir una sola línea de código.",
    },
    {
      index: "02",
      title: "Diseñar",
      description: "Transformo las necesidades en arquitectura, interfaces y flujos claros.",
    },
    {
      index: "03",
      title: "Construir",
      description: "Desarrollo con tecnologías modernas, código mantenible y buenas prácticas.",
    },
    {
      index: "04",
      title: "Analizar",
      description: "Uso datos, métricas y BI para entender cómo se comporta el producto.",
    },
    {
      index: "05",
      title: "Desplegar",
      description: "Automatizo procesos y preparo la aplicación para entornos reales con Cloud y DevOps.",
    },
  ],
  en: [
    {
      index: "01",
      title: "Understand",
      description: "I identify the problem and context before writing a single line of code.",
    },
    {
      index: "02",
      title: "Design",
      description: "I transform needs into clear architecture, interfaces, and flows.",
    },
    {
      index: "03",
      title: "Build",
      description: "I develop with modern technologies, maintainable code, and best practices.",
    },
    {
      index: "04",
      title: "Analyze",
      description: "I use data, metrics, and BI to understand how the product behaves.",
    },
    {
      index: "05",
      title: "Deploy",
      description: "I automate processes and prepare the application for real environments with Cloud and DevOps.",
    },
  ]
};

export const philosophyData = {
  es: [
    "Código limpio.",
    "Interfaces humanas.",
    "Datos que cuentan historias.",
    "Tecnología con propósito.",
  ],
  en: [
    "Clean code.",
    "Human interfaces.",
    "Data that tells stories.",
    "Technology with purpose.",
  ]
};