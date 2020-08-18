import styles from './info.module.scss';

const Info = ({ infoData }) => {
  return (
    <div className={styles.info_desc}>
      <div className={styles.cast}>
        <h2 className={styles.section_title}>Cast</h2>
        <p className={styles.section_text}>{infoData?.Actors}</p>
      </div>
      <div className={styles.genre}>
        <h2 className={styles.section_title}>Genre</h2>
        <p className={styles.section_text}>{infoData?.Genre}</p>
      </div>
      <div className={styles.director}>
        <h2 className={styles.section_title}>Director</h2>
        <p className={styles.section_text}>{infoData?.Director}</p>
      </div>
    </div>
  )
}

export default Info;