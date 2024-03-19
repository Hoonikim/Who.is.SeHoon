'use client';
import styles from '../../styles/using.module.css';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Trailer = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    centerPadding: '25%',
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: (dots: any) => (
      <div>
        <ul className={styles.dots}> {dots} </ul>
      </div>
    ),
    dotsClass: 'dots_custom'
  };
  const SliderDetails = [
    {
      title: '높은 목표를 세우고, 스스로 채찍질 한다.',
      imgSrc:
        'https://img.megabox.co.kr/SharedImg/BnftMng/2024/01/01/lqIzLCekvJjaNDEU5Yx6LDETHqS9S7MM.jpg'
    },
    {
      title: '결과도 중요하지만, 과정이 더 중요하다.',
      imgSrc:
        'https://img.megabox.co.kr/SharedImg/BnftMng/2023/12/26/wVnat2pnIJ4nKdNPR4dKVnfLwBKgP97Z.jpg'
    },
    {
      title: '매 순간 최선을 다한다.',
      imgSrc:
        'https://img.megabox.co.kr/SharedImg/BnftMng/2023/12/21/x3FACJZL2PfZTESeNzRIfqsmyTEzl5CE.jpg'
    },
    {
      title: '끊임없이 부딪히고 도전한다.',
      imgSrc:
        'https://img.megabox.co.kr/SharedImg/BnftMng/2023/12/20/vBEJB2GJgcTwyl0D9ZW7HeDempMBWqj4.png'
    },
    {
      title: '모든 일엔 기본이 중요하다.',
      imgSrc:
        'https://img.megabox.co.kr/SharedImg/BnftMng/2023/12/18/ddLigu5OiSTbl83TFLws9KklWzRajrv3.jpg'
    }
  ];

  return (
    <div className={styles.Trailer_Layout}>
      <div className={styles.Slider_Layout}>
        <Slider {...settings}>
          {SliderDetails.map((e, index) => (
            <div key={index} className={styles.Slider}>
              <div className={styles.Slider_Contents}>
                <img
                  src={e.imgSrc}
                  alt={`${e.title} 사진`}
                  className={styles.Photo}
                  loading='lazy'
                />
                <div className={styles.e_ticketTxt}>{e.title}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Trailer;
