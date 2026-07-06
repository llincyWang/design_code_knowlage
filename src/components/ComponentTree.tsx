import { useState } from "react";
import { orderCardTree } from "@/content/componentTree";
import type { TreeNode } from "@/types";
import BoxModelInspect from "./BoxModelInspect";

function Tag({ n, small = false }: { n: string; small?: boolean }) {
  return (
    <span
      className={`flex items-center justify-center rounded-full bg-brand-500 font-mono font-semibold text-white ${
        small ? "h-3.5 w-3.5 text-[9px]" : "h-4 w-4 text-[10px]"
      }`}
    >
      {n}
    </span>
  );
}

// ---- 树视图 ----
function TreeRow({ node, depth, isLast }: { node: TreeNode; depth: number; isLast: boolean }) {
  const hasChildren = !!node.children?.length;
  return (
    <li className="relative">
      <div className="flex items-center gap-2 py-1" style={{ paddingLeft: `${depth * 18}px` }}>
        {depth > 0 && (
          <span className="font-mono text-frontend-400/60">{isLast ? "└─" : "├─"}</span>
        )}
        <span
          className={
            depth === 0
              ? "rounded-md bg-frontend-500 px-2 py-0.5 font-mono text-[13px] font-semibold text-white"
              : hasChildren
                ? "font-mono text-[13px] font-medium text-frontend-600"
                : "font-mono text-[13px] text-ink-soft"
          }
        >
          {node.name}
        </span>
        {node.tag && <Tag n={node.tag} />}
      </div>
      {hasChildren && (
        <ul>
          {node.children!.map((child, i) => (
            <TreeRow
              key={child.name}
              node={child}
              depth={depth + 1}
              isLast={i === node.children!.length - 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

// ---- 盒子视图：真正的盒子套盒子 ----
function BoxNode({ node, depth }: { node: TreeNode; depth: number }) {
  const children = node.children;
  const hasChildren = !!children?.length;
  const allLeaves = children?.every((c) => !c.children?.length) ?? false;
  const row = hasChildren && allLeaves && children!.length <= 2;
  const isRoot = depth === 0;

  const frameCls = isRoot
    ? "border-frontend-400/70 bg-frontend-50/50"
    : hasChildren
      ? "border-frontend-300/70 bg-white"
      : "border-dashed border-frontend-200 bg-white";
  const labelCls = isRoot
    ? "bg-frontend-500 text-white"
    : hasChildren
      ? "bg-frontend-100 text-frontend-600"
      : "bg-frontend-50 text-frontend-500";

  return (
    <div className={`relative rounded-lg border ${frameCls} p-2 pt-4`}>
      <span
        className={`absolute -top-2 left-2 inline-flex items-center gap-1 rounded px-1.5 py-0.5 font-mono text-[10px] font-medium shadow-sm ${labelCls}`}
      >
        {node.name}
        {node.tag && <Tag n={node.tag} small />}
      </span>
      {hasChildren ? (
        <div className={`mt-1 ${row ? "flex gap-2 [&>div]:flex-1" : "space-y-3"}`}>
          {children!.map((c) => (
            <BoxNode key={c.name} node={c} depth={depth + 1} />
          ))}
        </div>
      ) : (
        <div className="mt-1 h-1.5 w-3/5 rounded-full bg-frontend-100/80" />
      )}
    </div>
  );
}

const tabBtn = (active: boolean) =>
  `rounded-md px-2.5 py-1 font-mono text-[11px] font-medium transition-colors ${
    active ? "bg-frontend-500 text-white shadow-sm" : "text-ink-soft hover:text-ink"
  }`;

export default function ComponentTree() {
  const [view, setView] = useState<"box" | "inspect" | "tree">("box");

  const hint =
    view === "box" ? "盒子套盒子" : view === "inspect" ? "验收时看到的那个盒子" : "拆结构，不是照着画";

  return (
    <div className="card-surface h-full p-5 sm:p-6">
      <div className="mb-4 flex items-center justify-between gap-2">
        <div className="inline-flex rounded-lg border border-black/[0.06] bg-canvas-soft/70 p-0.5">
          <button type="button" onClick={() => setView("box")} className={tabBtn(view === "box")} aria-pressed={view === "box"}>
            盒子
          </button>
          <button type="button" onClick={() => setView("inspect")} className={tabBtn(view === "inspect")} aria-pressed={view === "inspect"}>
            盒模型
          </button>
          <button type="button" onClick={() => setView("tree")} className={tabBtn(view === "tree")} aria-pressed={view === "tree"}>
            组件树
          </button>
        </div>
        <span className="shrink-0 font-mono text-[11px] text-ink-faint">{hint}</span>
      </div>

      {view === "box" && (
        <div className="rounded-xl2 bg-canvas-soft/70 p-4">
          <BoxNode node={orderCardTree} depth={0} />
        </div>
      )}
      {view === "inspect" && <BoxModelInspect />}
      {view === "tree" && (
        <ul className="rounded-xl2 bg-canvas-soft/70 p-4">
          <TreeRow node={orderCardTree} depth={0} isLast />
        </ul>
      )}

      {view === "inspect" ? (
        <p className="mt-4 text-sm leading-relaxed text-ink-soft">
          视觉验收时，右键“检查”选中一个元素，浏览器就会浮出这个盒子：内容、内边距、边框、外边距一层层套着——这就是前端说的“盒子”最真实的样子。
        </p>
      ) : (
        <p className="mt-4 text-sm leading-relaxed text-ink-soft">
          前端不是照着图一笔一笔画，而是先把界面拆成一层层可命名、可复用的盒子。左边设计稿里的
          <span className="mx-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-500 align-text-bottom font-mono text-[10px] font-semibold text-white">1</span>
          ~
          <span className="mx-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-500 align-text-bottom font-mono text-[10px] font-semibold text-white">5</span>
          ，就一一对应这里的盒子。
        </p>
      )}
    </div>
  );
}
