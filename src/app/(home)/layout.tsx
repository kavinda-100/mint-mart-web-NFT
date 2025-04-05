import React from "react";
import Header from "../../components/Header";

const HomeLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className={"flex h-full w-full flex-col"}>
      <Header />
      <section className={"mt-[50px] min-h-screen w-full"}>{children}</section>
    </main>
  );
};
export default HomeLayout;
