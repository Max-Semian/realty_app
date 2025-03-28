'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close menu when clicking outside and prevent body scroll when menu is open
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If menu is open and clicked outside nav and not on menu button
      if (mobileMenuOpen) {
        const nav = document.querySelector(`.${styles.nav}`);
        const mobileMenuButton = document.querySelector(`.${styles.mobileMenu} button`);
        
        if (nav && !nav.contains(event.target as Node) && 
            mobileMenuButton && !mobileMenuButton.contains(event.target as Node)) {
          setMobileMenuOpen(false);
        }
      }
    };

    // Prevent body scroll when menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto'; // Reset on unmount
    };
  }, [mobileMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Mobile Menu Button - Moved to left side */}
        <div className={styles.mobileMenu}>
          <button onClick={toggleMobileMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

          {/* Logo with Link to Main Page - Only visible when menu is closed */}
        <div className={styles.logo} style={{ display: mobileMenuOpen ? 'none' : 'flex' }}>
          <Link href="/">
            <img src="/realty_app/logo-fixed.svg" alt="Logo" width="78" height="74" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ''}`}>
          <Link href="http://localhost:3000/realty_app/about-us" onClick={() => setMobileMenuOpen(false)}>О нас</Link>
          <Link href="#" onClick={() => setMobileMenuOpen(false)}>Наши объекты</Link>
          <Link href="#" onClick={() => setMobileMenuOpen(false)}>Преимущества</Link>
          <Link href="#" onClick={() => setMobileMenuOpen(false)}>Сотрудники</Link>
          {/* Mobile-Only Nav Links */}
          <div className={styles.mobileOnlyLinks}>
            <Link href="#" onClick={() => setMobileMenuOpen(false)}>Этапы работы</Link>
            <Link href="#" onClick={() => setMobileMenuOpen(false)}>Отзывы</Link>
            <Link href="#" onClick={() => setMobileMenuOpen(false)}>Документы</Link>
          </div>
          <Link href="#" onClick={() => setMobileMenuOpen(false)}>Контакты</Link>
          <Link href="#" onClick={() => setMobileMenuOpen(false)}>Личный кабинет</Link>

          {/* Logo, title and phone number for the bottom of mobile menu */}
          <div className={styles.navFooter}>
            <div className={styles.navLogo}>
              <img src="/realty_app/logo-fixed.svg" alt="Logo" width="150" height="133" />
            </div>
            <div className={styles.navTitle}>
              АГЕНТСТВО
              <span className={styles.navSubtitle}>недвижимости</span>
            </div>
            <div className={styles.navPhone}>
              <a href="tel:+375445630206">+375 (44) 563-02-06</a>
            </div>
          </div>
        </nav>

        {/* Contact Info for Desktop */}
        <div className={styles.contact}>
          <a href="tel:+375445630206">+375 (44) 563-02-06</a>
        </div>

        {/* Mobile "Личный кабинет" link */}
        <div className={styles.mobileLoginLink}>
          <Link href="#">Личный кабинет</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;