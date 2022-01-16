import "../styles/index.css";
import { MoralisProvider } from "react-moralis";
import Head from "next/head";
import Title from "../components/Base/Title";
import Navbar from "../components/Base/Navbar";
import Account from "../components/Base/Account";
import Footer from "../components/Base/Footer";

const APP_ID = "PHXVxBWtBBNYEuTCkUbUYL2dbYIrDlpgf8S6WIlm";
const SERVER_URL = "https://ygigwjndfimj.usemoralis.com:2053/server";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      <Head>
        <style>
          @import
          url(&apos;https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap&apos;);
        </style>
        <title>Simple Joe</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="width=device-width, initial-scale=1.0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black flex justify-center">
        <div className="flex flex-col min-h-screen items-stretch min-w-fit max-w-4xl w-11/12">
          <div className="flex justify-between items-center">
            <Title />
            <Navbar />
            <Account />
          </div>
          <Component {...pageProps} />
          <div className="flex justify-end">
            <Footer />
          </div>
        </div>
      </div>
    </MoralisProvider>
  );
}

export default MyApp;
