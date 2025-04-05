import React from "react";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import Link from "next/link";

const SecondHeroSection = () => {
  return (
    <div className={"container mx-auto grid h-screen grid-cols-3 gap-5"}>
      {/* section one */}
      <div
        className={
          "col-span-3 flex h-full w-full flex-col items-center justify-center px-2 lg:col-span-2 lg:px-0"
        }
      >
        <p className={"text-base font-bold text-pretty lg:mb-3"}>
          Welcome to the future of digital ownership! Our NFT marketplace is the
          ultimate destination for creators, collectors, and investors.
        </p>
        <Button variant={"gradient"} asChild>
          <Link href={"/browse"}>Buy Now</Link>
        </Button>
      </div>

      {/* section two */}
      <div
        className={
          "col-span-3 gap-4 bg-blue-400 px-2 lg:col-span-1 lg:ml-5 lg:px-0"
        }
      >
        <Image
          src={"/hero-two.png"}
          alt={"NFT Image two"}
          width={800}
          height={800}
          className={"rounded-lg object-cover lg:h-full lg:w-full"}
        />
      </div>
    </div>
  );
};
export default SecondHeroSection;
