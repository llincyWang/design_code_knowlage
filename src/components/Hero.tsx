import { ArrowRight, MousePointer2 } from "lucide-react";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh" />
      <div className="container-page grid items-center gap-12 pb-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-24">
        {/* 左侧：文案 */}
        <div className="flex flex-col items-start">
          <span className="eyebrow animate-fade-up">
            <MousePointer2 className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" />
            给设计师的前端思维小剧场
          </span>

          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight animate-fade-up sm:text-5xl lg:text-6xl">
            设计稿进入
            <br className="hidden sm:block" />
            <span className="gradient-text">前端世界</span>后
          </h1>

          <p
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-ink-soft animate-fade-up sm:text-lg"
            style={{ animationDelay: "80ms" }}
          >
            设计师不需要转前端，但需要懂前端的思考方式。
            <br className="hidden sm:block" />
            这里不教你写代码，只带你看看：研发到底怎么理解你的 Figma。
          </p>

          <div
            className="mt-9 flex flex-col gap-3 animate-fade-up sm:flex-row sm:items-center"
            style={{ animationDelay: "160ms" }}
          >
            <a
              href="#story"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              看看设计稿会变成什么
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#lab"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/[0.08] bg-white/70 px-6 py-3.5 text-sm font-semibold text-ink shadow-soft backdrop-blur-sm transition-colors hover:bg-white"
            >
              进入前端黑话翻译所
            </a>
          </div>

          <div
            className="mt-8 flex items-center gap-5 text-xs text-ink-faint animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <span>盒子</span>
            <span className="h-1 w-1 rounded-full bg-ink-faint/50" />
            <span>布局</span>
            <span className="h-1 w-1 rounded-full bg-ink-faint/50" />
            <span>组件</span>
            <span className="h-1 w-1 rounded-full bg-ink-faint/50" />
            <span>状态</span>
            <span className="h-1 w-1 rounded-full bg-ink-faint/50" />
            <span>数据</span>
          </div>
        </div>

        {/* 右侧：翻译可视化 */}
        <HeroVisual />
      </div>
    </section>
  );
}
