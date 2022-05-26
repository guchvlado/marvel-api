import {Component} from 'react';
import PropTypes from 'prop-types';

import CharItem from '../charItem/CharItem';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './CharList.scss';

class CharList extends Component {
  state = {
    characters: [],
    loading: true,
    newItemsLoading: false,
    error: false,
    charEnded: false
  };

  marvelService = new MarvelService();
  limit = 9;
  offset = 123;
  

  onLoadNewCharacters = () => {
    this.setState({newItemsLoading: true, error: false});
    this.marvelService
      .getAllCharacters(this.limit, this.offset)
      .then(this.onCharactersLoaded)
      .catch(this.onError);
    
    this.offset += this.limit;
  }

  onCharactersLoaded = (newCharacters) => {
    let charEnded = false;
    if (newCharacters.length < this.limit) {
      charEnded = true;
    }

    this.setState((state) => ({
      characters: [...state.characters, ...newCharacters],
      loading: false,
      newItemsLoading: false,
      charEnded: charEnded
    }));
  }

  onError = () => {
    this.setState({
      loading: false,
      error: true
    });
  }

  componentDidMount() {
    this.onLoadNewCharacters();
  }

  renderCharacters = (characters) => {
    return characters.map((char, index) => 
      <CharItem 
        refFunc={this.setRef}
        name={char.name} 
        thumbnail={char.thumbnail} 
        key={char.id} 
        onSelectCharacter={() => {
          this.props.onSelectCharacter(char.id);
          this.onFocusItem(index)
        }}/>
    )
  }

  itemsRef = [];
  
  setRef = (ref) => {
    this.itemsRef.push(ref);
  }

  onFocusItem = (id) => {
    this.itemsRef.forEach(item => item.classList.remove('CharItem_selected'));
    this.itemsRef[id].classList.add('CharItem_selected');
    this.itemsRef[id].focus();
  }

  render() {
    const {characters, loading, error, newItemsLoading, charEnded} = this.state;
    const spinner = loading ? <Spinner/> : null;
    const errorMessage = error ? <ErrorMessage/> : null;
    const content = !(loading) ? this.renderCharacters(characters) : null;  
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
          onClick={this.onLoadNewCharacters} 
          className="button button_long">LOAD MORE</button>
      </div>
    )
  }
}

CharList.propTypes = {
  onSelectCharacter: PropTypes.func.isRequired
};

export default CharList