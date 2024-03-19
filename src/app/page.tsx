import styles from './styles/page.module.css';
import Intro from './components/main/intro';
import NavBar from './components/using/NavBar';

export default function Home() {
  return (
    <>
      <section className={styles.main}>
        <Intro />
      </section>
      <nav>
        <NavBar />
      </nav>
      <section className={styles.main}></section>
      <section className={styles.main}> Who is Hoon</section>
      <section className={styles.main}> Who is Hoon</section>
    </>
  );
}
