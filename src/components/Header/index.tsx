import './Header.module.scss';

import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <Link className='logo' to='/'>
        Find Film
      </Link>
      <Link className='favoritos' to='/favoritos'>
        Meus Filmes
      </Link>
    </header>
  );
}
