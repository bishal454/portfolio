"use client";

import { featuredProjects } from "@/app/data/portfolio";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-zinc-950" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-emerald-400 border border-emerald-500/20 rounded-full bg-emerald-500/5 mb-4">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Projects
          </h2>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
            Verified projects built with production-grade technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, i) => (
            <div key={project.slug} className={`scroll-reveal-delay-${(i % 2) + 1}`}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof featuredProjects[number] }) {
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden hover:border-emerald-500/20 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1 flex flex-col card-hover"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 rounded">
            {project.highlight.split("·")[0].trim()}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed mb-3 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[10px] font-mono text-zinc-500 bg-white/5 rounded border border-white/5 hover:border-emerald-500/20 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
            <GithubIcon className="w-3 h-3" /> View Source
          </span>
          {project.live && (
            <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-emerald-400 transition-colors">
              <ExternalLinkIcon className="w-3 h-3" /> Live
            </span>
          )}
        </div>
      </div>
    </a>
  );
}