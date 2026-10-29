export const resumeData = {
  personalInfo: {
    name: "Shivansh Singh",
    title: "Senior React and Node.js Engineer",
    subtitle: "React.js | Next.js | Node.js",
    email: "kaushik.shivansh.dev@gmail.com",
    location: "Mumbai, India",
    linkedin: "https://linkedin.com/in/shivansh-singh",
    github: "https://github.com",
    profileBio:
      "Senior React and Node.js Engineer with 6+ years of experience building scalable, high-performance web applications using React.js, Next.js, and Node.js in insurance, banking, and media domains. Skilled in responsive interfaces, RESTful APIs, authentication/SSO solutions, and design-system-minded frontend development. Experienced in TDD, Agile delivery, DevOps workflows, and AI-assisted development tools including Amazon Q and GitHub Copilot.",
    stats: [
      { label: "Years of Experience", value: "6+" },
      { label: "Key Domains", value: "3" }, // Insurance, Banking, Media
      { label: "Test Coverage Boost", value: "80%+" },
      { label: "Perf Optimization", value: "30%" },
    ],
  },
  skills: [
    {
      category: "Frontend Development",
      items: [
        { name: "React.js", level: "Expert", icon: "react" },
        { name: "Next.js (App Router)", level: "Expert", icon: "nextjs" },
        { name: "TypeScript", level: "Advanced", icon: "typescript" },
        { name: "JavaScript (ES6+)", level: "Expert", icon: "javascript" },
        { name: "Redux Toolkit / Saga", level: "Advanced", icon: "redux" },
        { name: "HTML5 & CSS3", level: "Expert", icon: "html" },
        { name: "TailwindCSS", level: "Advanced", icon: "tailwind" },
        {
          name: "Jest & React Testing Library",
          level: "Advanced",
          icon: "jest",
        },
      ],
    },
    {
      category: "Backend Development",
      items: [
        { name: "Node.js", level: "Expert", icon: "nodejs" },
        { name: "Express.js", level: "Expert", icon: "express" },
        { name: "Nest.js", level: "Advanced", icon: "nestjs" },
        { name: "PostgreSQL", level: "Advanced", icon: "postgres" },
        { name: "Redis", level: "Advanced", icon: "redis" },
        { name: "RESTful APIs / Swagger", level: "Expert", icon: "api" },
        { name: "Authentication / ADFS SSO", level: "Advanced", icon: "lock" },
      ],
    },
    {
      category: "DevOps & Cloud",
      items: [
        { name: "Docker", level: "Intermediate", icon: "docker" },
        { name: "Jenkins", level: "Intermediate", icon: "jenkins" },
        { name: "AWS (EC2, S3, IAM)", level: "Intermediate", icon: "aws" },
        { name: "CI/CD Pipelines", level: "Advanced", icon: "cicd" },
      ],
    },
    {
      category: "AI & Collaboration Tools",
      items: [
        { name: "Git & GitHub / Bitbucket", level: "Expert", icon: "git" },
        { name: "Amazon Q Developer (AI)", level: "Advanced", icon: "ai" },
        { name: "GitHub Copilot (AI)", level: "Advanced", icon: "copilot" },
      ],
    },
  ],
  experience: [
    {
      role: "Consultant - React.js / Next.js / Node.js Developer",
      company: "Deloitte",
      location: "Mumbai, India",
      period: "Nov 2023 – Present",
      highlights: [
        "Built and delivered high-performance UIs using React.js components, reducing average page load times and improving overall UX.",
        "Leveraged Next.js Server Components and Server Actions to optimize application performance and reduce client-side JavaScript bundle size.",
        "Implemented Active Directory Federation Services (ADFS) Single Sign-On (SSO) / Single Log-Out (SLO) via custom Node.js middleware, ensuring enterprise security.",
        "Increased unit test coverage to 80%+ using Jest and React Testing Library, enforcing quality gates with Husky pre-commit hooks and ESLint.",
        "Migrated session handling from Express.js in-memory store to Redis, preventing session leaks and scaling efficiently under high load.",
        "Utilized Amazon Q to automate test case generation and code enhancement, significantly accelerating feature delivery.",
        "Collaborated on CI/CD pipelines using Docker, Jenkins, and AWS, cutting deployment times from hours to minutes.",
      ],
    },
    {
      role: "Senior Software Engineer - React.js / Node.js Developer",
      company: "LTIMindtree",
      location: "Mumbai, India",
      period: "Jan 2021 – Nov 2023",
      highlights: [
        "Built and deployed scalable UI components with React.js, ensuring pixel-perfect alignment with design and business requirements.",
        "Developed and documented REST APIs (Express.js + Airtable) with Swagger specifications.",
        "Integrated Clover payment gateway, enabling seamless digital transactions and expanding client financial offerings.",
        "Optimized Node.js microservices and React modules, reducing downtime and boosting overall system performance by ~30%.",
      ],
    },
  ],
  projects: [
    {
      id: "portfolio",
      title: "Personal Portfolio Site",
      subtitle: "Modern Next.js Showcase",
      description:
        "Professional UI developer portfolio built with Next.js to present experience, projects, skills, and certifications through a polished responsive interface.Used AI assistance for theme direction, content refinement, and UI quality checks.",
      stack: ["Next.js 14", "React.js", "CSS Modules"],
      github: "https://github.com/shivanssh/portfolio-via-ai",
      live: "https://portfolio-via-ai.vercel.app/",
      highlights: [
        "SSG / ISR rendering for ultra-fast CDN page loading",
        "Professional dark interface theme tailored for a UI developer profile",
        "Responsive sections for projects, skills, experience, certifications, and contact",
        "AI-assisted design iteration with Claude Opus, Gemini Flash, and GPT-5.5",
      ],
    },
    {
      id: "connect",
      title: "Connect",
      subtitle: "Full-Stack Social Media Platform",
      description:
        "Feature-rich social networking application supporting user posts, interactive commenting, feed management, and secure JWT-based authentication.",
      stack: ["React.js", "Node.js", "Express.js", "JWT", "Jest", "RTL"],
      github: "https://github.com/shivanssh/connect",
      live: "",
      highlights: [
        "Designed responsive frontend UI with React.js & custom CSS",
        "Built REST API backend with Express & Node.js",
        "Implemented robust authentication flow with JWT tokens",
        "Integrated unit test suites achieving high reliability",
      ],
    },
    {
      id: "goal-setter",
      title: "Goal Setter",
      subtitle: "Goal Management App",
      description:
        "Productivity platform helping users set, track, and achieve goals with state management, progress analytics, and persistent storage.",
      stack: [
        "React.js",
        "Redux Toolkit",
        "MongoDB Atlas",
        "Express.js",
        "Mongoose",
      ],
      github: "https://github.com/shivanssh/goal-setter-MERN",
      live: "",
      highlights: [
        "Centralized global state management with Redux Toolkit",
        "Secure user authorization via JWT & MongoDB Atlas ODM",
        "Full CRUD functionality with real-time UI updates",
      ],
    },
  ],
  certificates: [
    {
      title: "Mastering NextJS 14 & OpenAI",
      issuer: "Udemy",
      badge: "Next.js 14",
    },
    {
      title: "Advanced React: Design System, Design Patterns & Performance",
      issuer: "Udemy",
      badge: "React Patterns",
    },
    {
      title: "AWS Partner: Accreditation (Technical)",
      issuer: "Amazon Web Services",
      badge: "AWS Cloud",
    },
    {
      title: "The Complete SQL Bootcamp",
      issuer: "Udemy",
      badge: "PostgreSQL / SQL",
    },
  ],
  education: {
    degree: "BE in Computer Engineering",
    institution: "Mumbai University",
    period: "2016 – 2020",
    score: "CGPA: 8.53 / 10",
  },
};
