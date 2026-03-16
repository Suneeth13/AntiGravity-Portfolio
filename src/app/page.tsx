import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#0e0e0e] text-[#f0f0f0] font-sans antialiased overflow-x-hidden min-h-screen">
      <Navbar />
      <ScrollyCanvas />
      <div className="bg-[#0e0e0e] relative z-20 -mt-[400vh]">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </div>
    </main>
  );
}
