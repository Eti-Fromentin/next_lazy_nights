import Layout from "../components/layout";
import { CurrentUserNameContextProvider } from "../context/userContext";
import Head from "next/head";
// import { CurrentAllFavoritesContextProvider } from '../context/favoritesContext';
// import { CurrentFinalChoicesContextProvider } from '../context/finalChoices';

import "../styles/globals.css";


function MyApp({ Component, pageProps }) {
  return (
    <CurrentUserNameContextProvider>
      <Layout>
        <Head>
          <title>Lazy Nights</title>
          <meta name="description" content="Fat Generator" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Component {...pageProps} />
      </Layout>
    </CurrentUserNameContextProvider>
  );
}

export default MyApp;
