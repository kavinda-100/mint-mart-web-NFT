import MainHeroSection from "../../sections/hero/MainHeroSection";
import SecondHeroSection from "../../sections/hero/SecondHeroSection";
import FaqSection from "../../sections/FAQ/FAQSection";
import BannerSection from "../../sections/Banner/BannerSection";

export default function HomePage() {
  return (
    <section className={"flex w-full flex-col gap-10 lg:gap-5"}>
      {/*  Hero section */}
      <MainHeroSection />
      <SecondHeroSection />

      {/*  FAQ section */}
      <FaqSection />

      {/*    Banner section */}
      <BannerSection />
    </section>
  );
}
