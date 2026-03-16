"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Phone, Code2 } from "lucide-react";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/Suneeth13" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/reachmesuneeth" },
  { icon: Code2, label: "LeetCode", href: "https://leetcode.com/u/ssanapoori" },
  { icon: Code2, label: "GeeksforGeeks", href: "https://geeksforgeeks.org/ssana2nb" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 flex flex-col items-center text-center w-full bg-[#0e0e0e] border-t border-[var(--border)] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--accent)]/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto z-10"
      >
        <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-bold text-[var(--text)] mb-6 leading-tight">
          Let&apos;s build something.
        </h2>
        
        <p className="text-xl md:text-2xl text-[var(--muted-foreground)] mb-12">
          Open to internships, collaborations, and interesting problems.
        </p>

        <a 
          href="mailto:ssanapoori@gmail.com"
          className="inline-block bg-[var(--accent)] text-[#0e0e0e] font-bold text-lg md:text-xl px-10 py-5 rounded-full hover:bg-[var(--accent2)] hover:shadow-[0_0_32px_rgba(200,241,53,0.4)] hover:scale-105 transition-all duration-300 mb-16"
        >
          ssanapoori@gmail.com
        </a>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-16">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors group"
              >
                <div className="p-3 rounded-full border border-[var(--border)] bg-white/5 group-hover:border-[var(--accent)] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-medium hidden sm:block">{link.label}</span>
              </a>
            );
          })}
          <a
            href="tel:+919344519811"
            className="flex items-center gap-2 text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors group"
          >
            <div className="p-3 rounded-full border border-[var(--border)] bg-white/5 group-hover:border-[var(--accent)] transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <span className="font-medium hidden sm:block">+91 93445 19811</span>
          </a>
        </div>

        <p className="text-[var(--muted)] text-sm max-w-sm mx-auto leading-relaxed">
          Plot 27, Thiruvalluvar Nagar, Tondiarpet<br/>
          Chennai, TN 600081
        </p>
      </motion.div>
    </section>
  );
}
