import React from 'react';
import TypingEffect from '../../using/TypingEffect';
import styles from '../../../styles/main/intro.module.css';

const Intro = () => {
  return (
    <div className={styles.Intro_Layout}>
      <div className={styles.Intro_Section1}>
        <div className={styles.Who_is_seHoon}>
          <TypingEffect content='W ho is SeHoon ?' />
        </div>
      </div>
      <div className={styles.Intro_Section2}>더 알아보기</div>
    </div>
  );
};

export default Intro;
