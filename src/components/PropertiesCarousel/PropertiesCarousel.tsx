'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './PropertiesCarousel.module.css';
import OurProjects1 from "./assets/OurProjects1.jpg";
import OurProjects2 from "./assets/OurProjects2.jpg";
import OurProjects3 from "./assets/OurProjects3.jpg";
import OurProjects4 from "./assets/OurProjects1.jpg"; // Reusing the first image as a placeholder
import OurProjects5 from "./assets/OurProjects2.jpg"; // Reusing the second image as a placeholder

export default function PropertiesCarousel() {
  // Property data with image src paths
  const properties = [
    {
      id: 1,
      image: OurProjects1.src,
      title: 'Квартиры',
      link: '#',
    },
    {
      id: 2,
      image: OurProjects2.src,
      title: 'Дома, коттеджи',
      link: '#',
    },
    {
      id: 3,
      image: OurProjects3.src,
      title: 'Коммерческая недвижимость',
      link: '#',
    },
    {
      id: 4,
      image: OurProjects4.src,
      title: 'Элитная недвижимость',
      link: '#',
    },
    {
      id: 5,
      image: OurProjects5.src,
      title: 'Новостройки',
      link: '#',
    }
  ];
  
  // State to track the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Number of items to show per slide based on screen width
  const getItemsPerView = () => {
    // We'll set this to 3 for now, but you could make it responsive
    // using window.innerWidth if you're not using CSS grid
    return 3;
  };
  
  const itemsPerView = getItemsPerView();
  
  // Calculate total number of possible starting indices
  const maxStartIndex = Math.max(0, properties.length - itemsPerView);
  
  // Handle next slide
  const nextSlide = () => {
    setCurrentIndex(prevIndex => 
      prevIndex >= maxStartIndex ? 0 : prevIndex + 1
    );
  };
  
  // Handle previous slide
  const prevSlide = () => {
    setCurrentIndex(prevIndex => 
      prevIndex <= 0 ? maxStartIndex : prevIndex - 1
    );
  };
  
  // Get visible properties for current view
  const visibleProperties = properties.slice(
    currentIndex,
    currentIndex + itemsPerView
  );

  return (
    <section className={styles.propertiesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наши объекты</h2>
        
        <div className={styles.carouselContainer}>
          <button 
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={prevSlide}
            aria-label="Previous properties"
          >
            ←
          </button>
          
          <div className={styles.carousel}>
            {visibleProperties.map((property) => (
              <div key={property.id} className={styles.propertyCard}>
                <div className={styles.imageContainer}>
                  <div className={styles.imageWrapper}>
                    {/* Use standard img tag instead of Next.js Image */}
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className={styles.propertyImage}
                    />
                  </div>
                </div>
                <h3 className={styles.propertyTitle}>{property.title}</h3>
                <a href={property.link} className={styles.propertyLink}>
                  ПОДРОБНЕЕ <span className={styles.arrow}>→</span>
                </a>
              </div>
            ))}
          </div>
          
          <button 
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={nextSlide}
            aria-label="Next properties"
          >
            →
          </button>
        </div>
        
        {/* Navigation dots */}
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
      </div>
    </section>
  );
}