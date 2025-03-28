'use client';

import React from "react";
import Header from "../../components/Header/Header";
import AboutUsSection from "../../components/AboutUsSection/AboutUsSection";
import PrincipSection from "../../components/PrincipSection/PrincipSection"; 
import Footer from "../../components/Footer/Footer";
import styles from "./page.module.css";

export default function AboutPage() {
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