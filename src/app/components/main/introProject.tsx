import styles from '../../styles/main/introProject.module.css';

const IntroProject = () => {
  return (
    <div className={styles.Layout}>
      <div className={styles.Title}>
        <div> Project.</div>
      </div>
      <div className={styles.Content_Layout}>
        <div className={styles.Contents}>
          <div className={styles.Content_Number1}>01</div>
          <div className={styles.Content_Box}>
            <div className={styles.Content_Title}>01. StackOverFlow</div>
            <div className={styles.Content_box1}></div>
            <div className={styles.Content_Txt}>
              Stack Over Flow 구현 프로젝트
            </div>
          </div>
        </div>
        <div className={styles.Contents}>
          <div className={styles.Content_Number2}>02</div>
          <div className={styles.Content_Box2}>
            <div className={styles.Content_Title}>02. HelFit</div>
            <div className={styles.Content_box1}></div>
            <div className={styles.Content_Txt2}>
              유저 데이터를 기반으로 한 <br />
              헬스 종합 플랫폼 서비스
            </div>
          </div>
        </div>
        <div className={styles.Contents}>
          <div className={styles.Content_Number1}>03</div>
          <div className={styles.Content_Box}>
            <div className={styles.Content_Title}>03. OnMyTicket</div>
            <div className={styles.Content_box1}></div>
            <div className={styles.Content_Txt}>
              나만의 영화 티켓, <br />
              영화 전반의 정보를 담은 종합 플랫폼 서비스
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IntroProject;
