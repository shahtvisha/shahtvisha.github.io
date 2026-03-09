import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function FloatingNav() {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 300);
  });

  return (
    <>
      {/* Desktop nav */}
      <motion.nav
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex gap-1 px-2 py-2 rounded-full border border-border bg-background/80 backdrop-blur-xl shadow-lg"
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

      {/* Mobile nav button */}
      <motion.button
        className="fixed top-5 right-5 z-50 md:hidden w-10 h-10 rounded-full border border-border bg-background/80 backdrop-blur-xl shadow-lg flex items-center justify-center"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation"
      >
        {mobileOpen ? <X size={18} /> : <Menu size={18} />}
      </motion.button>

      {/* Mobile nav menu */}
      {mobileOpen && visible && (
        <motion.div
          className="fixed top-16 right-5 z-50 md:hidden flex flex-col gap-1 px-3 py-3 rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase font-sans font-light text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </>
  );
}
