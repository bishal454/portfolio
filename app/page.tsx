"use client";

import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import TechStack from "@/app/components/TechStack";
import Projects from "@/app/components/Projects";
import Achievements from "@/app/components/Achievements";
import Education from "@/app/components/Education";
import Contact from "@/app/components/Contact";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="scroll-reveal"><Hero /></div>
      <div className="scroll-reveal"><About /></div>
      <div className="scroll-reveal"><TechStack /></div>
      <div className="scroll-reveal"><Projects /></div>
      <div className="scroll-reveal"><Achievements /></div>
      <div className="scroll-reveal"><Education /></div>
      <div className="scroll-reveal"><Contact /></div>
    </>
  );
}