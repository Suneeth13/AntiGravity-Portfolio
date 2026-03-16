"use client";

import { motion } from "framer-motion";

const certificationsData = {
  accent: [
    { name: "Microsoft Certified: Azure AI Fundamentals", issuer: "Microsoft", date: "Mar 2024" },
    { name: "Academy Accreditation: Generative AI Fundamentals", issuer: "Databricks", date: "Jan 2026" },
    { name: "Artificial Intelligence Fundamentals", issuer: "IBM", date: "Jan 2026" },
    { name: "Understanding LLMs and Basic Prompting Techniques", issuer: "CodeSignal", date: "Jan 2026" },
    { name: "J.P. Morgan Software Engineering Job Simulation", issuer: "Forage", date: "May 2024" },
  ],
  standard: [
    { name: "Ethics in the Age of Generative AI", issuer: "LinkedIn", date: "May 2024" },
    { name: "What Is Generative AI?", issuer: "LinkedIn", date: "May 2024" },
    { name: "Generative AI: The Evolution of Thoughtful Online Search", issuer: "LinkedIn", date: "May 2024" },
    { name: "Learning Microsoft 365 Copilot", issuer: "LinkedIn", date: "May 2024" },
    { name: "Streamlining Your Work with Microsoft Copilot", issuer: "LinkedIn", date: "May 2024" },
    { name: "Introduction to Artificial Intelligence", issuer: "LinkedIn", date: "Sep 2023" },
    { name: "AI Tools Workshop", issuer: "Be10x", date: "May 2025" },
    { name: "Android App Development", issuer: "Imarticus Learning", date: "Jul 2024" },
    { name: "Introduction to Packet Tracer", issuer: "Cisco", date: "Jan 2024" },
    { name: "Network Support and Security", issuer: "Cisco", date: "Jan 2024" },
    { name: "Wildlife Ecology", issuer: "NPTEL", date: "Nov 2024" },
    { name: "Python, C, C++ Spoken Tutorial", issuer: "IIT Bombay", date: "Apr 2023" },
    { name: "Cambridge English: KET & FCE", issuer: "Cambridge English", date: "" },
  ]
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 100 } },
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--text)]">
          Certifications
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {/* Accent Certifications */}
        {certificationsData.accent.map((cert, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="flex flex-col justify-between p-6 rounded-2xl border border-[var(--accent)]/50 bg-[var(--accent)]/5 hover:shadow-[0_0_24px_rgba(200,241,53,0.15)] transition-all duration-300 backdrop-blur-md"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-4 border border-[var(--accent)]/30">
                <span className="text-[var(--accent)] font-bold text-lg font-heading">
                  {cert.issuer.charAt(0)}
                </span>
              </div>
              <h3 className="font-bold text-[var(--text)] leading-snug mb-2 font-heading">
                {cert.name}
              </h3>
            </div>
            <div className="flex justify-between items-end mt-4 text-sm text-[var(--muted-foreground)]">
              <span>{cert.issuer}</span>
              <span className="font-mono">{cert.date}</span>
            </div>
          </motion.div>
        ))}

        {/* Standard Certifications */}
        {certificationsData.standard.map((cert, i) => (
          <motion.div
            key={`std-${i}`}
            variants={itemVariants}
            className="flex flex-col justify-between p-6 rounded-2xl border border-[var(--border)] bg-white/5 hover:border-[var(--muted)] transition-colors duration-300 backdrop-blur-md"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-[var(--border)]">
                <span className="text-[var(--muted-foreground)] font-bold text-lg font-heading">
                  {cert.issuer.charAt(0)}
                </span>
              </div>
              <h3 className="font-medium text-[var(--text)] leading-snug mb-2">
                {cert.name}
              </h3>
            </div>
            <div className="flex justify-between items-end mt-4 text-sm text-[var(--muted-foreground)]">
              <span>{cert.issuer}</span>
              {cert.date && <span className="font-mono">{cert.date}</span>}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
