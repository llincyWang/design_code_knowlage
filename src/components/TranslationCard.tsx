import { MessageSquareQuote, HelpCircle, Languages } from "lucide-react";
import type { Translation } from "@/types";

export default function TranslationCard({ item }: { item: Translation }) {
  return (
    <div className="card-surface group flex h-full flex-col gap-4 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      {/* 前端说 */}
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-frontend-100 text-frontend-600">
          <MessageSquareQuote className="h-4 w-4" aria-hidden="true" />
        </span>
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wide text-ink-faint">前端说</p>
          <p className="mt-0.5 text-[15px] font-medium text-ink">{item.frontendSays}</p>
        </div>
      </div>

      {/* 设计师听 */}
      <div className="flex items-center gap-3 rounded-xl bg-canvas-soft/70 px-3 py-2">
        <HelpCircle className="h-4 w-4 shrink-0 text-designer-500" aria-hidden="true" />
        <p className="text-sm text-ink-soft">
          设计师听：
          <span className="font-mono font-semibold text-designer-600">{item.designerHears}</span>
        </p>
      </div>

      {/* 翻译 */}
      <div className="mt-auto flex items-start gap-3 rounded-xl border border-brand-100 bg-brand-50/60 p-3">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-500 text-white">
          <Languages className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
        <p className="text-[13px] leading-relaxed text-ink">{item.translation}</p>
      </div>
    </div>
  );
}
