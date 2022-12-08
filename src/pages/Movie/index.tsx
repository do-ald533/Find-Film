import './Movie.module.scss';

import { useParams } from 'react-router-dom';

import { useRequest } from '@/hooks';
import { Film } from '@/types';

export default function Movie() {
  const { id } = useParams();
  const { data, isError } = useRequest<Film>(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );

  return (
    <section className='movie'>
      <h1>{data?.title}</h1>
      <div>
        <aside>
          <img src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`} />
        </aside>
        <summary>{data?.overview}</summary>
      </div>
      <table>
        <thead>
          <th>Info</th>
        </thead>
        <tbody>
          <tr>
            <th>Runtime</th>
            <td>{data?.runtime}</td>
          </tr>
          <tr>
            <th>Release date</th>
            <td>{data?.release_date}</td>
          </tr>
          <tr>
            <th>Original language</th>
            <td>{data?.original_language}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
