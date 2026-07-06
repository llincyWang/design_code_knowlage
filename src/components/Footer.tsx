import { Sparkles, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.06] bg-white/50 backdrop-blur-sm">
      <div className="container-page flex flex-col items-center gap-6 py-12 text-center sm:py-16">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl2 bg-brand-gradient text-white shadow-glow">
          <Sparkles className="h-5 w-5" aria-hidden="true" />
        </span>
        <p className="max-w-xl text-balance text-lg font-semibold text-ink sm:text-xl">
          把前端黑话，翻译成设计师听得懂的人话。
        </p>
        <p className="text-sm text-ink-faint">
          设计师不需要转前端，但需要懂前端的思考方式。
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/70 px-4 py-2 text-sm text-ink-soft shadow-soft transition-colors hover:bg-white"
        >
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
          回到开头
        </a>
        <p className="mt-2 font-mono text-xs text-ink-faint">
          Design → Component → Layout → State → Interaction → Data → Code
        </p>
      </div>
    </footer>
  );
}
