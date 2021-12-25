import Image from "next/image";
import React, { useContext } from "react";
import { useRouter } from "next/router";

import CurrentUserNameContext from '../context/userContext';

import logo from "../public/assets/logo.png";

import styles from "../styles/Age.module.css";

export default function Age() {
  const router = useRouter();
  const { setOfAge } = useContext(CurrentUserNameContext);

  return (
    <main className={styles.BirthDateCheckContainer}>
      <Image src={logo} className={styles.banner} alt="lazy Nights logo" />
      <p className={styles.BirthDateTextPresentation}>
        Tired of everything ? <br />
        You just broke up ? <br />
        Or you want to celebrate with your friends ? <br />
        You will find everything you are looking for a
      </p>
      <h2 className={styles.h2AgeBox}>
        Lazy Night :<br />
        fat food, fat drinks and fat movies !
      </h2>
      <p className={styles.BirthDateCheckText}>
        Leave your brain aside and follow us !
      </p>
      <div className={styles.AgeBox}>
        <p className={styles.BirthDateCheckBox}>Sorry, but we have to ask : </p>
        <h3 className={styles.textBirthDateCheckBox}>
          Have you reached the age of majority ?
        </h3>
        <p className={styles.BirthDateCheckBox}>
          <button className={styles.AgeButton} onClick={() => setOfAge(true)} >
            Yes
          </button>

          <button className={styles.AgeButton} onClick={() => router.push('/Under18')}>No</button>
        </p>
      </div>
    </main>
  );
}


