import AppHeader from '../appHeader/AppHeader';
import RandCharacter from '../randCharacter/RandCharacter';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
// import Sceleton from '../skeleton/Sceleton';

import './App.scss';
import decoration from '../../resources/img/bg_character.png';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <RandCharacter/>

      <main className="char-content">
        <CharList/>
        <div className="char-side">
          <CharInfo/>
        </div>
        <img className='bg-decoration' src={decoration} alt="decoration" />
      </main>
    </div>
  );
}

export default App;
