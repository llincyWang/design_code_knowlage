import type { FlowNode } from "@/types";

export const processFlow: FlowNode[] = [
  { label: "Design", hint: "视觉稿" },
  { label: "Component", hint: "拆成组件" },
  { label: "Layout", hint: "定好排列" },
  { label: "State", hint: "补齐状态" },
  { label: "Interaction", hint: "理清交互" },
  { label: "Data", hint: "对上字段" },
  { label: "Code", hint: "稳定生成" },
];
