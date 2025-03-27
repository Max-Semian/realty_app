'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

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
              <Link href="#about" className={styles.navLink}>Об агентстве</Link>
              <Link href="#properties" className={styles.navLink}>Наши объекты</Link>
              <Link href="#advantages" className={styles.navLink}>Преимущества</Link>
              <Link href="#specialists" className={styles.navLink}>Специалисты</Link>
            </div>
            <div className={styles.navColumn}>
              <Link href="#stages" className={styles.navLink}>Этапы работы</Link>
              <Link href="#testimonials" className={styles.navLink}>Отзывы</Link>
              <Link href="#form" className={styles.navLink}>Форма заявки</Link>
              <Link href="#contacts" className={styles.navLink}>Контакты</Link>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}