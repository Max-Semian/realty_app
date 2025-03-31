'use client';

import React, { ReactNode, useEffect, useRef } from 'react';
import '../../styles/animations.css';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  animateItems?: 'all' | 'direct-children' | 'headings' | 'custom';
  stagger?: boolean;
  threshold?: number;
  rootMargin?: string;
  customSelector?: string;
  as?: React.ElementType;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  id,
  animateItems = 'direct-children',
  stagger = true,
  threshold = 0.1,
  rootMargin = '-50px 0px',
  customSelector,
  as: Component = 'section',
  ...props
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement || typeof window === 'undefined') return;
    
    // Skip if the browser doesn't support IntersectionObserver
    if (!('IntersectionObserver' in window)) return;
    
    // Determine which elements to animate based on the strategy
    let itemsToAnimate: Element[] = [];
    
    if (animateItems === 'all') {
      // Animate all elements inside the section
      itemsToAnimate = Array.from(sectionElement.querySelectorAll('*'));
    } else if (animateItems === 'direct-children') {
      // Animate only direct children of the section
      itemsToAnimate = Array.from(sectionElement.children);
    } else if (animateItems === 'headings') {
      // Animate headings and paragraphs
      itemsToAnimate = Array.from(
        sectionElement.querySelectorAll('h1, h2, h3, h4, h5, h6, p, .card, .item')
      );
    } else if (animateItems === 'custom' && customSelector) {
      // Animate elements matching the custom selector
      itemsToAnimate = Array.from(sectionElement.querySelectorAll(customSelector));
    }
    
    // Apply animation classes to the selected elements
    itemsToAnimate.forEach((item, index) => {
      // Don't animate script tags, styles, etc.
      if (['SCRIPT', 'STYLE', 'META', 'LINK'].includes(item.tagName)) {
        return;
      }
      
      item.classList.add('animate-item');
      
      // Apply staggered delays if enabled
      if (stagger) {
        const delay = Math.min(index, 7) + 1;
        item.classList.add(`delay-${delay * 100}`);
      }
    });
    
    // Create an observer for the section
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // When the section is visible, make all animated items visible
          itemsToAnimate.forEach(item => {
            item.classList.add('is-visible');
          });
          
          // Once animated, we can stop observing
          observer.unobserve(sectionElement);
        }
      },
      { threshold, rootMargin }
    );
    
    // Start observing the section
    observer.observe(sectionElement);
    
    return () => {
      observer.disconnect();
    };
  }, [animateItems, stagger, threshold, rootMargin, customSelector]);
  
  const combinedClassName = `animated-section ${stagger ? 'stagger-children' : ''} ${className}`.trim();
  
  return (
    <Component
      ref={sectionRef}
      className={combinedClassName}
      id={id}
      {...props}
    >
      {children}
    </Component>
  );
};

export default AnimatedSection;