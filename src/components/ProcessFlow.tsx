import { Fragment } from "react";
import { ChevronRight } from "lucide-react";
import { processFlow } from "@/content/process";

export default function ProcessFlow() {
  return (
    <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-1">
      {processFlow.map((node, i) => (
        <Fragment key={node.label}>
          <div className="group flex items-center gap-3 rounded-xl2 border border-black/[0.06] bg-white/80 px-4 py-3 shadow-soft backdrop-blur-sm transition-transform hover:-translate-y-0.5 sm:flex-col sm:gap-1 sm:px-4 sm:py-3.5">
            <span className="font-mono text-sm font-semibold text-frontend-600">{node.label}</span>
            <span className="text-xs text-ink-faint">{node.hint}</span>
          </div>
          {i < processFlow.length - 1 && (
            <ChevronRight
              className="mx-auto h-4 w-4 rotate-90 text-brand-400 sm:rotate-0"
              aria-hidden="true"
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}
