import React, { useState } from 'react';

import fechApiData from '../helpers/get-data';
import Search from '../components/searchform/searchform';

const Home = (): JSX.Element => {

	const [api, setApi] = useState(Object);

	const getData = async (term) => {
		const terms = { searchTerm: term };
		const response = await fechApiData(terms);

		console.log(response);
		setApi(response.Search);

	}

	const handleSubmit = (value) => {
		getData(value);
	}

	return (
		<div>
			<header>
				<h1>Movie Search</h1>
				<Search onSubmit={handleSubmit} />
			</header>

			{api && api.map((movie, index) => {
				const moviePoster = movie?.Poster === 'N/A' ?
					'https://via.placeholder.com/300x367' :
					movie.Poster;

				return <div key={index}>
					<h2>{movie?.Title}</h2>
					<img src={moviePoster} alt={movie?.Title} />
				</div>
			})}

		</div>
	);
};

export default Home;