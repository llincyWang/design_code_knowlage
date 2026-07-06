import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2
        className={cn(
          "text-balance text-2xl font-semibold leading-tight sm:text-3xl lg:text-[2.5rem]",
          align === "center" ? "max-w-3xl" : "max-w-2xl",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base leading-relaxed text-ink-soft sm:text-lg",
            align === "center" ? "max-w-2xl" : "max-w-xl",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
