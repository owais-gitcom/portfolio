"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";
import { useState } from "react";

// import cartview from '../components/cartview'

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Left - Logo */}
      <div className={styles.logo}>
        <Link href="/">
          <img src="/header-logo.avif" alt="Logo" />
        </Link>
      </div>

      {/* Center - Nav Links */}
      <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
        <li>
          <Link
            href="/"
            className={`${styles.link} ${
              pathname === "/" ? styles.active : ""
            }`}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            href="/shop"
            className={`${styles.link} ${
              pathname === "/shop" ? styles.active : ""
            }`}
          >
            SHOP
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`${styles.link} ${
              pathname === "/about" ? styles.active : ""
            }`}
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={`${styles.link} ${
              pathname === "/contact" ? styles.active : ""
            }`}
          >
            CONTACT
          </Link>
        </li>

        
       <li>
  <Link
    href="/cartview"
    className={`${styles.link} ${
      pathname === "/page" ? styles.active : ""
    }`}
  >
  </Link>
</li>



      </ul>

      {/* Right - Icons */}
      <div className={styles.icons}>
        <FaShoppingCart />
        <FaUser />
        <GiHamburgerMenu onClick={() => setMenuOpen(!menuOpen)} />
      </div>
    </nav>
  );
}
