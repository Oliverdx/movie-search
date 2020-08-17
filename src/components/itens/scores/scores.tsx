import styles from './scores.module.scss';

const Scores = ({ scoreData }) => {
  return (
    <div className={styles.info_scores}>
      <div className={styles.info_scores__imdb}>
        <span className={styles.logo}></span>
        <p className={styles.score}>{scoreData?.Ratings[0]?.Value}</p>
      </div>
      <div className={styles.info_scores__rotten}>
        <span className={styles.logo}></span>
        <p className={styles.score}>{scoreData?.Ratings[1]?.Value}</p>
      </div>
    </div>
  )
}

export default Scores;