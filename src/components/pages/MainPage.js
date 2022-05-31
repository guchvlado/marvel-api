import { useState } from 'react';

import RandCharacter from '../randCharacter/RandCharacter';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import ErrorBoundery from '../errorBoundery/ErrorBoundery';

import decoration from '../../resources/img/bg_character.png';

const MainPage = () => {
    const [selectedCharacter, setCharacter] = useState(null);

    const onSelectCharacter = (id) => {
      setCharacter(id);
    }

    return (
        <>
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
        </>
    )

}

export default MainPage;