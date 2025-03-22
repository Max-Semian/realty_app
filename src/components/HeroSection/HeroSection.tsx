import React from 'react';
import styles from './HeroSection.module.css';
import bgImage from "./assets/HomeBg1.jpg";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src="/realty_app/logo.svg" alt="Logo" width="120" height="120" />
        </div>
        <h1 className={styles.title}>
          АГЕНТСТВО
          <span className={styles.subtitle}>недвижимости</span>
        </h1>
        <p className={styles.slogan}>Вместе мы сможем больше!</p>
      </div>
    </section>
  );
}