import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Project not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-sans text-muted-foreground hover:text-foreground transition-colors duration-300 mb-12"
          >
            <ArrowLeft size={16} />
            Back
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-2 h-8 rounded-full"
              style={{ backgroundColor: project.color }}
            />
            <span className="text-sm font-sans font-light text-muted-foreground">
              {project.year}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-4">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-4 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground/70 font-sans"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Demo / Links */}
          <div className="flex gap-4 mb-12">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-sans font-medium hover:opacity-90 transition-opacity"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-foreground text-sm font-sans font-medium hover:bg-muted/50 transition-colors"
              >
                <Github size={14} />
                Source Code
              </a>
            )}
          </div>

          {/* Demo Embed Area */}
          {project.demoUrl && (
            <div className="mb-16">
              <h2 className="font-serif text-foreground text-xl mb-4">Demo</h2>
              <div className="aspect-video rounded-lg border border-border overflow-hidden bg-muted/30">
                <iframe
                  src={project.demoUrl}
                  className="w-full h-full"
                  title={`${project.title} demo`}
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>
            </div>
          )}

          {/* Description */}
          <div className="space-y-6 text-base text-muted-foreground leading-[1.8] font-sans font-light mb-16">
            <p>{project.longDescription}</p>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="font-serif text-foreground text-xl mb-6">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((f, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-sm font-sans text-muted-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {f}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mb-16">
            <h2 className="font-serif text-foreground text-xl mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-sans font-light tracking-widest uppercase text-muted-foreground border border-border rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Screenshots */}
          <div>
            <h2 className="font-serif text-foreground text-xl mb-6">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.screenshots.map((item, i) => (
                <motion.div
                  key={i}
                  className="aspect-video rounded-lg bg-muted/50 border border-border flex items-center justify-center p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <p className="text-xs text-muted-foreground font-sans text-center tracking-wide">
                    {item.caption}
                  </p>
                </motion.div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground/50 font-sans mt-4 italic">
              Replace placeholders with real screenshots
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
