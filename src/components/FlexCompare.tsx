import { flexPairs } from "@/content/flexPairs";

export default function FlexCompare() {
  return (
    <div className="card-surface h-full p-5 sm:p-6">
      <div className="mb-4 flex items-center gap-2">
        <span className="chip border-designer-100 bg-designer-50 text-designer-600">Auto Layout</span>
        <span className="text-ink-faint">≈</span>
        <span className="chip border-frontend-100 bg-frontend-50 text-frontend-600">Flex</span>
      </div>

      <ul className="space-y-2.5">
        {flexPairs.map((pair) => (
          <li
            key={pair.frontend}
            className="grid grid-cols-[1fr_auto_1.2fr] items-center gap-3 rounded-xl border border-black/[0.05] bg-canvas-soft/60 p-3"
          >
            <div className="min-w-0">
              <p className="truncate text-[13px] font-medium text-ink">{pair.designer}</p>
              <p className="truncate text-[11px] text-ink-faint">{pair.designerHint}</p>
            </div>
            <span className="text-sm font-semibold text-brand-500">→</span>
            <code className="truncate rounded-md bg-[#0f1222] px-2.5 py-1.5 font-mono text-[11px] text-brand-400">
              {pair.frontend}
            </code>
          </li>
        ))}
      </ul>
    </div>
  );
}
