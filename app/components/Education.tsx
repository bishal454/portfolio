import { education, experience } from "@/app/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-emerald-400 border border-emerald-500/20 rounded-full bg-emerald-500/5 mb-4">
            Background
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Education & Experience
          </h2>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-lg font-bold text-emerald-400 mb-6">Education</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-800" />
              <div className="space-y-8">
                {education.map((edu) => (
                  <div key={edu.degree} className="relative pl-12">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center border-2 border-emerald-500/30">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.959 11.959 0 0012 20.055a11.959 11.959 0 00-6.817-2.95l6.16-3.422a12.083 12.083 0 01.665 6.479z" />
                      </svg>
                    </div>
                    <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-colors">
                      <h4 className="font-semibold text-white">{edu.degree}</h4>
                      <p className="text-sm text-zinc-400 mt-1">{edu.institution}</p>
                      <p className="text-xs text-zinc-500 mt-2">{edu.period}</p>
                      <p className="text-sm text-zinc-500 mt-2 leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-emerald-400 mb-6">Experience</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-800" />
              <div className="space-y-8">
                {experience.map((exp) => (
                  <div key={exp.title} className="relative pl-12">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center border-2 border-emerald-500/30">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-colors">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h4 className="font-semibold text-white">{exp.title}</h4>
                        <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-400 mt-1">{exp.company}</p>
                      <p className="text-sm text-zinc-500 mt-2 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}