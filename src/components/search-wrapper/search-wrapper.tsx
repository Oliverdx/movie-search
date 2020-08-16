import React from 'react';

const SearchWrapper = ({ searchResults }): JSX.Element => {

  console.log(searchResults);

  if (searchResults.message) {
    return <div><h2>{searchResults.message}</h2></div>
  }

  return <div>
    {searchResults && searchResults.map((movie, index) => {
      const moviePoster = movie?.Poster === 'N/A' ?
        'https://via.placeholder.com/300x367' :
        movie.Poster;

      return <a href={`/${movie?.Type}/${movie?.Title}`} key={index}>
        <h2>{movie?.Title}</h2>
        <img src={moviePoster} alt={movie?.Title} />
      </a>
    })}
  </div>
};

export default SearchWrapper;