import { Eye, Zap, HelpCircle, Wrench, ArrowRight } from "lucide-react";
import type { CrashCase } from "@/content/crashCases";
import ScreenshotPlaceholder from "./ScreenshotPlaceholder";

export default function CrashCaseCard({ item }: { item: CrashCase }) {
  return (
    <div className="card-surface group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      {/* 顶部：标签 + 标题 */}
      <div className="flex flex-col gap-2.5 p-5 pb-4 sm:p-6 sm:pb-4">
        <span className="chip w-fit border-designer-200 bg-designer-50 text-designer-600">
          {item.tag}
        </span>
        <h3 className="text-balance text-[17px] font-semibold leading-snug text-ink">
          {item.title}
        </h3>
      </div>

      {/* 截图对比区：移动端上下，桌面端左右 */}
      <div className="grid gap-3 px-5 sm:grid-cols-2 sm:px-6">
        <figure className="flex flex-col gap-1.5">
          <figcaption className="font-mono text-[11px] font-medium text-designer-600">
            设计稿看起来
          </figcaption>
          {item.beforeImage ? (
            <img
              src={item.beforeImage}
              alt={`${item.title}·设计稿`}
              className="aspect-[4/3] w-full rounded-xl border border-black/[0.06] object-cover"
            />
          ) : (
            <ScreenshotPlaceholder label="放设计稿截图" variant="designer" />
          )}
        </figure>
        <figure className="flex flex-col gap-1.5">
          <figcaption className="font-mono text-[11px] font-medium text-frontend-600">
            代码还原后
          </figcaption>
          {item.afterImage ? (
            <img
              src={item.afterImage}
              alt={`${item.title}·代码还原`}
              className="aspect-[4/3] w-full rounded-xl border border-black/[0.06] object-cover"
            />
          ) : (
            <ScreenshotPlaceholder label="放还原截图" variant="frontend" />
          )}
        </figure>
      </div>

      {/* 四段解释 */}
      <dl className="mt-4 flex flex-col gap-3 p-5 pt-0 sm:p-6 sm:pt-0">
        <div className="flex items-start gap-2.5">
          <Eye className="mt-0.5 h-4 w-4 shrink-0 text-ink-faint" aria-hidden="true" />
          <div>
            <dt className="font-mono text-[11px] font-semibold text-ink-faint">看起来</dt>
            <dd className="text-[13px] leading-relaxed text-ink-soft">{item.looksLike}</dd>
          </div>
        </div>
        <div className="flex items-start gap-2.5">
          <Zap className="mt-0.5 h-4 w-4 shrink-0 text-designer-500" aria-hidden="true" />
          <div>
            <dt className="font-mono text-[11px] font-semibold text-designer-600">
              {item.breaksLabel ?? "一还原"}
            </dt>
            <dd className="text-[13px] leading-relaxed text-ink">{item.breaks}</dd>
          </div>
        </div>
        <div className="flex items-start gap-2.5">
          <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-ink-faint" aria-hidden="true" />
          <div>
            <dt className="font-mono text-[11px] font-semibold text-ink-faint">真正原因</dt>
            <dd className="text-[13px] leading-relaxed text-ink-soft">{item.reason}</dd>
          </div>
        </div>
        <div className="mt-auto flex items-start gap-2.5 rounded-xl border border-brand-100 bg-brand-50/60 p-3">
          <Wrench className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
          <div>
            <dt className="flex items-center gap-1 font-mono text-[11px] font-semibold text-brand-600">
              怎么补救
              <ArrowRight className="h-3 w-3" aria-hidden="true" />
            </dt>
            <dd className="text-[13px] leading-relaxed text-ink">{item.fix}</dd>
          </div>
        </div>
      </dl>
    </div>
  );
}
