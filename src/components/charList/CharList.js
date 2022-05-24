import {Component} from 'react'

import CharItem from '../charItem/CharItem'
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './CharList.scss';

class CharList extends Component {
  state = {
    characters: [],
    loading: true,
    error: false
  };

  marvelService = new MarvelService();
  limit = 9;
  offset = 123;

  onLoadNewCharacters = () => {
    this.setState({loading: true, error: false});
    this.marvelService
      .getAllCharacters(this.limit, this.offset)
      .then(this.onCharactersLoaded)
      .catch(this.onError);
    
    this.offset += this.limit;
  }

  onCharactersLoaded = (newCharacters) => {
    this.setState((state) => ({
      characters: [...state.characters, ...newCharacters],
      loading: false
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
    return characters.map((char) => 
      <CharItem name={char.name} thumbnail={char.thumbnail} key={char.id}/>
    )
  }

  render() {
    const {characters, loading, error} = this.state;
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
          <button onClick={this.onLoadNewCharacters} className="button button_long">LOAD MORE</button>
      </div>
    )
  }
}

export default CharList