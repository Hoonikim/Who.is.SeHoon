'use client';

import styles from './styles/page.module.css';
import Intro from './components/main/intro';
import NavBar from './components/using/NavBar';
import Trailer from './components/main/trailer';
import Intro2 from './components/main/intro2';
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
      <section className={styles.main}>
        <Intro />
      </section>
    </>
  );
}
