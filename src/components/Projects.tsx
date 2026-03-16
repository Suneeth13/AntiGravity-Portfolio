"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Guardian Track 2026",
    tech: "Kotlin, PostgreSQL, Android",
    desc: "Android app with live GPS tracking, panic button (calls emergency contact), second panic button sends SMS with location, audio recording on open, detects 'help me' voice command to auto-trigger SMS alert.",
    link: "https://github.com/Suneeth13/GuardianTrack",
  },
  {
    title: "AI Smart Resume Screener",
    tech: "Flask, Google Gemini AI, SQLite, Python",
    desc: "Full-stack AI web app that parses resumes, extracts skills/education/experience, matches JD computationally with Gemini AI, and provides justification scores.",
    link: "https://github.com/Suneeth13/Smart-Resume-Screener",
  },
  {
    title: "Placify",
    tech: "Google Apps Script, Gmail API",
    desc: "Automation tool that scans college inbox for placement/internship keywords and instantly forwards a digest notification to personal Gmail.",
  },
  {
    title: "Rice Image Classification",
    tech: "Python, TensorFlow, Keras, CNN",
    desc: "4 Conv2D layers, pooling, 3 fully connected layers. Applied L2 regularization, dropout, ADAM optimizer, early stopping.",
    link: "https://github.com/Suneeth13/Rice-Classification",
  },
  {
    title: "Real-Time Object Detection System",
    tech: "Python, TensorFlow, OpenCV, MobileNetV2",
    desc: "Real-time object detection from video feed. Top-3 predictions annotated on live frames.",
    link: "https://tinyurl.com/realtimeobjectdetectionsystem",
  },
  {
    title: "Sudoku 2026",
    tech: "Java, Kotlin, Android Studio",
    desc: "User-friendly Sudoku game with difficulty levels, live error detection, hints, timer, and responsive layout.",
    link: "https://github.com/Suneeth13/Sudoku2026",
  },
  {
    title: "ShopEase (Amazon Clone)",
    tech: "HTML, CSS, JavaScript",
    desc: "Pixel-accurate Amazon frontend clone with responsive design, navigation, product listings, and cart flow.",
    link: "https://github.com/Suneeth13/AmazonClone",
  },
  {
    title: "Trackflow 2025",
    tech: "TypeScript",
    desc: "Modern task/flow management system.",
    link: "https://github.com/Suneeth13/Trackflow2025",
  },
  {
    title: "Web-to-Sheet Logger",
    tech: "JavaScript, Google Sheets API",
    desc: "Logs web form submissions directly to Google Sheets. Useful for lightweight data capture pipelines.",
    link: "https://github.com/Suneeth13/Web-To-Sheet-Logger",
  },
  {
    title: "Virtual Machine Monitoring System",
    tech: "Python",
    desc: "Tracks CPU, memory, network, and storage metrics in real time with dynamic visualizations and user-defined threshold alerts.",
    link: "https://github.com/Suneeth13/Operating-systems",
  },
];

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
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 }
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--text)]">
          Selected <span className="text-[var(--accent)]">Work</span>
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="group relative flex flex-col justify-between p-6 rounded-2xl border border-[var(--border)] backdrop-blur-md bg-white/5 hover:shadow-[0_0_32px_rgba(200,241,53,0.2)] transition-all duration-300 overflow-hidden"
          >
            {/* Glossy gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            
            <div className="mb-6 relative z-10">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold font-heading text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                  {project.title}
                </h3>
                {project.link && (
                  <Link 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[var(--muted-foreground)] hover:text-[var(--text)] transition-colors p-1"
                  >
                    {project.link.includes("github.com") ? (
                      <Github className="w-5 h-5" />
                    ) : (
                      <ExternalLink className="w-5 h-5" />
                    )}
                  </Link>
                )}
              </div>
              <p className="text-[var(--muted)] text-sm leading-relaxed">
                {project.desc}
              </p>
            </div>
            
            <div className="relative z-10 text-xs font-mono text-[var(--accent2)] flex flex-wrap gap-2">
              {project.tech.split(", ").map((t) => (
                <span 
                  key={t}
                  className="px-2 py-1 rounded bg-[var(--border)]/50 border border-[var(--border)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
