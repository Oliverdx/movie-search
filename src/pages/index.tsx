import React, {useState, useEffect } from 'react';
import fechApiData from '../helpers/get-data';

const Home = (): JSX.Element => {

	const [api, getApi] = useState(Object);

	useEffect(() => {
		getData('Batman');
	}, []);

	const getData = async (term) => {
		const terms = { searchTerm: term };

		const response = await fechApiData(terms);

		if(response.Search)
			getApi(response);

	}

	return (
		<div>
			<header>
				<h1>Movie Search</h1>
			</header>

			{api?.Search && api.Search.map((movie, index) => {
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