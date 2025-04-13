'use client';
import { useEffect, useState } from 'react';
import { getCookie, setCookie } from '@/utils/cookies';
import styles from './CookieBanner.module.css';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = getCookie('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie('cookie_consent', 'true', { expires: 365 });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className={styles.banner}>
      <p className={styles.text}>
        Мы используем файлы cookie для улучшения работы сайта. Продолжая пользоваться сайтом, вы соглашаетесь с нашей политикой использования cookie.
      </p>
      <button className={styles.button} onClick={handleAccept}>
        Принять
      </button>
    </div>
  );
}
