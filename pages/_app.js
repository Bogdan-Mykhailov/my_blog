import '../styles/globals.css'
import Layout from "@/components/Lauout/Layout";
import Head from "next/head";

const MyApp = ({Component, pageProps}) => (
  <Layout>
    <Head>
      <meta name='vievport' content="width=device-width, initial-scale=1"/>
    </Head>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp
