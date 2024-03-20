import styles from '../../styles/main/context.module.css';

const Context = () => {
  return (
    <div className={styles.Layout}>
      <div className={styles.Title}>
        <div> Context</div>
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
export default Context;
