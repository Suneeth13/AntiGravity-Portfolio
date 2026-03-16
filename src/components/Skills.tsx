"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Languages",
    items: ["Python", "C", "C++", "Java", "Kotlin", "TypeScript", "JavaScript", "HTML/CSS"],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "React.js", "Next.js", "Node.js", "Flask", "TensorFlow", "Keras", 
      "scikit-learn", "OpenCV", "Jetpack Compose", "pandas", "NumPy"
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Android Studio", "Google Apps Script", "Google Colab", "Git", "GitHub", 
      "PostgreSQL", "SQLite", "Microsoft Azure", "Packet Tracer"
    ],
  },
  {
    category: "Domains",
    items: [
      "Machine Learning", "Deep Learning", "Computer Vision", "Android Development", 
      "Full-Stack Web", "Data Science", "Prompt Engineering"
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const pillVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 200, damping: 20 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--accent)]">
          Skills
        </h2>
      </motion.div>

      <div className="space-y-12">
        {skillsData.map((section, idx) => (
          <div key={idx} className="space-y-4">
            <h3 className="text-xl font-heading text-[var(--text)] border-b border-[var(--border)] pb-2">
              {section.category}
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-wrap gap-3"
            >
              {section.items.map((skill, i) => (
                <motion.div
                  key={i}
                  variants={pillVariants}
                  className="px-4 py-2 bg-white/5 backdrop-blur-md border border-[var(--border)] rounded-full text-[var(--text)] text-sm font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
