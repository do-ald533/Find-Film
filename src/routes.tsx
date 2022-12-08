import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from './components';

const Home = lazy(() => import('./pages/Home/index'));
const Movie = lazy(() => import('./pages/Movie/index'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/films/:id' element={<Movie />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
