import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Header.module.css"; // Import CSS module

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
           {/* <Image src="src/app/assets/logo.svg" alt="Logo" width={40} height={40} /> */}
        </div>

        {/* Navigation Links */}
        <nav className={styles.nav}>
          <Link href="#">О нас</Link>
          <Link href="#">Наши объекты</Link>
          <Link href="#">Преимущества</Link>
          <Link href="#">Сотрудники</Link>
          <Link href="#">Контакты</Link>
          <Link href="#" className={styles.highlight}>Личный кабинет</Link>
        </nav>

        {/* Contact Info */}
        <div className={styles.contact}>
          <a href="tel:+375445630206">+375 (44) 563-02-06</a>
        </div>

        {/* Mobile Menu Button */}
        <div className={styles.mobileMenu}>
          <button>☰</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
