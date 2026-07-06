import type { Story } from "@/types";

export const stories: Story[] = [
  {
    id: "act-1",
    no: "01",
    act: "第一幕",
    title: "你画的是卡片，前端看到的是盒子套盒子",
    designerView:
      "这是一个订单卡片，里面有订单状态、商品信息、用户信息、金额和操作按钮。",
    frontendView:
      "这是一个 Card 容器，里面嵌套 Header、Content、Status、Action 等结构。",
  },
  {
    id: "act-2",
    no: "02",
    act: "第二幕",
    title: "Auto Layout 在前端世界有个亲戚，叫 Flex",
    designerView: "设计师看到的是横排、竖排、间距、对齐。",
    frontendView:
      "前端看到的是 display、flex-direction、gap、align-items、justify-content。",
    approx: { design: "Figma Auto Layout", frontend: "Frontend Flex" },
  },
  {
    id: "act-3",
    no: "03",
    act: "第三幕",
    title: "按钮不是一张图，而是一组可配置规则",
    designerView: "设计师看到一个按钮。",
    frontendView:
      "前端看到一个 Button 组件，以及它的 type、size、disabled、loading、icon 等配置。",
    approx: { design: "Figma Variant", frontend: "Frontend Props" },
  },
  {
    id: "act-4",
    no: "04",
    act: "第四幕",
    title: "真实页面不会永远停在默认态",
    designerView:
      "设计稿里常常只有\u201c正常情况\u201d，很干净、很完美。",
    frontendView:
      "但真实页面会遇到加载中、没数据、报错、无权限、按钮不可点。",
  },
  {
    id: "act-5",
    no: "05",
    act: "第五幕",
    title: "页面上的每个字，背后都有一个数据字段",
    designerView:
      "设计师看到的是\u201c订单金额\u201d\u201c商品名称\u201d\u201c用户昵称\u201d。",
    frontendView:
      "前端会问：这些字段从哪里来？为空怎么办？太长怎么办？接口有没有？",
  },
  {
    id: "act-6",
    no: "06",
    act: "第六幕",
    title: "页面不只是静态的，点一下背后是一串逻辑",
    designerView:
      "设计师想的是：点一下按钮，最好先弹个确认，再把订单提交出去。",
    frontendView:
      "前端要处理：点击后先校验、再调接口，期间显示 loading，成功给反馈，失败还能重试。",
    approx: { design: "Figma 原型连线", frontend: "onClick 事件逻辑" },
  },
];
