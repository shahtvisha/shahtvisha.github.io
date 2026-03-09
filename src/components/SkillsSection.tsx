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
    skills: ["Embedded Systems", "Machine Learning", "Web Dev", "Algorithms", "Computer Architecture", "Networking"],
  },
];

export default function SkillsSection() {
  return (
    <section className="py-28 px-6 bg-card" id="skills">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-4 font-sans">
            Expertise
          </p>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-14 text-foreground">
            What I <span className="italic text-gradient-warm">bring</span> to the table.
          </h2>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              <h3 className="font-serif italic text-foreground text-lg mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm rounded-full border border-border bg-background text-foreground font-sans font-medium"
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
