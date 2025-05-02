import React, { useEffect, useRef } from 'react';
import styles from './HeroSection.module.css';
import '../../styles/initial-load-animations.css';

export default function HeroSection() {
  const sloganRef = useRef<HTMLParagraphElement>(null);
  
  // Ensure the slogan animation works correctly
  useEffect(() => {
    // Apply animation class with slight delay to force repaint
    const sloganElement = sloganRef.current;
    if (sloganElement) {
      // Force repaint by temporarily removing the animation class
      sloganElement.classList.remove('initial-load-animation');
      
      // Force a browser repaint
      void sloganElement.offsetWidth;
      
      // Re-add the animation class
      sloganElement.classList.add('initial-load-animation');
    }
  }, []);
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
            <div className={`${styles.logoTitleWrapper} initial-load-animation`}>
              <div className={styles.logo}>
                <img src="/LOGO_BLACK.png" alt="Logo" />
              </div>
              <h1 className={styles.title}>
                АГЕНТСТВО
                <span className={styles.subtitle}>недвижимости</span>
              </h1>
            </div>
            <p ref={sloganRef} className={`${styles.slogan} initial-load-animation hero-slogan`}>Вместе мы сможем больше!</p>
            <div className={`${styles.ctaButton} initial-load-animation`}>
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