import React, { useState } from 'react';

import styles from './searchform.module.scss';

const Search = ({ handleSubmit }): JSX.Element => {
	const [inputValue, setInputValue] = useState('');
	const isButtonDisabled = inputValue === '';

	const handleChange = event => {
		setInputValue(event.target.value);
	};

	const submitForm = e => {
		e.preventDefault();
		let numbersOnly = new RegExp('[0-9]+');

		if (numbersOnly.test(inputValue))
			handleSubmit(inputValue);
	};

	return (
		<form id="search_form" className={styles.seachwrapper} onSubmit={submitForm}>
			<input
				type="text"
				placeholder="Type an ID of a championship here"
				onChange={handleChange}
				pattern="[0-9]+"
				className={styles.seachwrapper__searchinput}
			/>

			<button id="search_form__btn"
				className={styles.seachwrapper__searchbtn}
				type="submit"
				disabled={isButtonDisabled}>
				Search
      </button>
		</form>
	);
}

export default Search;
