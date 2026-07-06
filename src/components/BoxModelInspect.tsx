// 高保真还原 Chrome DevTools「检查元素」时的盒模型高亮
// margin(橙) → border(黄) → padding(绿) → content(蓝)
export default function BoxModelInspect() {
  return (
    <div className="rounded-xl2 bg-[#202124] p-4">
      {/* 模拟浏览器里被检查的页面区域（深色，像 DevTools 遮罩下的页面） */}
      <div className="relative rounded-lg bg-[#2b2c2f] p-5">
        {/* margin 层（橙） */}
        <div className="relative rounded-md bg-[#f8cb9c]/85 p-5">
          <span className="absolute left-1/2 top-1 -translate-x-1/2 font-mono text-[9px] font-medium text-[#7a4a1e]">
            margin
          </span>
          {/* border 层（黄） */}
          <div className="relative rounded bg-[#f4d67c]/90 p-3">
            <span className="absolute left-1/2 top-0.5 -translate-x-1/2 font-mono text-[9px] font-medium text-[#7a5a10]">
              border
            </span>
            {/* padding 层（绿） */}
            <div className="relative rounded-sm bg-[#a7d6a0]/90 p-4">
              <span className="absolute left-1/2 top-0.5 -translate-x-1/2 font-mono text-[9px] font-medium text-[#2f5e2a]">
                padding
              </span>
              {/* content 层（蓝）—— 真实的订单卡片内容 */}
              <div className="relative rounded-sm bg-[#8ec5f0]/95 p-3">
                <span className="absolute -top-4 left-0 rounded bg-[#5b8def] px-1.5 py-0.5 font-mono text-[9px] font-medium text-white shadow">
                  OrderCard · 312 × 132
                </span>
                <div className="rounded-md bg-white p-2.5 shadow-sm">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="rounded bg-frontend-50 px-1.5 py-0.5 font-mono text-[9px] text-frontend-600">
                      订单卡片
                    </span>
                    <span className="font-mono text-[9px] text-ink-faint">已付款</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 shrink-0 rounded bg-canvas-soft" />
                    <div className="flex-1 space-y-1.5">
                      <div className="h-1.5 w-4/5 rounded-full bg-canvas-soft" />
                      <div className="h-1.5 w-1/2 rounded-full bg-canvas-soft" />
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="h-2 w-10 rounded-full bg-canvas-soft" />
                    <div className="h-4 w-10 rounded bg-brand-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 图例 */}
      <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5">
        {[
          { c: "#8ec5f0", t: "content 内容" },
          { c: "#a7d6a0", t: "padding 内边距" },
          { c: "#f4d67c", t: "border 边框" },
          { c: "#f8cb9c", t: "margin 外边距" },
        ].map((l) => (
          <span key={l.t} className="inline-flex items-center gap-1.5 font-mono text-[10px] text-white/70">
            <span className="h-2.5 w-2.5 rounded-[2px]" style={{ backgroundColor: l.c }} />
            {l.t}
          </span>
        ))}
      </div>
    </div>
  );
}
