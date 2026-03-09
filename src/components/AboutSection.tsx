import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-24 px-4" id="about">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />
          <div className="space-y-5 text-lg text-secondary-foreground leading-relaxed">
            <p>
              I'm a Computer Science & Engineering student who's equally comfortable 
              debugging low-level embedded systems and architecting web applications. 
              I believe great engineering is about <span className="text-primary font-semibold">solving real problems</span> — not just writing clever code.
            </p>
            <p>
              When I'm not coding, you'll find me tinkering with hardware projects, 
              reading about distributed systems, or contributing to open source. 
              I thrive at the intersection of <span className="text-primary font-semibold">hardware and software</span>.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-6 mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { label: "Projects Built", value: "15+" },
            { label: "Technologies", value: "20+" },
            { label: "Coffees ☕", value: "∞" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-card border border-glow"
            >
              <p className="text-3xl md:text-4xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1 font-mono">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
