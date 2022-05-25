import { Component } from 'react';

import AppHeader from '../appHeader/AppHeader';
import RandCharacter from '../randCharacter/RandCharacter';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import ErrorBoundery from '../errorBoundery/ErrorBoundery';

import './App.scss';
import decoration from '../../resources/img/bg_character.png';

class App extends Component {
  state = {
    selectedCharacter: null
  }

  onSelectCharacter = (id) => {
    this.setState({
      selectedCharacter: id
    })
  }

  render() {
    return (
      <div className="App">
        <AppHeader/>
        <ErrorBoundery>
          <RandCharacter/>
        </ErrorBoundery>
  
        <main className="char-content">
          <ErrorBoundery>
            <CharList onSelectCharacter={this.onSelectCharacter}/>
          </ErrorBoundery>
          <div className="char-side">
            <ErrorBoundery>
              <CharInfo characterId={this.state.selectedCharacter}/>
            </ErrorBoundery>
          </div>
          <img className='bg-decoration' src={decoration} alt="decoration" />
        </main>
      </div>
    );
  }
}

export default App;
