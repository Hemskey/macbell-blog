import Head from "next/head";
import { motion } from "framer-motion";
// styles
import "../styles/globals.css";

import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <motion.div
        //router lets motion recognize route change
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
            transition: {
              duration: 1,
              delay: 0.1,
              ease: "easeIn",
            },
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </Layout>
  );
}

export default MyApp;
