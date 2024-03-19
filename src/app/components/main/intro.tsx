'use client';

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
    // const ani = gsap.timeline();
    // ani.to('.Intro_Img', { scale: 13 }).to('.Intro_Img', { autoAlpha: 0 });

    // ScrollTrigger.create({
    //   animation: ani,
    //   trigger: '.Intro_Section2',
    //   start: 'top top',
    //   end: '+=1000',
    //   scrub: true,
    //   pin: true,
    //   markers: true,
    //   anticipatePin: 1
    // });
    const logo = ImgRef.current;
    gsap.to(logo, {
      x: '30vw',
      duration: 3,
      scrollTrigger: {
        trigger: logo,
        markers: true,
        start: 'center, center'
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
          src='/main/section1/Test.png'
          alt='IMG'
          width='200'
          height='200'
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
