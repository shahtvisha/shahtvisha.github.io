import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

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
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.div ref={ref} style={{ y }} className="group">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <Link
          to={`/project/${project.slug}`}
          className="relative block py-10 border-t border-border hover:bg-muted/30 transition-colors duration-500 px-4 -mx-4 rounded-sm overflow-hidden"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-[2px]"
            style={{ backgroundColor: project.color }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: hovered ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />

          <div className="flex items-start justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl md:text-2xl font-serif font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <motion.div
                  animate={{ x: hovered ? 2 : 0, y: hovered ? -2 : 0, opacity: hovered ? 0.8 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight size={18} className="text-muted-foreground" />
                </motion.div>
              </div>
              <p className="text-muted-foreground text-sm font-sans font-light leading-[1.8] max-w-lg">
                {project.description}
              </p>
              <div className="flex gap-4 mt-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground/70 font-sans">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <span className="text-sm font-sans font-light text-muted-foreground/50 pt-2 hidden md:block">
              {project.year}
            </span>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
