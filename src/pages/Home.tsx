import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StoryChapters from "@/components/StoryChapters";
import TranslationLab from "@/components/TranslationLab";
import KnowledgeMap from "@/components/KnowledgeMap";
import Deliverables from "@/components/Deliverables";
import CrashCaseSection from "@/components/CrashCaseSection";
import AISection from "@/components/AISection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <div className="container-page">
          <StoryChapters />
          <TranslationLab />
          <KnowledgeMap />
          <Deliverables />
          <CrashCaseSection />
          <AISection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
