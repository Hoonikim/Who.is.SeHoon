import React, { useState, useEffect } from 'react';
import styles from '../../styles/main/contact.module.css';
import Link from 'next/link';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [mindMapVisible, setMindMapVisible] = useState(false);
  const [selectedYear, setSelectedYear] = useState(null);

  const handleYearClick = (year: any) => {
    setSelectedYear(year);
  };
  const handleImageClick = (event: any) => {
    // 마인드맵을 보이도록 설정합니다.
    setMindMapVisible(true);
  };
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className={styles.Layout}>
      <div className={styles.Title}>
        <div> More & More .</div>
      </div>
      <div className={styles.Box_Layout}>
        <div className={styles.Box1}>
          <img
            className={styles.sehoon}
            src='/main/contact/세훈1.png'
            alt='세훈'
            onClick={handleImageClick} // 이미지 클릭 시 이벤트 핸들러 호출
          />
          <div className={styles.Click_me}>Click me</div>
          {/* 마인드맵 */}
          {mindMapVisible && (
            <div className={styles.MindMap_layout}>
              <img
                src='/main/contact/마인드맵2.png'
                className={styles.mindMap}
              />
            </div>
          )}
        </div>
        <div className={styles.subBox_Layout}>
          <div className={styles.Box2}>
            <div className={styles.Contact_Title}>Education</div>
            <div className={styles.Edu_Content}>
              <div className={styles.Years}>
                <div
                  className={`${styles.Year} ${
                    selectedYear === '2022' && styles.SelectedYear
                  }`}
                  onClick={() => handleYearClick('2022')}
                >
                  2022
                </div>
                <div
                  className={`${styles.Year} ${
                    selectedYear === '2023' && styles.SelectedYear
                  }`}
                  onClick={() => handleYearClick('2023')}
                >
                  2023
                </div>
                <div
                  className={`${styles.Year} ${
                    selectedYear === '2024' && styles.SelectedYear
                  }`}
                  onClick={() => handleYearClick('2024')}
                >
                  2024
                </div>
              </div>
              <div className={styles.Years_Content}>
                {selectedYear === null && (
                  <div className={styles.Thanks}>
                    <div>
                      <p>프론트엔드 개발자</p>를 꿈꾼지
                    </div>
                    <div>
                      <p>2년,</p>정말 열심히 달려왔습니다.
                    </div>
                    <div>
                      <p>소중한 시간</p>제 포트폴리오를
                    </div>
                    <div>
                      봐주셔서
                      <p>감사합니다</p>
                    </div>
                  </div>
                )}
                {selectedYear === '2022' && (
                  <div className={styles.EducationDetails}>
                    <div>
                      <div>건국대학교 졸업 .</div>
                      <img
                        className={styles.수료증}
                        src='https://m.kku.ac.kr/mbshome/mbs/wwwkr/renewal/images/identity/ui_am_sh_en.png'
                      />
                    </div>
                    <div>
                      <div>Naver BoostCourse 수료 .</div>
                      <img
                        className={styles.수료증}
                        src='/main/contact/수료증.png'
                      />
                    </div>
                  </div>
                )}
                {selectedYear === '2023' && (
                  <div className={styles.EducationDetails}>
                    <div>
                      <div>코드스테이츠 SEB FE 42기</div>
                      <div>
                        <img
                          className={styles.수료증}
                          src='https://newsimg.sedaily.com/2022/09/02/26AX249JX9_1.jpg'
                        />
                      </div>
                    </div>
                    <div>
                      <div>OMT 프로젝트 시작</div>
                      <div>
                        <img
                          className={styles.수료증}
                          src='/main/contact/OMTtxt.png'
                        />
                      </div>
                    </div>
                  </div>
                )}
                {selectedYear === '2024' && (
                  <div className={styles.EducationDetails}>
                    <div className={styles.Year2024}>OMT 프로젝트 리펙토링</div>
                    <div className={styles.Year2024}>
                      포트폴리오 페이지 제작
                    </div>
                    <div className={styles.Year2024}>
                      프론트 개발자 신입 구직
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={styles.Box3}>
            <div className={styles.Contact_Title}>Contact</div>
            <div className={styles.Contact_Box}>
              <div
                className={styles.Contact_subBox}
                data-aos='flip-down'
                data-aos-duration='1000'
              >
                <div className={styles.Contact_icon}>
                  <img src='main/contact/name.svg' className={styles.icon} />
                </div>
                <div className={styles.Contact_Content}>
                  <div className={styles.Contact_Content_Title}>Name </div>
                  <p>김세훈</p>
                </div>
              </div>

              <Link href={'https://hoonikim.github.io/'}>
                <div
                  className={styles.Contact_subBox}
                  data-aos='flip-down'
                  data-aos-duration='2000'
                >
                  <div className={styles.Contact_icon}>
                    <img src='main/contact/blog.svg' className={styles.icon} />
                  </div>
                  <div className={styles.Contact_Content}>
                    <div className={styles.Contact_Content_Title}>Blog </div>
                    <p>Hoonikim.github.io</p>
                  </div>
                </div>
              </Link>
              <div
                className={styles.Contact_subBox}
                data-aos='flip-down'
                data-aos-duration='2500'
              >
                <div className={styles.Contact_icon}>
                  <img src='main/contact/email.svg' className={styles.icon} />
                </div>
                <div className={styles.Contact_Content}>
                  <div className={styles.Contact_Content_Title}>gmail </div>
                  <p>stackover.hoon </p>
                </div>
              </div>
            </div>
            <img
              className={styles.sehoon2}
              src='/main/contact/세훈2.PNG'
              alt='세훈'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
