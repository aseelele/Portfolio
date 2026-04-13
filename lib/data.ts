export const profile = {
  name: "Aseel Mohammed",
  location: "Toronto, ON",
  headline: "Computer Science student building digital tools, web apps, and sustainable solutions.",
  summary:
    "Computer Science student passionate about software engineering, app development, sustainability, and digitization. I enjoy building practical tools that solve real-world problems, improve workflows, and create meaningful impact for users and organizations.",

  aboutEssay: `
My name is Aseel Mohammed, and I am a Computer Science student at the Lassonde
School of Engineering, York University, with a strong interest in digitization, structured
problem-solving, and data-driven technologies such as machine learning and deep learning.
I am motivated by identifying inefficiencies in real-world processes and transforming them
into clear, structured, and scalable solutions. What distinguishes me is my ability to work
through ambiguity, question assumptions, and apply reflective thinking to continuously
improve how problems are understood and solved.


I grew up in an environment that emphasized discipline, resilience, and personal
responsibility. From an early age, I learned that meaningful growth comes from sustained
effort and self-reflection rather than shortcuts. These experiences shaped my work ethic and
encouraged me to take ownership of my learning and decisions. They also instilled in me a
belief that improvement is an ongoing process built through consistency, accountability, and
a willingness to learn from challenges.

One of my most influential inspirations has been a university professor who emphasized the
importance of self-learning and continuous development, especially in a rapidly evolving field
like computer science. Rather than focusing only on course material, they motivated
students to explore independent projects, tools, and technologies beyond the curriculum.
This approach reshaped how I view learning, reinforcing the idea that success in computer
science depends not only on technical knowledge, but on the ability to continuously adapt,
learn, and grow.
Through critical reflection and a SWOT analysis completed earlier in the course, I identified
several strengths I bring to employers, including critical thinking, adaptability, structured
problem-solving, and clear communication. I also recognized an area for growth: at times, I
relied too heavily on external validation before fully trusting my own reasoning. To address
this weakness, I developed SMART goals focused on independently analyzing workflows,
documenting assumptions and constraints, proposing multiple solutions, and reflecting on
how deeper analysis changes my initial approach. These goals are directly aligned with my
development as a Computer Science student and support my long-term interest in
digitization and data-driven problem-solving.`,


  videoTitle: "About Me Video",
  videoEmbedUrl: "PASTE_YOUR_YOUTUBE_OR_DRIVE_EMBED_LINK_HERE",

  links: {
    github: "https://github.com/aseelele",
    portfolio: "https://portfolio-navy-nine-mkbvszlrlb.vercel.app/",
    linkedin: "https://www.linkedin.com/in/aseel-mohammed-733541251/",
    email: "mailto:aseelsamer258@gmail.com",
    resume: "/public/resume.pdf",
  },

  interests: [
    "Software engineering",
    "App development",
    "Sustainability and digitization",
    "Workflow design and automation",
    "Data-driven tools",
    "Accessibility and inclusive design",
  ],
};

export const skills = {
  soft: [
    "Communication",
    "Leadership",
    "Critical thinking",
    "Problem solving",
    "Teamwork",
    "Adaptability",
    "Public speaking",
    "Organization",
    "Time management",
  ],

  technical: [
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "C",
    "C++",
    "Bash",
    "MATLAB",
    "HTML5",
    "CSS3",
    "React",
    "Next.js",
    "REST APIs",
    "FastAPI",
    "SQL",
  ],

  tools: [
    "Git/GitHub",
    "Linux",
    "Vercel",
    "Figma",
    "Excel",
    "Canva",
    "Wix",
    "AppSheet",
    "CapCut",
  ],

  concepts: [
    "Object-oriented programming",
    "Data structures & algorithms",
    "Debugging",
    "Documentation",
    "UI/UX thinking",
    "Responsive design",
    "Agile collaboration",
    "Workflow optimization",
    "Automation",
    "Data processing",
  ],
};

export const experience = [
  {
    title: "Software Developer (Web) — Enabled Talent",
    meta: "Remote • 2025 – Present",
    bullets: [
      "Built and maintained product features for a recruiting platform, delivering UI components and backend-integrated workflows.",
      "Implemented responsive interfaces from Figma and iterated on usability with stakeholders.",
      "Integrated front-end flows with Python REST endpoints while supporting validation, error handling, and smooth UX.",
      "Worked with Git workflows including branching, pull requests, reviews, and technical handoff notes.",
    ],
    tags: ["React/Next.js", "Python", "REST", "Git", "Figma"],
  },
  {
    title: "Digital Transformation Analyst — Baccanalle",
    meta: "Co-op / Internship • 2026",
    bullets: [
      "Supported workflow improvement and process digitization across operational tasks.",
      "Worked on structured tools, documentation, and digital systems to improve efficiency and organization.",
      "Contributed to app and spreadsheet-based workflow thinking for practical business use cases.",
    ],
    tags: ["Digital transformation", "Operations", "Documentation", "Workflow design"],
  },
  {
    title: "Research Assistant — Applied Computing & Data Systems",
    meta: "University Research • 2024 – Present",
    bullets: [
      "Supported research software and scripts for structured data processing and analysis.",
      "Helped with data cleaning and repeatable pipelines while validating outputs and documenting workflow decisions.",
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
    name: "Summer Project ",
    desc: "Presentation deck highlighting my summer internship/co-op work, responsibilities, and outcomes.",
    bullets: [
      "Summarizes my role, contributions, tools used, and what I learned.",
      "Shows growth in technical work, problem solving, and professional communication.",
    ],
    tags: ["Presentation", "Professional experience"],
    links: [{ label: "Open Deck", href: "/presentations/summer-project.pdf" }],
  },
  {
    name: "FroSho App ",
    desc: "Presentation for my freezer inventory and transaction tracking application.",
    bullets: [
      "Explains the app’s purpose, workflow, features, and practical use case.",
      "Demonstrates app thinking, process logic, and user-centered design.",
    ],
    tags: ["AppSheet", "Inventory app", "Presentation"],
    links: [{ label: "Open Deck", href: "/presentations/frosho-app.pdf" }],
  },
  {
    name: "York Nexo",
    desc: "Project deck for a real-time campus events platform.",
    bullets: [
      "Highlights the idea, interface, technical structure, and project direction.",
      "Shows full-stack thinking, accessibility awareness, and maintainable design.",
    ],
    tags: ["Next.js", "Full-stack", "UI/UX"],
    links: [{ label: "Open Deck", href: "/presentations/york-nexo.pdf" }],
  },
  {
    name: "AI Wrapper Class (Python)",
    desc: "Reusable Python wrapper for consistent model calling, tracking, and comparison across prompts and tasks.",
    bullets: [
      "Standardized calling and evaluation workflow with configurable parameters and structured logging.",
      "Focused on clean OOP design and practical debugging hooks for repeatable testing.",
    ],
    tags: ["Python", "OOP", "Evaluation"],
    links: [{ label: "GitHub", href: "https://github.com/aseelele" }],
  },
];

export const vision = {
  statement: `
My vision as a computer science and app engineer is rooted in both my technical passion and my lived experience. Growing up in a developing country, I witnessed firsthand how limitations in infrastructure, inefficient systems, and lack of access to digital tools can slow down progress and impact people’s quality of life.

These experiences shaped my purpose: I don’t just want to build software, I want to build systems that enable growth, empower communities, and create opportunities where they are most needed. To me, engineering is not only about innovation, but about impact, using technology to bridge the gap between what exists and what is possible.

I envision a future where digital systems transform developing regions by making essential services more accessible, efficient, and sustainable. Through applications that optimize resources, reduce waste, and digitize outdated processes, I aim to contribute to economies that are smarter, more connected, and more resilient.

Beyond building systems, I see myself as a leader who contributes to shaping a culture of purposeful engineering. I want to help create environments where technology is driven not only by profit, but by long-term impact and sustainability.

I often think of my work as building a “digital bridge”—connecting underserved communities to opportunities through technology. My goal is to create systems that continue to generate impact and help improve quality of life in developing regions.
`,
goals: [
  "Analyze at least one workflow or system issue weekly and document solutions",
  "Apply structured problem-solving (inputs, process, outputs) to major tasks",
  "Learn and use at least three new digital tools during my co-op",
  "Complete bi-weekly reflections to improve adaptability and growth mindset",
  "Produce professional written documentation and reports with feedback",
  "Present ideas clearly in professional and academic settings",
],
};

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
    "Computer Architecture",
  ],
};