import { ArrowRight, Database } from "lucide-react";
import { dataFields } from "@/content/dataFields";

export default function DataMapping() {
  return (
    <div className="card-surface h-full p-5 sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="chip border-black/[0.06] bg-white/70 text-ink-soft">
          <Database className="h-3.5 w-3.5" aria-hidden="true" />
          数据映射
        </span>
        <span className="font-mono text-[11px] text-ink-faint">每个字都有来源</span>
      </div>

      <ul className="space-y-2.5">
        {dataFields.map((f) => (
          <li
            key={f.field}
            className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-xl border border-black/[0.05] bg-canvas-soft/60 p-3"
          >
            <span className="truncate text-[13px] font-medium text-ink">{f.zh}</span>
            <ArrowRight className="h-4 w-4 text-brand-500" aria-hidden="true" />
            <code className="truncate rounded-md bg-white px-2.5 py-1.5 text-right font-mono text-[12px] text-frontend-600 ring-1 ring-black/[0.05]">
              {f.field}
            </code>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-sm leading-relaxed text-ink-soft">
        不用懂复杂接口，只要记得：页面上每一个内容，背后都对应一个数据来源。
      </p>
    </div>
  );
}
