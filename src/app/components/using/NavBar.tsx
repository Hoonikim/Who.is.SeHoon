import React, { useEffect } from 'react';
import styles from '../../styles/using.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const NavBar = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleNavigation = (target: any) => {
    const sectionId = target + '-section';
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ul className={styles.ul} data-aos='fade-down'>
      <li className={styles.li} onClick={() => handleNavigation('intro')}>
        INTRO
      </li>
      <li className={styles.li} onClick={() => handleNavigation('project')}>
        PROJECT
      </li>
      <li className={styles.li} onClick={() => handleNavigation('skill')}>
        SKILL
      </li>
      <li className={styles.li} onClick={() => handleNavigation('contact')}>
        CONTACT
      </li>
    </ul>
  );
};

export default NavBar;
