import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Home, Movie, NotFound } from './pages';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/films/:id' element={<Movie />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
