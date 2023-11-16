import React, { FC } from "react";
import { useRouter } from "next/router";

import Layout from "@components/Layout/Layout";
import "@styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { Transition } from "@components/Transition/Transition";

interface IMyApp {
  Component: FC;
  // pageProps;
}

const MyApp: FC<IMyApp> = ({ Component }) => {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
};

export default MyApp;
