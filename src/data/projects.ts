export interface ProjectData {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  color: string;
  longDescription: string;
  features: string[];
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  screenshots: { caption: string }[];
}

export const projects: ProjectData[] = [
  {
    slug: "zero-shot-affordance",
    title: "Zero-Shot 3D Affordance Mapping",
    description:
      "Geometry-aware affordance mapping combining CLIP feature lifting with surface geometry priors — no training data required.",
    tags: ["Python", "3D Perception", "Zero-Shot"],
    year: "2026",
    color: "hsl(var(--primary))",
    longDescription:
      "A zero-shot system that localizes interaction regions in 3D point clouds from natural language queries — 'where should I grasp this?' — without any task-specific training. CLIP patch features are lifted from 2D into 3D via back-projection, then multiplied by query-conditioned geometric priors derived from local surface analysis (normals, planarity, curvature). Evaluated on the LASO benchmark against CLIP-only and geometry-only baselines, with a novel finding on query phrasing sensitivity.",
    features: [
      "Multiplicative fusion of CLIP semantics × geometric priors — a point must look right and be shaped right",
      "+35% IoU over CLIP-only baseline on grasp affordance, +53% on move affordance",
      "Query sensitivity finding: short action-centric queries outperform verbose descriptions 3× on P@50",
      "Evaluated on LASO benchmark (CVPR 2025) across 4 affordance categories with full ablation study",
    ],
    techStack: [
      "Python", "PyTorch", "CLIP / ViT-L-14", "Open3D",
      "FastAPI", "ScanNet", "LASO Benchmark",
    ],
    demoUrl: "https://tvishashah-zeroshot3d-affordance.hf.space/static/index.html",
    githubUrl: "https://github.com/shahtvisha/Zeroshot3DAffordanceMapping",
    screenshots: [
      { caption: "Style transfer applied to a cityscape" },
      { caption: "Real-time webcam mode" },
      { caption: "Comparison: original vs. stylized" },
    ],
  },
  {
    slug: "latent-stress-dynamics-sleep",
    title: "Latent Stress Dynamics in Sleep",
    description:
      "As part of my research at Carney Institute for Brain Sciences with Dr. Debbie Yee, this project models how latent stress states (via HRV) shape sleep architecture using longitudinal time-series and mixed-effects modeling.",
    tags: ["Python", "ML", "Computational Neuroscience", "Time Series", "State-Space Models"],
    year: "2025–2026",
    color: "hsl(var(--accent))",
    longDescription:
      "A first-author computational cognitive science project analyzing 8 months of continuous wearable data (Oura Ring) from 49 participants to study latent stress dynamics and their effect on sleep architecture. The work builds a longitudinal time-series modeling framework using regression, mixed-effects, and lagged mixed-effects models to capture within-subject and cross-temporal dependencies between autonomic stress (proxied by HRV) and sleep stages. The project is being extended toward state-space modeling to infer latent physiological stress states and their temporal evolution in real-world settings.",

    features: [
      "Modeled longitudinal HRV–sleep interactions using regression, mixed-effects, and lagged mixed-effects models",
      "Quantified delayed (multi-day) effects of stress physiology on sleep efficiency and deep sleep",
      "Characterized within-subject and population-level variability in autonomic stress–sleep coupling",
      "Extended toward state-space models to infer latent stress states from wearable physiological signals",
    ],

    techStack: [
      "Python",
      "State-Space Models",
      "Mixed Effects Models",
      "Time-Series Analysis",
      "Computational Cognitive Science"
    ],

    screenshots: [
      { caption: "Time-series trajectories of HRV and sleep efficiency across participants" },
      { caption: "Lagged mixed-effects model showing delayed stress effects on sleep (7-day window)" },
      { caption: "Conceptual diagram of latent stress state influencing sleep architecture" },
    ],
  },
  {
    slug: "medical-text-summarization-transformers",
    title: "Medical Text Summarization with Transformers",
    description:
      "A comparative NLP study evaluating transformer and sequence models for domain-specific medical text summarization using PubMed data and ROUGE-based evaluation.",
    tags: ["Python", "NLP", "Transformers", "Deep Learning", "PyTorch"],
    year: "2024",
    color: "hsl(var(--accent))",
    longDescription:
      "A natural language processing research project focused on domain-specific text summarization in the medical field using the PubMed dataset. The study benchmarks multiple architectures, including RNN-based models and transformer-based models, to evaluate their effectiveness in generating coherent and clinically relevant summaries. Models including GPT-2, BART, and T5 (which was fine-tuned on the dataset) and compared using ROUGE metrics to assess summarization quality in a specialized biomedical context.",

    features: [
      "Benchmarked RNN-based and transformer-based architectures for medical text summarization",
      "Fine-tuned domain-specific models including BioT5 and BART on PubMed dataset",
      "Evaluated model performance using ROUGE-1 and ROUGE-L metrics for summarization quality",
      "Analyzed trade-offs between general-purpose (GPT-2) and biomedical-adapted transformers",
    ],

    techStack: [
      "Python",
      "PyTorch",
      "Deep Learning",
      "Natural Language Processing"
    ],

    githubUrl: "https://github.com/shahtvisha/TextSummarizationUsingDeepLearning",

    screenshots: [
      { caption: "Model comparison of ROUGE-1 and ROUGE-L scores across architectures" },
      { caption: "Fine-tuning pipeline for BioT5 and BART on PubMed dataset" },
      { caption: "Example generated summaries vs reference medical abstracts" },
    ],
  },
  {
    slug: "portfolio-platform",
    title: "Portfolio Platform",
    description: "This very site — a cinematic, animated personal portfolio built with React and Framer Motion.",
    tags: ["React", "TypeScript", "Design"],
    year: "2025",
    color: "hsl(var(--accent))",
    longDescription:
      "A cinematic personal portfolio with orbital animations, parallax scrolling, and smooth page transitions.",
    features: [
      "Orbital skill animation with staggered entrance",
      "Scroll-driven parallax transitions between sections",
      "Floating navigation with scroll-aware visibility",
      "Interactive hover effects throughout",
    ],
    techStack: ["React 18", "TypeScript", "Framer Motion", "Tailwind CSS", "Vite"],
    screenshots: [
      { caption: "Hero orbital animation" },
      { caption: "Projects section with hover effects" },
      { caption: "Mobile responsive layout" },
    ],
  },
];
