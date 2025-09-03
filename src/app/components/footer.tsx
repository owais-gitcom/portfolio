"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./footer.module.css";

import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";

export default function Footer() {
  // accordion ke liye state
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.left}>
          <div className={styles.logo}>
            <Image src="/footer-logo_1.png" alt="ApexX Logo" width={140} height={140} />
          </div>
          <p>
            Sed libero odio, sollicitudin a porttitor ac, tempor eu nisi. Nulla sit amet suscipit dolor.
          </p>

          <div className={styles.buttons}>
            <a href="#" className={styles.storeBtn}>
              <Image src="/google-icon-1.png" alt="Google Play" width={130} height={40} />
            </a>
            <a href="#" className={styles.storeBtn}>
              <Image src="/apple-icon.png" alt="App Store" width={130} height={40} />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className={styles.links}>
          {[
            {
              title: "USEFUL LINKS",
              items: ["Search", "Site Map", "Help", "Services", "Careers"],
            },
            {
              title: "HELP & SUPPORT",
              items: ["Customer Support", "Forums", "Testimonials", "Gift Card", "Contact Form"],
            },
            {
              title: "RESOURCES",
              items: ["Community", "Disclaimer", "License", "Privacy", "Partnerships"],
            },
          ].map((section, index) => (
            <div key={index} className={styles.linkSection}>
              <h3
                className={`${styles.footerToggle} ${openIndex === index ? styles.active : ""}`}
                onClick={() => toggleSection(index)}
              >
                {section.title}
              </h3>
              <ul className={`${styles.footerMenu} ${openIndex === index ? styles.active : ""}`}>
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomLinks}>
          <a href="#">Terms & Conditions</a>
          <span className={styles.separator}>|</span>
          <a href="#">Privacy Policy</a>
        </div>

        <p>© 2025 OWAIS. All Rights Reserved.</p>

        <div className={styles.socials}>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaXTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaSnapchatGhost /></a>
        </div>
      </div>
    </footer>
  );
}
