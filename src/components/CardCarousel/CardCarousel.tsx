'use client';

import React, { useState, ReactNode } from 'react';
import styles from './CardCarousel.module.css';

interface CardCarouselProps {
  title: string;
  children: ReactNode[];
  itemsPerView?: number;
  className?: string;
  showDots?: boolean;
}

const CardCarousel: React.FC<CardCarouselProps> = ({ 
  title, 
  children,
  itemsPerView = 4,
  className = '',
  showDots = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Calculate total slides based on children and items per view
  const totalItems = React.Children.count(children);
  const maxStartIndex = Math.max(0, totalItems - itemsPerView);
  
  // Handle navigation
  const prevSlide = () => {
    setCurrentIndex(prevIndex => 
      prevIndex <= 0 ? maxStartIndex : prevIndex - 1
    );
  };
  
  const nextSlide = () => {
    setCurrentIndex(prevIndex => 
      prevIndex >= maxStartIndex ? 0 : prevIndex + 1
    );
  };
  
  // Get visible items
  const visibleItems = React.Children.toArray(children).slice(
    currentIndex,
    currentIndex + itemsPerView
  );

  return (
    <section className={`${styles.carouselSection} ${className}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        
        <div className={styles.carouselContainer}>
          <button 
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={prevSlide}
            aria-label="Previous items"
          >
            ←
          </button>
          
          <div className={styles.carousel}>
            {visibleItems}
          </div>
          
          <button 
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={nextSlide}
            aria-label="Next items"
          >
            →
          </button>
        </div>
        
        {showDots && (
          <div className={styles.dotsContainer}>
            {Array.from({ length: maxStartIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${currentIndex === index ? styles.activeDot : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CardCarousel;