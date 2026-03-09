import { motion } from "framer-motion";

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

export default function SkillsSection() {
  return (
    <section className="py-32 px-6" id="skills">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-8 font-sans">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-16 text-foreground leading-tight">
            What I <span className="italic text-gradient-warm">bring</span> to the table.
          </h2>
        </motion.div>

        <div className="space-y-14">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
            >
              <h3 className="font-serif italic text-foreground text-lg mb-5">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm font-sans font-light tracking-widest uppercase text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
