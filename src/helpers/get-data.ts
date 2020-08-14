import validateError from './validate-errors';
import { Interface } from 'readline';

const TOKEN = '7a8619f9';
const API_URL = 'http://www.omdbapi.com/';

interface QueryString {
  movieName?: string,
  searchTerm?: string
};

const fechApiData = async (terms: QueryString): Promise<Object> => {

  const apiURL = `${API_URL}?apikey=${TOKEN}`;
  let queryString = terms.movieName ? `t=${terms.movieName}` : `s=${terms.searchTerm}`

  try {
    const data = await fetch(`${apiURL}&${queryString}`);
    const response = await data.json();

    if (!data.ok) {
      return validateError(data);
    }

    return response;

  } catch (error) {
    return validateError({ status: 503 });
  }

}


export default fechApiData;
