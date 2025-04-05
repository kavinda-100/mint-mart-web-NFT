import MainHeroSection from "../../sections/hero/MainHeroSection";
import SecondHeroSection from "../../sections/hero/SecondHeroSection";

export default function HomePage() {
  return (
    <section className={"container mx-auto"}>
      {/*  Hero section */}
      <MainHeroSection />
      <SecondHeroSection />
    </section>
  );
}
