"use client"

import { useEffect, useState } from 'react';

function ClientBackground() {
  const [height, setHeight] = useState('100vh');

  useEffect(() => {
    // Handle mobile viewport height issues
    const setVh = () => {
      // Get the actual viewport height
      const vh = window.innerHeight;
      
      // Set the height as a state - this ensures React re-renders when it changes
      setHeight(`${vh}px`);
      
      // Also set a CSS variable for use elsewhere if needed
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Set it initially
    setVh();
    
    // More aggressive event listeners to catch any browser UI changes
    window.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', setVh);
    window.addEventListener('scroll', setVh);
    window.addEventListener('touchmove', setVh);
    window.addEventListener('touchend', setVh);
    
    // On mobile browsers, the address bar can hide/show which changes viewport height
    // Add a periodic check for height changes (for iOS Safari in particular)
    const interval = setInterval(setVh, 100);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setVh);
      window.removeEventListener('orientationchange', setVh);
      window.removeEventListener('scroll', setVh);
      window.removeEventListener('touchmove', setVh);
      window.removeEventListener('touchend', setVh);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* Fixed background element with explicit height */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0, // Add bottom: 0 to ensure it covers full viewport
          height: height, // Use the state-controlled height
          backgroundImage: 'url(/realty_app/bg1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -1,
          pointerEvents: 'none',
          // Remove backgroundAttachment: 'fixed' as it can cause issues on mobile
        }}
      />
      {/* Add a spacer div that ensures the page is at least the full viewport height */}
      <div style={{ minHeight: height }} />
    </>
  );
}

export default ClientBackground;