import { ArrowDown, Figma, Boxes, Code2 } from "lucide-react";

const stages = [
  { icon: Figma, label: "Figma 设计稿", tone: "designer" as const },
  { icon: Boxes, label: "盒子 · 组件树", tone: "frontend" as const },
  { icon: Code2, label: "代码结构", tone: "brand" as const },
];

const toneClass: Record<string, string> = {
  designer: "bg-designer-50 text-designer-600 ring-designer-100",
  frontend: "bg-frontend-50 text-frontend-600 ring-frontend-100",
  brand: "bg-brand-50 text-brand-600 ring-brand-100",
};

export default function HeroVisual() {
  return (
    <div className="relative animate-fade-in" style={{ animationDelay: "120ms" }}>
      <div className="absolute -inset-4 -z-10 rounded-xl3 bg-white/40 blur-2xl" />
      <div className="card-surface relative overflow-hidden p-5 shadow-lift sm:p-6">
        {/* 顶部窗口条 */}
        <div className="mb-5 flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-designer-400/70" />
          <span className="h-3 w-3 rounded-full bg-brand-400/70" />
          <span className="h-3 w-3 rounded-full bg-frontend-400/70" />
          <span className="ml-3 font-mono text-xs text-ink-faint">order-card.fig → .tsx</span>
        </div>

        {/* 阶段 1：设计稿卡片 */}
        <div className="rounded-xl2 border border-designer-100 bg-designer-50/60 p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="chip border-designer-100 bg-white/70 text-designer-600">订单卡片</span>
            <span className="font-mono text-[11px] text-designer-500">已付款</span>
          </div>
          <div className="space-y-2.5">
            <div className="h-2.5 w-2/3 rounded-full bg-designer-100" />
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 shrink-0 rounded-lg bg-designer-100" />
              <div className="flex-1 space-y-2">
                <div className="h-2 w-4/5 rounded-full bg-designer-100" />
                <div className="h-2 w-1/2 rounded-full bg-designer-100/70" />
              </div>
            </div>
            <div className="flex items-center justify-between pt-1">
              <div className="h-4 w-16 rounded-full bg-designer-100" />
              <div className="h-7 w-20 rounded-lg bg-designer-400/80" />
            </div>
          </div>
        </div>

        <div className="flex justify-center py-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.06] bg-white text-ink-faint shadow-soft">
            <ArrowDown className="h-4 w-4 animate-float" aria-hidden="true" />
          </span>
        </div>

        {/* 阶段 2：翻译成组件树代码 */}
        <div className="rounded-xl2 border border-frontend-100 bg-[#0f1222] p-4 font-mono text-[12px] leading-relaxed shadow-inner">
          <pre className="overflow-x-auto text-frontend-100/90">
            <span className="text-frontend-400">&lt;OrderCard&gt;</span>
            {"\n  "}
            <span className="text-brand-400">&lt;Header&gt;</span> status time{" "}
            <span className="text-brand-400">&lt;/Header&gt;</span>
            {"\n  "}
            <span className="text-brand-400">&lt;ProductInfo /&gt;</span>
            {"\n  "}
            <span className="text-brand-400">&lt;PriceInfo /&gt;</span>
            {"\n  "}
            <span className="text-brand-400">&lt;ActionGroup /&gt;</span>
            {"\n"}
            <span className="text-frontend-400">&lt;/OrderCard&gt;</span>
          </pre>
        </div>

        {/* 底部阶段指示 */}
        <div className="mt-5 flex items-center justify-between gap-2">
          {stages.map((s, i) => (
            <div key={s.label} className="flex flex-1 items-center gap-2">
              <div className={`flex items-center gap-2 rounded-full px-2.5 py-1.5 ring-1 ${toneClass[s.tone]}`}>
                <s.icon className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="whitespace-nowrap text-[11px] font-medium">{s.label}</span>
              </div>
              {i < stages.length - 1 && <span className="h-px flex-1 bg-black/[0.08]" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
