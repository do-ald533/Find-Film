import './Home.module.scss';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type TFilm = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export function Home() {
  const [films, setFilms] = useState<TFilm[]>([]);

  async function getMovies(): Promise<any> {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`
    );
    const { results } = await response.json();
    return results;
  }

  useEffect(() => {
    (async () => {
      const results = getMovies();
      setFilms(await results);
    })();
  }, []);

  return (
    <div className='container'>
      <h1>Home</h1>
      {films.map(({ id, original_title, poster_path }) => (
        <article key={original_title}>
          <strong>{original_title}</strong>
          <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt='' />
          <Link to={`/films/${id}`}>Acessar</Link>
        </article>
      ))}
    </div>
  );
}
