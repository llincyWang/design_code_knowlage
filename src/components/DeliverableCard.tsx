import type { Deliverable } from "@/content/deliverables";

export default function DeliverableCard({ item }: { item: Deliverable }) {
  const Icon = item.icon;
  return (
    <div className="card-surface group flex h-full flex-col gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-[15px] font-semibold text-ink">{item.title}</h3>
          <span className="font-mono text-[11px] text-ink-faint">{item.en}</span>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-ink-soft">{item.desc}</p>

      <div className="mt-auto flex items-start gap-2 rounded-xl border border-designer-100 bg-designer-50/50 p-3">
        <span className="mt-0.5 shrink-0 font-mono text-[10px] font-semibold text-designer-600">对设计师</span>
        <p className="text-[12px] leading-relaxed text-ink">{item.designerNote}</p>
      </div>
    </div>
  );
}
