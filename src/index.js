import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.scss';
import App from './components/app/App';

// import MarvelService from './services/MarvelService';

// const marvelService = new MarvelService();

// marvelService.getAllCharacters().then(res => res.data.results.forEach(item => console.log(item.name)));

// marvelService.getCharacter(1011334).then(res => console.log(res.data.results[0].name));
// console.log(marvelService.getCharacter(1011334))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);