import type { ReactNode } from "react";
import { Check } from "lucide-react";

function Frame({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div
      className="relative rounded-xl border border-dashed border-designer-400/40 bg-designer-50/40 p-3 pt-4"
      style={{
        backgroundImage: "radial-gradient(rgba(249,122,69,0.14) 1px, transparent 1px)",
        backgroundSize: "12px 12px",
      }}
    >
      <span className="absolute -top-2.5 left-2.5 rounded-md bg-designer-500 px-1.5 py-0.5 font-mono text-[10px] font-medium text-white shadow-sm">
        {label}
      </span>
      {children}
    </div>
  );
}

function Tag({ n }: { n: string }) {
  return (
    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-500 font-mono text-[10px] font-semibold text-white">
      {n}
    </span>
  );
}

function OrderCardMock({ perfect = false, tagged = false }: { perfect?: boolean; tagged?: boolean }) {
  return (
    <div className="relative rounded-lg bg-white p-2.5 shadow-sm ring-1 ring-black/[0.05]">
      {perfect && (
        <span className="absolute right-2 top-2 inline-flex items-center gap-0.5 rounded-full bg-brand-50 px-1.5 py-0.5 text-[9px] font-medium text-brand-600">
          <Check className="h-2.5 w-2.5" aria-hidden="true" /> 正常
        </span>
      )}
      {/* 标题栏 · 订单状态 */}
      <div className="mb-2 flex items-center gap-1.5">
        {tagged && <Tag n="1" />}
        <div className="h-2 w-14 rounded-full bg-designer-100" />
      </div>
      {/* 商品信息 */}
      <div className="flex items-center gap-2">
        {tagged && <Tag n="2" />}
        <div className="h-8 w-8 shrink-0 rounded-md bg-designer-100" />
        <div className="flex-1 space-y-1.5">
          <div className="h-1.5 w-4/5 rounded-full bg-designer-100" />
          <div className="h-1.5 w-1/2 rounded-full bg-designer-100/70" />
        </div>
      </div>
      {/* 用户信息 */}
      {tagged && (
        <div className="mt-2 flex items-center gap-1.5">
          <Tag n="3" />
          <div className="h-1.5 w-1/3 rounded-full bg-designer-100" />
        </div>
      )}
      {/* 金额 + 按钮 */}
      <div className="mt-2.5 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {tagged && <Tag n="4" />}
          <div className="h-2.5 w-10 rounded-full bg-designer-100" />
        </div>
        <div className="flex items-center gap-1.5">
          {tagged && <Tag n="5" />}
          <div className="h-5 w-12 rounded-md bg-designer-400" />
        </div>
      </div>
    </div>
  );
}

const handle = "absolute h-2 w-2 rounded-[2px] border border-designer-500 bg-white";

const mockups: Record<string, ReactNode> = {
  "act-1": (
    <Frame label="订单卡片">
      <OrderCardMock tagged />
    </Frame>
  ),
  "act-2": (
    <Frame label="Auto Layout">
      <div className="space-y-2">
        <div className="flex gap-2">
          <div className="h-10 flex-1 rounded-md bg-designer-100" />
          <div className="h-10 flex-1 rounded-md bg-designer-100" />
          <div className="h-10 flex-1 rounded-md bg-designer-100" />
        </div>
        <div className="flex items-center justify-center gap-1.5">
          <span className="h-px w-5 bg-designer-400/50" />
          <span className="font-mono text-[9px] text-designer-500">gap 16 · 居中对齐</span>
          <span className="h-px w-5 bg-designer-400/50" />
        </div>
      </div>
    </Frame>
  ),
  "act-3": (
    <Frame label="Button">
      <div className="flex items-center justify-center py-3">
        <div className="relative">
          <div className="rounded-full bg-designer-400 px-4 py-1.5 text-[11px] font-semibold text-white">
            按钮
          </div>
          <span className="pointer-events-none absolute -inset-1.5 rounded-lg border border-dashed border-designer-500/60" />
          <span className={`${handle} -left-1 -top-1`} />
          <span className={`${handle} -right-1 -top-1`} />
          <span className={`${handle} -bottom-1 -left-1`} />
          <span className={`${handle} -bottom-1 -right-1`} />
        </div>
      </div>
    </Frame>
  ),
  "act-4": (
    <Frame label="默认态">
      <OrderCardMock perfect />
    </Frame>
  ),
  "act-5": (
    <Frame label="内容字段">
      <div className="space-y-1.5 rounded-lg bg-white p-2.5 text-[11px] shadow-sm ring-1 ring-black/[0.05]">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-designer-400" />
          <span className="text-ink">无线蓝牙耳机</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-designer-400" />
          <span className="font-semibold text-designer-600">¥ 128.00</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-designer-400" />
          <span className="text-ink">@设计师小美</span>
        </div>
      </div>
    </Frame>
  ),
  "act-6": (
    <Frame label="原型连线">
      <div className="flex items-center gap-2">
        <div className="flex-1 rounded-lg bg-white p-2 text-center shadow-sm ring-1 ring-black/[0.05]">
          <div className="mx-auto mb-1.5 h-4 w-12 rounded-full bg-designer-400" />
          <span className="text-[9px] text-ink-faint">提交按钮</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-mono text-[9px] text-designer-500">on tap</span>
          <span className="text-designer-400">→</span>
        </div>
        <div className="flex-1 rounded-lg bg-white p-2 text-center shadow-sm ring-1 ring-black/[0.05]">
          <div className="mx-auto mb-1.5 h-4 w-12 rounded-md bg-designer-100" />
          <span className="text-[9px] text-ink-faint">成功页</span>
        </div>
      </div>
    </Frame>
  ),
};

export default function DesignerMockup({ id }: { id: string }) {
  const mock = mockups[id];
  if (!mock) return null;
  return <div className="w-full">{mock}</div>;
}
