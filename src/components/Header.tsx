"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { AtomIcon, HomeIcon, MegaphoneIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";
import { PulsatingButton } from "./animations/magicUI/PulsatingButton";

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-[1000] container mx-auto h-14 py-2 transition-all duration-300", // Smooth transition
        isScrolled
          ? "bg-background/80 shadow-lg backdrop-blur-lg" // Blurred effect when scrolled
          : "bg-background",
      )}
    >
      <div className={"flex justify-between gap-3"}>
        {/* Logo */}
        <Link href={"/"} className={"flex items-center gap-2"}>
          <Image src={"/logo.png"} alt={"logo"} width={50} height={50} />
          <h1 className={"logo-text"}>Mint Mart</h1>
        </Link>

        {/* Navigation */}
        <div className={"hidden items-center gap-10 lg:flex"}>
          <Link
            href={"/"}
            className={cn("flex items-center gap-2 text-lg font-bold", {
              "logo-text": pathname === "/",
            })}
          >
            <HomeIcon
              className={cn("text-foreground size-5", {
                "text-primary": pathname === "/",
              })}
            />
            Home
          </Link>
          <Link
            href={"/about"}
            className={cn("flex items-center gap-2 text-lg font-bold", {
              "logo-text": pathname === "/about",
            })}
          >
            <MegaphoneIcon
              className={cn("text-foreground size-5", {
                "text-primary": pathname === "/about",
              })}
            />
            Home
          </Link>
          <Link
            href={"/browse"}
            className={cn("flex items-center gap-2 text-lg font-bold", {
              "logo-text": pathname === "/browse",
            })}
          >
            <AtomIcon
              className={cn("text-foreground size-5", {
                "text-primary": pathname === "/browse",
              })}
            />
            Home
          </Link>
        </div>

        {/* User/Auth */}
        <div className="cursor-pointer rounded-lg bg-gradient-to-r from-green-400 via-emerald-200 to-yellow-200 p-[2px]">
          <button className="h-full w-full rounded-md bg-gray-900 px-4 py-2 text-white">
            Register
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
