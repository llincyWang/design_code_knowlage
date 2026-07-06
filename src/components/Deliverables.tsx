import { PackageCheck, ArrowRight, FolderTree } from "lucide-react";
import { deliverables } from "@/content/deliverables";
import SectionHeading from "./SectionHeading";
import DeliverableCard from "./DeliverableCard";
import DeliveryFolder from "./DeliveryFolder";
import Reveal from "./Reveal";

export default function Deliverables() {
  return (
    <section id="delivery" className="scroll-mt-24 py-16 sm:py-20">
      <Reveal>
        <SectionHeading
          eyebrow={
            <>
              <PackageCheck className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" />
              前端交付物
            </>
          }
          title="前端最后到底交付了什么？"
          description={'想清楚前面这些之后，前端并不是"画好图"，而是把设计稿变成下面这些真正能用的东西。'}
        />
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 font-mono text-xs text-ink-soft sm:text-sm">
          <span className="rounded-full border border-designer-200 bg-designer-50 px-3 py-1.5 text-designer-600">
            一张设计稿
          </span>
          <ArrowRight className="h-4 w-4 text-brand-400" aria-hidden="true" />
          <span className="rounded-full border border-frontend-200 bg-frontend-50 px-3 py-1.5 text-frontend-600">
            前端思维加工
          </span>
          <ArrowRight className="h-4 w-4 text-brand-400" aria-hidden="true" />
          <span className="rounded-full bg-brand-gradient px-3 py-1.5 text-white shadow-glow">
            一个能上线的产品
          </span>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {deliverables.map((item, i) => (
          <Reveal key={item.en} delay={i * 70}>
            <DeliverableCard item={item} />
          </Reveal>
        ))}
      </div>

      {/* 说到底：这些交付物就是一个文件夹 */}
      <Reveal>
        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <span className="eyebrow">
            <FolderTree className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" />
            再往下一层看
          </span>
          <h3 className="max-w-3xl text-balance text-xl font-semibold leading-snug sm:text-2xl lg:text-[1.75rem]">
            与其说是"前端理解"，不如说是"翻译给计算机看"
          </h3>
          <p className="max-w-2xl text-pretty text-sm leading-relaxed text-ink-soft sm:text-base">
            前端做的事，本质是把你的设计意图翻译成计算机能读懂的语言。所以最终交付物，其实就是
            <span className="font-semibold text-ink">一个文件夹</span>
            ——里面一堆按规则组织的文件，而
            <span className="font-semibold text-ink">不同的后缀，就代表交付了不同类型的内容</span>
            。
          </p>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-8">
          <DeliveryFolder />
        </div>
      </Reveal>

      <Reveal delay={120}>
        <p className="mx-auto mt-6 max-w-2xl text-center text-[13px] leading-relaxed text-ink-faint">
          构建后，这个文件夹会被打包成浏览器能直接运行的网站——你现在看的这一页，背后就是这样一个文件夹。
        </p>
      </Reveal>
    </section>
  );
}
