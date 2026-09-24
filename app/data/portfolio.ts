export const profile = {
  name: "Bishal Ranjan Sah",
  subtitle: "Full-Stack Engineer · AI & Systems Builder",
  location: "MNNIT Allahabad, India",
  email: "bishalranjan44@gmail.com",
  github: "https://github.com/bishal454",
  linkedin: "https://www.linkedin.com/in/sah-bishal-ranjan/",
  image: "/images/Bishal-Ranjan-Sah.jpg",
  bio: "Full-stack engineer at Savatronic Healthcare Technologies. Building AI-powered systems — from agentic sports analysis platforms to real-time text-to-speech applications with Next.js, tRPC, and Vertex AI.",
} as const;

export const techStack = {
  languages: ["TypeScript", "JavaScript", "C++"],
  frontend: ["Next.js", "React", "Tailwind CSS"],
  backend: ["FastAPI", "Node.js", "tRPC"],
  databases: ["PostgreSQL", "MongoDB Atlas"],
  aiML: ["Gemini", "Vertex AI"],
  devops: ["Prisma", "Docker"],
  tools: ["Git", "GitHub", "Vercel"],
} as const;

export const featuredProjects = [
  {
    name: "PlaySphere",
    slug: "playsphere",
    description:
      "Offside AI — an agentic sports analysis platform built with Next.js 15, FastAPI, Gemini 3 Pro (Vertex AI Agent Builder), and MongoDB Atlas. Find, compare, and book sports venues through natural language.",
    problem:
      "Finding and booking sports venues is fragmented and time-consuming. Athletes and coaches need an intelligent way to discover, compare, and reserve courts instantly.",
    tech: ["Next.js 15", "FastAPI", "Gemini / Vertex AI", "MongoDB Atlas", "Tailwind CSS"],
    features: [
      "Agentic AI sports venue discovery via natural language",
      "Real-time venue comparison and booking",
      "Frontend-backend architecture with API integration",
      "Vertex AI Agent Builder integration",
    ],
    github: "https://github.com/bishal454/PlaySphere",
    live: "https://aiplaysphere.vercel.app",
    highlight: "Agentic AI · Sports Platform",
  },
  {
    name: "Resonix",
    slug: "resonix",
    description:
      "A real-time text-to-speech platform built with Next.js, tRPC, Prisma, and PostgreSQL. Manage and synthesize speech voices with organization-scoped retrieval and authentication.",
    problem:
      "Voice synthesis platforms lack proper access control and organized voice management. Teams need scoped, authenticated voice retrieval with audit trails.",
    tech: ["Next.js", "tRPC", "Prisma", "PostgreSQL", "TypeScript"],
    features: [
      "Organization-scoped voice retrieval and deletion",
      "tRPC authentication and server-prefetched hydration",
      "Prisma schema with PostgreSQL voice enums",
      "Settings panel with grouped voice selector",
      "Superjson serialization for client-server sync",
    ],
    github: "https://github.com/bishal454/Resonix",
    live: null,
    highlight: "tRPC · Prisma · PostgreSQL",
  },
  {
    name: "ivy-homes",
    slug: "ivy-homes",
    description:
      "A property discovery dashboard built with Next.js, React, TypeScript, and Tailwind CSS. Browse homes for sale, rentals, and residential projects with filtering and saved favourites.",
    problem:
      "Property listings are scattered across sites with no unified discovery experience. Buyers and renters need a responsive dashboard with persistent sessions.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    features: [
      "Secure sign-in with persistent sessions",
      "Homes for sale, rentals, and projects",
      "Locality, bedroom, furnishing, and price filters",
      "Saved homes per account",
      "Responsive tablet and mobile layout",
    ],
    github: "https://github.com/bishal454/ivy-homes",
    live: "https://ivy-homes-silk.vercel.app",
    highlight: "Property Dashboard · Next.js",
  },
  {
    name: "FlowSync",
    slug: "flowsync",
    description:
      "A workflow automation platform built with Next.js, tRPC, and Prisma. Orchestrate tasks and integrate services with a type-safe API layer.",
    problem:
      "Workflow automation requires manual integration across services. Teams need a unified platform with type-safe APIs and real-time task orchestration.",
    tech: ["Next.js", "tRPC", "Prisma", "PostgreSQL", "TypeScript"],
    features: [
      "Type-safe API with tRPC",
      "Prisma-managed PostgreSQL data layer",
      "Task orchestration and service integration",
      "Sentry error monitoring",
      "Real-time workflow management",
    ],
    github: "https://github.com/bishal454/FlowSync",
    live: "https://flow-sync-omega.vercel.app",
    highlight: "tRPC · Workflow Automation",
  },
] as const;

export const achievements = [
  {
    title: "IEEE Funding",
    description: "$5,300 IEEE grant for NeuroGlow neurorehabilitation device",
    source: "IEEE",
  },
  {
    title: "DPIIT Recognised Startup",
    description: "Savatronic Healthcare Technologies — DIPP276994",
    source: "Government of India",
  },
  {
    title: "Pull Shark",
    description: "GitHub achievement earned for collaborative contributions",
    source: "GitHub",
  },
  {
    title: "Quickdraw",
    description: "GitHub achievement for quick contributions",
    source: "GitHub",
  },
  {
    title: "Indian Patent",
    description: "AI-Powered Smart Walker (Patent No: 202631046336)",
    source: "Indian Patent Office",
  },
  {
    title: "AIC IIT Delhi Incubation",
    description: "Incubated at AIC IIT Delhi Innovation Foundation",
    source: "AIC IIT Delhi",
  },
] as const;

export const experience = [
  {
    title: "Full-Stack Engineer",
    company: "Savatronic Healthcare Technologies",
    period: "Current",
    description:
      "Building AI-powered full-stack systems including agentic sports analysis platforms, text-to-speech applications, and workflow automation. Focused on backend architecture, distributed systems, and scalable products with Next.js, tRPC, Prisma, and Vertex AI.",
  },
] as const;

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Motilal Nehru National Institute of Technology (MNNIT), Allahabad",
    period: "Expected 2026–2027",
    description: "Pursuing undergraduate degree with focus on software engineering, AI/ML, and systems.",
  },
] as const;

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;