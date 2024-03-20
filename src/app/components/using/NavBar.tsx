import styles from '../../styles/using.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const NavBar = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <ul className={styles.ul} data-aos='fade-down' data-aos-duration='2000'>
      <li className={styles.li}>INTRO</li>
      <li className={styles.li}>PROJECT</li>
      <li className={styles.li}>ABOUT</li>
      <li className={styles.li}>CONTEXT</li>
    </ul>
  );
};

export default NavBar;
