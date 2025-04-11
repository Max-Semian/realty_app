'use client';

import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import AboutUsSection from "../../components/AboutUsSection/AboutUsSection";
import PrincipSection from "../../components/PrincipSection/PrincipSection"; 
import Footer from "../../components/Footer/Footer";
import styles from "./page.module.css";
// Import animations CSS - these are needed for ScrollFix to apply styles
import "../../styles/animations.css";
import "../../styles/initial-load-animations.css";

export default function AboutPage() {
  // Initialize animation class on page load for initial animations
  useEffect(() => {
    // Ensure browser repaints elements before adding animation class
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // Add the class to show all animations
        document.documentElement.classList.add('initial-load-complete');
      });
    });
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <AboutUsSection />
        <PrincipSection />
        <Footer />
      </main>
    </div>
  );
}