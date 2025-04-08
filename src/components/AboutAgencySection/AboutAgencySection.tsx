'use client';

import React from 'react';
import styles from './AboutAgencySection.module.css';

export default function AboutAgencySection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>О нашем агенстве </h2>
          <a href="/about-us" className={styles.learnMore}>
            УЗНАТЬ БОЛЬШЕ <span className={styles.arrow}>→</span>
          </a>
        </div>
        
        <div className={styles.content}>
          <div className={styles.description}>
            <p>
              Меня зовут Алексей Симченко - основатель "Агентство AS недвижимости"
            </p>
            <p>
              В 2017 году окончил Минский Институт Управления по специальности юрист. После окончания работал юристом в области недвижимости в бизнесе 12 лет. Работал в агентстве недвижимости очень плохо работал в компаниях, которые научили меня не только продавать, но и тому, как строить команду.
            </p>
            <p>
              2019 год стал для меня настоящим прорывом в карьере. Я вошел в ТОП-10 риелторов Минска по объему продаж за один год. У меня была сформирована команда, с которой мы мотивировали вокруг: «Недвижимость надо создавать то, чего еще нет».
            </p>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statText}>лет опыта работы</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>2000+</span>
              <span className={styles.statText}>довольных клиентов</span>
            </div>
            <div className={`${styles.statItem} ${styles.hideOnMobile}`}>
              <span className={styles.statNumber}>250+</span>
              <span className={styles.statText}>обученных специалистов</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}