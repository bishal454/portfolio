"use client";

import { useState } from "react";
import Link from "next/link";
import { profile } from "@/app/data/portfolio";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center">
            <span className="text-black font-bold text-sm">B</span>
          </div>
          <span className="text-lg font-bold text-white">Bishal Sah</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          <Link href="/" className="px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/5">
            Home
          </Link>
          <Link href="/about" className="px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/5">
            About
          </Link>
          <Link href="/projects" className="px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/5">
            Projects
          </Link>
          <Link href="/contact" className="px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/5">
            Contact
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
          >
            Contact Me
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <div className={`md:hidden border-t border-white/5 bg-black/95 backdrop-blur-xl mobile-menu ${open ? 'open' : ''}`}>
        <div className="px-6 py-4 flex flex-col gap-1">
          <Link href="/" onClick={() => setOpen(false)} className="px-3 py-2.5 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
            Home
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} className="px-3 py-2.5 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
            About
          </Link>
          <Link href="/projects" onClick={() => setOpen(false)} className="px-3 py-2.5 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
            Projects
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="px-3 py-2.5 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
            Contact
          </Link>
          <div className="flex gap-3 mt-3 pt-3 border-t border-white/5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}