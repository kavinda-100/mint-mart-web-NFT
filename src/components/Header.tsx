import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className={"fixed top-0 right-0 left-0 container mx-auto h-10"}>
      <div className={"flex justify-between gap-3"}>
        {/* Logo */}
        <div className={"flex items-center gap-2"}>
          <Image src={"/logo.png"} alt={"logo"} width={50} height={50} />
          <h1 className={"logo-text"}>Mint Mart</h1>
        </div>
      </div>
    </header>
  );
};
export default Header;
