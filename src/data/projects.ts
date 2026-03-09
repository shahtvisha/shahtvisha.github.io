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
    slug: "neural-style-transfer",
    title: "Neural Style Transfer",
    description: "Real-time artistic style transfer using deep convolutional networks, optimized for edge deployment.",
    tags: ["Python", "TensorFlow", "CUDA"],
    year: "2025",
    color: "hsl(var(--primary))",
    longDescription:
      "A real-time neural style transfer system that transforms photos into artwork using deep convolutional neural networks. The model is optimized for edge deployment using TensorRT, achieving 30fps on embedded GPUs while maintaining high-quality artistic output.",
    features: [
      "Real-time inference at 30fps on Jetson Nano",
      "Support for arbitrary style images",
      "Progressive style blending with adjustable intensity",
      "Batch processing mode for video files",
    ],
    techStack: ["Python", "TensorFlow 2.x", "TensorRT", "CUDA", "OpenCV", "Flask API"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com",
    screenshots: [
      { caption: "Style transfer applied to a cityscape" },
      { caption: "Real-time webcam mode" },
      { caption: "Comparison: original vs. stylized" },
    ],
  },
  {
    slug: "distributed-kv-store",
    title: "Distributed KV Store",
    description: "A fault-tolerant key-value store with Raft consensus, built for low-latency reads at scale.",
    tags: ["Rust", "Systems", "Networking"],
    year: "2025",
    color: "hsl(var(--accent))",
    longDescription:
      "A distributed key-value store implementing the Raft consensus protocol from scratch in Rust. Designed for strong consistency and partition tolerance with sub-millisecond read latency through a leader-lease optimization.",
    features: [
      "Raft consensus with leader election and log replication",
      "Sub-millisecond reads via leader lease optimization",
      "Automatic cluster rebalancing on node failure",
      "gRPC-based inter-node communication",
    ],
    techStack: ["Rust", "Tokio", "gRPC/Tonic", "RocksDB", "Protocol Buffers"],
    githubUrl: "https://github.com",
    screenshots: [
      { caption: "Cluster dashboard showing node health" },
      { caption: "Latency benchmarks vs. etcd" },
      { caption: "Architecture diagram" },
    ],
  },
  {
    slug: "compiler-optimizations",
    title: "Compiler Optimizations",
    description: "LLVM-based pass for loop vectorization targeting ARM NEON, achieving 2.3× speedup on benchmarks.",
    tags: ["C++", "LLVM", "Architecture"],
    year: "2024",
    color: "hsl(var(--primary))",
    longDescription:
      "A custom LLVM optimization pass that identifies vectorizable loop patterns and generates ARM NEON SIMD instructions. The pass integrates into the standard LLVM pipeline and was evaluated against SPEC CPU 2017 benchmarks.",
    features: [
      "Custom loop analysis for vectorization candidates",
      "ARM NEON code generation for common patterns",
      "2.3× average speedup on targeted benchmarks",
      "Integrated into LLVM's PassManager pipeline",
    ],
    techStack: ["C++17", "LLVM 16", "ARM NEON Intrinsics", "CMake", "Google Benchmark"],
    githubUrl: "https://github.com",
    screenshots: [
      { caption: "Speedup chart across SPEC benchmarks" },
      { caption: "IR before and after optimization" },
      { caption: "Pass pipeline integration" },
    ],
  },
  {
    slug: "portfolio-platform",
    title: "Portfolio Platform",
    description: "This very site — a cinematic, animated personal portfolio built with React and Framer Motion.",
    tags: ["React", "TypeScript", "Design"],
    year: "2024",
    color: "hsl(var(--accent))",
    longDescription:
      "A cinematic personal portfolio with orbital animations, parallax scrolling, and smooth page transitions. Built to showcase both technical depth and design sensibility, this site is itself a project worth exploring.",
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
