import type { Knowledge } from "@/types";

export default function KnowledgeCard({ item }: { item: Knowledge }) {
  return (
    <div className="card-surface group relative h-full overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <span className="pointer-events-none absolute -right-2 -top-4 select-none font-display text-7xl font-extrabold text-black/[0.035] transition-colors group-hover:text-brand-500/10">
        {item.no}
      </span>
      <div className="relative">
        <div className="mb-4 flex items-baseline gap-2">
          <span className="font-mono text-sm font-semibold text-brand-500">{item.no}</span>
          <h3 className="text-lg font-semibold text-ink">{item.zh}</h3>
          <span className="font-mono text-xs text-ink-faint">{item.en}</span>
        </div>
        <p className="text-sm leading-relaxed text-ink-soft">{item.desc}</p>
      </div>
      <span className="mt-5 block h-1 w-10 rounded-full bg-brand-gradient opacity-60 transition-all duration-300 group-hover:w-16 group-hover:opacity-100" />
    </div>
  );
}
