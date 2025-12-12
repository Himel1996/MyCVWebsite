// src/cvData.ts

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  bullets: string[];
  tech: string[];
};

export type Project = {
  name: string;
  description: string;
  tech: string[];
  link?: string;
  demoLink?: string;
};

export type SkillCategory = {
  name: string;
  skills: string[];
};

export type Education = {
  degree: string;
  university: string;
  start: string;
  end: string;
  location: string;
  grade: string;
  subjects?: { [key: string]: string };
};

export type Achievement = {
  title: string;
  organizer: string;
  location: string;
  year: string;
  award: string;
  images: string[];
};

export type Language = {
  name: string;
  proficiency: string;
};

export type Hobby = {
  name: string;
  image: string;
};

export type Book = {
  title: string;
  image: string;
  link: string;
};

//exp here
export const EXPERIENCES: Experience[] = [
  {
    company: "Master's Internship Projects",
    role: "AI Engineer & Software Developer",
    start: "2024",
    end: "Present",
    location: "Munich, Germany",
    bullets: [
      "Designed and built React + TypeScript web apps.",
      "Implemented LLM-powered features using OpenAI APIs.",
      "Worked on agentic systems, bias detection, and NLP.",
      "Containerized and deployed applications using Docker and CI/CD pipelines."
    ],
    tech: ["React", "TypeScript", "Node.js", "FastAPI", "PostgreSQL"]
  },
  {
    company: "Tata Consultancy Services",
    role: "Systems Engineer",
    start: "2020",
    end: "2024",
    location: "Kolkata, India & Remote",
    bullets: [
      "Delivered 7+ production-grade web applications end-to-end, collaborating with cross-functional teams (devs, PMs, clients).",
      "Designed and implemented scalable APIs and data-driven features, ensuring fast, reliable, and performant frontends integrated with enterprise backends on AWS & followed CI/CD principles.",
      "Designed optimized SQL schemas/queries, cutting data retrieval times by 40%.",
      "Mentored 4 junior developers, established clean coding standards and doubled team delivery capacity.",
    ],
    tech: ["Python", "SQL", "React", "TypeScript", "Docker", "AWS", "CI/CD"]
  }
];

export const PROJECTS: Project[] = [
  {
    name: "Automated Journalist (AutoJourn)",
    description:
      "End-to-end app that generates news, detects bias, and neutralises bias using LLMs.",
    tech: ["React", "TypeScript", "FastAPI", "OpenAI", "PostgreSQL"],
    link: "https://www.autojourn.cloud",
    demoLink: "https://youtu.be/XZWGlWqhJHQ?si=Q_9wBu1t-84oU7M1"
  },
  {
    name: "LLM BiasScope",
    description:
      "Side-by-side comparison tool to analyze bias in LLM outputs with a modern React UI.",
    tech: ["Next.js", "TypeScript", "Vercel AI", "Hugging Face"],
    link: "https://llmsbias.xyz",
    demoLink: "https://youtu.be/rRFRsq-udEo?si=xjimGVs6kk_eRUW5"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Vite"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "FastAPI", "REST APIs", "SQL"]
  },
  {
    name: "Data & ML",
    skills: ["Python", "PyTorch", "Numpy", "Pandas", "NLP", "GNNs"]
  },
  {
    name: "DevOps & Tools",
    skills: ["Git", "Docker", "CI/CD (GitHub Actions)", "AWS"]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "MSc. (Exchange) Computer Science",
    university: "TU Munich",
    start: "2024",
    end: "2025",
    location: "Munich, Germany",
    grade: "1.3"
  },
  {
    degree: "MSc. Data Science",
    university: "Sapienza University of Rome",
    start: "Sep 2023",
    end: "Jan 2026",
    location: "Rome, Italy",
    grade: "110/110 (Equivalent to 1.0 in German System)"
  },
  {
    degree: "B.Tech. Electronics & Communication Engineering",
    university: "Maulana Abul Kalam Azad University of Technology",
    start: "August 2016",
    end: "July 2020",
    location: "Kolkata, India",
    grade: "9.47/10"
  },
  {
    degree: "High School Examination",
    university: "West Bengal Council of Higher Secondary Examination",
    start: "2016",
    end: "2016",
    location: "Kolkata, India",
    grade: "455/500, 91%",
    subjects: {
      "English": "95%",
      "Mathematics": "97%",
      "Physics": "88%",
      "Chemistry": "84%",
      "Biology": "91%"
    }
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "SUS Hackathon Winners",
    organizer: "Statistical Society of Italy",
    location: "University of Salento, Lecce, Italy",
    year: "2024",
    award: "Winners of Best Objective Prediction",
    images: ["sus.png", "sus1.png"]
  },
  {
    title: "KPMG Hackathon Winners",
    organizer: "KPMG Italy",
    location: "Sapienza University of Rome",
    year: "2024",
    award: "Best Time Series Forecast",
    images: ["kpmg.JPG"]
  }
];

export const LANGUAGES: Language[] = [
  {
    name: "English",
    proficiency: "Native Bilingual (C2)"
  },
  {
    name: "Bengali",
    proficiency: "Native"
  },
  {
    name: "German",
    proficiency: "B1"
  },
  {
    name: "Italian",
    proficiency: "B1"
  },
  {
    name: "Hindi",
    proficiency: "C1"
  }
];

export const HOBBIES: Hobby[] = [
  {
    name: "Travelling",
    image: "travelling.jpg"
  },
  {
    name: "Listening music",
    image: "music.png"
  },
  {
    name: "Reading books",
    image: "books.png"
  },
  {
    name: "Writing books",
    image: "pen.png"
  }
];

export const BOOKS: Book[] = [
  {
    title: "November Poetry",
    image: "novpoet.png",
    link: "https://amzn.eu/d/eFAvaqx"
  },
  {
    title: "Silhouettes of Time",
    image: "book2.png",
    link: "https://amzn.eu/d/5kGlnDi"
  },
  {
    title: "Brief Encounters",
    image: "book3.png",
    link: "https://amzn.eu/d/3GVSVmu"
  },
  {
    title: "Sojourn",
    image: "book4.png",
    link: "https://amzn.eu/d/8K1puHG"
  }
];
