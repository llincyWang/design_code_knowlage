import type { LucideIcon } from "lucide-react";
import { Boxes, Palette, Smartphone, Route, BookOpen, GitPullRequest } from "lucide-react";

export interface Deliverable {
  icon: LucideIcon;
  title: string;
  en: string;
  desc: string;
  designerNote: string;
}

export const deliverables: Deliverable[] = [
  {
    icon: Boxes,
    title: "可复用组件",
    en: "Components",
    desc: "按钮、卡片、表单等被封装成能反复调用的组件，而不是一次性的图。",
    designerNote: "你在 Figma 抽的组件，会变成这里的一个个可复用模块。",
  },
  {
    icon: Route,
    title: "可交互页面",
    en: "Pages & Flow",
    desc: "能点、能跳转、能填写的真实页面，串起完整的操作流程。",
    designerNote: "你画的原型连线，最终变成用户真的能走通的路径。",
  },
  {
    icon: Palette,
    title: "设计规范落地",
    en: "Design Tokens",
    desc: "颜色、间距、字号、圆角被写成变量，全站统一、一改全改。",
    designerNote: "你定的规范不再只是标注，而是代码里能被约束的变量。",
  },
  {
    icon: Smartphone,
    title: "多端适配",
    en: "Responsive",
    desc: "同一套页面在桌面、平板、手机上都能自动排布、正常使用。",
    designerNote: "你担心的\u201c手机上会不会乱\u201d，前端用响应式把它兜住。",
  },
  {
    icon: BookOpen,
    title: "接口对接",
    en: "API Integration",
    desc: "把页面上的内容和后端数据接通，真实数据能动态显示。",
    designerNote: "你写的字段，在这里和后端接口一一对上、拿到真数据。",
  },
  {
    icon: GitPullRequest,
    title: "可上线代码",
    en: "Shippable Code",
    desc: "经过测试、能构建、能部署上线，最终被用户真正用到的产品。",
    designerNote: "所有这一切，最后打包成能发布给用户的线上版本。",
  },
];
