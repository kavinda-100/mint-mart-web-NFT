import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const HomeLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className={"flex h-full w-full flex-col"}>
      <Header />
      <section className={"mt-[50px] min-h-screen w-full"}>{children}</section>
      <Footer />
    </main>
  );
};
export default HomeLayout;
