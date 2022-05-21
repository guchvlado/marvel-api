import './AppHeader.scss';


function AppHeader() {
  return (
    <header className='AppHeader'>
        <h1 className='AppHeader__title'>
            <a href="/">
                <span>Marvel</span> information portal
            </a>
        </h1>
        <nav className='AppHeader__menu'>
            <ul>
                <li className="active"><a href="/">Characters</a></li>
                /
                <li><a href="/">Comics</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default AppHeader