import Head from 'next/head'

import fechApiData from '../../helpers/get-data';
import Scores from '../../components/itens/scores/scores';
import Info from '../../components/itens/info/info';

import styles from './[slug].module.scss';

const Series = ({ data }): JSX.Element => {

  return (
    <div className={styles.internalpage} style={{ backgroundImage: 'url(/img/series-bg.png)' }}>
      <Head>
        <link rel="shortcut icon" href="favicon.ico"></link>
        <title>O Cinéfilo - {data.Title}</title>
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <div className={styles.info_top}>
            <h1 className={styles.title}>{data.Title}</h1>
            <p className={styles.year}>{data?.Year}</p>
            <Scores scoreData={data} />
          </div>
          <div className={styles.plot}>
            <h2 className={styles.section_title}>Plot</h2>
            <p className={styles.section_text}>{data?.Plot}</p>
          </div>
        </div>
        <div className={styles.poster}>
          <img className={styles.poster_image} src={data?.Poster} alt={data.Title} />
          <Info infoData={data} />
        </div>
      </div>
    </div >);
}

Series.getInitialProps = async ({ query }): Promise<any> => {
  const movieData = await fechApiData({ movieName: query.slug });

  return { data: movieData };
}

export default Series;