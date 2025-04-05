import React from "react";
import MainHeroSection from "../../sections/hero/MainHeroSection";
import SecondHeroSection from "../../sections/hero/SecondHeroSection";
import FaqSection from "../../sections/FAQ/FAQSection";
import BannerSection from "../../sections/Banner/BannerSection";
import SmokeCursor from "../../components/animations/SmokeCursor";
import SplashCursor from "../../components/animations/SplashCursor.jsx";

export default function HomePage() {
  return (
    <section className={"flex w-full flex-col gap-10 lg:gap-5"}>
      {/* Add the SmokeCursor component here */}
      {/*<SmokeCursor />*/}
      <SplashCursor />
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
