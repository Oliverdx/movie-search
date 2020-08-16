import fechApiData from '../../helpers/get-data';

const Series = ({ data }): JSX.Element => {

  return (<div>
    <h1>{data?.Type} - {data?.Title}</h1>
    <img src={data?.Poster} alt={data?.title} />
  </div>);
}

Series.getInitialProps = async ({ query }): Promise<any> => {
  const serieData = await fechApiData({ movieName: query.slug });

  return { data: serieData };
}

export default Series;