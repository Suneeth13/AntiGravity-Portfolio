"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Development Engineer 1 (SDE-1) Intern",
    company: "Alfaleus Technology Private Limited",
    location: "On-site, Technology and Research Park, IIT Hyderabad",
    date: "Jun 2025 – Jul 2025",
    bullets: [
      "Built frontend + full-stack features for Netra.care healthcare platform using React.js, Next.js, Node.js",
      "Developed scraping pipelines for grant/fund/reward data; exposed via backend APIs",
      "Automated internal workflows using Google Apps Script",
    ],
  },
  {
    title: "Meta Career Day: Virtual Learning Series 2025",
    company: "Meta",
    location: "Remote Apprenticeship",
    date: "May 2025 – Jun 2025",
    bullets: [
      "8-week virtual program on AI innovations and engineering roles at Meta",
      "Sessions with Meta engineers on the future of AI",
    ],
  },
  {
    title: "Android Developer Intern",
    company: "Imarticus Learning",
    location: "Remote",
    date: "Jun 2024 – Jul 2024",
    bullets: [
      "Built interactive Android apps using Android Studio, Kotlin, Java",
      "Focused on UI/UX design, API integration, database management",
    ],
  },
  {
    title: "Machine Learning Intern",
    company: "Bharat Intern",
    location: "Remote",
    date: "May 2024 – Jun 2024",
    bullets: [
      "Developed and optimized ML models for predictive analytics",
      "Data preprocessing, feature engineering using Python and TensorFlow",
    ],
  },
  {
    title: "Data Scientist Intern",
    company: "Teachnook",
    location: "Remote",
    date: "Sep 2022 – Nov 2022",
    bullets: [
      "EDA on Kaggle datasets using Google Colab",
      "Model development in Python, AI, and ML",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-4xl mx-auto w-full">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-4xl md:text-5xl font-bold mb-16 text-[var(--accent)]"
      >
        Experience
      </motion.h2>

      <div className="relative border-l border-[var(--border)] ml-3 md:ml-6 space-y-12 pb-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute w-4 h-4 rounded-full bg-[var(--accent)] -left-[8.5px] top-1.5 ring-4 ring-[#0e0e0e]" />

            <div className="flex flex-col gap-1 mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-[var(--text)]">
                {exp.title}
              </h3>
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 text-[var(--muted-foreground)]">
                <span className="font-medium text-[var(--accent2)]">{exp.company}</span>
                <span className="hidden md:inline text-[var(--border)]">•</span>
                <span>{exp.location}</span>
                <span className="hidden md:inline text-[var(--border)]">•</span>
                <span className="text-sm font-mono bg-white/5 px-2 py-0.5 rounded border border-[var(--border)] w-fit">
                  {exp.date}
                </span>
              </div>
            </div>

            <ul className="space-y-2 text-[var(--muted)] list-disc pl-4 marker:text-[var(--border)]">
              {exp.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
