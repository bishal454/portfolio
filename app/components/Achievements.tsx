import { achievements } from "@/app/data/portfolio";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-emerald-400 border border-emerald-500/20 rounded-full bg-emerald-500/5 mb-4">
            Recognition
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Achievements
          </h2>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
            Verified accomplishments from my academic and open-source work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, i) => (
            <div
              key={achievement.title}
              className={`group p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 card-hover scroll-reveal-delay-${(i % 3) + 1}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-xs text-zinc-600">#{i + 1}</span>
              </div>
              <h3 className="font-bold text-white text-sm mb-1">{achievement.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{achievement.description}</p>
              <span className="inline-block mt-3 text-xs text-emerald-400 font-medium">{achievement.source}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}