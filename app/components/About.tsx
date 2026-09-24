export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-zinc-950" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-emerald-400 border border-emerald-500/20 rounded-full bg-emerald-500/5 mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Who I Am
          </h2>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
            Software Engineer at MNNIT Allahabad, building intelligent applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-zinc-300 leading-relaxed scroll-reveal-delay-1">
              I&apos;m <strong className="text-white">Bishal Ranjan Sah</strong>, a Computer Science &amp; Engineering student at{" "}
              <strong className="text-white">MNNIT Allahabad</strong>. I build intelligent applications — from agentic AI platforms to food ordering platforms.
            </p>

            <p className="text-lg text-zinc-300 leading-relaxed scroll-reveal-delay-2">
              My work spans Next.js, tRPC, Prisma, FastAPI, Gemini, and Vertex AI — all grounded in production-grade code shipped to real users.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: "Education", value: "B.Tech CSE, MNNIT" },
                { label: "GitHub", value: "@bishal454" },
                { label: "Primary Stack", value: "Next.js, tRPC, AI" },
                { label: "Focus", value: "SDE, AI/ML" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className={`p-4 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/20 transition-colors card-hover scroll-reveal-delay-${i + 1}`}
                >
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">{item.label}</p>
                  <p className="text-sm font-semibold text-white mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white scroll-reveal">What I Build</h3>
            {[
              {
                title: "Agentic AI Platforms",
                desc: "PlaySphere — an agentic sports analysis platform using Gemini and Vertex AI for intelligent venue discovery.",
              },
              {
                title: "Modern Products",
                desc: "Resonix (text-to-speech), ivy-homes (property dashboard), FlowSync (workflow automation) — all built with Next.js.",
              },
              {
                title: "Open Source",
                desc: "Contributing to and building projects that solve real problems across sports, food ordering, and automation.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`group flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 hover:bg-white/[0.04] transition-all card-hover scroll-reveal-delay-${i + 1}`}
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                  <span className="font-bold text-sm">{i + 1}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                  <p className="text-sm text-zinc-400 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}