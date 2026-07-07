import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScreenshotPlaceholderProps {
  label: string; // 例如"放设计稿截图"
  variant?: "designer" | "frontend" | "neutral";
  className?: string;
}

const variantStyles: Record<
  NonNullable<ScreenshotPlaceholderProps["variant"]>,
  { frame: string; dot: string; text: string }
> = {
  designer: {
    frame: "border-designer-200 bg-designer-50/60",
    dot: "text-designer-400",
    text: "text-designer-600",
  },
  frontend: {
    frame: "border-frontend-200 bg-frontend-50/60",
    dot: "text-frontend-400",
    text: "text-frontend-600",
  },
  neutral: {
    frame: "border-black/[0.08] bg-canvas-soft/70",
    dot: "text-ink-faint",
    text: "text-ink-soft",
  },
};

export default function ScreenshotPlaceholder({
  label,
  variant = "neutral",
  className,
}: ScreenshotPlaceholderProps) {
  const s = variantStyles[variant];
  return (
    <div
      className={cn(
        "flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed",
        "bg-[repeating-linear-gradient(45deg,transparent,transparent_9px,rgba(27,28,42,0.03)_9px,rgba(27,28,42,0.03)_10px)]",
        s.frame,
        className,
      )}
    >
      <ImageOff className={cn("h-5 w-5", s.dot)} aria-hidden="true" />
      <span className={cn("font-mono text-[11px] font-medium", s.text)}>{label}</span>
    </div>
  );
}
