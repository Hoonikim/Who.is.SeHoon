'use client';

import styles from './styles/page.module.css';
import Intro from './components/main/intro';
import NavBar from './components/using/NavBar';
import Trailer from './components/main/trailer';
import Intro2 from './components/main/intro2';
import IntroProject from './components/main/introProject';
import Contact from './components/main/contact';
import Skill from './components/main/skill';

export default function Home() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <section className={styles.main}>
        <Intro />
      </section>
      <section className={styles.main2}>
        <Intro2 />
        <div>
          <Trailer />
        </div>
      </section>
      <section className={styles.main3}>
        <IntroProject />
      </section>
      <section className={styles.main4}>
        <Skill />
      </section>
      <section className={styles.main5}>
        <Contact />
      </section>
    </>
  );
}
