import styles from './top-info.module.scss';
import BackBtn from '../btns/backbtn';
import Scores from '../itens/scores/scores';

const TopInfo = ({ data }): JSX.Element => {

  const { Title, Runtime, Year, Poster } = data;

  return <div className={styles.info_top}>
    <BackBtn />
    <h1 className={styles.title}>{Title}</h1>
    <p className={styles.year}>{Year} {Runtime && `- ${Runtime}`}</p>
    <Scores scoreData={data} />
    <img className={styles.poster_image_mobile} src={Poster} alt={Title} />
  </div>
}

export default TopInfo;