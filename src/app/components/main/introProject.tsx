import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
gsap.registerPlugin(ScrollTrigger);
import styles from '../../styles/main/introProject.module.css';
import Modal from '../using/Modal';

const IntroProject: React.FC = () => {
  const TxtRef1 = useRef(null);
  const TxtRef2 = useRef(null);
  const TxtRef3 = useRef(null);
  const TxtRef4 = useRef(null);
  const BtnRef = useRef(null);
  const [btnText, setBtnText] = useState('프로젝트 클릭하여 자세히보기');
  const [modalOpen, setModalOpen] = useState(false);

  const handleModla = () => {
    setModalOpen(true);
  };

  useEffect(() => {
    const Text1 = TxtRef1.current;
    const Text2 = TxtRef2.current;
    const Text3 = TxtRef3.current;
    const Text4 = TxtRef4.current;

    gsap.to(Text1, {
      xPercent: 200,
      scrollTrigger: {
        trigger: Text1,
        start: '30% center',
        end: '+= 500',
        scrub: true,
        anticipatePin: 1
      }
    });
    gsap.to(Text2, {
      xPercent: -200,
      scrollTrigger: {
        trigger: Text2,
        start: '30% center',
        end: '+= 500',
        scrub: true,
        anticipatePin: 1
      }
    });
    gsap.to(Text3, {
      xPercent: 200,
      scrollTrigger: {
        trigger: Text3,
        start: '30% center',
        end: '+= 500',
        scrub: true,
        anticipatePin: 1
      }
    });
    gsap.to(Text4, {
      xPercent: -200,
      scrollTrigger: {
        trigger: Text4,
        start: '30% center',
        end: '+= 500',
        scrub: true,
        anticipatePin: 1
      }
    });
  }, []);

  const handleHoverPage1 = () => {
    setBtnText('StackOverFlow 자세히 보기');
  };

  const handleHoverPage2 = () => {
    setBtnText('Helfit 자세히 보기');
  };

  const handleHoverPage3 = () => {
    setBtnText('OMT 자세히 보기');
  };
  const handleHoverPage4 = () => {
    setBtnText('Portfolio 자세히 보기');
  };

  const handleLeave = () => {
    setBtnText('프로젝트 클릭하여 자세히보기');
  };

  return (
    <div className={styles.Layout}>
      <div className={styles.Title_Layout}>
        <div className={styles.Title}>프로젝트 .</div>
        <div className={styles.subTitle}>
          <div className={styles.subTxt}>
            <p className={styles.point_txt}>23년 첫 프로젝트,</p>
            <p className={styles.txt}>부딪히고</p>
          </div>
          <div className={styles.subTxt}>
            <p className={styles.txt}>성장하며</p>
            <p className={styles.point_txt}>현재까지</p>
            <p className={styles.txt}>진행 중인 프로젝트입니다. </p>
          </div>
        </div>
      </div>
      <div className={styles.Content_Layout}>
        <div className={styles.Contents}>
          <div className={styles.Content_Number1}>01</div>
          {/* <Link
            href={'https://hoonikim.github.io/%ED%9A%8C%EA%B3%A0/PreProject/'}
          > */}
          <div
            className={styles.Content_Box}
            ref={TxtRef1}
            onClick={handleModla}
          >
            <div className={styles.Content_Title}>01. StackOverFlow</div>
            <div
              className={styles.Content_Page1}
              onMouseEnter={handleHoverPage1}
              onMouseLeave={handleLeave}
            ></div>
            <div className={styles.Content_Txt}>
              Stack Over Flow 구현 프로젝트
            </div>
          </div>
          {modalOpen && <Modal setModalOpen={setModalOpen} />}
          {/* </Link> */}
        </div>
        <div className={styles.Contents}>
          <div className={styles.Content_Number2}>02</div>
          <Link
            href={
              'https://hoonikim.github.io/helfit/%ED%9A%8C%EA%B3%A0/MainREDME/'
            }
          >
            <div className={styles.Content_Box2} ref={TxtRef2}>
              <div className={styles.Content_Title}>02. HelFit</div>
              <div
                className={styles.Content_Page2}
                onMouseEnter={handleHoverPage2}
                onMouseLeave={handleLeave}
              ></div>
              <div className={styles.Content_Txt2}>
                유저 데이터 기반의 헬스 종합 플랫폼
              </div>
            </div>
          </Link>
        </div>
        <div className={styles.Contents}>
          <div className={styles.Content_Number1}>03</div>
          <Link
            href={
              'https://hoonikim.github.io/omt/%ED%9A%8C%EA%B3%A0/OMT_Readme/'
            }
          >
            <div className={styles.Content_Box} ref={TxtRef3}>
              <div className={styles.Content_Title}>03. OnMyTicket</div>
              <div
                className={styles.Content_Page3}
                onMouseEnter={handleHoverPage3}
                onMouseLeave={handleLeave}
              ></div>
              <div className={styles.Content_Txt}>
                나만의 티켓, 예매 등 영화 종합 플랫폼
              </div>
            </div>
          </Link>
        </div>
        <div className={styles.Contents}>
          <div className={styles.Content_Number2}>04</div>
          <Link href={'https://github.com/Hoonikim/Who.is.SeHoon'}>
            <div className={styles.Content_Box2} ref={TxtRef4}>
              <div className={styles.Content_Title}>04. Portfolio</div>
              <div
                className={styles.Content_Page4}
                onMouseEnter={handleHoverPage4}
                onMouseLeave={handleLeave}
              ></div>
              <div className={styles.Content_Txt2}>그리고 현재의 페이지</div>
            </div>
          </Link>
        </div>
      </div>
      <button className={styles.Btn} ref={BtnRef} onMouseLeave={handleLeave}>
        {btnText}
      </button>
    </div>
  );
};
export default IntroProject;
