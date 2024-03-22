import styles from '../../styles/main/contact.module.css';

const Contact = () => {
  return (
    <div className={styles.Layout}>
      <div className={styles.Title}>
        <div> More & More .</div>
      </div>
      <div className={styles.Box_Layout}>
        <div className={styles.Box1}></div>
        <div className={styles.subBox_Layout}>
          <div className={styles.Box2}></div>
          <div className={styles.Box2}></div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
