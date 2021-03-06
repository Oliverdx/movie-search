import Head from 'next/head'

import fechApiData from '../../helpers/get-data';
import Info from '../../components/itens/info/info';
import TopInfo from '../../components/top-info/top-info';

import styles from './[slug].module.scss';

const Movie = ({ data }): JSX.Element => {

  const posterImage = data?.Poster === 'N/A' ? '/img/not_found.jpg' : data?.Poster;

  return (
    <div className={styles.internalpage} style={{ backgroundImage: 'url(/img/movie-bg.png)' }}>
      <Head>
        <link rel="shortcut icon" href="favicon.ico"></link>
        <title>O Cinéfilo - {data.Title}</title>
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <TopInfo data={data} />
          <div className={styles.plot}>
            <h2 className={styles.section_title}>Plot</h2>
            <p className={styles.section_text}>{data?.Plot}</p>
          </div>
        </div>
        <div className={styles.poster}>
          <img className={styles.poster_image} src={posterImage} alt={data.Title} />
          <Info infoData={data} />
        </div>
      </div>
    </div >);
}

Movie.getInitialProps = async ({ query }): Promise<any> => {
  const movieData = await fechApiData({ movieName: query.slug });

  return { data: movieData };
}

export default Movie;