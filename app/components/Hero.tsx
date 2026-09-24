"use client";

import { profile } from "@/app/data/portfolio";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.06),transparent_50%)]" />

      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center py-24 lg:py-32">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-sm font-medium animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] animate-fade-in-up">
            <span className="block">Bishal Ranjan</span>
            <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 bg-clip-text text-transparent gradient-text">
              Sah
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-lg animate-fade-in-up">
            {profile.subtitle}
          </p>

          <p className="text-base text-zinc-400 leading-relaxed max-w-md animate-fade-in-up">
            {profile.bio}
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-all hover:shadow-lg hover:shadow-emerald-500/20"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium transition-all"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium transition-all"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center animate-float">
          <div className="relative">
            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-emerald-500/20 shadow-2xl shadow-emerald-500/10">
              <Image
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover"
                width={320}
                height={320}
                priority
              />
            </div>
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 opacity-20 blur-xl" />
          </div>
        </div>
      </div>


    </section>
  );
}