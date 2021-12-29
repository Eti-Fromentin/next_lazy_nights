import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { ContactUs } from "../components/ContactUs";

import Etienne from "../public/assets/etienne.jpg";
import Sophie from "../public/assets/sophieFood.png";
import Vincenzo from "../public/assets/vincenzo.jpg";
import SmallLogo from "../public/assets/SmallLogo.png";

import styles from "../styles/AboutUs.module.css";

function AboutUs() {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <Link
        className={router.pathname == "/" ? styles.linkActive : styles.link}
        href="/"
        passHref
      >
        <div className={styles.logoContainer}>
          <Image
            src={SmallLogo}
            alt="Lazy Night Small Logo"
            className={styles.AboutUsLogo}
          />
        </div>
      </Link>
      <div className={styles.AboutUsBox}>
        <h1 className={styles.AboutUsTopFirstTitle}>About Us</h1>
        <div className={styles.AboutUsTop}>
          <h2 className={styles.AboutUsTitle}>We are your Fat Generator! </h2>
          <p className={styles.AboutUsConcept}>
            <em>Facts:</em> <br /> Fat act directly on your dopamines neurons
            that brings you pleasure and satisfaction. According to this
            research: Circulating Triglycerides Gate Dopamine- Associated
            Behaviors through DRD2-Expressing, there is a direct link between
            eating fat and pleasure.
          </p>
        </div>
        <div className={styles.AboutTeam}>
          <h2 className={styles.AboutUsTeamTitle}>Who are we?</h2>

          <div className={styles.AboutUsMembers}>
            <div className={styles.AboutUsTeam}>
              <div className={styles.portraitContainer}>
              <h3 className={styles.AboutUsTeamTitle}>Etienne</h3>
                <Image
                  src={Etienne}
                  alt="portrait of Etienne"
                  className={styles.portraitTeam}
                 layout="responsive"
                   />
              </div>
            </div>
            <div className={styles.AboutUsTeam}>
              <div className={styles.portraitContainer}>
              <h3 className={styles.AboutUsTeamTitle}>Sophie </h3>
                <Image
                  src={Sophie}
                  alt="Sophie eating poulp"
                  className={styles.portraitTeam}
                  layout="responsive"
                />
              </div>
            </div>
            <div className={styles.AboutUsTeam}>
              <div className={styles.portraitContainer}>
              <h3 className={styles.AboutUsTeamTitle}>Vincenzo</h3>
                <Image
                  src={Vincenzo}
                  alt="Portrait of Vincenzo"
                  className={styles.portraitTeam}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
          <p className={styles.AboutUsTeamPresentation}>
            Food lovers, <br />
            fat providers!
          </p>
        </div>
        <div className={styles.ContactUs}>
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
