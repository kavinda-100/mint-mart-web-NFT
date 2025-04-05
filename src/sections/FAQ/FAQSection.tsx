import React from "react";
import Image from "next/image";

const FaqSection = () => {
  return (
    <div className={"container mx-auto mt-5 grid grid-cols-3"}>
      <div
        className={"col-span-3 flex flex-col gap-6 px-2 lg:col-span-1 lg:px-0"}
      >
        <h1 className={"text-4xl font-extrabold text-pretty lg:text-[80px]"}>
          FAQ
        </h1>
        <p
          className={
            "text-muted-foreground text-base font-medium text-pretty lg:mb-3"
          }
        >
          Frequently Asked Questions,
          <br />
          Feel free to reach out to us if you have any questions.
        </p>
        <Image src={"/faq.png"} alt={"FAQ image"} width={500} height={400} />
      </div>
    </div>
  );
};
export default FaqSection;
