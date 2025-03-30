import React from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  // Direct scroll function for the CTA button
  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    const formSection = document.getElementById('form');
    if (!formSection) return;
    
    const headerHeight = window.innerWidth <= 768 ? 90 : 70;
    const extraPadding = 20;
    
    const y = formSection.getBoundingClientRect().top + window.scrollY - (headerHeight + extraPadding);
    
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
    
    // Update URL without triggering a scroll
    window.history.pushState(null, '', '#form');
  };

  return (
    <section className={styles.heroSection}>
      {/* Main content container - 1400px wide */}
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.heroContent}>
            <div className={styles.logoTitleWrapper}>
              <div className={styles.logo}>
                <img src="/realty_app/LOGO_4.svg" alt="Logo" />
              </div>
              <h1 className={styles.title}>
                АГЕНТСТВО
                <span className={styles.subtitle}>недвижимости</span>
              </h1>
            </div>
            <p className={styles.slogan}>Вместе мы сможем больше!</p>
            <div className={styles.ctaButton}>
              <a href="#form" onClick={handleCTAClick}>
                ОСТАВИТЬ ЗАЯВКУ <span className={styles.arrow}>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}