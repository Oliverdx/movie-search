import React, { useState } from 'react';
import Head from 'next/head'

import fechApiData from '../helpers/get-data';
import Search from '../components/search-form/search-form';
import SearchWrapper from '../components/search-wrapper/search-wrapper';
import Loading from '../components/loading/loading';

const Home = (): JSX.Element => {

	const [api, setApi] = useState(null);
	const [loading, setLoading] = useState(false);

	const getData = async (term) => {
		const terms = { searchTerm: term };
		const response = await fechApiData(terms);

		if (response.message)
			setApi({ message: response.message });
		else
			setApi(response.Search);

		setLoading(false);

	}

	const handleSubmit = (value) => {
		setLoading(true);
		getData(value);
	}

	return (
		<div>
			<Head>
				<link rel="shortcut icon" href="favicon.ico"></link>
				<title>O Cinéfilo - Buscador de séries e filmes</title>
			</Head>
			<header>
				<h1>Movie Search</h1>
				<Search onSubmit={handleSubmit} />
			</header>

			{api && <SearchWrapper searchResults={api} />}
			{loading && <Loading />}
		</div>
	);
};

export default Home;