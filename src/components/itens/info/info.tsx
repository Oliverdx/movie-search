import styles from './info.module.scss';

const Info = ({ infoData }) => {
  return (
    <div className={styles.info_desc}>
      <div className={styles.info_desc__plot}>
        <h2 className={styles.title_desc}>Plot</h2>
        <p>{infoData?.Plot}</p>
      </div>
      <div className={styles.info_desc__cast}>
        <h2 className={styles.title_desc}>Cast</h2>
        <p>{infoData?.Actors}</p>
      </div>
      <div className={styles.info_desc__genre}>
        <h2 className={styles.title_desc}>Genre</h2>
        <p>{infoData?.Genre}</p>
      </div>
      <div className={styles.info_desc__director}>
        <h2 className={styles.title_desc}>Director</h2>
        <p>{infoData?.Director}</p>
      </div>
    </div>
  )
}

export default Info;