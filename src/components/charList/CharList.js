import {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import CharItem from '../charItem/CharItem';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './CharList.scss';

const CharList = (props) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newItemsLoading, setNewItemsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [charEnded, setCharEnded] = useState(false);
  //const [limit, setLimit] = useState(9);
  const [offset, setOffset] = useState(123);

  const marvelService = new MarvelService();

  const itemsRef = useRef([]);
  const limit = 9;
  

  const onLoadNewCharacters = () => {
    setNewItemsLoading(true);
    setError(false);
    marvelService
      .getAllCharacters(limit, offset)
      .then(onCharactersLoaded)
      .catch(onError);
    
    setOffset(offset => offset + limit);
  }

  const onCharactersLoaded = (newCharacters) => {
    let ended = false;
    if (newCharacters.length < limit) {
      ended = true;
    }

    setCharacters(characters => [...characters, ...newCharacters]);
    setLoading(false);
    setNewItemsLoading(false);
    setCharEnded(ended);
  }

  const onError = () => {
    setLoading(false);
    setError(true);
  }

  useEffect(() => {
    onLoadNewCharacters();
  }, []);

  const renderCharacters = (characters) => {
    return characters.map((char, index) => 
      <CharItem 
        refFunc={el => itemsRef.current[index] = el}
        name={char.name} 
        thumbnail={char.thumbnail} 
        key={char.id} 
        onSelectCharacter={() => {
          props.onSelectCharacter(char.id);
          onFocusItem(index)
        }}/>
    )
  }

  

  const onFocusItem = (id) => {
    itemsRef.current.forEach(item => item.classList.remove('CharItem_selected'));
    itemsRef.current[id].classList.add('CharItem_selected');
    itemsRef.current[id].focus();
  }

  const spinner = loading ? <Spinner/> : null;
  const errorMessage = error ? <ErrorMessage/> : null;
  const content = !(loading) ? renderCharacters(characters) : null;  
  return (
    <div className='CharList'>
        <div className="CharList__grid">
          {content}
        </div>
        {errorMessage}
        {spinner}
        <button 
        style={{display: charEnded ? 'none' : 'block'}}
        disabled={newItemsLoading}
        onClick={onLoadNewCharacters} 
        className="button button_long">LOAD MORE</button>
    </div>
  )
}

CharList.propTypes = {
  onSelectCharacter: PropTypes.func.isRequired
};

export default CharList