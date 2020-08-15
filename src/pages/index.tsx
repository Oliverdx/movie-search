import React, { useState } from 'react';

import fechApiData from '../helpers/get-data';
import Search from '../components/search-form/search-form';
import SearchWrapper from '../components/search-wrapper/search-wrapper';


const Home = (): JSX.Element => {

	const [api, setApi] = useState();

	const getData = async (term) => {
		const terms = { searchTerm: term };
		const response = await fechApiData(terms);
		setApi(response.Search);

	}

	const handleSubmit = (value) => {
		getData(value);
		alert('Esperando a resposta');
	}

	return (
		<div>
			<header>
				<h1>Movie Search</h1>
				<Search onSubmit={handleSubmit} />
			</header>

			{api && <SearchWrapper searchResults={api} />}
		</div>
	);
};

export default Home;