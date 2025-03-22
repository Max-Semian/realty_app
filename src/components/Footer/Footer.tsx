'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Logo and agency info */}
          <div className={styles.logoSection}>
            <div className={styles.logoContainer}>
              <img src="/realty_app/logo.svg" alt="Логотип агентства" className={styles.logo} />
            </div>
            <div className={styles.agencyInfo}>
              <h3 className={styles.agencyName}>Агентство AS недвижимости</h3>
              <p className={styles.agencySlogan}>Вместе мы сможем больше!</p>
              <a href="tel:+375445630206" className={styles.agencyPhone}>+375 (44) 563-02-06</a>
            </div>
          </div>

          {/* Navigation links */}
          <nav className={styles.footerNav}>
            <div className={styles.navColumn}>
              <Link href="#about" className={styles.navLink}>Об агентстве</Link>
              <Link href="#properties" className={styles.navLink}>Наши объекты</Link>
              <Link href="#advantages" className={styles.navLink}>Преимущества</Link>
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