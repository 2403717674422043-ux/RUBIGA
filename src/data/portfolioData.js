import profilePic from '../assets/rubiga-profile.jpg';

export const personalInfo = {
  name: "Rubiga R K",
  shortName: "Rubiga",
  role: "M.Sc. Artificial Intelligence & Machine Learning",
  degree: "M.Sc. Artificial Intelligence and Machine Learning",
  institution: "Coimbatore Institute of Technology",
  location: "Coimbatore, Tamil Nadu",
  duration: "2024 – 2029",
  cgpa: "7.75 / 10",
  email: "rubikarthi25@gmail.com",
  phone: "+91 90879 56451",
  linkedin: "https://linkedin.com/in/rubiga-r-k",
  github: "https://github.com/rubiga-rk",
  resumePdf: "/assets/Rubiga_RK_CV.pdf",
  profileImage: profilePic,
  tagline: "Bridging Artificial Intelligence, Data Science & User-Centered Visual Design.",
  bio: "M.Sc. AI & ML postgraduate student at Coimbatore Institute of Technology with a strong interest in Machine Learning, Generative AI (RAG), Full-Stack Engineering, and minimalist UI/UX Design. Passionate about building data-driven intelligent solutions wrapped in thoughtful, intuitive interfaces.",
  editorialSummary: "I thrive at the intersection of technical analytical rigor and visual design elegance. Whether training machine learning classifiers, architecting citation-aware RAG pipelines, building responsive full-stack applications with React & Node.js, or crafting human-centered UI prototypes in Figma — my goal is to create software that feels intelligent, effortless, and visually refined."
};

export const skillsData = {
  categories: [
    { id: "all", label: "All Skills" },
    { id: "ai", label: "AI & Machine Learning" },
    { id: "web", label: "Full Stack Web" },
    { id: "programming", label: "Programming" },
    { id: "database", label: "Databases" },
    { id: "design", label: "Design & Tools" }
  ],
  skills: [
    // AI / ML
    { name: "Python", category: "ai", level: "Advanced", icon: "Code2" },
    { name: "Scikit-learn", category: "ai", level: "Intermediate", icon: "Brain" },
    { name: "Retrieval-Augmented Gen (RAG)", category: "ai", level: "Intermediate", icon: "Sparkles" },
    { name: "ChromaDB & Embeddings", category: "ai", level: "Intermediate", icon: "Database" },
    { name: "SMOTE & Imbalance Handling", category: "ai", level: "Intermediate", icon: "Sliders" },
    { name: "Streamlit", category: "ai", level: "Advanced", icon: "Layout" },
    { name: "Pandas & NumPy", category: "ai", level: "Advanced", icon: "FileSpreadsheet" },
    { name: "Matplotlib & EDA", category: "ai", level: "Intermediate", icon: "BarChart3" },

    // Web
    { name: "React.js", category: "web", level: "Advanced", icon: "Atom" },
    { name: "JavaScript (ES6+)", category: "web", level: "Advanced", icon: "FileCode" },
    { name: "Node.js & Express.js", category: "web", level: "Intermediate", icon: "Server" },
    { name: "REST APIs", category: "web", level: "Advanced", icon: "Globe" },
    { name: "HTML5 & CSS3", category: "web", level: "Advanced", icon: "Palette" },

    // Programming
    { name: "Python", category: "programming", level: "Advanced", icon: "Terminal" },
    { name: "JavaScript", category: "programming", level: "Advanced", icon: "Code" },
    { name: "Java", category: "programming", level: "Intermediate", icon: "Coffee" },
    { name: "C", category: "programming", level: "Intermediate", icon: "Cpu" },
    { name: "SQL", category: "programming", level: "Intermediate", icon: "Database" },

    // Database
    { name: "MongoDB", category: "database", level: "Intermediate", icon: "Database" },
    { name: "SQL (MySQL / Relational)", category: "database", level: "Intermediate", icon: "Table" },

    // Design & Tools
    { name: "UI/UX Design", category: "design", level: "Advanced", icon: "Figma" },
    { name: "Figma Prototyping", category: "design", level: "Advanced", icon: "LayoutGrid" },
    { name: "User-Centered Design", category: "design", level: "Advanced", icon: "HeartHandshake" },
    { name: "Git & GitHub", category: "design", level: "Advanced", icon: "GitBranch" },
    { name: "VS Code", category: "design", level: "Advanced", icon: "Laptop" }
  ]
};

export const projectsData = [
  {
    id: "fraud-shield",
    title: "FraudShield",
    subtitle: "Intelligent Fraud Transaction Detection System",
    category: "AI & ML",
    techStack: ["Python", "Pandas", "Scikit-learn", "SMOTE", "Streamlit", "SHAP"],
    featured: true,
    summary: "Supervised classification machine learning system for detecting fraudulent financial transactions with SMOTE class imbalance mitigation and interactive SHAP explainability.",
    description: "FraudShield addresses financial security challenges by identifying anomalous and high-risk transactions. Built using Python and Scikit-learn, it applies SMOTE to handle highly skewed data, compares Random Forest, Decision Trees, and Gradient Boosting models, and features an interactive Streamlit dashboard displaying transaction risk scores and SHAP explainability matrices.",
    highlights: [
      "Mitigated extreme class imbalance using Synthetic Minority Over-sampling Technique (SMOTE).",
      "Compared performance of Logistic Regression, Decision Tree, Random Forest, and Gradient Boosting algorithms.",
      "Evaluated performance using Precision-Recall curves, ROC-AUC metrics, F1-scores, and confusion matrices.",
      "Developed an interactive Streamlit dashboard displaying feature importance and SHAP model explainability."
    ],
    githubUrl: "https://github.com/rubiga-rk/FraudShield",
    demoUrl: "#"
  },
  {
    id: "research-mate",
    title: "ResearchMate",
    subtitle: "Citation-Aware RAG Research Assistant",
    category: "AI & ML",
    techStack: ["Python", "RAG", "Embeddings", "ChromaDB", "Streamlit", "LangChain"],
    featured: true,
    summary: "Citation-grounded document assistant allowing researchers to query PDF papers via natural language with exact page metadata traceability.",
    description: "ResearchMate streamlines academic research by indexing unstructured PDF research papers into ChromaDB vector stores. Utilizing a Retrieval-Augmented Generation (RAG) pipeline, it delivers precise natural language answers grounded strictly in user documents while referencing page numbers to prevent hallucinated citations.",
    highlights: [
      "Implemented document parsing and semantic text chunking for unstructured academic PDFs.",
      "Generated dense vector embeddings stored in a ChromaDB vector database for similarity search.",
      "Constructed a RAG pipeline ensuring responses are grounded directly in uploaded document context.",
      "Engineered source-aware citation tracking with exact document and page metadata for auditability."
    ],
    githubUrl: "https://github.com/rubiga-rk/ResearchMate",
    demoUrl: "#"
  },
  {
    id: "campus-connect",
    title: "CampusConnect",
    subtitle: "Campus Event & Club Platform",
    category: "Full Stack",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API", "React Router"],
    featured: true,
    summary: "Full-stack web platform enabling university students to discover events, register for activities, and manage club participation.",
    description: "CampusConnect transforms student life by providing a centralized hub for events and campus organizations. Built with React.js and Express.js with MongoDB, it supports dynamic event filtering, user registrations, and administrative club CRUD operations with robust RESTful APIs.",
    highlights: [
      "Designed a responsive single-page interface with React.js, React Router, search, and dynamic filter views.",
      "Developed Express.js REST APIs integrated with MongoDB for real-time CRUD operations.",
      "Configured robust client-side validation, CORS handling, and structured HTTP error responses.",
      "Crafted intuitive student registration workflows for club events and activities."
    ],
    githubUrl: "https://github.com/rubiga-rk/CampusConnect",
    demoUrl: "#"
  },
  {
    id: "re-loop",
    title: "ReLoop",
    subtitle: "Smart Sustainability & Upcycling Platform",
    category: "Full Stack",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API"],
    featured: true,
    summary: "Full-stack web application promoting circular economy by connecting users to upcycling businesses, eco-friendly jobs, and products.",
    description: "ReLoop is a modern web application designed to encourage eco-friendly habits and sustainable commerce. Users can discover local upcycling businesses, browse eco-friendly product listings, apply for green jobs, and initiate community collaboration projects through a smooth React interface.",
    highlights: [
      "Built a full-stack sustainability platform connecting upcycling vendors with eco-conscious consumers.",
      "Created a modern React frontend utilizing reusable component architecture and Fetch API integration.",
      "Implemented full RESTful API endpoints for products, businesses, jobs, and collaboration requests.",
      "Ensured mobile-responsive layout and graceful error handling across all interactive user flows."
    ],
    githubUrl: "https://github.com/rubiga-rk/ReLoop",
    demoUrl: "#"
  }
];

export const uiDesignPhilosophy = {
  title: "Design Meets Intelligence",
  subtitle: "My Approach to UI & Visual Design",
  principles: [
    {
      title: "Clarity over Complexity",
      desc: "Creating minimal, distraction-free interfaces where data and content take center stage.",
      icon: "Sparkle"
    },
    {
      title: "Human-Centered Design",
      desc: "Grounding visual layouts in intuitive user journeys, accessibility, and smooth micro-interactions.",
      icon: "Users"
    },
    {
      title: "Scandinavian Aesthetic",
      desc: "Embracing generous whitespace, crisp typography, and quiet ice-blue accent palettes.",
      icon: "Compass"
    },
    {
      title: "Figma Prototyping",
      desc: "Crafting modular design systems, high-fidelity interactive prototypes, and scalable UI components.",
      icon: "Figma"
    }
  ]
};

export const softSkills = [
  "Communication",
  "Leadership",
  "Team Collaboration",
  "Adaptability",
  "Critical Thinking",
  "Problem Solving"
];
