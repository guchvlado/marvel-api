import { useState } from 'react';

import AppHeader from '../appHeader/AppHeader';
import RandCharacter from '../randCharacter/RandCharacter';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import ErrorBoundery from '../errorBoundery/ErrorBoundery';

import './App.scss';
import decoration from '../../resources/img/bg_character.png';

const App = () => {
  const [selectedCharacter, setCharacter] = useState(null);

  const onSelectCharacter = (id) => {
    setCharacter(id);
  }

  return (
    <div className="App">
      <AppHeader/>
      <ErrorBoundery>
        <RandCharacter/>
      </ErrorBoundery>

      <main className="char-content">
        <ErrorBoundery>
          <CharList onSelectCharacter={onSelectCharacter}/>
        </ErrorBoundery>
        <div className="char-side">
          <ErrorBoundery>
            <CharInfo characterId={selectedCharacter}/>
          </ErrorBoundery>
        </div>
        <img className='bg-decoration' src={decoration} alt="decoration" />
      </main>
    </div>
  );
}

export default App;
