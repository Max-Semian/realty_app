'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./Header.module.css";
import { useNavigation } from "../../hooks/useNavigation";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { handleAnchorNavigation } = useNavigation();
  const router = useRouter();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close menu when clicking outside and prevent body scroll
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
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

  // Handle anchor link clicks - closes mobile menu and calls navigation handler
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    handleAnchorNavigation(e, id);
  };

  // Handle page navigation with menu closing
  const handlePageClick = (path: string) => {
    setMobileMenuOpen(false);
    router.push(path);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* Mobile Menu Button */}
        <div className={styles.mobileMenu}>
          <button onClick={toggleMobileMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ''}`}>
          {/* Logo - Link to Main Page */}
          <div className={styles.logo} style={{ display: mobileMenuOpen ? 'none' : 'flex' }}>
            <a href="/" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); router.push('/'); }}>
              <img src="/realty_app/LOGO_1.png" alt="Logo" width="50" height="50" />
            </a>
          </div>

          {/* About Us Page Link - using onClick instead of Link component */}
          <a 
            href="/about-us" 
            onClick={(e) => { e.preventDefault(); handlePageClick('/about-us'); }}
            className={styles.navLink}
          >
            О нас
          </a>
          
          {/* Anchor links on main page */}
          <a href="#properties" onClick={(e) => handleLinkClick(e, 'properties')}>
            Наши объекты
          </a>
          
          <a href="#advantages" onClick={(e) => handleLinkClick(e, 'advantages')}>
            Преимущества
          </a>
          
          <a href="#specialists" onClick={(e) => handleLinkClick(e, 'specialists')}>
            Сотрудники
          </a>
          
          {/* Mobile-Only Nav Links */}
          <div className={styles.mobileOnlyLinks}>
            <a href="#stages" onClick={(e) => handleLinkClick(e, 'stages')}>
              Этапы работы
            </a>
            
            <a href="#testimonials" onClick={(e) => handleLinkClick(e, 'testimonials')}>
              Отзывы
            </a>
            
            <a href="#docs" onClick={(e) => handleLinkClick(e, 'docs')}>
              Документы
            </a>
          </div>
          
          <a href="#contacts" onClick={(e) => handleLinkClick(e, 'contacts')}>
            Контакты
          </a>

          <a href="#login" onClick={(e) => handleLinkClick(e, 'login')}>
            Личный кабинет
          </a>

          {/* Contact Info for Desktop */}
          <div className={styles.contact}>
            <a href="tel:+375445630206">+375 (44) 563-02-06</a>
          </div>

          {/* Logo, title and phone number for mobile menu footer */}
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

        {/* Mobile "Личный кабинет" link */}
        <div className={styles.mobileLoginLink}>
          <a href="#" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); }}>
            Личный кабинет
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;