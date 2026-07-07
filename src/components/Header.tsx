import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "六幕故事", href: "#story" },
  { label: "黑话翻译所", href: "#lab" },
  { label: "前端思维", href: "#map" },
  { label: "交付物", href: "#delivery" },
  { label: "翻车现场", href: "#crash" },
  { label: "AI Coding", href: "#ai" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-black/[0.06] bg-canvas/80 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between" aria-label="主导航">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight">
            前端翻译所
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm text-ink-soft transition-colors hover:bg-black/[0.04] hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#lab"
          className="hidden rounded-full bg-ink px-4 py-2 text-sm font-medium text-white shadow-soft transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          进翻译所
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.06] bg-white/70 text-ink md:hidden"
          aria-label={open ? "关闭菜单" : "打开菜单"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-black/[0.06] bg-canvas/95 backdrop-blur-md md:hidden">
          <ul className="container-page flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base text-ink-soft transition-colors hover:bg-black/[0.04] hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#lab"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-xl bg-ink px-4 py-3 text-center text-base font-medium text-white"
              >
                进翻译所
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
