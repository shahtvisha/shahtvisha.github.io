import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Neural Style Transfer",
    description: "Real-time artistic style transfer using deep convolutional networks, optimized for edge deployment.",
    tags: ["Python", "TensorFlow", "CUDA"],
    year: "2025",
  },
  {
    title: "Distributed KV Store",
    description: "A fault-tolerant key-value store with Raft consensus, built for low-latency reads at scale.",
    tags: ["Rust", "Systems", "Networking"],
    year: "2025",
  },
  {
    title: "Compiler Optimizations",
    description: "LLVM-based pass for loop vectorization targeting ARM NEON, achieving 2.3× speedup on benchmarks.",
    tags: ["C++", "LLVM", "Architecture"],
    year: "2024",
  },
  {
    title: "Portfolio Platform",
    description: "This very site — a cinematic, animated personal portfolio built with React and Framer Motion.",
    tags: ["React", "TypeScript", "Design"],
    year: "2024",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-32 px-6" id="projects">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-8 font-sans">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-20 text-foreground leading-tight">
            Things I've <span className="italic text-gradient-warm">built</span>.
          </h2>
        </motion.div>

        <div className="space-y-0">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="group"
    >
      <motion.a
        href="#"
        className="block py-10 border-t border-border hover:bg-muted/30 transition-colors duration-500 px-2 -mx-2 rounded-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <div className="flex items-start justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-xl md:text-2xl font-serif font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <ArrowUpRight
                size={18}
                className="text-muted-foreground opacity-0 -translate-y-1 translate-x-[-4px] group-hover:opacity-60 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300"
              />
            </div>
            <p className="text-muted-foreground text-sm font-sans font-light leading-[1.8] max-w-lg">
              {project.description}
            </p>
            <div className="flex gap-4 mt-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground/70 font-sans"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <span className="text-sm font-sans font-light text-muted-foreground/50 pt-2 hidden md:block">
            {project.year}
          </span>
        </div>
      </motion.a>
    </motion.div>
  );
}
