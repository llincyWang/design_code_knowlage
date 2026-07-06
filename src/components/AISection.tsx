import { Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ProcessFlow from "./ProcessFlow";
import Reveal from "./Reveal";

export default function AISection() {
  return (
    <section id="ai" className="scroll-mt-24 py-16 sm:py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-xl3 border border-black/[0.06] bg-white/70 p-7 shadow-soft backdrop-blur-sm sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh opacity-70" />

          <SectionHeading
            align="left"
            eyebrow={
              <>
                <Sparkles className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" />
                AI Coding 时代
              </>
            }
            title="AI Coding 时代，设计稿不只是图"
          />

          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            <p>
              AI Coding 时代，设计师提供的不只是视觉稿，而是 AI 可以理解的
              <span className="font-semibold text-ink">结构化上下文</span>。
            </p>
            <p>
              当设计稿能清楚表达组件、布局、状态、交互、数据和交付规则时，AI 才更容易稳定生成可用页面。
            </p>
            <p>
              所以理解前端思维，本质上是在
              <span className="gradient-text font-semibold">提升设计交付质量</span>
              ，也是在提升 Design Skill 的生成质量。
            </p>
          </div>

          <div className="mt-10">
            <ProcessFlow />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
