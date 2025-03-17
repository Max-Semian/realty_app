import React from "react";

import Section from "@/components/Section/section";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Main Page</h1>
        <Section />
      </main>
    </div>
  );
}