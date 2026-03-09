import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function FloatingNav() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 300);
  });

  return (
    <motion.nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex gap-1 px-2 py-2 rounded-full border border-border bg-background/80 backdrop-blur-xl shadow-lg"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="px-4 py-1.5 text-[11px] tracking-[0.2em] uppercase font-sans font-light text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-all duration-300"
        >
          {link.label}
        </a>
      ))}
    </motion.nav>
  );
}
