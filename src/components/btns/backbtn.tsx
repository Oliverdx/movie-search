import styles from './backbtn.module.scss';

const BackBtn = (): JSX.Element => {
  return <button className={styles.arrowBack} onClick={() => history.back()}>
    <img src="/img/back_btn.svg" alt="Voltar" />
  </button>;
};

export default BackBtn;