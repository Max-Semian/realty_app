"use client"

import React from 'react';

const ClientBackground = () => {
  return (
    <style jsx global>{`
      body::before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        background-image: url('/realty_app/bg1.webp');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        will-change: transform;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        pointer-events: none;
      }
    `}</style>
  );
};

export default ClientBackground;