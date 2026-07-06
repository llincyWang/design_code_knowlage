import { Languages } from "lucide-react";
import { translations } from "@/content/translations";
import SectionHeading from "./SectionHeading";
import TranslationCard from "./TranslationCard";
import Reveal from "./Reveal";

export default function TranslationLab() {
  return (
    <section id="lab" className="scroll-mt-24 py-16 sm:py-20">
      <Reveal>
        <SectionHeading
          eyebrow={
            <>
              <Languages className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" />
              前端黑话翻译所
            </>
          }
          title="前端黑话翻译所"
          description="研发嘴里那些让人一头雾水的话，其实都能翻译成设计师听得懂的人话。"
        />
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {translations.map((item, i) => (
          <Reveal key={item.frontendSays} delay={i * 70}>
            <TranslationCard item={item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
