import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const skills = [
  "React", "Python", "C++", "TypeScript",
  "Machine Learning", "Algorithms", "Linux", "Embedded Systems",
];

const ORBIT_DURATION = 4; // seconds before settling

export default function OrbitalHero() {
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSettled(true), ORBIT_DURATION * 1000);
    return () => clearTimeout(timer);
  }, []);

  // Calculate orbital positions
  const orbitRadius = 180;
  const getOrbitalPosition = (index: number, total: number, time: number) => {
    const angle = (index / total) * Math.PI * 2 + time;
    return {
      x: Math.cos(angle) * orbitRadius,
      y: Math.sin(angle) * orbitRadius * 0.4, // elliptical
    };
  };

  // Settled positions: arranged as a grid below the name
  const settledPositions = skills.map((_, i) => ({
    x: (i % 4 - 1.5) * 160,
    y: Math.floor(i / 4) * 56 + 80,
  }));

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Center: Name */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="font-mono text-sm tracking-widest text-primary mb-3 uppercase">
          Computer Engineer
        </p>
        <h1 className="text-6xl md:text-8xl font-bold leading-none mb-2">
          <span className="text-gradient-primary">Your</span>{" "}
          <span className="text-foreground">Name</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl mt-4 max-w-md mx-auto">
          CS & Engineering student who builds things that matter.
        </p>
      </motion.div>

      {/* Orbiting skills */}
      <div className="relative z-10 mt-8" style={{ height: settled ? "auto" : "0px" }}>
        <div className="relative flex flex-wrap justify-center gap-3" style={{ minHeight: settled ? "auto" : "1px" }}>
          {skills.map((skill, i) => (
            <OrbitalSkill
              key={skill}
              skill={skill}
              index={i}
              total={skills.length}
              settled={settled}
              settledPosition={settledPositions[i]}
              orbitRadius={orbitRadius}
            />
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: settled ? 1 : 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function OrbitalSkill({
  skill,
  index,
  total,
  settled,
  settledPosition,
  orbitRadius,
}: {
  skill: string;
  index: number;
  total: number;
  settled: boolean;
  settledPosition: { x: number; y: number };
  orbitRadius: number;
}) {
  const controls = useAnimation();
  const angleOffset = (index / total) * Math.PI * 2;

  useEffect(() => {
    if (!settled) {
      // Orbit animation using keyframes
      const frames = 60;
      const keyframesX: number[] = [];
      const keyframesY: number[] = [];
      for (let f = 0; f <= frames; f++) {
        const angle = angleOffset + (f / frames) * Math.PI * 2;
        keyframesX.push(Math.cos(angle) * orbitRadius);
        keyframesY.push(Math.sin(angle) * orbitRadius * 0.4);
      }
      controls.start({
        x: keyframesX,
        y: keyframesY,
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        },
      });
    } else {
      // Settle to final position (just use layout)
      controls.start({
        x: 0,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 80,
          damping: 15,
          delay: index * 0.05,
        },
      });
    }
  }, [settled, controls, angleOffset, index, orbitRadius, total]);

  if (settled) {
    return (
      <motion.span
        className="inline-block px-4 py-2 rounded-lg border border-glow font-mono text-sm text-primary bg-secondary"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 12,
          delay: index * 0.08,
        }}
      >
        {skill}
      </motion.span>
    );
  }

  return (
    <motion.span
      className="absolute px-4 py-2 rounded-lg border border-glow font-mono text-sm text-primary bg-secondary whitespace-nowrap"
      style={{ left: "50%", top: "50%", translateX: "-50%", translateY: "-50%" }}
      animate={controls}
      initial={{
        x: Math.cos(angleOffset) * orbitRadius,
        y: Math.sin(angleOffset) * orbitRadius * 0.4,
        opacity: 0,
      }}
      transition={{ opacity: { duration: 0.5 } }}
      whileInView={{ opacity: 1 }}
    >
      {skill}
    </motion.span>
  );
}
