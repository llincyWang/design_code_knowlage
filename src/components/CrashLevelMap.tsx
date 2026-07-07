import { Check } from "lucide-react";
import { crashLevels, type CrashLevel } from "@/content/crashCases";
import Reveal from "./Reveal";

const accentMap: Record<
  CrashLevel["accent"],
  { badge: string; icon: string; ring: string; dot: string }
> = {
  flame: {
    badge: "bg-designer-500 text-white",
    icon: "text-white",
    ring: "border-designer-200",
    dot: "text-designer-500",
  },
  wrench: {
    badge: "bg-frontend-500 text-white",
    icon: "text-white",
    ring: "border-frontend-200",
    dot: "text-frontend-500",
  },
  alert: {
    badge: "bg-brand-600 text-white",
    icon: "text-white",
    ring: "border-brand-200",
    dot: "text-brand-600",
  },
  spark: {
    badge: "bg-ink text-white",
    icon: "text-white",
    ring: "border-black/[0.08]",
    dot: "text-ink",
  },
};

export default function CrashLevelMap() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {crashLevels.map((level, i) => {
        const a = accentMap[level.accent];
        const Icon = level.icon;
        return (
          <Reveal key={level.id} delay={i * 80}>
            <div className={`card-surface flex h-full flex-col gap-4 border ${a.ring} p-5 sm:p-6`}>
              <div className="flex items-start gap-3">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${a.badge} shadow-soft`}
                >
                  <Icon className={`h-5 w-5 ${a.icon}`} aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-semibold text-ink-faint">
                      第 {i + 1} 层
                    </span>
                    <h3 className="text-[16px] font-semibold leading-tight text-ink">
                      {level.title}
                    </h3>
                  </div>
                  <p className="text-[13px] leading-relaxed text-ink-soft">{level.desc}</p>
                </div>
              </div>

              <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {level.items.map((it) => (
                  <li key={it} className="flex items-start gap-1.5 text-[13px] text-ink-soft">
                    <Check className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${a.dot}`} aria-hidden="true" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
