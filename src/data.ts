// All site copy lives here so content updates never require touching layout code.

export const profile = {
  name: "Stoney Reed",
  role: "Full-Stack Software Engineer",
  location: "Rochester, NY",
  email: "stoneyreed25@gmail.com",
  github: "https://github.com/stoney-reed",
  linkedin: "https://www.linkedin.com/in/stoney-reed/",
  resume: "/Stoney-Reed-Resume.pdf",
  availability: "Open to full-stack roles",
};

export const stats = [
  { value: "6+ yrs", label: "Shipping production software" },
  { value: "100K+", label: "Monthly visitors on marketplace sites I built for" },
  { value: "8+", label: "Commercial marketplace sites shipped to" },
  { value: "100+", label: "End-to-end tests written and maintained" },
];

export type Link = { label: string; href: string };

export const propscore = {
  name: "PropScore",
  tagline: "Real estate investment platform",
  dates: "Feb 2026 – Present",
  role: "Full Stack Engineer",
  href: "https://propscore-app.vercel.app",
  summary:
    "A live platform that grades residential properties A through F so investors and property managers can size up a deal in seconds. I designed and built the web app, the API, the data model, and the billing flow, and I lead a small team of part-time engineers on it.",
  features: [
    "Property Map",
    "Value Estimator",
    "Cash Flow",
    "Rent Estimator",
    "Neighborhoods",
    "Portfolio",
  ],
  highlights: [
    "Built the React web client, the Node/Express API, and the Postgres schema and auth on Supabase, deployed on Vercel and Render.",
    "Integrated Stripe Checkout, webhooks, the customer portal, and plan-gating. Debugged a production price-ID bug that misclassified subscriber tiers, shipped a planFromSubscription fallback, and added regression coverage.",
    "Drive technical direction: run design discussions with a senior engineer, own the call on architecture, and mentor a junior engineer through scoped work.",
    "Building an Expo (React Native) client for iOS and Android on the same API, with a web-only upgrade path so subscriptions stay compliant with App Store Guideline 3.1.1.",
  ],
  stack: [
    "React",
    "TypeScript",
    "Vite",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Supabase",
    "Stripe",
    "Mapbox",
    "Expo",
  ],
};

export type Project = {
  title: string;
  context: string;
  summary: string;
  stack: string[];
  link?: Link;
};

export const projects: Project[] = [
  {
    title: "Conversational FAQ assistant",
    context: "Xerox",
    summary:
      "Built and integrated an Amazon Lex chatbot for customer FAQ handling, backed by a retrieval-augmented generation pipeline for grounded answers, with S3-hosted chat and audio logs for transcription and review.",
    stack: ["Amazon Lex", "RAG", "AWS S3", "JavaScript"],
  },
  {
    title: "Vue 2 to Vue 3 migration",
    context: "SharpNotions",
    summary:
      "Scoped and drove the migration of 50+ components, ordering the work by usage and risk so the most-used components moved first under the heaviest test coverage, without pausing product delivery.",
    stack: ["Vue 3", "Cypress", "JavaScript"],
  },
  {
    title: "Salon Reed",
    context: "Client website",
    summary:
      "Built and maintain the site for a chair-rental hair salon, with Acuity Scheduling for booking and a content structure the stylists update themselves to change their profiles, photos, and booking links.",
    stack: ["HTML", "CSS", "JavaScript", "GitHub Pages", "Acuity"],
  },
];

export type Job = {
  company: string;
  role: string;
  dates: string;
  location?: string;
  stack: string[];
  bullets: string[];
};

export const experience: Job[] = [
  {
    company: "Trader Interactive",
    role: "Software Engineer",
    dates: "Jul 2023 – Feb 2026",
    location: "Remote",
    stack: ["Vue 3", "TypeScript", "PHP", "Laravel", "Docker", "New Relic"],
    bullets: [
      "Shipped features across 8+ commercial marketplace sites serving 100K+ monthly visitors, working across the stack in Vue, TypeScript, PHP, and Laravel inside Docker.",
      "Designed and built a library of 30+ reusable Vue components, reducing new-feature build time by 15%.",
      "Implemented retry, timeout, and fallback logic against a redesigned RESTful API contract, reducing user-facing failures and cutting integration time by 25%.",
      "Diagnosed production issues with New Relic, traced errors to root cause, and shipped fixes that improved production stability.",
    ],
  },
  {
    company: "SharpNotions",
    role: "Software Engineer",
    dates: "Dec 2021 – Jun 2023",
    location: "Rochester, NY",
    stack: ["Vue", "React", "Next.js", "Ruby on Rails", "Python", "Kubernetes"],
    bullets: [
      "Scoped and drove the Vue 2 to Vue 3 migration across 50+ components, sequenced by usage and risk.",
      "Built backend components in Python for client projects, working alongside Vue, React, and Rails frontends.",
      "Built and maintained a Cypress suite of 100+ end-to-end tests covering critical user flows, cutting manual QA time by 40%.",
    ],
  },
  {
    company: "Xerox",
    role: "Software Engineer",
    dates: "Feb 2020 – Dec 2021",
    location: "Rochester, NY",
    stack: ["C#", ".NET", "Angular", "React", "AWS"],
    bullets: [
      "Shipped customer-facing features in C#/.NET, Angular, and React on AWS as part of a 30+ person engineering team.",
      "Built and integrated an Amazon Lex chatbot with a RAG pipeline for grounded customer FAQ responses.",
    ],
  },
];

export const earlier = [
  { company: "Rochester Institute of Technology", role: "Web Developer", dates: "2019 – 2020" },
  { company: "Rochester Imaging Technology", role: "Web Developer", dates: "2018 – 2019" },
];

export const education = [
  { school: "Rochester Institute of Technology", degree: "B.S. Game Design and Development" },
  { school: "Finger Lakes Community College", degree: "A.S. Game Programming and Design" },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "PHP", "Ruby", "C#", "SQL"] },
  { group: "Frontend", items: ["React", "Vue 3", "Next.js", "Angular", "React Native / Expo"] },
  { group: "Backend", items: ["Node.js / Express", "Laravel", "Ruby on Rails", ".NET", "GraphQL", "REST"] },
  { group: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"] },
  { group: "Cloud & infra", items: ["AWS", "Azure", "Docker", "Kubernetes", "Kafka", "RabbitMQ", "Vercel", "Render"] },
  { group: "Quality & tooling", items: ["Cypress", "Jest", "PHPUnit", "New Relic", "Stripe", "Git", "Jenkins"] },
];
