import { Loader2, Inbox, AlertTriangle, Ban, CheckCircle2 } from "lucide-react";
import { states } from "@/content/states";

const iconMap: Record<string, typeof Loader2> = {
  loading: Loader2,
  empty: Inbox,
  error: AlertTriangle,
  disabled: Ban,
  selected: CheckCircle2,
};

const toneMap: Record<string, string> = {
  loading: "text-frontend-500 bg-frontend-50 border-frontend-100",
  empty: "text-ink-faint bg-canvas-soft border-black/[0.06]",
  error: "text-designer-600 bg-designer-50 border-designer-100",
  disabled: "text-ink-faint bg-canvas-soft border-black/[0.06]",
  selected: "text-brand-600 bg-brand-50 border-brand-100",
};

export default function StateCard() {
  return (
    <div className="card-surface h-full p-5 sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="chip border-black/[0.06] bg-white/70 text-ink-soft">页面状态</span>
        <span className="font-mono text-[11px] text-ink-faint">默认态只是其中一种</span>
      </div>
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        {states.map((s) => {
          const Icon = iconMap[s.key];
          return (
            <div
              key={s.key}
              className={`flex flex-col gap-1.5 rounded-xl border p-3 ${toneMap[s.key]}`}
            >
              <Icon
                className={`h-5 w-5 ${s.key === "loading" ? "animate-spin" : ""}`}
                aria-hidden="true"
              />
              <span className="font-mono text-[11px] font-semibold">{s.en}</span>
              <span className="text-xs font-medium text-ink">{s.label}</span>
              <span className="text-[11px] leading-snug text-ink-soft">{s.desc}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
