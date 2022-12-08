import './Home.module.scss';

import { Link } from 'react-router-dom';

import { useRequest } from '@/hooks';
import { Films } from '@/types';

export default function Home() {
  const { data, isError } = useRequest<Films>(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );
  if (isError) {
    return <h1>Error has occured</h1>;
  }

  return (
    <div className='container'>
      {data?.results.map(({ id, original_title, poster_path }) => (
        <article key={original_title}>
          <strong>{original_title}</strong>
          <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt='' />
          <Link to={`/films/${id}`}>Acessar</Link>
        </article>
      ))}
    </div>
  );
}
