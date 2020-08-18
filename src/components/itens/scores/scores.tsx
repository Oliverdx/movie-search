import styles from './scores.module.scss';
import { useState, useEffect } from 'react';

const Scores = ({ scoreData }) => {
  const [imdbScore, setImdbScore] = useState('');
  const [rottenScore, setRottenScore] = useState('');

  useEffect(() => {
    const scoreRating = scoreData?.Ratings ? scoreData.Ratings : '';

    if (scoreRating.length > 0) {
      setImdbScore(scoreData?.Ratings[0]?.Value);
      setRottenScore(scoreData?.Ratings[1]?.Value);
    }

  }, [scoreData]);

  return (
    <div className={styles.info_scores}>
      {imdbScore &&
        <div className={styles.info_scores__imdb}>
          <span className={styles.logo}></span>
          <p className={styles.score}>{imdbScore}</p>
        </div>
      }
      {rottenScore &&
        <div className={styles.info_scores__rotten}>
          <span className={styles.logo}></span>
          <p className={styles.score}>{rottenScore}</p>
        </div>}
    </div>
  )
}

export default Scores;