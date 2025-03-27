import React from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      {/* Main content container - 1400px wide */}
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.heroContent}>
            <div className={styles.logoTitleWrapper}>
              <div className={styles.logo}>
                <img src="/realty_app/LOGO_2.svg" alt="Logo" />
              </div>
              <h1 className={styles.title}>
                АГЕНТСТВО
                <span className={styles.subtitle}>недвижимости</span>
              </h1>
            </div>
            <p className={styles.slogan}>Вместе мы сможем больше!</p>
            <div className={styles.ctaButton}>
              <a href="#contact">ОСТАВИТЬ ЗАЯВКУ <span className={styles.arrow}>→</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}