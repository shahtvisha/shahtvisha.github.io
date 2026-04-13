import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const skills = [
   "Python", "C++", "TypeScript",  "Machine Learning","Deep Learning", "Robotics", "Research", "CogSci"
];

const ORBIT_DURATION = 5;

export default function OrbitalHero() {
  const [settled, setSettled] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const t1 = setTimeout(() => setTransitioning(true), (ORBIT_DURATION - 1.5) * 1000);
    const t2 = setTimeout(() => setSettled(true), ORBIT_DURATION * 1000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const desktopPositions = [
    { x: -220, y: 0 }, { x: -100, y: 0 }, { x: 20, y: 0 }, { x: 180, y: 0 },
    { x: -220, y: 36 }, { x: -50, y: 36 }, { x: 80, y: 36 }, { x: 200, y: 36 },
  ];

  const mobilePositions = [
    { x: -90, y: -20 }, { x: 30, y: -20 }, { x: -60, y: 10 }, { x: 60, y: 10 },
    { x: -90, y: 40 }, { x: 30, y: 40 }, { x: -60, y: 70 }, { x: 60, y: 70 },
  ];

  const settledPositions = isMobile ? mobilePositions : desktopPositions;
  const rx = isMobile ? 140 : 340;
  const ry = isMobile ? 90 : 200;
  const orbitSize = isMobile ? { width: 320, height: 220 } : { width: 700, height: 420 };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-6">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border pointer-events-none"
        style={{ width: orbitSize.width, height: orbitSize.height, borderColor: "hsl(220 13% 88%)" }}
        initial={{ opacity: 0.3 }}
        animate={{ opacity: transitioning ? 0 : 0.3 }}
        transition={{ duration: 1.5 }}
      />

      <div className="relative flex items-center justify-center w-full" style={{ maxWidth: orbitSize.width, height: isMobile ? 380 : 500 }}>
        {skills.map((skill, i) => (
          <SkillWord
            key={skill}
            skill={skill}
            index={i}
            total={skills.length}
            settled={settled}
            transitioning={transitioning}
            settledPos={settledPositions[i]}
            rx={rx}
            ry={ry}
          />
        ))}

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
          <motion.p
            className="text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.4em] uppercase text-muted-foreground mb-5 md:mb-7 font-sans font-medium text-center"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.2 }}
          >
            Master's Student · Brown University
          </motion.p>
          <motion.h1
            className="font-serif text-foreground text-center leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)", fontWeight: 500 }}
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
              Tvisha Shah
            </motion.span>
          </motion.h1>
          <motion.div
            className="w-8 md:w-10 h-px bg-primary/30 mt-4 md:mt-5 mb-4 md:mb-5"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          />
          <motion.p
            className="text-muted-foreground text-xs md:text-base max-w-[240px] md:max-w-[280px] mx-auto font-sans font-light leading-[1.7] text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.2 }}
          >
            Computer Science & Engineering
          </motion.p>
        </div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-10 md:bottom-14 flex flex-col items-center gap-2 cursor-pointer group"
        initial={{ opacity: 0 }}
        animate={{ opacity: settled ? 0.6 : 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-sans text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          Scroll
        </span>
        <motion.div
          className="w-5 h-8 rounded-full border border-muted-foreground/40 flex items-start justify-center p-1"
        >
          <motion.div
            className="w-1 h-1.5 rounded-full bg-muted-foreground"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.a>
    </section>
  );
}

function SkillWord({
  skill, index, total, settled, transitioning, settledPos, rx, ry,
}: {
  skill: string; index: number; total: number;
  settled: boolean; transitioning: boolean; settledPos: { x: number; y: number };
  rx: number; ry: number;
}) {
  const controls = useAnimation();
  const angleOffset = (index / total) * Math.PI * 2;
  const entranceDelay = index * 0.3;

  useEffect(() => {
    if (settled) return;

    if (transitioning) {
      controls.start({
        x: settledPos.x,
        y: settledPos.y + (rx < 200 ? 80 : 120),
        opacity: 0.7,
        transition: { type: "tween", duration: 1.5, ease: [0.25, 0.1, 0.25, 1] },
      });
      return;
    }

    const timeout = setTimeout(() => {
      const frames = 120;
      const xKeys: number[] = [];
      const yKeys: number[] = [];
      const opacityKeys: number[] = [];
      for (let f = 0; f <= frames; f++) {
        const angle = angleOffset + (f / frames) * Math.PI * 2;
        xKeys.push(Math.cos(angle) * rx);
        yKeys.push(Math.sin(angle) * ry);
        const depth = Math.sin(angle);
        opacityKeys.push(depth > 0 ? 0.6 : 0.15);
      }
      controls.start({
        x: xKeys, y: yKeys, opacity: opacityKeys,
        transition: { duration: 20, repeat: Infinity, ease: "linear" },
      });
    }, entranceDelay * 1000);

    return () => clearTimeout(timeout);
  }, [controls, angleOffset, transitioning, settled, settledPos, entranceDelay, rx, ry]);

  const baseClass = "absolute left-1/2 top-1/2 text-[9px] md:text-[11px] font-sans font-normal tracking-[0.2em] md:tracking-[0.25em] uppercase text-muted-foreground whitespace-nowrap";

  if (settled) {
    return (
      <motion.span
        className={baseClass}
        style={{ translateX: "-50%", translateY: "-50%" }}
        initial={{ x: settledPos.x, y: settledPos.y + (rx < 200 ? 80 : 120), opacity: 0 }}
        animate={{ x: settledPos.x, y: settledPos.y + (rx < 200 ? 80 : 120), opacity: 0.65 }}
        transition={{ duration: 0.6, delay: index * 0.06, ease: "easeOut" }}
      >
        {skill}
      </motion.span>
    );
  }

  return (
    <motion.span
      className={baseClass}
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
