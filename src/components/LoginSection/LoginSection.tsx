'use client';

import React from 'react';
import styles from './LoginPersonalAccount.module.css';

export default function LoginPersonalAccount() {
  return (
    <section className={styles.loginSection}>
      <div className={styles.container}>
          <h2 className={styles.title}>Вход в личный кабинет продавца</h2>
          <form className={styles.form}>
            <input
              type="email"
              placeholder="Email"
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Пароль"
              className={styles.input}
            />
            <button type="submit" className={styles.button}>Войти</button>
          </form>
        </div>
    </section>
  );
}
