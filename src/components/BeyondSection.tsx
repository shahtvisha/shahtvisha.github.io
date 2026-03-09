import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { hobbies } from "@/data/hobbies";

export default function BeyondSection() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6" id="beyond">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-6 md:mb-8 font-sans">
            Beyond the Code
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-medium mb-12 md:mb-16 text-foreground leading-tight">
            When I'm <span className="italic text-gradient-warm">not</span> coding.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {hobbies.map((hobby, i) => (
            <motion.div
              key={hobby.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <Link
                to={`/hobby/${hobby.slug}`}
                className="group block p-4 md:p-6 rounded-lg border border-border hover:border-primary/30 hover:bg-muted/30 transition-all duration-500"
              >
                <hobby.icon
                  size={20}
                  strokeWidth={1.3}
                  className="text-muted-foreground group-hover:text-primary transition-colors duration-300 mb-3 md:mb-4"
                />
                <p className="font-serif text-foreground text-base md:text-lg mb-1">{hobby.label}</p>
                <p className="text-[10px] md:text-xs font-sans font-light text-muted-foreground tracking-wide">
                  {hobby.note}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
