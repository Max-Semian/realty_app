'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import '../../styles/animations.css';

export default function ScrollFix() {
  const pathname = usePathname();

  useEffect(() => {
    // Function to get proper header height based on viewport
    const getHeaderHeight = () => {
      const header = document.querySelector('header');
      if (window.innerWidth <= 768) {
        return header ? header.offsetHeight : 90;
      }
      return header ? header.offsetHeight : 70;
    };

    // Function to scroll to section with proper offset
    const scrollToSection = (id: string) => {
      const element = document.getElementById(id);
      if (!element) return;

      const headerHeight = getHeaderHeight();
      const extraPadding = 20;
      
      const yOffset = headerHeight + extraPadding;
      const y = element.getBoundingClientRect().top + window.scrollY - yOffset;
      
      // Add a class to temporarily disable animations during programmatic scrolling
      document.documentElement.classList.add('scrolling-in-progress');
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      
      // Remove the class after scrolling is complete
      setTimeout(() => {
        document.documentElement.classList.remove('scrolling-in-progress');
      }, 1000);
    };

    // Handle initial hash in URL
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      
      // Use setTimeout to ensure DOM is fully loaded
      setTimeout(() => {
        scrollToSection(id);
      }, 500);
    }

    // Apply scroll margins to all section elements with IDs
    const applyScrollMargins = () => {
      document.querySelectorAll('section[id]').forEach(section => {
        const headerHeight = getHeaderHeight();
        
        // Don't override existing styles, just add scroll-margin-top
        const currentStyle = section.getAttribute('style') || '';
        const newStyle = `scroll-margin-top: ${headerHeight + 20}px; ${currentStyle}`;
        
        section.setAttribute('style', newStyle);
      });
    };

    // Setup animation for all sections that aren't already using AnimatedSection
    const setupSectionAnimations = () => {
      // Skip if the browser doesn't support IntersectionObserver
      if (!('IntersectionObserver' in window)) return;
      
      // Target only sections without the animated-section class
      const sections = document.querySelectorAll('section:not(.animated-section)');
      
      sections.forEach(section => {
        // Add animated-section class to track it
        section.classList.add('animated-section');
        
        // Find elements to animate within each section
        // Fix: Convert NodeListOf<Element> to Array properly for TypeScript
        const elementsQuery = section.querySelectorAll(
          'h1, h2, h3, h4, h5, h6, p, .card, .item, .grid > *, .row > *'
        );
        const elementsToAnimate = Array.from(elementsQuery).filter(el => 
          // Don't animate script tags, styles, etc.
          !['SCRIPT', 'STYLE', 'META', 'LINK'].includes(el.tagName)
        );
        
        // Apply animation classes
        elementsToAnimate.forEach((el, index) => {
          el.classList.add('animate-item');
          
          // Apply staggered delays
          const delayClass = `delay-${Math.min(index, 4) * 100 + 100}`;
          el.classList.add(delayClass);
        });
        
        // Create an observer for the section
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting && !document.documentElement.classList.contains('scrolling-in-progress')) {
              // Make all animated items visible when section enters viewport
              elementsToAnimate.forEach(item => {
                item.classList.add('is-visible');
              });
              
              // Once animated, we can stop observing
              observer.unobserve(section);
            }
          },
          { 
            threshold: 0.1,
            rootMargin: '-50px 0px'
          }
        );
        
        // Start observing the section
        observer.observe(section);
      });
    };

    // Initialize
    applyScrollMargins();
    
    // Set up animations after a short delay to ensure the page is rendered
    setTimeout(setupSectionAnimations, 100);
    
    // Update margins when window resizes
    window.addEventListener('resize', applyScrollMargins);
    
    return () => {
      window.removeEventListener('resize', applyScrollMargins);
    };
  }, [pathname]);

  return null;
}