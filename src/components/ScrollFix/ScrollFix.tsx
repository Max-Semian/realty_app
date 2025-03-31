'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { isHomePage, APP_BASE_PATH } from '../../utils/constants';

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

    // Handle initial hash in URL - only on homepage
    if (window.location.hash && isHomePage(pathname)) {
      const id = window.location.hash.substring(1);
      
      // Use setTimeout to ensure DOM is fully loaded
      setTimeout(() => {
        scrollToSection(id);
      }, 500);
    }

    // Set up click handlers for all hash links on the current page
    const setupHashLinks = () => {
      document.querySelectorAll('a[href^="#"]').forEach(link => {
        // Remove any existing event listeners first to prevent duplicates
        const oldLink = link.cloneNode(true);
        if (link.parentNode) {
          link.parentNode.replaceChild(oldLink, link);
        }
        
        // Add new event listener
        oldLink.addEventListener('click', (e) => {
          const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
          if (!href || href === '#') return;
          
          const id = href.substring(1);
          const element = document.getElementById(id);
          
          if (element) {
            e.preventDefault();
            scrollToSection(id);
            
            // Update URL differently based on whether we're on home page
            if (isHomePage(pathname)) {
              history.pushState(null, '', `${pathname}${href}`);
            } else {
              // If not on homepage, we need special handling
              // This is a backup - should be handled by useNavigation hook
              history.pushState(null, '', `${APP_BASE_PATH}/${href}`);
            }
          }
        });
      });
    };

    // Apply scroll margins to all section elements with IDs
    const applyScrollMargins = () => {
      document.querySelectorAll('section[id]').forEach(section => {
        const headerHeight = getHeaderHeight();
        section.setAttribute('style', `scroll-margin-top: ${headerHeight + 20}px;`);
      });
    };

    // Initialize both functions
    setupHashLinks();
    applyScrollMargins();
    
    // Update margins when window resizes
    window.addEventListener('resize', applyScrollMargins);
    
    return () => {
      window.removeEventListener('resize', applyScrollMargins);
    };
  }, [pathname]);

  return null;
}