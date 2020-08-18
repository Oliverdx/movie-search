import Head from 'next/head'

import fechApiData from '../../helpers/get-data';
import Scores from '../../components/itens/scores/scores';
import Info from '../../components/itens/info/info';

import styles from './[slug].module.scss';

const Movie = ({ data }): JSX.Element => {

  return (
    <div className={styles.internalpage}>
      <Head>
        <link rel="shortcut icon" href="favicon.ico"></link>
        <title>O Cinéfilo - {data.Title}</title>
      </Head>
      <div className={styles.internalpage_info}>
        <div className={styles.top_info}>
          <h1 className={styles.info_title}>{data.Title}</h1>
          <p className={styles.info_year}>{data?.Year} - {data?.Country}</p>
          <Scores scoreData={data} />
        </div>
        <Info infoData={data} />
      </div>
      <div className={styles.internalpage_poster}>
        <img className={styles.poster_image} src={data?.Poster} alt={data.Title} />
      </div>
    </div >);
}

Movie.getInitialProps = async ({ query }): Promise<any> => {
  const movieData = await fechApiData({ movieName: query.slug });

  return { data: movieData };
}

export default Movie;