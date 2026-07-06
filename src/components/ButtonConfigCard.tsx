import { useState } from "react";
import { Check, Loader2, Plus } from "lucide-react";
import { buttonConfig } from "@/content/buttonConfig";
import { cn } from "@/lib/utils";

type Selection = Record<string, string>;

const initial: Selection = {
  type: "primary",
  size: "medium",
  state: "default",
  icon: "false",
};

const typeStyles: Record<string, string> = {
  primary: "bg-brand-gradient text-white shadow-glow",
  secondary: "border border-ink/15 bg-white text-ink",
  danger: "bg-designer-500 text-white shadow-soft",
};

const sizeStyles: Record<string, string> = {
  small: "px-3 py-1.5 text-xs",
  medium: "px-4 py-2.5 text-sm",
  large: "px-6 py-3.5 text-base",
};

export default function ButtonConfigCard() {
  const [sel, setSel] = useState<Selection>(initial);

  const disabled = sel.state === "disabled";
  const loading = sel.state === "loading";
  const showIcon = sel.icon === "true";

  return (
    <div className="card-surface h-full p-5 sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="chip border-frontend-100 bg-frontend-50 text-frontend-600">
          &lt;Button /&gt;
        </span>
        <span className="font-mono text-[11px] text-ink-faint">点标签试试看</span>
      </div>

      {/* 预览区 */}
      <div className="mb-5 flex min-h-[96px] items-center justify-center rounded-xl2 bg-canvas-soft/70 p-5">
        <button
          type="button"
          disabled={disabled || loading}
          className={cn(
            "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all",
            typeStyles[sel.type],
            sizeStyles[sel.size],
            sel.state === "hover" && "-translate-y-0.5 brightness-105",
            (disabled || loading) && "cursor-not-allowed opacity-50",
          )}
        >
          {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
          {showIcon && !loading && <Plus className="h-4 w-4" aria-hidden="true" />}
          按钮
        </button>
      </div>

      {/* 配置项 */}
      <div className="space-y-3.5">
        {buttonConfig.map((cfg) => (
          <div key={cfg.prop} className="flex flex-wrap items-center gap-2">
            <span className="w-14 shrink-0 font-mono text-xs font-medium text-ink-faint">
              {cfg.prop}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {cfg.options.map((opt) => {
                const active = sel[cfg.prop] === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setSel((s) => ({ ...s, [cfg.prop]: opt }))}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 font-mono text-[11px] transition-colors",
                      active
                        ? "border-brand-400 bg-brand-50 text-brand-600"
                        : "border-black/[0.08] bg-white text-ink-soft hover:border-black/20",
                    )}
                    aria-pressed={active}
                  >
                    {active && <Check className="h-3 w-3" aria-hidden="true" />}
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
