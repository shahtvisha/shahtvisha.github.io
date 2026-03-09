import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const skills = [
  "React", "Python", "C++", "TypeScript",
  "Machine Learning", "Algorithms", "Systems", "Research",
];

const ORBIT_DURATION = 5;

export default function OrbitalHero() {
  const [settled, setSettled] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setTransitioning(true), (ORBIT_DURATION - 1.5) * 1000);
    const t2 = setTimeout(() => setSettled(true), ORBIT_DURATION * 1000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Final settled positions — two elegant rows
  const settledPositions = [
    { x: -220, y: 0 }, { x: -100, y: 0 }, { x: 20, y: 0 }, { x: 140, y: 0 },
    { x: -180, y: 36 }, { x: -50, y: 36 }, { x: 80, y: 36 }, { x: 200, y: 36 },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Very faint decorative ring */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border pointer-events-none"
        style={{
          width: 700,
          height: 420,
          borderColor: "hsl(348 15% 88%)",
        }}
        initial={{ opacity: 0.3 }}
        animate={{ opacity: transitioning ? 0 : 0.3 }}
        transition={{ duration: 1.5 }}
      />

      {/* Central content + orbit container */}
      <div className="relative flex items-center justify-center" style={{ width: "100%", maxWidth: 700, height: 500 }}>
        {/* Orbiting / transitioning skills */}
        {skills.map((skill, i) => (
          <SkillWord
            key={skill}
            skill={skill}
            index={i}
            total={skills.length}
            settled={settled}
            transitioning={transitioning}
            settledPos={settledPositions[i]}
          />
        ))}

        {/* Name — always centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
          <motion.p
            className="text-[11px] tracking-[0.4em] uppercase text-muted-foreground mb-7 font-sans font-medium"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.2 }}
          >
            Master's Student · Brown University
          </motion.p>
          <motion.h1
            className="font-serif text-foreground text-center leading-[1.1]"
            style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)", fontWeight: 500 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1.2 }}
            >
              Your Name
            </motion.span>
          </motion.h1>
          <motion.div
            className="w-10 h-px bg-primary/30 mt-5 mb-5"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          />
          <motion.p
            className="text-muted-foreground text-sm md:text-base max-w-[280px] mx-auto font-sans font-light leading-[1.7] text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.2 }}
          >
            Computer Science & Engineering
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: settled ? 0.35 : 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          className="w-px h-10 bg-foreground/20 mx-auto"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}

function SkillWord({
  skill,
  index,
  total,
  settled,
  transitioning,
  settledPos,
}: {
  skill: string;
  index: number;
  total: number;
  settled: boolean;
  transitioning: boolean;
  settledPos: { x: number; y: number };
}) {
  const controls = useAnimation();
  const angleOffset = (index / total) * Math.PI * 2;
  const rx = 340;
  const ry = 200;

  useEffect(() => {
    if (settled) return;

    if (transitioning) {
      // Gently move to settled position (below center)
      controls.start({
        x: settledPos.x,
        y: settledPos.y + 120, // offset below the name center
        opacity: 0.7,
        transition: {
          type: "tween",
          duration: 1.5,
          ease: [0.25, 0.1, 0.25, 1],
        },
      });
      return;
    }

    // Slow, graceful orbit
    const frames = 120;
    const xKeys: number[] = [];
    const yKeys: number[] = [];
    const opacityKeys: number[] = [];
    for (let f = 0; f <= frames; f++) {
      const angle = angleOffset + (f / frames) * Math.PI * 2;
      xKeys.push(Math.cos(angle) * rx);
      yKeys.push(Math.sin(angle) * ry);
      // Depth: fade when "behind" (top)
      const depth = Math.sin(angle);
      opacityKeys.push(depth > 0 ? 0.6 : 0.15);
    }
    controls.start({
      x: xKeys,
      y: yKeys,
      opacity: opacityKeys,
      transition: { duration: 20, repeat: Infinity, ease: "linear" },
    });
  }, [controls, angleOffset, transitioning, settled, settledPos]);

  if (settled) {
    return (
      <motion.span
        className="absolute left-1/2 top-1/2 text-[11px] font-sans font-normal tracking-[0.25em] uppercase text-muted-foreground whitespace-nowrap"
        style={{ translateX: "-50%", translateY: "-50%" }}
        initial={{
          x: settledPos.x,
          y: settledPos.y + 120,
          opacity: 0,
        }}
        animate={{
          x: settledPos.x,
          y: settledPos.y + 120,
          opacity: 0.65,
        }}
        transition={{
          duration: 0.6,
          delay: index * 0.06,
          ease: "easeOut",
        }}
      >
        {skill}
      </motion.span>
    );
  }

  return (
    <motion.span
      className="absolute left-1/2 top-1/2 text-[11px] font-sans font-normal tracking-[0.25em] uppercase text-muted-foreground whitespace-nowrap"
      style={{ translateX: "-50%", translateY: "-50%" }}
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
