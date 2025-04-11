'use client';
import { useEffect } from 'react';
import { setCookie, getCookie } from '@/utils/cookies';

export default function InitCookies() {
  useEffect(() => {
    if (!getCookie('visited')) {
      setCookie('visited', 'true');
      console.log('🍪 Кука "visited" установлена!');
    }
  }, []);

  return null; 
}
