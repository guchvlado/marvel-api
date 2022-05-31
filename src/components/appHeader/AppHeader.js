import { NavLink, Link } from 'react-router-dom';

import './AppHeader.scss';


function AppHeader() {
  return (
    <header className='AppHeader'>
        <h1 className='AppHeader__title'>
            <Link to="/">
                <span>Marvel</span> information portal
            </Link>
        </h1>
        <nav className='AppHeader__menu'>
            <ul>
                <li>
                    <NavLink exact activeClassName='active' to='/'>Characters</NavLink>
                </li>
                /
                <li>
                    <NavLink activeClassName='active' to='/comics'>Comics</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default AppHeader