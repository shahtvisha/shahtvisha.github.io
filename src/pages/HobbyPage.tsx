import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { hobbies } from "@/data/hobbies";

export default function HobbyPage() {
  const { slug } = useParams();
  const hobby = hobbies.find((h) => h.slug === slug);

  if (!hobby) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Hobby not found.</p>
      </div>
    );
  }

  const Icon = hobby.icon;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-sans text-muted-foreground hover:text-foreground transition-colors duration-300 mb-12"
          >
            <ArrowLeft size={16} />
            Back
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-lg border border-border bg-muted/30">
              <Icon size={24} strokeWidth={1.3} className="text-primary" />
            </div>
            <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground font-sans">
              {hobby.note}
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-4">
            {hobby.label}
          </h1>

          <p className="text-xl font-serif italic text-primary/80 mb-10">
            "{hobby.hero}"
          </p>

          <div className="prose-none space-y-6 text-base text-muted-foreground leading-[1.8] font-sans font-light mb-16">
            <p>{hobby.description}</p>
          </div>

          <div className="mb-16">
            <h2 className="font-serif text-foreground text-xl mb-6">Highlights</h2>
            <ul className="space-y-3">
              {hobby.highlights.map((h, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-sm font-sans text-muted-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {h}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-foreground text-xl mb-6">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {hobby.gallery.map((item, i) => (
                <motion.div
                  key={i}
                  className="aspect-[4/3] rounded-lg bg-muted/50 border border-border flex items-center justify-center p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <p className="text-xs text-muted-foreground font-sans text-center tracking-wide">
                    {item.caption}
                  </p>
                </motion.div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground/50 font-sans mt-4 italic">
              Add your own photos to bring this to life
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
