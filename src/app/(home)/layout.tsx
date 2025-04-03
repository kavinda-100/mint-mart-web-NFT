import React from "react";

const HomeLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <main className={"container mx-auto"}>{children}</main>;
};
export default HomeLayout;
