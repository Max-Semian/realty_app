'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

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
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
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
        section.setAttribute('style', `scroll-margin-top: ${headerHeight + 20}px;`);
      });
    };

    // Initialize
    applyScrollMargins();
    
    // Update margins when window resizes
    window.addEventListener('resize', applyScrollMargins);
    
    return () => {
      window.removeEventListener('resize', applyScrollMargins);
    };
  }, [pathname]);

  return null;
}