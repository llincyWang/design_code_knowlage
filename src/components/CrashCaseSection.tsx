import { CarFront, Eye, Code2, Bot, ArrowRight, Camera, CheckCircle2 } from "lucide-react";
import { crashCases, screenshotExamples } from "@/content/crashCases";
import SectionHeading from "./SectionHeading";
import CrashCaseCard from "./CrashCaseCard";
import CrashLevelMap from "./CrashLevelMap";
import ScreenshotExampleCard from "./ScreenshotExampleCard";
import Reveal from "./Reveal";

// 模块一：三段式开场（设计师 / 前端 / AI 各自看到什么）
const perspectives = [
  {
    icon: Eye,
    who: "设计师看到",
    quote: "这不就是一个页面吗？",
    accent: "border-designer-200 bg-designer-50/60 text-designer-600",
  },
  {
    icon: Code2,
    who: "前端看到",
    quote: "这里有多少盒子？哪些是组件？状态在哪里？数据从哪来？",
    accent: "border-frontend-200 bg-frontend-50/60 text-frontend-600",
  },
  {
    icon: Bot,
    who: "AI 看到",
    quote: "Frame 1287、Rectangle 3、Group copy……我猜一下？",
    accent: "border-black/[0.08] bg-canvas-soft/70 text-ink-soft",
  },
];

export default function CrashCaseSection() {
  return (
    <section id="crash" className="scroll-mt-24 py-16 sm:py-20">
      {/* 主标题 */}
      <Reveal>
        <SectionHeading
          eyebrow={
            <>
              <CarFront className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" />
              翻车现场案例库
            </>
          }
          title="设计稿不规范，代码还原会怎么翻车？"
          description="有些设计稿，人看起来很清楚，但 AI 和前端读起来全是谜语。这里收集了一些常见翻车现场，看看你的设计稿有没有也中招。"
        />
      </Reveal>

      {/* 模块一：三段式开场 */}
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {perspectives.map((p, i) => {
          const Icon = p.icon;
          return (
            <Reveal key={p.who} delay={i * 80}>
              <div className={`flex h-full flex-col gap-3 rounded-xl2 border p-5 ${p.accent}`}>
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span className="font-mono text-[12px] font-semibold">{p.who}</span>
                </div>
                <p className="text-[15px] font-medium leading-relaxed text-ink">"{p.quote}"</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={120}>
        <div className="mx-auto mt-6 max-w-3xl rounded-xl2 border border-brand-100 bg-brand-50/50 p-5 text-center sm:p-6">
          <p className="text-[15px] leading-relaxed text-ink">
            好的设计稿不只是视觉正确，还要让前端和 AI 能读懂它的
            <span className="font-semibold text-brand-600">结构、组件、状态、数据和交互</span>。
          </p>
        </div>
      </Reveal>

      {/* 模块二：翻车案例库 */}
      <Reveal>
        <div className="mt-16 flex flex-col items-center gap-3 text-center">
          <span className="eyebrow">
            <CarFront className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" />
            12 个常见翻车现场
          </span>
          <h3 className="max-w-2xl text-balance text-xl font-semibold leading-snug sm:text-2xl">
            人看着没问题，一还原就变形
          </h3>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {crashCases.map((item, i) => (
          <Reveal key={item.id} delay={(i % 3) * 70}>
            <CrashCaseCard item={item} />
          </Reveal>
        ))}
      </div>

      {/* 模块三：翻车等级地图 */}
      <Reveal>
        <div className="mt-20 flex flex-col items-center gap-3 text-center">
          <span className="eyebrow">
            <ArrowRight className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" />
            翻车等级地图
          </span>
          <h3 className="max-w-2xl text-balance text-xl font-semibold leading-snug sm:text-2xl">
            这些坑，按"多容易踩、多难收拾"分成四层
          </h3>
          <p className="max-w-2xl text-sm leading-relaxed text-ink-soft">
            不用记严肃的分级，先看看哪些是你每天都在踩的，哪些是复杂页面才会炸的。
          </p>
        </div>
      </Reveal>

      <div className="mt-8">
        <CrashLevelMap />
      </div>

      {/* 模块四：真实截图案例区 */}
      <Reveal>
        <div className="mt-20 flex flex-col items-center gap-3 text-center">
          <span className="eyebrow">
            <Camera className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" />
            截图案例展示
          </span>
          <h3 className="max-w-2xl text-balance text-xl font-semibold leading-snug sm:text-2xl">
            真实截图放这里，会更好懂
          </h3>
          <p className="max-w-2xl text-sm leading-relaxed text-ink-soft">
            后续可以把真实设计稿截图、Figma 图层截图、AI 还原截图放进来。比起讲概念，直接看到"哪里乱了、哪里变形了"，更容易理解为什么设计稿需要被整理成代码能读懂的样子。
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {screenshotExamples.map((item, i) => (
          <Reveal key={item.id} delay={i * 70}>
            <ScreenshotExampleCard item={item} />
          </Reveal>
        ))}
      </div>

      {/* 模块五：收尾总结 */}
      <Reveal>
        <div className="relative mt-20 overflow-hidden rounded-xl3 border border-black/[0.06] bg-white/70 p-7 shadow-soft backdrop-blur-sm sm:p-10">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh opacity-60" />
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
              <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="max-w-2xl text-balance text-xl font-semibold leading-snug sm:text-2xl lg:text-[1.75rem]">
              从"看起来对"到"代码读得懂"
            </h3>
            <div className="max-w-2xl space-y-3 text-[15px] leading-relaxed text-ink-soft sm:text-base">
              <p>
                好的设计稿不只是视觉正确，还需要
                <span className="font-semibold text-ink">
                  结构清楚、组件明确、状态完整、数据可追溯、交互有规则
                </span>
                。
              </p>
              <p>
                这不是为了让设计师变成前端，而是让设计稿从一张漂亮的图，变成
                <span className="gradient-text font-semibold">研发和 AI 都能理解的输入</span>。
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
