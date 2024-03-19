'use client';

import styles from '../../styles/main/intro.module.css';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Intro2: React.FC = () => {
  const TxtRef = useRef(null);
  const subTxtRef = useRef(null);

  useEffect(() => {
    const Text = TxtRef.current;
    const subText = subTxtRef.current;
    gsap.to(Text, {
      xPercent: 100,
      scrollTrigger: {
        trigger: Text,
        start: 'bottom center',
        end: 'bottom 10%',
        scrub: true,
        anticipatePin: 1
      }
    });
    gsap.to(subText, {
      xPercent: -100,
      scrollTrigger: {
        trigger: subText,
        start: 'top center',
        end: 'top 10%',
        scrub: true,
        anticipatePin: 1
      }
    });
  }, []);

  return (
    <div className={styles.main2_Hello}>
      <div className={styles.main2_Txt} ref={TxtRef}>
        안녕하세요 김세훈입니다.
      </div>
      <div className={styles.main2_subTxt} ref={subTxtRef}>
        저는 다음과 같은 가치관을 가진 사람입니다.
      </div>
    </div>
  );
};

export default Intro2;
