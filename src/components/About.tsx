"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

function AnimatedCounter({ from, to }: { from: number; to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(to);
    }
  }, [inView, motionValue, to]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          Math.floor(latest)
        );
      }
    });
  }, [springValue]);

  return <span ref={ref} />;
}

export default function About() {
  return (
    <section id="about" className="pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto w-full min-h-screen flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="flex flex-col items-center justify-center p-6 border border-[var(--border)] rounded-2xl backdrop-blur-md bg-white/5 hover:shadow-[0_0_32px_rgba(200,241,53,0.2)] transition-all duration-300">
          <div className="text-5xl font-heading font-bold text-[var(--accent)] mb-2 flex items-center">
            <AnimatedCounter from={0} to={5} />+
          </div>
          <div className="text-[var(--muted-foreground)] text-sm uppercase tracking-wider font-medium text-center">
            Internships & Programs
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center p-6 border border-[var(--border)] rounded-2xl backdrop-blur-md bg-white/5 hover:shadow-[0_0_32px_rgba(200,241,53,0.2)] transition-all duration-300">
          <div className="text-5xl font-heading font-bold text-[var(--accent)] mb-2 flex items-center">
            <AnimatedCounter from={0} to={15} />+
          </div>
          <div className="text-[var(--muted-foreground)] text-sm uppercase tracking-wider font-medium text-center">
            Projects Built
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-6 border border-[var(--border)] rounded-2xl backdrop-blur-md bg-white/5 hover:shadow-[0_0_32px_rgba(200,241,53,0.2)] transition-all duration-300">
          <div className="text-5xl font-heading font-bold text-[var(--accent)] mb-2 flex items-center">
            <AnimatedCounter from={0} to={25} />+
          </div>
          <div className="text-[var(--muted-foreground)] text-sm uppercase tracking-wider font-medium text-center">
            Certifications
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-6 text-xl md:text-2xl leading-relaxed text-[var(--muted-foreground)]"
      >
        <p>
          <strong className="text-[var(--text)]">Suneeth S</strong> is a final-year B.Tech student in Artificial Intelligence & Machine Learning at VIT Chennai, graduating 2026. He&apos;s shipped production code at Alfaleus Technology (IIT Hyderabad), built Android apps, trained CNNs, and automated workflows with Google Apps Script.
        </p>
        <p>
          Ranked AIR 331 in a national coding hackathon. JEE qualified with 93 percentile. Fluent in English, Tamil, Telugu, Hindi, and Sanskrit. Cyclist, singer, and gym regular when not pushing commits.
        </p>
      </motion.div>
    </section>
  );
}
