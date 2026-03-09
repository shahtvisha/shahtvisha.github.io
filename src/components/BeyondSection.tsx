import { motion } from "framer-motion";
import { Music, Camera, Mountain, BookOpen, Plane, Coffee } from "lucide-react";

const hobbies = [
  { icon: Mountain, label: "Hiking", note: "Chasing summits & sunsets" },
  { icon: Camera, label: "Photography", note: "Street & landscape" },
  { icon: Music, label: "Music", note: "Guitar & vinyl collector" },
  { icon: BookOpen, label: "Reading", note: "Sci-fi & philosophy" },
  { icon: Plane, label: "Travel", note: "12 countries & counting" },
  { icon: Coffee, label: "Coffee", note: "Pour-over enthusiast" },
];

export default function BeyondSection() {
  return (
    <section className="py-32 px-6" id="beyond">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-8 font-sans">
            Beyond the Code
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-16 text-foreground leading-tight">
            When I'm <span className="italic text-gradient-warm">not</span> coding.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {hobbies.map((hobby, i) => (
            <motion.div
              key={hobby.label}
              className="group relative p-6 rounded-lg border border-border hover:border-primary/30 hover:bg-muted/30 transition-all duration-500 cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <hobby.icon
                size={22}
                strokeWidth={1.3}
                className="text-muted-foreground group-hover:text-primary transition-colors duration-300 mb-4"
              />
              <p className="font-serif text-foreground text-lg mb-1">{hobby.label}</p>
              <p className="text-xs font-sans font-light text-muted-foreground tracking-wide">
                {hobby.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
