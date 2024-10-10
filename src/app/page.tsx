import { MainNewsSection } from "@/ui/main-news-section/MainNewsSection";
import { MainPromoSection } from "@/ui/main-promo-section/MainPromoSection";
import { MainWeeklyTopSection } from "@/ui/main-weekly-top-section/MainWeeklyTopSection";
import { MainSection } from "@/ui/main/MainSection";
import { TrailerSection } from "@/ui/trailer-section/TrailerSection";

export default function Home() {
  return (
    <>
      <TrailerSection></TrailerSection>
      <MainSection>
        <MainNewsSection></MainNewsSection>
        <MainPromoSection></MainPromoSection>
        <MainWeeklyTopSection></MainWeeklyTopSection>
      </MainSection>
    </>
  );
}
