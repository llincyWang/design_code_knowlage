import { Drama } from "lucide-react";
import { stories } from "@/content/stories";
import SectionHeading from "./SectionHeading";
import StorySection from "./StorySection";
import Reveal from "./Reveal";
import ComponentTree from "./ComponentTree";
import FlexCompare from "./FlexCompare";
import ButtonConfigCard from "./ButtonConfigCard";
import StateCard from "./StateCard";
import DataMapping from "./DataMapping";
import InteractionFlow from "./InteractionFlow";

const visuals = [
  <ComponentTree key="tree" />,
  <FlexCompare key="flex" />,
  <ButtonConfigCard key="button" />,
  <StateCard key="state" />,
  <DataMapping key="data" />,
  <InteractionFlow key="interaction" />,
];

export default function StoryChapters() {
  return (
    <section id="story" className="scroll-mt-24 py-12 sm:py-16">
      <Reveal>
        <SectionHeading
          eyebrow={
            <>
              <Drama className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" />
              一张设计稿的奇幻漂流
            </>
          }
          title="设计师小剧场：六幕看懂前端在想什么"
          description="跟着一张订单卡片，看它从 Figma 一路走进前端世界，每一幕都藏着一个前端的小心思。"
        />
      </Reveal>

      <div className="mt-6 divide-y divide-black/[0.05]">
        {stories.map((story, i) => (
          <StorySection
            key={story.id}
            story={story}
            visual={visuals[i]}
            reverse={i % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}
