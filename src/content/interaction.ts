export interface InteractionStep {
  trigger: string;
  code: string;
  hint: string;
}

export const interactionSteps: InteractionStep[] = [
  { trigger: "点击「提交订单」", code: "onClick", hint: "用户触发一个事件" },
  { trigger: "先校验能不能点", code: "if (!valid) return", hint: "不满足条件就拦下来" },
  { trigger: "弹确认 + loading", code: "setLoading(true)", hint: "给用户即时反馈" },
  { trigger: "调用后端接口", code: "await submit()", hint: "把数据提交出去" },
  { trigger: "成功 / 失败分流", code: "success ? toast : retry", hint: "两条路都要想到" },
];
