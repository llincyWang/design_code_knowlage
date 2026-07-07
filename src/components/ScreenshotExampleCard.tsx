import type { ScreenshotExample } from "@/content/crashCases";
import ScreenshotPlaceholder from "./ScreenshotPlaceholder";

export default function ScreenshotExampleCard({ item }: { item: ScreenshotExample }) {
  const Icon = item.icon;
  return (
    <div className="card-surface group flex h-full flex-col gap-3 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-5">
      {item.image ? (
        <img
          src={item.image}
          alt={item.title}
          className="aspect-[4/3] w-full rounded-xl border border-black/[0.06] object-cover"
        />
      ) : (
        <ScreenshotPlaceholder label="放真实截图" variant="neutral" />
      )}

      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-canvas-soft text-ink-soft">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
        <h4 className="text-[14px] font-semibold leading-snug text-ink">{item.title}</h4>
      </div>

      <p className="text-[13px] leading-relaxed text-ink-soft">{item.desc}</p>

      <span className="chip mt-auto w-fit border-black/[0.06] bg-canvas-soft text-ink-faint">
        {item.tag}
      </span>
    </div>
  );
}
