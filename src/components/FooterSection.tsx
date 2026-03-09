import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

export default function FooterSection() {
  return (
    <footer className="py-20 px-6" id="contact">
      <div className="max-w-xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-medium mb-4 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Let's <span className="italic text-gradient-warm">connect</span>.
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-sm font-sans font-light mb-10 max-w-xs mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Always open to interesting conversations, collaborations, and opportunities.
        </motion.p>
        <motion.div
          className="flex justify-center gap-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 p-3 rounded-full hover:bg-muted"
              aria-label={label}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={20} strokeWidth={1.5} />
            </motion.a>
          ))}
        </motion.div>
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase font-sans font-light">
            © 2026 — Built with intention
          </p>
        </div>
      </div>
    </footer>
  );
}
