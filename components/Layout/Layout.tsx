import { FC } from "react";
import { Sora } from "next/font/google";

import Nav from "@components/Nav/Nav";
import Header from "@components/Header/Header";
import TopLeftImg from "@components/TopLeftImg/TopLeftImg";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

interface ILayout {
  children: React.ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <Header>
        <Nav />
      </Header>
      <TopLeftImg/>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
