import type { ButtonConfigOption } from "@/types";

export const buttonConfig: ButtonConfigOption[] = [
  { prop: "type", label: "类型", options: ["primary", "secondary", "danger"] },
  { prop: "size", label: "尺寸", options: ["small", "medium", "large"] },
  { prop: "state", label: "状态", options: ["default", "hover", "disabled", "loading"] },
  { prop: "icon", label: "图标", options: ["true", "false"] },
];
