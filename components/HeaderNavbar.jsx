import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import SmallLogo from "../public/assets/SmallLogo.png";

import styles from "../styles/HeaderNavbar.module.css";

function HeaderNavbar() {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.liLogo}>
          <Link href="/" passHref>
            <Image
              src={SmallLogo}
              alt="Lazy Nights Small Logo"
              className={styles.smallLogo}
              width={90}
              height={90}
            />
          </Link>
        </li>

        <li className={router.pathname == "/Basket" ? styles.liActive : styles.li}>
          <Link href="/Basket">
            My Lazy Night
          </Link>
        </li>

        <li className={router.pathname == "/Favorites" ? styles.liActive : styles.li}>
          <Link href="/Favorites">
            Favorites
          </Link>
        </li>

        <li className={router.pathname == "/Catalog" ? styles.liActive : styles.li}>
          <Link href="/Catalog">
            <a>A la carte</a>
          </Link>
        </li>

        <li className={router.pathname == "/AboutUs" ? styles.liActive : styles.li}>
          <Link  href="/AboutUs">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavbar;
