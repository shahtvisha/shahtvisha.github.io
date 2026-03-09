import { Github, Linkedin, Mail } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-foreground">
          Let's <span className="italic text-gradient-warm">connect</span>.
        </h2>
        <p className="text-muted-foreground text-sm font-sans font-light mb-10 max-w-xs mx-auto leading-relaxed">
          Always open to interesting conversations, collaborations, and opportunities.
        </p>
        <div className="flex justify-center gap-8">
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label={label}
            >
              <Icon size={20} strokeWidth={1.5} />
            </a>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase font-sans font-light">
            © 2026 — Built with intention
          </p>
        </div>
      </div>
    </footer>
  );
}
