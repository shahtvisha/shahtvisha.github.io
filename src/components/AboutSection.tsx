import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-28 px-6" id="about">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-4 font-sans">
            A little about me
          </p>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10 text-foreground">
            <span className="italic text-gradient-warm">Engineer</span> by trade,{" "}
            <br className="hidden md:block" />
            creator by heart.
          </h2>
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed font-sans">
            <p>
              I'm a Master's student at <span className="text-foreground font-semibold">Brown University</span>, 
              studying Computer Science & Engineering. I'm passionate about building technology that's 
              both <span className="italic">powerful</span> and <span className="italic">beautiful</span>.
            </p>
            <p>
              From low-level embedded systems to machine learning pipelines, 
              I love the challenge of making complex things feel effortless. 
              I bring rigor from engineering and empathy from design.
            </p>
          </div>
        </motion.div>

        {/* Elegant divider */}
        <motion.div
          className="flex items-center gap-6 my-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex-1 h-px bg-border" />
          <span className="font-serif italic text-muted-foreground text-sm">in numbers</span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <motion.div
          className="grid grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { value: "15+", label: "Projects" },
            { value: "3", label: "Publications" },
            { value: "∞", label: "Curiosity" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-2 tracking-wide uppercase font-sans">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
