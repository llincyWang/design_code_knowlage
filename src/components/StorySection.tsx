import type { ReactNode } from "react";
import { Palette, Code2 } from "lucide-react";
import type { Story } from "@/types";
import Reveal from "./Reveal";
import DesignerMockup from "./DesignerMockup";

interface StorySectionProps {
  story: Story;
  visual: ReactNode;
  reverse?: boolean;
}

export default function StorySection({ story, visual, reverse = false }: StorySectionProps) {
  return (
    <Reveal as="section" id={story.id} className="scroll-mt-24 py-12 sm:py-16">
      <div className="mb-8 flex items-baseline gap-3">
        <span className="font-mono text-sm font-semibold text-brand-500">{story.no}</span>
        <span className="chip border-black/[0.06] bg-white/70 text-ink-soft">{story.act}</span>
      </div>
      <h3 className="mb-8 max-w-3xl text-balance text-xl font-semibold leading-snug sm:text-2xl lg:text-[1.75rem]">
        {story.title}
      </h3>

      <div className={`grid gap-5 lg:grid-cols-2 lg:gap-6 ${reverse ? "lg:[direction:rtl]" : ""}`}>
        {/* 视角对照 */}
        <div className="flex flex-col gap-4 [direction:ltr]">
          <div className="card-surface flex flex-col gap-3 border-designer-100 bg-designer-50/50 p-5">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-designer-100 text-designer-600">
                <Palette className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-designer-600">设计师视角</span>
            </div>
            <p className="text-[15px] leading-relaxed text-ink">{story.designerView}</p>
            <DesignerMockup id={story.id} />
          </div>

          <div className="card-surface flex flex-col gap-3 border-frontend-100 bg-frontend-50/50 p-5">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-frontend-100 text-frontend-600">
                <Code2 className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-frontend-600">前端视角</span>
            </div>
            <p className="text-[15px] leading-relaxed text-ink">{story.frontendView}</p>
          </div>

          {story.approx && (
            <div className="flex items-center justify-center gap-3 rounded-xl2 border border-dashed border-brand-400/40 bg-brand-50/40 px-4 py-3">
              <span className="font-mono text-xs font-medium text-designer-600 sm:text-sm">
                {story.approx.design}
              </span>
              <span className="text-lg font-semibold text-brand-500">≈</span>
              <span className="font-mono text-xs font-medium text-frontend-600 sm:text-sm">
                {story.approx.frontend}
              </span>
            </div>
          )}
        </div>

        {/* 可视化 */}
        <div className="[direction:ltr]">{visual}</div>
      </div>
    </Reveal>
  );
}
