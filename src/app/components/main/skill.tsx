import React from 'react';
import styles from '../../styles/main/skill.module.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface TechData {
  [key: string]: {
    url: string;
    progress: number;
  };
}

const techData = {
  html: {
    url: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png',
    progress: 70
  },
  css: {
    url: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png',
    progress: 80
  },
  javascript: {
    url: 'https://techstack-generator.vercel.app/js-icon.svg',
    progress: 60
  },
  typescript: {
    url: 'https://techstack-generator.vercel.app/ts-icon.svg',
    progress: 30
  },
  figma: {
    url: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640982247/noticon/tpvr26zp02angin4t0jv.png',
    progress: 50
  },
  github: {
    url: 'https://techstack-generator.vercel.app/github-icon.svg',
    progress: 40
  },
  aws: {
    url: 'https://techstack-generator.vercel.app/aws-icon.svg',
    progress: 30
  },
  vercel: {
    url: 'https://assets.vercel.com/image/upload/front/favicon/vercel/152x152.png',
    progress: 80
  },
  react: {
    url: 'https://techstack-generator.vercel.app/react-icon.svg',
    progress: 60
  },
  nextjs: {
    url: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566879300/noticon/fvty9lnsbjol5lq9u3by.svg',
    progress: 60
  }
};

const renderLogoWithProgress = (techKeys: (keyof typeof techData)[]) => {
  return techKeys.map((techKey, index) => {
    const { url, progress } = techData[techKey];
    return (
      <div className={styles.LogoWrapper} key={index}>
        <div className={styles.Skill_Name} style={{ color: 'black' }}>
          {techKey}
        </div>
        <CircularProgressbar className={styles.progressBar} value={progress} />
        <img src={url} alt={`logo-${index}`} className={styles.Skill_logo} />
        <div className={styles.Skill_Name} style={{ color: 'black' }}>
          {progress} %
        </div>
      </div>
    );
  });
};

const Skill = () => {
  return (
    <div className={styles.Layout}>
      <div className={styles.Content_Title}>
        <div className={styles.Title}>Skill .</div>
        <div className={styles.subTitle}>
          <div className={styles.subTxt}>
            <p className={styles.point_txt}>100% </p>
            <p className={styles.txt}>를 향해</p>
          </div>
          <div className={styles.subTxt}>
            <p className={styles.txt}>공부하며</p>
            <p className={styles.point_txt}>꾸준히 도전</p>
            <p className={styles.txt}>도전해 나가고 있습니다.</p>
          </div>
        </div>
      </div>

      <div className={styles.Contents}>
        <div className={styles.Mac_Box}>
          <img
            className={styles.Mac_topImg}
            src='/main/section4/mactop.png'
            alt='맥북IMG'
          />
          <img
            className={styles.MacImg}
            src='/main/section4/맥북프로.png'
            alt='맥북IMG'
          />
          <img
            className={styles.CodingImg}
            src='/main/section4/Coding.png'
            alt='코딩IMG'
          />
        </div>

        <div className={styles.Skills}>
          <div className={styles.Programming}>
            <div className={styles.Type1}>Programming .</div>
            <img
              className={styles.Mac_topImg1}
              src='/main/section4/content_top.png'
              alt='맥북IMG'
            />
            <div className={styles.logo_Layout}>
              {renderLogoWithProgress([
                'html',
                'css',
                'javascript',
                'typescript'
              ])}
            </div>
          </div>

          <div className={styles.Tools}>
            <div className={styles.Type2}>Tools .</div>
            <img
              className={styles.Mac_topImg1}
              src='/main/section4/content_top.png'
              alt='맥북IMG'
            />
            <div className={styles.logo_Layout}>
              {renderLogoWithProgress(['figma', 'github'])}
            </div>
            <div className={styles.logo_Layout}>
              {renderLogoWithProgress(['aws', 'vercel'])}
            </div>
          </div>

          <div className={styles.Library}>
            <div className={styles.Type1}>Library .</div>
            <img
              className={styles.Mac_topImg1}
              src='/main/section4/content_top.png'
              alt='맥북IMG'
            />
            <div className={styles.logo_Layout}>
              {renderLogoWithProgress(['react', 'nextjs'])}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
