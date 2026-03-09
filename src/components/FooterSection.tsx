import { Github, Linkedin, Mail } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="py-16 px-4 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let's <span className="text-gradient-primary">Connect</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Always open to interesting conversations, collaborations, and opportunities.
        </p>
        <div className="flex justify-center gap-6">
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="p-3 rounded-xl bg-secondary text-secondary-foreground hover:text-primary hover:border-glow border border-border transition-all duration-300"
              aria-label={label}
            >
              <Icon size={22} />
            </a>
          ))}
        </div>
        <p className="text-muted-foreground text-sm mt-12 font-mono">
          © 2026 — Built with passion & caffeine
        </p>
      </div>
    </footer>
  );
}
