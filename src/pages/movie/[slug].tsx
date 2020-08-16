import fechApiData from '../../helpers/get-data';

const Movie = ({ data }): JSX.Element => {

  return (<div>
    <h1>{data.Title}</h1>
    <img src={data.Poster} alt={data.title} />
  </div>);
}

Movie.getInitialProps = async ({ query }): Promise<any> => {
  const movieData = await fechApiData({ movieName: query.slug });

  return { data: movieData };
}

export default Movie;