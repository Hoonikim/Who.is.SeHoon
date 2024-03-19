import styles from './styles/page.module.css';
import Intro from './components/main/intro';

export default function Home() {
  return (
    <>
      <section className={styles.main}>
        <Intro />
      </section>
      <section className={styles.main}></section>
      <section className={styles.main}> Who is Hoon</section>
      <section className={styles.main}> Who is Hoon</section>
    </>
  );
}
