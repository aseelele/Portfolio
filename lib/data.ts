export const profile = {
  name: "Aseel Mohammed",
  location: "Toronto, ON",
  headline: "Software engineering student building web apps, APIs, and data-driven tools.",
  summary:
    "Computer Science student with experience shipping features across modern web stacks and Python-based services. Comfortable collaborating in agile teams, translating UX into clean UI, and integrating backend workflows. Interested in analytics and applied ML in real products.",
  links: {
    github: "https://github.com/aseelele",
    portfolio: "https://enabled-talent-website.vercel.app",
    linkedin: "https://linkedin.com/in/your-link-here",
    email: "mailto:youremail@example.com",
  },
  interests: [
    "Full-stack product engineering",
    "Applied machine learning + evaluation",
    "Data pipelines and analytics",
    "Cloud + developer tooling",
    "Inclusive design and accessibility",
  ],
};

export const skills = {
  languages: ["Python", "Java", "JavaScript/TypeScript", "C/C++", "Bash"],
  webApis: ["HTML5", "CSS3", "React", "Next.js", "REST", "FastAPI"],
  dataML: ["SQL", "Feature engineering", "Model experimentation", "Evaluation"],
  tools: ["Git/GitHub", "Linux", "CI/CD basics", "Vercel", "Figma"],
  concepts: ["OOP", "Data structures & algorithms", "Debugging", "Documentation"],
};

export const experience = [
  {
    title: "Software Developer (Web) — Enabled Talent",
    meta: "Remote • 2025 – Present",
    bullets: [
      "Built and maintained product features for a recruiting platform, delivering UI components and backend-integrated workflows.",
      "Implemented responsive interfaces from Figma and iterated on usability with stakeholders.",
      "Integrated front-end flows with Python REST endpoints; supported validation, error handling, and smooth UX.",
      "Worked with Git workflows (branching, PRs, reviews) and maintained technical notes for handoffs.",
    ],
    tags: ["React/Next.js", "Python", "REST", "Git", "Figma"],
  },
  {
    title: "Research Assistant — Applied Computing & Data Systems",
    meta: "University Research • 2024 – Present",
    bullets: [
      "Supported research software and scripts for structured data processing and analysis.",
      "Helped with data cleaning and repeatable pipelines; validated outputs and documented workflow decisions.",
      "Communicated progress to technical and non-technical collaborators and adapted to evolving requirements.",
    ],
    tags: ["Python", "Data processing", "Documentation"],
  },
  {
    title: "Engineers Without Borders (EWB) — Events/Operations Contributor",
    meta: "2024 – Present",
    bullets: [
      "Coordinated across teams to plan initiatives and deliver events.",
      "Supported outreach through digital assets and operational tools, strengthening teamwork and communication.",
    ],
    tags: ["Leadership", "Collaboration"],
  },
];

export const projects = [
  {
    name: "AI Wrapper Class (Python)",
    desc: "Reusable wrapper for consistent model calling, tracking, and comparison across prompts/tasks.",
    bullets: [
      "Standardized calling and evaluation workflow with configurable parameters and structured logging.",
      "Focused on clean OOP design and practical debugging hooks for repeatable testing.",
    ],
    tags: ["Python", "OOP", "Evaluation"],
    links: [{ label: "GitHub", href: "https://github.com/aseelele" }],
  },
  {
    name: "YorkNexo — Real-Time Campus Events Platform",
    desc: "Full-stack web app for live campus event discovery with interactive UI and backend-connected flows.",
    bullets: [
      "Implemented REST-style endpoints and data-driven components; deployed updates through modern hosting workflows.",
      "Emphasized performance, accessibility-minded structure, and maintainable code organization.",
    ],
    tags: ["Next.js", "REST", "UI/UX", "Deployment"],
    links: [{ label: "GitHub", href: "https://github.com/aseelele" }],
  },
  {
    name: "Systems/Architecture Coursework Projects",
    desc: "Low-level and systems-focused builds reinforcing reliability, edge-case handling, and debugging.",
    bullets: [
      "Built and tested components involving structured problem-solving and careful validation.",
    ],
    tags: ["C/C++", "Debugging", "Systems"],
    links: [],
  },
];

export const education = {
  school: "York University",
  degree: "BSc in Computer Science",
  grad: "Expected 2027",
  coursework: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Software Engineering",
    "Web Development",
    "AI/Logic",
  ],
};
