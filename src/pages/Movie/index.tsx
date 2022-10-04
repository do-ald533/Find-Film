import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useRequest } from '@/hooks';
import { Film } from '@/types';

export function Movie() {
  const { id } = useParams();
  const [film, setFilm] = useState<Film>();
  const { data, isError } = useRequest<Film>(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );

  useEffect(() => {
    if (data !== undefined) {
      setFilm(data);
    }
  }, []);

  if (isError) {
    return <h1>error</h1>;
  }

  return (
    <section className='movie'>
      <h1>{film?.title}</h1>
      <aside>
        <img src={`https://image.tmdb.org/t/p/w500/${film?.poster_path}`} />
      </aside>
      <summary>{film?.overview}</summary>
      <table>
        <thead>
          <th>Info</th>
        </thead>
        <tbody>
          <tr>
            <th>Runtime</th>
            <td>{film?.runtime}</td>
          </tr>
          <tr>
            <th>Release date</th>
            <td>{film?.release_date}</td>
          </tr>
          <tr>
            <th>Original language</th>
            <td>{film?.original_language}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
