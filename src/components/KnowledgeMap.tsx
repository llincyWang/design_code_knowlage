import { Map } from "lucide-react";
import { knowledge } from "@/content/knowledge";
import SectionHeading from "./SectionHeading";
import KnowledgeCard from "./KnowledgeCard";
import Reveal from "./Reveal";

export default function KnowledgeMap() {
  return (
    <section id="map" className="scroll-mt-24 py-16 sm:py-20">
      <Reveal>
        <SectionHeading
          eyebrow={
            <>
              <Map className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" />
              知识地图
            </>
          }
          title="原来前端思维可以拆成这 7 件事"
          description="看完前面的小剧场，回头看会发现：前端理解一张设计稿，其实就是在想这 7 件事。"
        />
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {knowledge.map((item, i) => (
          <Reveal key={item.no} delay={i * 70}>
            <KnowledgeCard item={item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
