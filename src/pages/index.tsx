import React, { useState } from 'react';

import fechApiData from '../helpers/get-data';
import Search from '../components/search-form/search-form';
import SearchWrapper from '../components/search-wrapper/search-wrapper';
import Loading from '../components/loading/loading';

const Home = (): JSX.Element => {

	const [api, setApi] = useState();
	const [loading, setLoading] = useState(false);

	const getData = async (term) => {
		const terms = { searchTerm: term };
		const response = await fechApiData(terms);

		setLoading(false);
		setApi(response.Search);

	}

	const handleSubmit = (value) => {
		setLoading(true);
		getData(value);
	}

	return (
		<div>
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