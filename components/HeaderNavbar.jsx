import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import SmallLogo from "../public/SmallLogo.png";

import styles from "../styles/HeaderNavbar.module.css";

function HeaderNavbar() {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.liLogo}>
          <Link  className={router.pathname == "/" ? styles.linkActive : styles.link} href="/" passHref>
            <Image
              src={SmallLogo}
              alt="Lazy Nights Small Logo"
              className={styles.smallLogo}
              width={90}
              height={90}
            />
          </Link>
        </li>

        <li className={styles.li}>
          <Link className={router.pathname == "/Basket" ? styles.linkActive : styles.link} href="/Basket">
            My Lazy Night
          </Link>
        </li>

        <li className={styles.li}>
          <Link className={router.pathname == "/Favorites" ? styles.linkActive : styles.link} href="/Favorites">
            Favorites
          </Link>
        </li>

        <li className={styles.li}>
          <Link className={router.pathname == "/Catalog" ? styles.linkActive : styles.link} href="/Catalog">
            A la carte
          </Link>
        </li>

        <li className={styles.li}>
          <Link className={router.pathname == "/AboutUs" ? styles.linkActive : styles.link} href="/AboutUs">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavbar;
