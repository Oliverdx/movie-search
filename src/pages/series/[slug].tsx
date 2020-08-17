import fechApiData from '../../helpers/get-data';
import Scores from '../../components/itens/scores/scores';
import Info from '../../components/itens/info/info';

import styles from './[slug].module.scss';

const Series = ({ data }): JSX.Element => {

  return (
    <div className={styles.moviepage}>
      <div className={styles.moviepage_info}>
        <h1 className={styles.info_title}>{data.Title}</h1>
        <p className={styles.info_year}>{data?.Year}</p>
        <Scores scoreData={data} />
        <Info infoData={data} />
      </div>
      <div className={styles.moviepage_poster}>
        <img src={data?.Poster} alt={data.Title} />
      </div>
    </div >);
}

Series.getInitialProps = async ({ query }): Promise<any> => {
  const movieData = await fechApiData({ movieName: query.slug });

  return { data: movieData };
}

export default Series;