import React from 'react';

import styles from './search-wrapper.module.scss';

const SearchWrapper = ({ searchResults }): JSX.Element => {

  if (searchResults.message) {
    return <div className={styles.search_notfound}>
      <h2 className={styles.message}>{searchResults.message}</h2>
    </div>
  }

  return <div className={styles.search_wrapper}>
    {searchResults && searchResults.map((movie, index) => {
      const moviePoster = movie?.Poster === 'N/A' ?
        '/img/not_found.jpg' :
        movie.Poster;

      return <a href={`/${movie?.Type}/${movie?.Title}`} key={index} className={styles.search_item}>
        <img className={styles.item_image} src={moviePoster} alt={movie?.Title} />
        <div className={styles.item_info}>
          <button className={styles.item_info__like}></button>
          <div className={styles.item_info__bottom}>
            <h2 className={styles.item_info__title}>{movie?.Title}</h2>
            <p className={styles.item_info__year}>{movie?.Year}</p>
          </div>
        </div>
      </a>
    })}
  </div>
};

export default SearchWrapper;