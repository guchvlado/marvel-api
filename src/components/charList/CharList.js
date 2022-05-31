import {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import CharItem from '../charItem/CharItem';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './CharList.scss';

const CharList = (props) => {
  const [characters, setCharacters] = useState([]);
  const [newItemsLoading, setNewItemsLoading] = useState(false);
  const [charEnded, setCharEnded] = useState(false);
  //const [limit, setLimit] = useState(9);
  const [offset, setOffset] = useState(123);

  const {loading, error, getAllCharacters} = useMarvelService();

  const itemsRef = useRef([]);
  const limit = 9;
  

  const onLoadNewCharacters = (initial) => {
    setNewItemsLoading(!initial);
    getAllCharacters(limit, offset)
      .then(onCharactersLoaded);
    
    setOffset(offset => offset + limit);
  }

  const onCharactersLoaded = (newCharacters) => {
    let ended = false;
    if (newCharacters.length < limit) {
      ended = true;
    }

    setCharacters(characters => [...characters, ...newCharacters]);
    setNewItemsLoading(false);
    setCharEnded(ended);
  }

  useEffect(() => {
    onLoadNewCharacters(true);
    // eslint-disable-next-line
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

  const spinner = loading && !newItemsLoading ? <Spinner/> : null;
  const errorMessage = error ? <ErrorMessage/> : null;
  //const content = !(loading) ? renderCharacters(characters) : null;  
  return (
    <div className='CharList'>
        <div className="CharList__grid">
          {renderCharacters(characters)}
        </div>
        {errorMessage}
        {spinner}
        <button 
        style={{display: charEnded ? 'none' : 'block'}}
        disabled={newItemsLoading}
        onClick={() => onLoadNewCharacters(false)} 
        className="button button_long">LOAD MORE</button>
    </div>
  )
}

CharList.propTypes = {
  onSelectCharacter: PropTypes.func.isRequired
};

export default CharList