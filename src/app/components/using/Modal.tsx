import { useEffect, useRef, useState } from 'react';
import styles from '../../styles/using.module.css';
import Link from 'next/link';

interface PropsType {
  setModalOpen: (open: boolean) => void;
  title: string;
  Project_Num: string;
  description: string;
  linkUrl: string;
  blogUrl: string;
  githubUrl: string;
  period: string;
  stack: string;
  role: string;
}

const Modal = ({
  setModalOpen,
  title,
  role,
  Project_Num,
  description,
  linkUrl,
  period,
  blogUrl,
  githubUrl,
  stack
}: PropsType) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event?: MouseEvent) => {
      if (
        event &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('mousedown', handler);
      document.body.style.overflow = 'unset';
    };
  }, [setModalOpen]);

  return (
    <>
      <div className={styles.Modal_Layout}>
        <div className={styles.Modal_Container}>
          <img
            src='/close.svg'
            className={styles.Modal_close}
            onClick={closeModal}
          />

          <img
            src={`/main/section3/${Project_Num}.png`}
            className={styles.ProjectIMG}
          />

          <div className={styles.Project_Content}>
            <div className={styles.Project_Simple}>
              <div className={styles.Project_Simple_Info}>
                <div className={styles.Project_Txt}>
                  <p className={styles.Project_Txt1}>프로젝트 명: </p>
                  <p className={styles.Project_Txt2}>{title}</p>
                </div>
                <div className={styles.Project_Txt}>
                  <p className={styles.Project_Txt1}>프로젝트 기간: </p>
                  <p className={styles.Project_Txt2}>{period}</p>
                </div>
              </div>
              <div className={styles.Project_Simple_Link}>
                <div className={styles.LinkForm}>
                  <p className={styles.LinkForm1}>배포 </p>
                  <Link href={`${linkUrl}`}>
                    <img src='/link.svg' className={styles.LinkForm2} />
                  </Link>
                </div>
                <div className={styles.LinkForm}>
                  <p className={styles.LinkForm1}>Blog </p>
                  <Link href={`${blogUrl}`}>
                    <img src='/blog.svg' className={styles.LinkForm2} />
                  </Link>
                </div>
                <div className={styles.LinkForm}>
                  <p className={styles.LinkForm1}>Github </p>
                  <Link href={`${githubUrl}`}>
                    <img
                      src='/github.svg'
                      style={{ width: '3vw' }}
                      className={styles.LinkForm2}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.Project_Detail}>
              <div className={styles.Project_Txt}>
                <p className={styles.Project_Txt1}>간단 소개: </p>
                <p className={styles.Project_Txt2}>{description}</p>
              </div>
              <div className={styles.Project_Txt}>
                <p className={styles.Project_Txt1}>사용 기술: </p>
                <p className={styles.Project_Txt2}>
                  <img
                    src={`/main/section3/${stack}.png`}
                    className={styles.StackIMG}
                  />
                </p>
              </div>
              <div className={styles.Project_Txt}>
                <p className={styles.Project_Txt1}>맡은 역할: </p>
                <p className={styles.Project_Txt2}>{role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
