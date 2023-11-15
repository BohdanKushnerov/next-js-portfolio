import React, { FC } from 'react'
import Layout from '@components/Layout/Layout'
import "@styles/globals.css";

interface IMyApp {
  Component: FC;
  // pageProps;
}

const MyApp: FC<IMyApp> = ({ Component }) => {
  return (
    <Layout>
      <Component />
    </Layout>
  );
};

export default MyApp;
