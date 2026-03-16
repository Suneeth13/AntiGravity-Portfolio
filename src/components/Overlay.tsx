"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.15, 0.2], [1, 1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Section 2: 25% to 45%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.25, 0.35, 0.45], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.45], [100, -100]);

  // Section 3: 50% to 70%
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.5, 0.6, 0.7], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.45, 0.7], [100, -100]);

  const textShadow = "0 2px 20px rgba(0,0,0,0.8)";

  return (
    <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-center max-w-7xl mx-auto px-6 w-full h-full text-[var(--text)]">
      {/* Section 1 */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
        style={{ opacity: opacity1, y: y1 }}
      >
        <h1
          className="font-heading text-[clamp(2.5rem,6vw,5rem)] font-bold leading-tight uppercase"
          style={{ textShadow }}
        >
          Suneeth S
        </h1>
        <p className="text-xl md:text-2xl text-[var(--muted)]" style={{ textShadow }}>
          Creative Developer & AI Engineer
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        className="absolute inset-0 flex flex-col items-start justify-center text-left pl-6 md:pl-16 w-full max-w-3xl"
        style={{ opacity: opacity2, y: y2 }}
      >
        <h2
          className="font-heading text-[clamp(2.5rem,6vw,5rem)] font-bold leading-tight"
          style={{ textShadow }}
        >
          I build digital experiences.
        </h2>
        <p className="text-xl md:text-2xl text-[var(--muted)]" style={{ textShadow }}>
          From Android apps to AI systems — shipping real products.
        </p>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        className="absolute inset-0 flex flex-col items-end justify-center text-right pr-6 md:pr-16 w-full ml-auto max-w-3xl"
        style={{ opacity: opacity3, y: y3 }}
      >
        <h2
          className="font-heading text-[clamp(2.5rem,6vw,5rem)] font-bold leading-tight"
          style={{ textShadow }}
        >
          Bridging design and engineering.
        </h2>
        <p className="text-xl md:text-2xl text-[var(--muted)]" style={{ textShadow }}>
          Interned at IIT Hyderabad. Currently at VIT Chennai.
        </p>
      </motion.div>
    </div>
  );
}
