import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Chat.module.css'; // Import your custom styles as a CSS module

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLogo}>
          <Link href="/">GalacticHub</Link>
        </div>
        <div className={`${styles.navbarLinks} ${isOpen ? styles.active : ''}`}>
          <Link href="/">Home</Link>
          <Link href="/AuthForms">SignUp</Link>
          <Link href="/Users">Discover</Link>
          <Link href="/Notifications">Notifications</Link>
        </div>
        <div className={styles.navbarToggle} onClick={toggleMenu}>
          <div className={`${styles.menuIcon} ${isOpen ? styles.open : ''}`}>
            <div className={styles.menuIconInner}></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
