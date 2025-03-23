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
        {/* Logo */}
        <div className={styles.logo}>
          <img src="/realty_app/logo.svg" alt="Logo" width="78" height="74" />
        </div>

        {/* Navigation Links */}
        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ''}`}>
          <Link href="#" onClick={() => setMobileMenuOpen(false)}>О нас</Link>
          <Link href="#" onClick={() => setMobileMenuOpen(false)}>Наши объекты</Link>
          <Link href="#" onClick={() => setMobileMenuOpen(false)}>Преимущества</Link>
          <Link href="#" onClick={() => setMobileMenuOpen(false)}>Сотрудники</Link>
          <Link href="#" onClick={() => setMobileMenuOpen(false)}>Контакты</Link>
          <Link href="#" onClick={() => setMobileMenuOpen(false)}>Личный кабинет</Link>
          
          {/* Contact Info for Mobile (will be styled to only appear in mobile view) */}
          <div className={styles.mobileContact}>
            <a href="tel:+375445630206">+375 (44) 563-02-06</a>
          </div>
        </nav>

        {/* Contact Info for Desktop */}
        <div className={styles.contact}>
          <a href="tel:+375445630206">+375 (44) 563-02-06</a>
        </div>

        {/* Mobile Menu Button */}
        <div className={styles.mobileMenu}>
          <button onClick={toggleMobileMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;