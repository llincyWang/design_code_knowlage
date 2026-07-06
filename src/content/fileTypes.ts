export interface FileNode {
  name: string;
  children?: FileNode[];
  note?: string;
}

// 一个简化但真实的前端项目文件夹结构
export const fileTree: FileNode = {
  name: "order-app",
  note: "整个项目，一个文件夹装下所有交付物",
  children: [
    {
      name: "src",
      note: "源代码：日常写的东西几乎都在这里",
      children: [
        {
          name: "components",
          note: "可复用组件：一个个能反复调用的模块",
          children: [{ name: "OrderCard.tsx" }, { name: "Button.tsx" }],
        },
        { name: "styles", note: "样式：颜色、间距等视觉规则", children: [{ name: "theme.css" }] },
        { name: "data", note: "数据：内容配置、字段", children: [{ name: "order.ts" }] },
        { name: "App.tsx" },
      ],
    },
    { name: "assets", note: "静态资源：图片、图标、字体等素材", children: [{ name: "logo.svg" }] },
    { name: "package.json" },
  ],
};

export type Tone = "frontend" | "designer" | "brand" | "ink";

export interface FileTypeInfo {
  ext: string;
  label: string;
  desc: string;
  tone: Tone;
}

// 文件后缀 = 交付内容
export const fileTypes: FileTypeInfo[] = [
  { ext: ".tsx", label: "界面 · 结构 + 逻辑", desc: "你画的界面长什么样、点了会怎样。", tone: "frontend" },
  { ext: ".css", label: "样式", desc: "颜色、间距、字体这些视觉规则。", tone: "designer" },
  { ext: ".ts", label: "数据 · 逻辑", desc: "内容配置、字段、业务规则。", tone: "brand" },
  { ext: ".json", label: "配置", desc: "项目设置和依赖清单。", tone: "ink" },
  { ext: ".svg / .png", label: "图片资源", desc: "图标、插画、图片素材。", tone: "designer" },
];
