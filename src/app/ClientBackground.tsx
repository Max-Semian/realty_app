"use client"

import { useEffect, useRef } from 'react';

function ClientBackground() {
  // Properly type the ref as HTMLDivElement
  const bgRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!bgRef.current) return;
    
    // Get initial background element
    const bgElement = bgRef.current;
    
    // Store the initial background position
    let lastScrollY = window.scrollY;
    
    // Function to update background position to counteract scroll
    const updateBgPosition = () => {
      // Calculate the difference in scroll position
      const delta = window.scrollY - lastScrollY;
      
      // Get current transform or default to none
      const currentTransform = window.getComputedStyle(bgElement).transform;
      const matrix = new DOMMatrix(currentTransform === 'none' ? '' : currentTransform);
      
      // Update the transform - with type safety
      bgElement.style.transform = `translate3d(0, ${-window.scrollY}px, 0)`;
      
      // Update the last scroll position
      lastScrollY = window.scrollY;
    };
    
    // Call immediately to set initial position
    updateBgPosition();
    
    // Add listeners for all possible events that might affect scroll position
    window.addEventListener('scroll', updateBgPosition, { passive: true });
    window.addEventListener('resize', updateBgPosition, { passive: true });
    window.addEventListener('orientationchange', updateBgPosition);
    
    // For iOS Safari, also check on touch events
    window.addEventListener('touchmove', updateBgPosition, { passive: true });
    window.addEventListener('touchend', updateBgPosition, { passive: true });
    
    // Return cleanup function
    return () => {
      window.removeEventListener('scroll', updateBgPosition);
      window.removeEventListener('resize', updateBgPosition);
      window.removeEventListener('orientationchange', updateBgPosition);
      window.removeEventListener('touchmove', updateBgPosition);
      window.removeEventListener('touchend', updateBgPosition);
    };
  }, []);
  
  return (
    <>
      <div 
        ref={bgRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '100vh', // Use viewport height
          width: '100vw',
          backgroundImage: 'url(/realty_app/bg1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          zIndex: -1,
          willChange: 'transform', // Optimize for animations
          transform: 'translateZ(0)', // Initial transform for hardware acceleration
        }}
      />
    </>
  );
}

export default ClientBackground;