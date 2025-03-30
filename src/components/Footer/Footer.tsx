'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  // Handle link click with direct scrolling
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Left side - Logo and agency info */}
          <div className={styles.leftSection}>
            <div className={styles.logoContainer}>
              <img src="/realty_app/logo-fixed.svg" alt="Логотип агентства" className={styles.logo} />
            </div>
            <div className={styles.agencyInfo}>
              <p className={styles.agencyName}>АГЕНТСТВО</p>
              <p className={styles.agencyName}>недвижимости</p>
              <p className={styles.agencySlogan}>Агентство AS недвижимости</p>
              <p className={styles.agencySlogan}>Вместе мы сможем больше!</p>
              {isMobile && (
                <a href="tel:+375445630206" className={styles.agencyPhone}>+375 (44) 563-02-06</a>
              )}
            </div>
          </div>

          {/* Right side - Navigation links */}
          <nav className={styles.footerNav}>
            <div className={styles.navColumn}>
              <Link href="/about-us" className={styles.navLink}>
                Об агентстве
              </Link>
              
              <a 
                href="#properties" 
                className={styles.navLink}
                onClick={(e) => handleLinkClick(e, 'properties')}
              >
                Наши объекты
              </a>
              
              <a 
                href="#advantages"
                className={styles.navLink}
                onClick={(e) => handleLinkClick(e, 'advantages')}
              >
                Преимущества
              </a>
              
              <a 
                href="#specialists"
                className={styles.navLink}
                onClick={(e) => handleLinkClick(e, 'specialists')}
              >
                Специалисты
              </a>
            </div>
            <div className={styles.navColumn}>
            <a 
                href="#stages"
                className={styles.navLink}
                onClick={(e) => handleLinkClick(e, 'stages')}
              >
                Этапы работы
              </a>
              
              <a 
                href="#testimonials"
                className={styles.navLink}
                onClick={(e) => handleLinkClick(e, 'testimonials')}
              >
                Отзывы
              </a>
              
              <a 
                href="#form"
                className={styles.navLink}
                onClick={(e) => handleLinkClick(e, 'form')}
              >
                Форма заявки
              </a>
              
              <a 
                href="#contacts"
                className={styles.navLink}
                onClick={(e) => handleLinkClick(e, 'contacts')}
              >
                Контакты
              </a>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}