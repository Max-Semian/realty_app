'use client';

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <img src="/realty_app/logo.svg" alt="Logo" width="78" height="74" />
        </div>

        {/* Navigation Links */}
        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ''}`}>
          <Link href="#">О нас</Link>
          <Link href="#">Наши объекты</Link>
          <Link href="#">Преимущества</Link>
          <Link href="#">Сотрудники</Link>
          <Link href="#">Контакты</Link>
          <Link href="#">Личный кабинет</Link>
        </nav>

        {/* Contact Info */}
        <div className={styles.contact}>
          <a href="tel:+375445630206">+375 (44) 563-02-06</a>
        </div>

        {/* Mobile Menu Button */}
        <div className={styles.mobileMenu}>
          <button onClick={toggleMobileMenu}>
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;