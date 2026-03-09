import { motion } from "framer-motion";
import { useState } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C++", "Python", "TypeScript", "Java", "Rust", "SQL"],
  },
  {
    title: "Frameworks & Tools",
    skills: ["React", "Node.js", "TensorFlow", "Docker", "Git", "Linux"],
  },
  {
    title: "Domains",
    skills: ["Embedded Systems", "Machine Learning", "Web Dev", "Algorithms", "Architecture", "Networking"],
  },
];

function SkillPill({ skill, delay }: { skill: string; delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.span
      className="relative px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-sans font-light tracking-widest uppercase text-muted-foreground border border-transparent hover:border-border hover:text-foreground rounded-full cursor-default transition-colors duration-300 select-none"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.08 }}
    >
      {hovered && (
        <motion.span
          className="absolute inset-0 rounded-full bg-primary/5"
          layoutId="skill-glow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
      <span className="relative z-10">{skill}</span>
    </motion.span>
  );
}

export default function SkillsSection() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6" id="skills">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-6 md:mb-8 font-sans">
            Expertise
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-medium mb-12 md:mb-16 text-foreground leading-tight">
            What I <span className="italic text-gradient-warm">bring</span> to the table.
          </h2>
        </motion.div>

        <div className="space-y-10 md:space-y-14">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
            >
              <h3 className="font-serif italic text-foreground text-base md:text-lg mb-4 md:mb-5">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {cat.skills.map((skill, si) => (
                  <SkillPill key={skill} skill={skill} delay={ci * 0.1 + si * 0.05} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
