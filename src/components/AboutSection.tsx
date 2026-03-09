import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6" id="about">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-6 md:mb-8 font-sans">
            About
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-medium mb-8 md:mb-10 text-foreground leading-tight">
            Engineer by trade,
            <br />
            <span className="italic text-gradient-warm">creator</span> by heart.
          </h2>
          <div className="space-y-5 md:space-y-6 text-sm md:text-base text-muted-foreground leading-[1.8] font-sans font-light">
            <p>
              I'm a Master's student at <span className="text-foreground font-normal">Brown University</span>,
              studying Computer Science & Engineering. I build technology that's
              both <em>powerful</em> and <em>beautiful</em>.
            </p>
            <p>
              From embedded systems to machine learning pipelines,
              I love making complex things feel effortless —
              bringing rigor from engineering and empathy from design.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 gap-6 md:gap-12 mt-14 md:mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { value: "15+", label: "Projects" },
            { value: "3", label: "Publications" },
            { value: "∞", label: "Curiosity" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-4xl font-serif text-foreground">
                {stat.value}
              </p>
              <p className="text-[10px] md:text-xs text-muted-foreground mt-2 tracking-[0.2em] uppercase font-sans font-light">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
