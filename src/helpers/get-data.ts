import validateError from './validate-errors';

const TOKEN = '7a8619f9';
const API_URL = '//www.omdbapi.com/';

interface QueryString {
  movieName?: string,
  searchTerm?: string
};

const fechApiData = async (terms: QueryString): Promise<any> => {

  const apiURL = `${API_URL}?apikey=${TOKEN}`;
  let queryString = terms.movieName ? `t=${terms.movieName}` : `s=${terms.searchTerm}`

  try {
    const data: any = await fetch(`${apiURL}&${queryString}`);
    const response: any = await data.json();

    if (response.Response === 'False')
      return { message: 'Nenhum conteúdo encontrado' };

    return response;

  } catch (error) {
    return validateError({ status: 503 });
  }

}


export default fechApiData;
