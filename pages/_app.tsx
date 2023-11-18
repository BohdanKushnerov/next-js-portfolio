import React, { FC } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";

import Layout from "@components/Layout/Layout";
import { Transition } from "@components/Transition/Transition";
import "@styles/globals.css";

interface IMyApp {
  Component: FC;
  // pageProps;
}

const MyApp: FC<IMyApp> = ({ Component }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Bohdan Kushnerov Portfolio</title>
        <link rel="icon" type="image/png" href="/logo-icon.png" />
        <meta
          name="description"
          content="Explore a collection of frontend projects showcasing my expertise in UI/UX development. From clean and intuitive interfaces to seamless user experiences, this personal portfolio highlights my dedication to crafting engaging digital solutions through frontend technologies."
        ></meta>
        {/* <meta
          name="google-site-verification"
          content="ucWXrGWx51u-n4BfgmVdfYxSJ32bvhnYxoqLilRg8Zw"
        /> */}
      </Head>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition />
            <Component />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
};

export default MyApp;
