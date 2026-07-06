import type { UIState } from "@/types";

export const states: UIState[] = [
  { key: "loading", en: "Loading", label: "加载中", desc: "数据还在路上，先给个骨架或转圈。" },
  { key: "empty", en: "Empty", label: "空数据", desc: "一条数据都没有时，页面长什么样？" },
  { key: "error", en: "Error", label: "加载失败", desc: "接口挂了、超时了，要有兜底提示。" },
  { key: "disabled", en: "Disabled", label: "不可点击", desc: "条件不满足时，按钮要变灰不可点。" },
  { key: "selected", en: "Selected", label: "已选中", desc: "被选中 / 激活时的高亮态。" },
];
