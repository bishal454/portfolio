export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-zinc-950" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-emerald-400 border border-emerald-500/20 rounded-full bg-emerald-500/5 mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Who I Am
          </h2>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
            Full-stack engineer at Savatronic Healthcare Technologies, building AI-powered systems at the intersection of software and real-world impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-zinc-300 leading-relaxed">
              I&apos;m <strong className="text-white">Bishal Ranjan Sah</strong>, a Computer Science & Engineering student at{" "}
              <strong className="text-white">MNNIT Allahabad</strong>, currently working as a Full-Stack Engineer at Savatronic Healthcare Technologies.
            </p>

            <p className="text-lg text-zinc-300 leading-relaxed">
              At Savatronic, I architect backend systems, build real-time telemetry pipelines, and develop AI-powered features. My work spans Next.js, tRPC, Prisma, FastAPI, and Vertex AI — all grounded in production-grade code.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: "Current Role", value: "Full-Stack Engineer" },
                { label: "Education", value: "B.Tech CSE, MNNIT" },
                { label: "GitHub", value: "@bishal454" },
                { label: "Primary Stack", value: "Next.js, tRPC, AI" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/20 transition-colors"
                >
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">{item.label}</p>
                  <p className="text-sm font-semibold text-white mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">What I Build</h3>
            {[
              {
                title: "Agentic AI Platforms",
                desc: "PlaySphere — an agentic sports analysis platform using Gemini and Vertex AI for intelligent venue discovery.",
              },
              {
                title: "Real-Time Platforms",
                desc: "Resonix — a text-to-speech platform with tRPC, Prisma, and PostgreSQL featuring scoped voice management.",
              },
              {
                title: "Full-Stack Products",
                desc: "Scalable web applications — ivy-homes property dashboard and FlowSync workflow automation built with Next.js.",
              },
              {
                title: "Open Source",
                desc: "Contributing to and building projects that solve real problems across healthcare, sports, and automation.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 hover:bg-white/[0.04] transition-all"
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