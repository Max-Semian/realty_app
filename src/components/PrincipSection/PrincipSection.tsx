'use client';

import React from 'react';
import styles from './PrincipSection.module.css';

export default function TeamPrinciplesSection() {
  return (
    <section className={styles.principlesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>НАШ ГЛАВНЫЙ ПРИНЦИП ВНУТРИ КОМАНДЫ</h2>
        
        <p className={styles.description}>
          Мы не конкурируем между собой, а сотрудничаем. Подменяем друг
          друга, делимся опытом, а также клиентами, продавцами и покупателями.
          От этого выигрывают все. Доверьтесь нам и мы поможем вам сделать
          правильный выбор!
        </p>
        
        <div className={styles.buttonContainer}>
          <a href="/realty_app/consultation" className={styles.consultButton}>
            Бесплатная консультация
          </a>
        </div>
      </div>
    </section>
  );
}