import styles from '../../styles/main/intro2.module.css';
import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';

const Trailer = () => {
  const [autoplay, setAutoplay] = useState(true);
  const [retryVisible, setRetryVisible] = useState(false);
  const sliderRef = useRef<Slider | null>(null);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    if (sliderRef.current && sliderRef.current.props.children) {
      setTotalSlides(React.Children.count(sliderRef.current.props.children));
    }
  }, [sliderRef]);

  const toggleAutoplay = () => {
    if (retryVisible) {
      setRetryVisible(false);
      if (sliderRef.current) {
        const slider = sliderRef.current;
        slider.slickGoTo(0);
        slider.slickPlay();
      }
    } else {
      setAutoplay(!autoplay);
      if (sliderRef.current) {
        const slider = sliderRef.current;
        if (!autoplay) {
          slider.slickPlay();
        } else {
          slider.slickPause();
        }
      }
    }
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    centerPadding: '25%',
    autoplay: autoplay,
    autoplaySpeed: 5000,
    appendDots: (dots: any) => (
      <div>
        <ul className={styles.dots}> {dots} </ul>
        <button onClick={toggleAutoplay} className={styles.AutoPlay}>
          {retryVisible ? (
            <img
              src='/main/section2/refresh.svg'
              alt='Retry'
              className={styles.AutoPlay_Icon}
            />
          ) : (
            <>
              {autoplay ? (
                <img
                  src='/main/section2/stop.svg'
                  alt='stop'
                  className={styles.AutoPlay_Icon}
                />
              ) : (
                <img
                  src='/main/section2/start.svg'
                  alt='start'
                  className={styles.AutoPlay_Icon}
                />
              )}
            </>
          )}
        </button>
      </div>
    ),
    dotsClass: 'dots_custom',
    afterChange: (current: number) => {
      if (current === totalSlides - 1) {
        setRetryVisible(true);
      } else {
        setRetryVisible(false);
      }
    }
  };

  return (
    <div className={styles.Trailer_Layout}>
      <div className={styles.Slider_Layout}>
        <Slider ref={sliderRef} {...settings}>
          <div className={styles.Slider}>
            <div className={styles.Slider_Contents}>
              <img
                src='/main/section2/파리바게트.png'
                alt='파리바게트 로고'
                className={styles.logo}
                loading='lazy'
              />
              <div className={styles.SliderTxt}>
                끈기를 가지고 꾸준하게 일합니다.
              </div>
              <div className={styles.Paris_Work}>
                <li>2016</li>
                <li>2017</li>
                <li>2020</li>
                <li>2021</li>
                <li>2022</li>
                <li>2023</li>
              </div>
              <div className={styles.Paris_Contents}>
                <Link
                  href={
                    'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%ED%8C%8C%EB%A6%AC%EB%B0%94%EA%B2%8C%ED%8A%B8+%EC%86%94%EC%98%AC%EC%A0%90'
                  }
                >
                  <div className={styles.Paris_Content}>
                    <img
                      src='/main/section2/home.svg'
                      alt='icon'
                      className={styles.icon}
                    />
                    <div>파리바게트 솔올점</div>
                  </div>
                  <div className={styles.Paris_Content}>
                    <img
                      src='/main/section2/location.svg'
                      alt='icon'
                      className={styles.icon}
                    />
                    <div>강원 강릉시 솔올로 74</div>
                  </div>
                  <div className={styles.Paris_Content}>
                    <img
                      src='/main/section2/call.svg'
                      alt='icon'
                      className={styles.icon}
                    />
                    <div>033-641-0884</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.Slider}>
            <div className={styles.Slider_Contents}>
              <img
                src='/main/section2/Next.png'
                alt='Next.js'
                className={styles.Next_js}
                loading='lazy'
              />
              <div className={styles.SliderTxt}>
                새로운 기술에 두려워하지 않습니다.
              </div>
            </div>
          </div>
          <div className={styles.Slider}>
            <div className={styles.Slider_Contents}>
              <img
                src='/main/section2/sehoon.png'
                alt='김세훈 사진'
                className={styles.sehoon}
                loading='lazy'
              />
              <div className={styles.SliderTxt}>항상 밝고 긍정적입니다.</div>
            </div>
          </div>
          <div className={styles.Slider}>
            <div className={styles.Slider_Contents}>
              <img
                src='https://images.velog.io/images/hustle-dev/post/9a376a17-0fb6-4689-9553-4e454ce1b3ca/%E1%84%86%E1%85%A9%E1%84%83%E1%85%A5%E1%86%AB%20%E1%84%8C%E1%85%A1%E1%84%87%E1%85%A1%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3.png'
                alt='모던 자바스크립트'
                className={styles.book1}
                loading='lazy'
              />
              <img
                src='/main/section2/book.png'
                alt='ai데이터 분석 책'
                className={styles.book2}
                loading='lazy'
              />
              <img
                src='/main/section2/workout.gif'
                alt='운동GIF'
                className={styles.workout}
                loading='lazy'
              />
              <div className={styles.SliderTxt}>
                자기 계발에 최선을 다합니다.
              </div>
            </div>
          </div>
          <div className={styles.Slider}>
            <div className={styles.Slider_Contents}>
              <img
                src='/main/section2/review.png'
                alt='리뷰.png'
                className={styles.review}
                loading='lazy'
              />
              <div className={styles.SliderTxt}>
                항상 유저의 입장에서 생각합니다.
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Trailer;
