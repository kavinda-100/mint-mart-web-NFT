import MainHeroSection from "../../sections/hero/MainHeroSection";
import SecondHeroSection from "../../sections/hero/SecondHeroSection";

export default function HomePage() {
  return (
    <section className={"flex w-full flex-col gap-10 lg:gap-5"}>
      {/*  Hero section */}
      <MainHeroSection />
      <SecondHeroSection />
    </section>
  );
}
