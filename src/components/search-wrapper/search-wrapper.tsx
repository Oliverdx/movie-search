import React from 'react';

const SearchWrapper = ({ searchResults }): JSX.Element => {

  return <div>
    {searchResults && searchResults.map((movie, index) => {
      const moviePoster = movie?.Poster === 'N/A' ?
        'https://via.placeholder.com/300x367' :
        movie.Poster;

      return <div key={index}>
        <h2>{movie?.Title}</h2>
        <img src={moviePoster} alt={movie?.Title} />
      </div>
    })}
  </div>
};

export default SearchWrapper;