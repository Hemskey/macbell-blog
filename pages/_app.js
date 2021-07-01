import Head from "next/head";
// styles
import "../styles/globals.css";

import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
