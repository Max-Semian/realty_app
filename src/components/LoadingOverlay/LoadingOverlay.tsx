'use client';

import React, { useState, useEffect } from 'react';
import styles from './LoadingOverlay.module.css';

const LoadingOverlay: React.FC = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(true);

  useEffect(() => {
    // Show logo with a slight delay for a better visual effect
    const logoTimer = setTimeout(() => {
      setLogoVisible(true);
    }, 300);

    // Create an array of critical images to preload
    const imagesToPreload = [
      '/realty_app/bg1.webp', // Background image
      '/realty_app/home.jpg', // Hero background
      '/realty_app/LOGO_4.svg', // Logo in hero
      '/realty_app/logo-fixed.svg' // Header logo
    ];

    let loadedCount = 0;
    const totalImages = imagesToPreload.length;

    // Function to handle image load
    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        // All critical images are loaded
        setTimeout(() => {
          setImagesLoaded(true);
          
          // Add a slight delay before hiding the overlay completely
          setTimeout(() => {
            setOverlayVisible(false);
            
            // Ensure browser repaints elements before adding animation class
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                // Add the class to show all first-screen animations
                document.documentElement.classList.add('initial-load-complete');
              });
            });
          }, 800);
        }, 1000); // Minimum display time for overlay
      }
    };

    // Preload all critical images
    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // Count errors as loaded to prevent infinite wait
    });

    return () => {
      clearTimeout(logoTimer);
    };
  }, []);

  // If overlay is completely hidden, don't render it at all
  if (!overlayVisible) return null;

  return (
    <div 
      className={`${styles.overlay} ${imagesLoaded ? styles.fadeOut : ''}`}
      aria-hidden="true"
    >
      <div className={`${styles.logoContainer} ${logoVisible ? styles.logoVisible : ''}`}>
        <img 
          src="/realty_app/LOGO_4.svg" 
          alt="Loading" 
          className={styles.logo}
        />
        <div className={styles.loadingText}>Загрузка...</div>
      </div>
    </div>
  );
};

export default LoadingOverlay;