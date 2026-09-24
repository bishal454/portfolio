import { techStack } from "@/app/data/portfolio";

export default function TechStack() {
  const categories = [
    { label: "Languages", items: techStack.languages },
    { label: "Frontend", items: techStack.frontend },
    { label: "Backend", items: techStack.backend },
    { label: "Databases", items: techStack.databases },
    { label: "AI / ML", items: techStack.aiML },
    { label: "DevOps / Tools", items: [...techStack.devops, ...techStack.tools] },
  ];

  const colorMap: Record<string, string> = {
    Languages: "text-amber-400",
    Frontend: "text-blue-400",
    Backend: "text-emerald-400",
    Databases: "text-purple-400",
    "AI / ML": "text-rose-400",
    "DevOps / Tools": "text-cyan-400",
  };

  return (
    <section id="tech" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-zinc-950" />
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-emerald-400 border border-emerald-500/20 rounded-full bg-emerald-500/5 mb-4">
            Technologies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Tech Stack
          </h2>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
            Technologies verified through my projects and contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div key={cat.label} className={`group scroll-reveal-delay-${(i % 3) + 1}`}>
              <h3 className={`text-xs font-bold uppercase tracking-wider mb-3 ${colorMap[cat.label]}`}>
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, j) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium bg-white/5 border border-white/5 text-zinc-300 hover:border-emerald-500/30 hover:bg-emerald-500/5 hover:text-white transition-all cursor-default card-hover"
                    style={{ animationDelay: `${(i * 3 + j) * 0.05}s` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}