import { useEffect, useRef, useState } from 'react';
import styles from '../../styles/using.module.css';

interface PropsType {
  setModalOpen: (open: boolean) => void;
}

const Modal = ({ setModalOpen }: PropsType) => {
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

          <div className={styles.ProjectIMG}>ProjectIMG</div>
          <div className={styles.Project_Content}>
            <div className={styles.Project_Simple}>
              <div>Project_Title</div>
              <div>Project_Title</div>
              <div>Project_Title</div>
            </div>
            <div className={styles.Project_Detail}>
              <div>Project_Title</div>
              <div>Project_Title</div>
              <div>Project_Title</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
