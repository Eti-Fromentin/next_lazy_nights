import React, { useContext } from 'react';

import CurrentUserNameContext from '../context/userContext';

import HomeConditions from '../components/HomeConditions';

import Head from 'next/head';
import Age from '../components/Age';

import styles from '../styles/Home.module.css'

export default function Home() {
  const { userName, ofAge } = useContext(CurrentUserNameContext);
  return (
    <div className={styles.container}>
      <Head>
        <title>Lazy Nights</title>
        <meta name="description" content="Fat Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      { ofAge || userName.length ? <HomeConditions /> : <Age />}
        
      </main>

      
    </div>
  )
}
