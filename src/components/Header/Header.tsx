'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import styles from "./Header.module.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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

  // Handle link click with direct scrolling
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // If we're on a different page, let the browser navigate with the hash
    if (pathname !== '/') {
      window.location.href = `/${id}`;
      return;
    }
    
    // If we're on the home page, scroll directly
    const section = document.getElementById(id);
    if (!section) return;
    
    const headerHeight = window.innerWidth <= 768 ? 90 : 70;
    const extraPadding = 20;
    
    const y = section.getBoundingClientRect().top + window.scrollY - (headerHeight + extraPadding);
    
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
    
    // Update URL without triggering a scroll
    window.history.pushState(null, '', `#${id}`);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Mobile Menu Button */}
        <div className={styles.mobileMenu}>
          <button onClick={toggleMobileMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Logo with Link to Main Page */}
        <div className={styles.logo} style={{ display: mobileMenuOpen ? 'none' : 'flex' }}>
          <Link href="/">
            <img src="/realty_app/logo-fixed.svg" alt="Logo" width="78" height="74" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ''}`}>
          <Link href="/about-us" onClick={() => setMobileMenuOpen(false)}>О нас</Link>
          
          <a href="#properties" onClick={(e) => handleLinkClick(e, 'properties')}>
            Наши объекты
          </a>
          
          <a href="#advantages" onClick={(e) => handleLinkClick(e, 'advantages')}>
            Преимущества
          </a>
          
          <a href="#specialists" onClick={(e) => handleLinkClick(e, 'specialists')}>
            Специалисты
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