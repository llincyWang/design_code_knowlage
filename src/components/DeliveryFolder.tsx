import { Folder, FileCode2, FileType2, FileJson, Braces, Image } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { fileTree, fileTypes, type FileNode, type Tone } from "@/content/fileTypes";

const toneText: Record<Tone, string> = {
  frontend: "text-frontend-600",
  designer: "text-designer-600",
  brand: "text-brand-600",
  ink: "text-ink-soft",
};

const toneChip: Record<Tone, string> = {
  frontend: "bg-frontend-50 text-frontend-600 border-frontend-100",
  designer: "bg-designer-50 text-designer-600 border-designer-100",
  brand: "bg-brand-50 text-brand-600 border-brand-100",
  ink: "bg-canvas-soft text-ink-soft border-black/[0.06]",
};

function iconFor(name: string): { Icon: LucideIcon; cls: string } {
  if (name.endsWith(".tsx")) return { Icon: FileCode2, cls: "text-frontend-500" };
  if (name.endsWith(".css")) return { Icon: FileType2, cls: "text-designer-500" };
  if (name.endsWith(".ts")) return { Icon: Braces, cls: "text-brand-500" };
  if (name.endsWith(".json")) return { Icon: FileJson, cls: "text-ink-faint" };
  if (name.endsWith(".svg") || name.endsWith(".png")) return { Icon: Image, cls: "text-designer-500" };
  return { Icon: Folder, cls: "text-frontend-400" };
}

function Row({ node, depth }: { node: FileNode; depth: number }) {
  const isFolder = !!node.children?.length;
  const { Icon, cls } = isFolder ? { Icon: Folder, cls: "text-frontend-400" } : iconFor(node.name);
  return (
    <>
      <div className="flex items-baseline gap-2 py-1" style={{ paddingLeft: `${depth * 16}px` }}>
        <Icon className={`h-4 w-4 shrink-0 translate-y-0.5 ${cls}`} aria-hidden="true" />
        <span
          className={`shrink-0 font-mono text-[13px] ${
            isFolder ? "font-semibold text-ink" : "text-ink-soft"
          }`}
        >
          {node.name}
          {isFolder ? "/" : ""}
        </span>
        {node.note && (
          <span className="truncate text-[11px] text-ink-faint">— {node.note}</span>
        )}
      </div>
      {isFolder &&
        node.children!.map((child) => (
          <Row key={child.name} node={child} depth={depth + 1} />
        ))}
    </>
  );
}

export default function DeliveryFolder() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {/* 左：真实项目文件夹 */}
      <div className="card-surface p-5 sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="chip border-frontend-100 bg-frontend-50 text-frontend-600">
            <Folder className="h-3.5 w-3.5" aria-hidden="true" />
            项目文件夹
          </span>
          <span className="font-mono text-[11px] text-ink-faint">交付物其实长这样</span>
        </div>
        <div className="rounded-xl2 bg-canvas-soft/70 p-4">
          <Row node={fileTree} depth={0} />
        </div>
      </div>

      {/* 右：后缀 = 交付内容 */}
      <div className="card-surface p-5 sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="chip border-brand-100 bg-brand-50 text-brand-600">后缀翻译表</span>
          <span className="font-mono text-[11px] text-ink-faint">后缀 = 交付内容</span>
        </div>
        <ul className="space-y-2.5">
          {fileTypes.map((t) => (
            <li
              key={t.ext}
              className="flex items-center gap-3 rounded-xl border border-black/[0.05] bg-canvas-soft/60 p-3"
            >
              <code
                className={`w-20 shrink-0 rounded-md border px-2 py-1 text-center font-mono text-[11px] font-semibold ${toneChip[t.tone]}`}
              >
                {t.ext}
              </code>
              <div className="min-w-0">
                <p className={`text-[13px] font-medium ${toneText[t.tone]}`}>{t.label}</p>
                <p className="text-[11px] leading-snug text-ink-faint">{t.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
