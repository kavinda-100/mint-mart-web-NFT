import React from "react";
import Header from "../../components/Header";

const HomeLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className={"container mx-auto flex flex-col"}>
      <Header />
      <section className={"mt-[40px] min-h-screen w-full"}>{children}</section>
    </main>
  );
};
export default HomeLayout;
