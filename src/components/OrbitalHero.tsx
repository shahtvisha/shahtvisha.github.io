import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const skills = [
  "React", "Python", "C++", "TypeScript",
  "Machine Learning", "Algorithms", "Systems", "Research",
];

const ORBIT_DURATION = 4.5;

export default function OrbitalHero() {
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSettled(true), ORBIT_DURATION * 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Decorative orbit rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-border/30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-border/20 pointer-events-none" />

      {/* Everything centered together */}
      <div className="relative flex items-center justify-center" style={{ width: "600px", height: "500px" }}>
        {/* Orbiting skills — behind and in front of name */}
        {!settled && skills.map((skill, i) => (
          <OrbitingSkill key={skill} skill={skill} index={i} total={skills.length} />
        ))}

        {/* Center: Name (always on top via z-index) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
          <motion.p
            className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-5 font-sans font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Master's Student · Brown University
          </motion.p>
          <motion.h1
            className="text-6xl sm:text-7xl md:text-9xl font-serif font-bold leading-[0.9] text-foreground text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="block">Your</span>
            <span className="block italic text-gradient-warm">Name</span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-base md:text-lg mt-8 max-w-sm mx-auto font-sans leading-relaxed text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Computer engineer crafting elegant solutions at the intersection of hardware & software.
          </motion.p>
        </div>
      </div>

      {/* Settled skills below */}
      {settled && (
        <motion.div
          className="relative z-20 flex flex-wrap justify-center gap-3 max-w-lg mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              className="px-4 py-2 rounded-full border border-border text-sm font-sans font-medium text-foreground bg-card"
              initial={{ opacity: 0, scale: 0.6, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 14,
                delay: i * 0.07,
              }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      )}

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: settled ? 0.5 : 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="w-5 h-9 rounded-full border-2 border-foreground/15 flex justify-center pt-1.5"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <div className="w-1 h-2 rounded-full bg-primary/50" />
        </motion.div>
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
  const rx = 250;
  const ry = 200;

  useEffect(() => {
    const frames = 80;
    const xKeys: number[] = [];
    const yKeys: number[] = [];
    for (let f = 0; f <= frames; f++) {
      const angle = angleOffset + (f / frames) * Math.PI * 2;
      xKeys.push(Math.cos(angle) * rx);
      yKeys.push(Math.sin(angle) * ry);
    }
    controls.start({
      x: xKeys,
      y: yKeys,
      transition: { duration: 3.5, repeat: Infinity, ease: "linear" },
    });
  }, [controls, angleOffset]);

  return (
    <motion.span
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-full border border-border text-sm font-sans font-medium text-foreground bg-card whitespace-nowrap z-0"
      initial={{
        x: Math.cos(angleOffset) * rx,
        y: Math.sin(angleOffset) * ry,
        opacity: 0,
      }}
      animate={controls}
      whileInView={{ opacity: 1 }}
      transition={{ opacity: { duration: 0.6 } }}
    >
      {skill}
    </motion.span>
  );
}
