import styles from '../../styles/main/contact.module.css';

const Contact = () => {
  return (
    <div className={styles.Layout}>
      <div className={styles.Title}>
        <div> More & More .</div>
      </div>
      <div className={styles.Box_Layout}>
        <div className={styles.Box1}>
          <div className={styles.Programming}>
            <div>HTML</div>
            <div>CSS</div>
            <div>Javascript</div>
            <div>Typescript</div>
          </div>
          <div className={styles.Library}>
            <div>React</div>
            <div>Next.js</div>
          </div>
          <div className={styles.Tools}>
            <div>Git</div>
            <div>GitHub</div>
            <div>AWS</div>
            <div>Vercel</div>
          </div>
          <div className={styles.Programming}>
            <div>HTML</div>
            <div>CSS</div>
            <div>Javascript</div>
            <div>Typescript</div>
          </div>
        </div>
        <div className={styles.subBox_Layout}>
          <div className={styles.Box2}></div>
          <div className={styles.Box2}></div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
