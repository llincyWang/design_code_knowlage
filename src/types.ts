export interface TreeNode {
  name: string;
  children?: TreeNode[];
  tag?: string;
}

export interface Story {
  id: string;
  no: string;
  act: string;
  title: string;
  designerView: string;
  frontendView: string;
  approx?: { design: string; frontend: string };
}

export interface Translation {
  frontendSays: string;
  designerHears: string;
  translation: string;
}

export interface Knowledge {
  no: string;
  en: string;
  zh: string;
  desc: string;
}

export interface ButtonConfigOption {
  prop: string;
  label: string;
  options: string[];
}

export interface UIState {
  key: string;
  label: string;
  en: string;
  desc: string;
}

export interface DataField {
  zh: string;
  field: string;
}

export interface FlowNode {
  label: string;
  hint: string;
}
