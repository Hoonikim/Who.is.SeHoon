'use client';
import React, { useEffect } from 'react';
import styles from './styles/page.module.css';
import Intro from './components/main/intro';
import NavBar from './components/using/NavBar';
import Trailer from './components/main/trailer';
import Intro2 from './components/main/intro2';
import IntroProject from './components/main/introProject';
import Contact from './components/main/contact';
import Skill from './components/main/skill';

export default function Home() {
  useEffect(() => {
    const handleScrollToSection = (sectionId: any) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const handleNavigation = (target: any) => {
      handleScrollToSection(target + '-section');
    };

    const handleClick = (e: any) => {
      const target = e.currentTarget.getAttribute('data-target');
      if (target) {
        handleNavigation(target);
      }
    };

    document.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      document.querySelectorAll('.nav-link').forEach((link) => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <section className={styles.main}>
        <Intro />
      </section>
      <section id='intro-section' className={styles.main2}>
        <Intro2 />
        <div>
          <Trailer />
        </div>
      </section>
      <section id='project-section' className={styles.main3}>
        <IntroProject />
      </section>
      <section id='skill-section' className={styles.main4}>
        <Skill />
      </section>
      <section id='contact-section' className={styles.main5}>
        <Contact />
      </section>
    </>
  );
}
