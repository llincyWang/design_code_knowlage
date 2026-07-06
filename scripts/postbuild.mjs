import { copyFileSync, existsSync } from "node:fs";

// GitHub Pages SPA 兜底：子路径刷新会走 404，复制一份 index.html 作为 404.html
const src = "dist/index.html";
const dest = "dist/404.html";

if (existsSync(src)) {
  copyFileSync(src, dest);
  console.log("[postbuild] 已生成 dist/404.html（SPA 兜底）");
} else {
  console.warn("[postbuild] 未找到 dist/index.html，跳过");
}
