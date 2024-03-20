import TypingEffect from '../using/TypingEffect';
import styles from '../../styles/main/intro.module.css';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Intro: React.FC = () => {
  const ImgRef = useRef(null);

  useEffect(() => {
    const Profile = ImgRef.current;
    gsap.to(Profile, {
      scale: 5,
      autoAlpha: 0,
      duration: 3,
      scrollTrigger: {
        trigger: Profile,
        markers: false,
        start: 'center, center',
        end: 'bottom 40%',
        scrub: true
      }
    });
  }, []);

  return (
    <div className={styles.Intro_Layout}>
      <div className={styles.Intro_Section1}>
        <div className={styles.Who_is_seHoon}>
          <TypingEffect content='W ho is SeHoon?' />
        </div>
      </div>
      <div className={styles.Intro_Section2}>
        <Image
          className='img'
          src='/main/section1/Profile.jpg'
          alt='IMG'
          width='280'
          height='280'
          style={{ borderRadius: '50%' }}
          priority
          quality={100}
          ref={ImgRef}
        />
      </div>
    </div>
  );
};

export default Intro;
