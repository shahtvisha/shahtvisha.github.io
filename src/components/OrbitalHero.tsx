import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const skills = [
  "React", "Python", "C++", "TypeScript",
  "Machine Learning", "Algorithms", "Systems", "Research",
];

const ORBIT_DURATION = 5;

export default function OrbitalHero() {
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSettled(true), ORBIT_DURATION * 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Central content + orbit container */}
      <div className="relative flex items-center justify-center" style={{ width: "100%", maxWidth: 700, height: 460 }}>
        {/* Orbiting skills */}
        {!settled && skills.map((skill, i) => (
          <OrbitingSkill key={skill} skill={skill} index={i} total={skills.length} />
        ))}

        {/* Name — always centered, always on top */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
          <motion.p
            className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-6 font-sans font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2 }}
          >
            Master's Student · Brown University
          </motion.p>
          <motion.h1
            className="font-serif font-medium text-foreground text-center leading-[1.05]"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              Your Name
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-sm md:text-base mt-6 max-w-xs mx-auto font-sans font-light leading-relaxed text-center tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.2 }}
          >
            Computer engineer crafting elegant solutions at the intersection of hardware & software.
          </motion.p>
        </div>
      </div>

      {/* Settled skills */}
      {settled && (
        <motion.div
          className="relative z-20 flex flex-wrap justify-center gap-x-6 gap-y-2 max-w-md mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              className="text-sm font-sans font-light tracking-widest uppercase text-muted-foreground"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: "easeOut",
              }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      )}

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: settled ? 0.4 : 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <motion.div
          className="w-px h-12 bg-foreground/20 mx-auto"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}

function OrbitingSkill({
  skill,
  index,
  total,
}: {
  skill: string;
  index: number;
  total: number;
}) {
  const controls = useAnimation();
  const angleOffset = (index / total) * Math.PI * 2;
  const rx = 280;
  const ry = 180;

  useEffect(() => {
    const frames = 120;
    const xKeys: number[] = [];
    const yKeys: number[] = [];
    const opacityKeys: number[] = [];
    for (let f = 0; f <= frames; f++) {
      const angle = angleOffset + (f / frames) * Math.PI * 2;
      xKeys.push(Math.cos(angle) * rx);
      yKeys.push(Math.sin(angle) * ry);
      // Fade when behind (top half = behind)
      const sinVal = Math.sin(angle);
      opacityKeys.push(sinVal > 0 ? 0.8 : 0.25);
    }
    controls.start({
      x: xKeys,
      y: yKeys,
      opacity: opacityKeys,
      transition: { duration: 8, repeat: Infinity, ease: "linear" },
    });
  }, [controls, angleOffset]);

  return (
    <motion.span
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-sans font-light tracking-widest uppercase text-muted-foreground whitespace-nowrap z-0"
      initial={{
        x: Math.cos(angleOffset) * rx,
        y: Math.sin(angleOffset) * ry,
        opacity: 0,
      }}
      animate={controls}
    >
      {skill}
    </motion.span>
  );
}
