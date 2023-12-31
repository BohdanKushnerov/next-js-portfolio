import { FC } from "react";
import { Sora } from "next/font/google";

import Nav from "@components/Nav/Nav";
import Header from "@components/Header/Header";
import TopLeftImg from "@components/TopLeftImg/TopLeftImg";
import { ILayout } from "interfaces/ILayout";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <Header />

      <Nav />
      <TopLeftImg />
      <main className="h-full">{children}</main>
      {/* {children} */}
    </div>
  );
};

export default Layout;
