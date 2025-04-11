// utils/cookies.ts
import Cookies from 'js-cookie';

export function setCookie(
  name: string,
  value: string,
  options: Cookies.CookieAttributes = {}
) {
  Cookies.set(name, value, {
    expires: 7,
    path: '/',
    ...options,
  });
}

export function getCookie(name: string): string | undefined {
  return Cookies.get(name);
}

export function removeCookie(name: string): void {
  Cookies.remove(name);
}
