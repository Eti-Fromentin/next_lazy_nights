import { isMobile, BrowserView, MobileView } from "react-device-detect";

import Head from "next/head";
import Layout from "../components/Layout";

import { CurrentUserNameContextProvider } from "../context/userContext";
import { CurrentAllFavoritesContextProvider } from "../context/favoritesContext";
import { CurrentFinalChoicesContextProvider } from "../context/finalChoices";

import "../styles/Slider.css";
import "../styles/globals.css";
import "../styles/BarcodeScanner.css";
import '../styles/Nutrition-label.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <BrowserView>
          <Head>
            <title>Lazy Nights</title>
            <meta
              name="Fat and Lazy Nights Generator"
              content="Fat Generator"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <p className="warning">
            Sorry, this app is only available on mobile browser, please come
            back with your phone or tablet. <br />
            See you soon!
          </p>
      </BrowserView>
      <MobileView>
        <CurrentUserNameContextProvider>
          <CurrentAllFavoritesContextProvider>
            <CurrentFinalChoicesContextProvider>
              <Layout>
                <Head>
                  <title>Lazy Nights</title>
                  <meta
                    name="Fat and Lazy Nights Generator"
                    content="Fat Generator"
                  />
                  <link rel="icon" href="/favicon.ico" />
                </Head>
                <Component {...pageProps} />
              </Layout>
            </CurrentFinalChoicesContextProvider>
          </CurrentAllFavoritesContextProvider>
        </CurrentUserNameContextProvider>
      </MobileView>
    </>
  );
}

export default MyApp;
