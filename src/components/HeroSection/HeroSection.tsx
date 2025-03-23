import React from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      {/* Main content container - 1400px wide */}
      <div className={styles.container}>
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
      </div>
    </section>
  );
}