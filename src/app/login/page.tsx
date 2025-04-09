'use client';

import React from "react";
import Header from "../../components/Header/Header";
import LoginSection from "../../components/LoginSection/LoginSection";
import Footer from "../../components/Footer/Footer";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <LoginSection />
        <Footer />
      </main>
    </div>
  );
}