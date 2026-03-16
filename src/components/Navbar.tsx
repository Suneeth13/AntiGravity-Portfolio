"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers = navLinks.map(({ href }) => {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);

      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(href);
            }
          });
        },
        { rootMargin: "-50% 0px -50% 0px" }
      );

      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.element);
      });
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12 flex items-center justify-between",
        scrolled
          ? "backdrop-blur-md bg-[#0e0e0e]/80 border-b border-[var(--border)]"
          : "bg-transparent border-transparent"
      )}
    >
      <Link href="/" className="font-heading text-xl font-bold tracking-tight">
        SUNEETH S
      </Link>
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-[var(--accent)]",
              activeSection === link.href
                ? "text-[var(--accent)]"
                : "text-[var(--muted-foreground)]"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
