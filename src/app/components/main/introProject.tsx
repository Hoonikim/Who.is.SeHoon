import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);
  const [modalOpen4, setModalOpen4] = useState(false);

  const handleModal1 = () => {
    setModalOpen1(true);
  };

  const handleModal2 = () => {
    setModalOpen2(true);
  };

  const handleModal3 = () => {
    setModalOpen3(true);
  };

  const handleModal4 = () => {
    setModalOpen4(true);
  };

  useEffect(() => {
    const animateText = (ref: any, xOffset: any) => {
      gsap.to(ref.current, {
        xPercent: xOffset,
        scrollTrigger: {
          trigger: ref.current,
          start: '30% center',
          end: '+= 500',
          scrub: true,
          anticipatePin: 1
        }
      });
    };

    [TxtRef1, TxtRef2, TxtRef3, TxtRef4].forEach((ref, index) => {
      const xOffset = index % 2 === 0 ? 200 : -200;
      animateText(ref, xOffset);
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
          <div
            className={styles.Content_Box}
            ref={TxtRef1}
            onClick={handleModal1}
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
          {modalOpen1 && (
            <Modal
              setModalOpen={setModalOpen1}
              Project_Num={'1'}
              title={'Stack Overflow'}
              period={'2023. 02 ~ 2023. 03 ( 약 1개월 )'}
              description={
                'stackoverflow 페이지를 정해진 기간 내에 똑같이 구현해내는 프로젝트'
              }
              stack={'stack1'}
              role={'로그인, 회원가입, Footer, 재사용컴포넌트'}
              linkUrl={
                'http://underdog15.s3-website.ap-northeast-2.amazonaws.com/'
              }
              blogUrl={
                'https://hoonikim.github.io/%ED%9A%8C%EA%B3%A0/PreProject/'
              }
              githubUrl={'https://github.com/codestates-seb/seb42_pre_015'}
            />
          )}
        </div>
        <div className={styles.Contents}>
          <div className={styles.Content_Number2}>02</div>

          <div
            className={styles.Content_Box2}
            ref={TxtRef2}
            onClick={handleModal2}
          >
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
          {modalOpen2 && (
            <Modal
              setModalOpen={setModalOpen2}
              Project_Num={'2'}
              title={'HelFit'}
              period={'2023. 03 ~ 2023. 04 ( 약 2개월 )'}
              description={
                '유저 데이터를 기반으로 신체정보 통계 및 건강관리 기능을 제공, 커뮤니티를 통해 유저 간 정보 공유 및 교류, 주변의 운동시설을 안내해주는 위치 기반 서비스를 제공하는 헬스 종합 플랫폼 사이트'
              }
              stack={'stack2'}
              role={'화면 설계 , 로그인, 회원가입, OAuth, 전체 게시판 CRUD'}
              linkUrl={'https://helfit.vercel.app/'}
              blogUrl={
                'https://hoonikim.github.io/helfit/%ED%9A%8C%EA%B3%A0/MainREDME/'
              }
              githubUrl={'https://github.com/sixman-s/helfit'}
            />
          )}
        </div>
        <div className={styles.Contents}>
          <div className={styles.Content_Number1}>03</div>

          <div
            className={styles.Content_Box}
            ref={TxtRef3}
            onClick={handleModal3}
          >
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
          {modalOpen3 && (
            <Modal
              setModalOpen={setModalOpen3}
              Project_Num={'3'}
              title={'OnMyTicket'}
              period={'2023. 09 ~ 2024. 01 (약 5개월)'}
              description={
                '영화의 모든 것을 담당하고 싶다는 포부로 만든 사이트이며 예매 뿐만 아니라 영화 관련 정보 전반을 확인 및 나만의 영화티켓 제작을 목표로 진행한 영화 종합 플랫폼 사이트'
              }
              stack={'stack2'}
              role={
                '화면 설계, 로그인, 회원가입, CRUD, 예매 자동화, 공공API 등 프론트 개발 전반'
              }
              linkUrl={'https://omt-onmyticket.vercel.app/'}
              blogUrl={
                'https://hoonikim.github.io/omt/%ED%9A%8C%EA%B3%A0/OMT_Readme/'
              }
              githubUrl={'https://github.com/OMT-OnMyTicket/OMT'}
            />
          )}
        </div>
        <div className={styles.Contents}>
          <div className={styles.Content_Number2}>04</div>

          <div
            className={styles.Content_Box2}
            ref={TxtRef4}
            onClick={handleModal4}
          >
            <div className={styles.Content_Title}>04. Portfolio</div>
            <div
              className={styles.Content_Page4}
              onMouseEnter={handleHoverPage4}
              onMouseLeave={handleLeave}
            ></div>
            <div className={styles.Content_Txt2}>그리고 현재의 페이지</div>
          </div>
          {modalOpen4 && (
            <Modal
              setModalOpen={setModalOpen4}
              Project_Num={'4'}
              title={'Who.is.Sehoon'}
              period={'2024. 03 ~ 2024. 03 (약 1주일)'}
              description={'개인 포트폴리오 홈페이지'}
              stack={'stack2'}
              role={'-'}
              linkUrl={'https://who-is-se-hoon.vercel.app/'}
              blogUrl={
                'https://hoonikim.github.io/%ED%9A%8C%EA%B3%A0/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4/'
              }
              githubUrl={'https://github.com/Hoonikim/Who.is.SeHoon'}
            />
          )}
        </div>
      </div>
      <button className={styles.Btn} ref={BtnRef} onMouseLeave={handleLeave}>
        {btnText}
      </button>
    </div>
  );
};
export default IntroProject;
