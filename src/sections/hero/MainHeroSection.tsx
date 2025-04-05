import React from "react";
import Image from "next/image";
import { Button } from "../../components/ui/button";

const MainHeroSection = () => {
  return (
    <div className={"container mx-auto grid h-screen grid-cols-3 gap-5"}>
      {/* section one */}
      <div className={"col-span-3 flex flex-col gap-4 lg:col-span-1"}>
        <Image
          src={"/hero-one.png"}
          alt={"NFT Image"}
          width={400}
          height={400}
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          tristique, nunc ut bibendum tincidunt, nisi nunc aliquet nunc, eget
          aliquam nunc nunc eget nunc. Sed tristique, nunc ut bibendum
          tincidunt, nisi nunc aliquet nunc, eget aliquam nunc nunc eget nunc.
        </p>
        <Button variant={"gradient"}>Buy Now</Button>
      </div>

      {/* section two */}
      <div
        className={
          "col-span-3 flex h-full w-full flex-col items-center justify-center lg:col-span-2"
        }
      >
        <h1 className={"text-4xl font-extrabold text-pretty lg:text-9xl"}>
          Start Making Money With NFT&apos;s{" "}
          <div className={"h-2 w-full bg-white"} />
        </h1>
      </div>
    </div>
  );
};
export default MainHeroSection;
