export interface FlexPair {
  designer: string;
  designerHint: string;
  frontend: string;
}

export const flexPairs: FlexPair[] = [
  { designer: "横排 / 竖排", designerHint: "内容往哪个方向排", frontend: "flex-direction: row / column" },
  { designer: "元素之间的间距", designerHint: "间距 16", frontend: "gap: 16px" },
  { designer: "垂直方向对齐", designerHint: "顶对齐 / 居中", frontend: "align-items: center" },
  { designer: "水平方向分布", designerHint: "两端对齐 / 居中", frontend: "justify-content: space-between" },
  { designer: "自动布局开启", designerHint: "打开 Auto Layout", frontend: "display: flex" },
];
