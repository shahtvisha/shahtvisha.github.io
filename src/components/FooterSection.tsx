import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socials = [
  { icon: Mail, href: "mailto:tvisha_shah@brown.edu", label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/tvisha-v-shah/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/shahtvisha", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/personalrepo", label: "X" },
];

export default function FooterSection() {
  return (
    <footer className="py-24 md:py-28 px-4 md:px-6" id="contact">
      <div className="max-w-lg md:max-w-2xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-serif font-medium mb-3 md:mb-4 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Let's <span className="italic text-gradient-warm">connect</span>.
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-sm font-sans font-light mb-10 md:mb-14 max-w-xs mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Always open to interesting conversations, collaborations, and opportunities.
        </motion.p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mb-14 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {socials.map(({ icon: Icon, href, label }, i) => (
            <motion.a
              key={label}
              href={href}
              className="group flex flex-col items-center gap-3 p-6 md:p-7 rounded-2xl border border-border bg-card/50 hover:bg-accent/50 hover:border-accent transition-all duration-300"
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              aria-label={label}
            >
              <Icon
                size={32}
                strokeWidth={1.2}
                className="text-muted-foreground group-hover:text-foreground transition-colors duration-300"
              />
              <span className="text-[10px] tracking-[0.15em] uppercase font-sans font-light text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <div className="pt-8 border-t border-border">
          <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase font-sans font-light">
            © 2026 — Built with intention
          </p>
        </div>
      </div>
    </footer>
  );
}
