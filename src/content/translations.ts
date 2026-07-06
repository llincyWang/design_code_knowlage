import type { Translation } from "@/types";

export const translations: Translation[] = [
  {
    frontendSays: "这里包一层 div。",
    designerHears: "？？？",
    translation: "加一个盒子来装东西，用它控制间距和排列方式。",
  },
  {
    frontendSays: "这个走组件库。",
    designerHears: "？？？",
    translation: "优先使用已有组件，不要重新画一个新样式。",
  },
  {
    frontendSays: "这里要补状态。",
    designerHears: "？？？",
    translation: "不要只画正常情况，也要画加载、失败、空数据、禁用等情况。",
  },
  {
    frontendSays: "这个字段接口没有。",
    designerHears: "？？？",
    translation: "你想展示的信息，后端不一定已经提供。",
  },
  {
    frontendSays: "这个布局不好响应式。",
    designerHears: "？？？",
    translation: "屏幕变宽或变窄时，这个设计可能不好自动适配。",
  },
  {
    frontendSays: "这里可以抽组件。",
    designerHears: "？？？",
    translation: "这个模块以后可能会复用，最好按组件规则设计。",
  },
];
