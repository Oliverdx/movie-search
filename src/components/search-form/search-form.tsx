import React, { useState, useEffect } from 'react';

import styles from './search-form.module.scss';

const SearchStandings = ({ onSubmit }): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const isButtonDisabled = inputValue === '';

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    onSubmit(inputValue);
  };

  return (
    <form id="search_form" className={styles.seachwrapper} onSubmit={submitForm}>
      <input
        type="text"
        placeholder="Digite o nome de um filme"
        onChange={handleChange}
        className={styles.seachwrapper__searchinput}
        defaultValue=""
      />

      <button id="search_form__btn"
        className={styles.seachwrapper__searchbtn}
        type="submit"
        disabled={isButtonDisabled}>
        Buscar
      </button>
    </form>
  );
}

export default SearchStandings;
