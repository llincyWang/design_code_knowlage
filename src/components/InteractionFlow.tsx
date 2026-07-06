import { Fragment } from "react";
import { MousePointerClick, ArrowDown } from "lucide-react";
import { interactionSteps } from "@/content/interaction";

export default function InteractionFlow() {
  return (
    <div className="card-surface h-full p-5 sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="chip border-frontend-100 bg-frontend-50 text-frontend-600">
          <MousePointerClick className="h-3.5 w-3.5" aria-hidden="true" />
          事件逻辑
        </span>
        <span className="font-mono text-[11px] text-ink-faint">点一下，背后跑一串</span>
      </div>

      <ol className="space-y-0">
        {interactionSteps.map((step, i) => (
          <Fragment key={step.code}>
            <li className="flex items-center gap-3 rounded-xl border border-black/[0.05] bg-canvas-soft/60 p-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-frontend-500 font-mono text-[11px] font-semibold text-white">
                {i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-medium text-ink">{step.trigger}</p>
                <p className="truncate text-[11px] text-ink-faint">{step.hint}</p>
              </div>
              <code className="shrink-0 rounded-md bg-[#0f1222] px-2 py-1 font-mono text-[10px] text-brand-400">
                {step.code}
              </code>
            </li>
            {i < interactionSteps.length - 1 && (
              <div className="flex justify-center py-1">
                <ArrowDown className="h-3.5 w-3.5 text-frontend-400/70" aria-hidden="true" />
              </div>
            )}
          </Fragment>
        ))}
      </ol>

      <p className="mt-4 text-sm leading-relaxed text-ink-soft">
        交付时补一句“点了会怎样”，前端就不用猜交互，AI 也更容易生成对的逻辑。
      </p>
    </div>
  );
}
