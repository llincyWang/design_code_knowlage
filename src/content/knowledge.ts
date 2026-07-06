import type { Knowledge } from "@/types";

export const knowledge: Knowledge[] = [
  { no: "01", en: "Box", zh: "盒子", desc: "页面不是一张平面图，而是一层层容器嵌套。" },
  { no: "02", en: "Layout", zh: "布局", desc: "决定内容怎么排列、对齐、换行和适配。" },
  { no: "03", en: "Component", zh: "组件", desc: "把重复出现的 UI 变成可复用模块。" },
  { no: "04", en: "State", zh: "状态", desc: "描述页面在不同情况下应该长什么样。" },
  { no: "05", en: "Interaction", zh: "交互", desc: "点一下、划一下之后，页面该做出什么反应。" },
  { no: "06", en: "Data", zh: "数据", desc: "说明页面内容从哪里来、如何展示、异常时怎么办。" },
  { no: "07", en: "Delivery", zh: "交付", desc: "把视觉稿补充成研发和 AI 都能理解的输入。" },
];
