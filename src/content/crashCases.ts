import type { LucideIcon } from "lucide-react";
import {
  Flame,
  Wrench,
  AlertTriangle,
  Sparkles,
  Layers,
  Image as ImageIcon,
  Table2,
} from "lucide-react";

// 单个翻车案例
export interface CrashCase {
  id: string;
  tag: string; // 顶部标签，例如"每天都会踩"
  title: string;
  beforeImage?: string; // 设计稿截图，暂无时展示占位
  afterImage?: string; // 代码还原截图，暂无时展示占位
  looksLike: string; // 看起来
  breaks: string; // 一还原
  reason: string; // 真正原因
  fix: string; // 怎么补救
  breaksLabel?: string; // "一还原"个别案例用"一开发"/"一验收"等
}

export const crashCases: CrashCase[] = [
  {
    id: "auto-layout",
    tag: "每天都会踩",
    title: "没有 Auto Layout",
    looksLike: "我都对齐了，很整齐。",
    breaks: "文案一变长，按钮和标签就开始乱跑。",
    reason: "这些元素只是被手动摆整齐，不是真的有布局规则。",
    fix: "横排、竖排、间距、对齐关系尽量用 Auto Layout 表达。它是在告诉前端：这些东西应该按规则自动排列。",
  },
  {
    id: "detach",
    tag: "AI 易误读",
    title: "组件被 Detach",
    looksLike: "这是一个按钮啊。",
    breaks: "AI 以为这是一个蓝色圆角盒子，没调用真正的 Button 组件。",
    reason: "组件被拆散后，Button 的身份丢了，只剩下视觉外壳。",
    fix: "尽量不要 detach 组件。需要新样式时，优先扩展 Variant，或者说明它基于哪个组件变体调整。",
  },
  {
    id: "no-instance",
    tag: "组件库相关",
    title: "组件没有用实例",
    looksLike: "这个按钮和组件库长得一样。",
    breaks: "代码里重新写了一个按钮，hover、disabled、loading 都没继承组件能力。",
    reason: "它只是手动画出来的，不是组件库实例，AI 无法稳定识别它应该调用组件库。",
    fix: "优先使用组件库实例，通过 Variant 调整类型、尺寸和状态。",
  },
  {
    id: "naming",
    tag: "AI 看不懂",
    title: "图层命名混乱",
    looksLike: "人能看懂就行。",
    breaks: "AI 看到的是 Frame 999、Rectangle 3、Group copy。",
    reason: "人靠视觉理解，AI 更依赖结构和命名。命名越乱，猜错概率越高。",
    fix: "关键模块用清楚的命名，例如 Header、SearchFilter、TableSection、OrderCard、ActionGroup。",
  },
  {
    id: "no-frame-group",
    tag: "每天都会踩",
    title: "视觉分组清楚，但 Frame 没分组",
    looksLike: "筛选区、表格区、分页区都很明显。",
    breaks: "代码里变成一堆散 div，模块边界不清楚。",
    reason: "视觉上成组，不代表结构上成组。AI 不一定知道哪些元素属于同一块。",
    fix: "视觉是一组的内容，也用 Frame 包起来，并给它一个明确名字。",
  },
  {
    id: "default-only",
    tag: "验收易返工",
    title: "只画默认态",
    looksLike: "页面正常状态已经画完了。",
    breaks: "加载中、没数据、加载失败、无权限、禁用态全靠默认兜底。",
    reason: "真实页面不会永远停在“正常情况”。",
    fix: "至少补齐 Loading、Empty、Error、Disabled、Selected 这些关键状态。",
  },
  {
    id: "overflow-text",
    tag: "真实数据暴击",
    title: "文本超长规则缺失",
    looksLike: "商品名、门店名、用户昵称都刚刚好。",
    breaks: "真实数据一来，长文案把表格和卡片撑爆。",
    reason: "设计稿没有告诉前端，文字太长时是截断、换行，还是 hover 看完整内容。",
    fix: "关键字段标注超长规则：单行省略、多行省略、自动换行、Tooltip 展示完整内容。",
  },
  {
    id: "field-source",
    tag: "数据接不上",
    title: "字段来源不清楚",
    breaksLabel: "一开发",
    looksLike: "页面上写了“预计收入 ¥128.00”。",
    breaks: "这个字段接口给吗？字段名是什么？为空怎么办？是后端返回还是前端计算？",
    reason: "设计稿里的每个字，背后都应该有数据来源。",
    fix: "关键字段补充字段说明：展示名称、字段名、字段类型、为空规则、异常规则。",
  },
  {
    id: "ideal-table",
    tag: "B 端重灾区",
    title: "表格只画理想态",
    looksLike: "表格很完整，有表头、有数据、有操作。",
    breaks: "列宽、分页、空态、loading、批量操作、固定列全都要补。",
    reason: "B 端表格不是“画几列数据”这么简单，真实场景会复杂很多。",
    fix: "表格交付时补齐列宽、对齐方式、超长规则、空值规则、分页、排序、筛选、空态和加载态。",
  },
  {
    id: "drawer-open-only",
    tag: "交互容易漏",
    title: "弹窗 / 抽屉只画打开态",
    breaksLabel: "一实现",
    looksLike: "抽屉打开后的样子已经画好了。",
    breaks: "从哪里打开？怎么关闭？提交成功后关不关？未保存内容要不要拦截？",
    reason: "静态稿只说明“长什么样”，没有说明“怎么发生”。",
    fix: "补充触发入口、打开条件、关闭规则、提交规则、成功反馈、失败反馈、未保存拦截。",
  },
  {
    id: "hidden-layers",
    tag: "上下文噪音",
    title: "隐藏图层和旧方案太多",
    looksLike: "这些只是备份稿，隐藏了不用管。",
    breaks: "AI 可能把旧方案、隐藏图层、copy copy 都当成上下文，甚至读错正式版本。",
    reason: "人知道哪个是正式稿，AI 不一定知道。",
    fix: "单独整理 Ready for Dev 页面，删除废弃图层，不要把探索稿和交付稿混在一起。",
  },
  {
    id: "no-priority",
    tag: "验收改半天",
    title: "没说明哪些必须还原，哪些可走默认组件",
    breaksLabel: "一验收",
    looksLike: "设计稿都画出来了，照着还原就行。",
    breaks: "这个阴影要不要一模一样？这个 18px 间距是不是必须？按钮能不能用组件默认？",
    reason: "前端不知道哪些是关键体验，哪些只是视觉稿里的临时细节。",
    fix: "标注关键还原点：哪些必须严格还原，哪些可以优先走组件库默认样式。",
  },
];

// 翻车等级地图（口语化 4 层）
export interface CrashLevel {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  items: string[];
  accent: "flame" | "wrench" | "alert" | "spark";
}

export const crashLevels: CrashLevel[] = [
  {
    id: "daily",
    icon: Flame,
    title: "每天都会踩的坑",
    desc: "最高频，几乎每个设计稿都会遇到，也是最容易导致 AI / 前端还原不稳定的问题。",
    accent: "flame",
    items: [
      "没有 Auto Layout",
      "组件没有用实例",
      "组件被 Detach",
      "图层命名混乱",
      "视觉分组清楚但 Frame 没分组",
      "只画默认态",
      "字段来源不清楚",
      "文本超长规则缺失",
    ],
  },
  {
    id: "annoying",
    icon: Wrench,
    title: "看着不大，改起来很烦",
    desc: "单个问题看起来只是细节，但会导致验收反复改、组件不统一、视觉还原不稳。",
    accent: "wrench",
    items: [
      "随机间距太多",
      "图标不规范",
      "没有使用 Design Token",
      "新旧组件混用",
      "小数像素 / 非整数坐标",
      "时间 / 金额 / 数字格式没说明",
      "操作反馈缺失",
      "没说明哪些必须还原",
    ],
  },
  {
    id: "complex",
    icon: AlertTriangle,
    title: "复杂页面最容易炸",
    desc: "在 B 端、后台、交易、订单、配置类页面里特别常见，一旦漏掉，开发和验收都会很痛苦。",
    accent: "alert",
    items: [
      "表格只画理想态",
      "表单规则缺失",
      "弹窗 / 抽屉只画打开态",
      "滚动区域没定义",
      "固定 / 吸顶 / 悬浮规则缺失",
      "权限状态缺失",
      "批量操作状态缺失",
      "枚举状态不完整",
    ],
  },
  {
    id: "advanced",
    icon: Sparkles,
    title: "高手局才会遇到的坑",
    desc: "不是每天遇到，但在数据看板、营销页、多端适配、复杂交互和设计系统建设里很关键。",
    accent: "spark",
    items: [
      "图表只画静态图",
      "动效只有感觉，没有参数",
      "层级和遮罩不规范",
      "图片比例和兜底规则缺失",
      "图片化文字",
      "组件密度没有规则",
      "多语言 / 国际化未考虑",
      "深色模式 / 主题切换未考虑",
    ],
  },
];

// 真实截图占位卡片
export interface ScreenshotExample {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  tag: string;
  image?: string;
}

export const screenshotExamples: ScreenshotExample[] = [
  {
    id: "figma-mess",
    icon: Layers,
    title: "Figma 图层混乱截图",
    desc: "一堆 Frame 1287、Group copy、Rectangle 3 堆在一起，AI 只能靠猜。",
    tag: "AI 看不懂",
  },
  {
    id: "no-auto-layout",
    icon: ImageIcon,
    title: "Auto Layout 缺失导致还原错位截图",
    desc: "手动摆整齐的元素，换个文案长度就全体错位。",
    tag: "一还原就变形",
  },
  {
    id: "table-overflow",
    icon: Table2,
    title: "表格真实数据撑爆布局截图",
    desc: "理想态很美，真实数据一灌进去，列宽和卡片全被撑爆。",
    tag: "真实数据暴击",
  },
];
