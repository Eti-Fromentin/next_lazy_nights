import Image from "next/image";
import React from "react";

import happyMeal from "../public/assets/happy-meal.jpg";
import milkGlass from "../public/assets/milk-glass.jpg";
import myLittlePony from "../public/assets/my-little-pony-movie.jpg";
import SmallLogo from "../public/assets/SmallLogo.png";

import styles from "../styles/Under18.module.css";

function Under18() {
  return (
    <main className={styles.Under18}>
      <Image
        src={SmallLogo}
        alt="Lazy Night Small Logo"
        className={styles.under18Logo}
      />
      <h1 className={styles.under18Title}>
        Oh no, <br />
        you are not old enough to use our service !
      </h1>
      <p className={styles.under18text}>
        No worries, here is a suggestion for you !
      </p>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <h2 className={styles.under18ImageTitle}>What to eat : </h2>
          <Image
            src={happyMeal}
            alt="happy meal"
            className={styles.under18FoodImages}
          />
        </div>
        <div className={styles.imgContainer}>
          <h2 className={styles.under18ImageTitle}>What to drink : </h2>
          <Image
            src={milkGlass}
            alt="glass of milk"
            className={styles.under18FoodImages}
          />
        </div>
        <div className={styles.imgContainer}>
          <h2 className={styles.under18ImageTitle}>What to see : </h2>
          <Image
            src={myLittlePony}
            alt="poster of little pony movie"
            className={styles.under18FoodImages}
          />
        </div>
      </div>
    </main>
  );
}

export default Under18;
