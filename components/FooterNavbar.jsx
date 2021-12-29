import React from "react";
import Link from "next/link";

import { useRouter } from "next/router";

import styles from "../styles/FooterNavbar.module.css";

function FooterNavbar() {
  const router = useRouter();

  return (
    <div>
      <footer className={styles.footer}>
        <p className={router.pathname === "/" ? styles.linkActive : styles.link}>
          <span className={styles.materialicons}>
            <Link href="/">home</Link>
          </span>
        </p>
        <p
          className={
            router.pathname === "/Favorites" ? styles.linkActive : styles.link
          }
        >
          <span className={styles.materialicons}>
            <Link href="/Favorites">star</Link>
          </span>
        </p>
        <p
          className={
            router.pathname === "/Sofa" ? styles.linkActive : styles.link
          }
        >
          <span className={styles.materialicons}>
            <Link href="/Sofa">chair</Link>
          </span>
        </p>
        <p
          className={
            router.pathname === "/Catalog" ? styles.linkActive : styles.link
          }
        >
          <span className={styles.materialicons}>
            <Link href="/Catalog">menu_book</Link>
          </span>
        </p>
        <p
          className={
            router.pathname == "/AboutUs" ? styles.linkActive : styles.link
          }
        >
          <span className={styles.materialicons}>
            <Link href="/AboutUs">email</Link>
          </span>
        </p>
      </footer>
    </div>
  );
}

export default FooterNavbar;
