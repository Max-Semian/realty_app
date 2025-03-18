import React from "react";

import Section from "@/components/Section/section";

import styles from "./page.module.css";
import Header from "@/components/Header";
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <Header />
        <h1></h1>
     <Section />
      </main>
    </div>
  );
}