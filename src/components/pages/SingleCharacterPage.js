import {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import AppBanner from '../appBanner/AppBanner';

import './SingleCharacterPage.scss';

function SingleComicPage() {
  const [character, setCharacter] = useState(null);
  const {loading, error, getCharacter, clearError} = useMarvelService();

  const {charId} = useParams();


  const onCharacterLoaded = (character) => {
    setCharacter(character);
  }

  const loadCharacter = () => {
    clearError();
    getCharacter(charId)
      .then(onCharacterLoaded);
  }

  useEffect(() => {
    loadCharacter();
    // eslint-disable-next-line
  }, [charId]);

  const spinner = loading ? <Spinner/> : null;
  const errMessage = error ? <ErrorMessage/> : null;
  const content = !(loading || error || !character) ? <View character={character}/> : null;

  return (
    <main>
      <AppBanner/>
      <div className='CharMore'>
        {spinner}
        {errMessage}
        {content}
      </div>
    </main>
  )
}

const View = ({character}) => {
  const {name, description, thumbnail} = character;
  return (
    <>
        <img src={thumbnail} alt="charImg" />
        <div className="CharMore__about">
            <div className="CharMore__header">
                <h4 className="CharMore__name">{name}</h4>
                <Link to="/" className="CharMore__back">Back to all</Link>
            </div>
            <p className="CharMore__text">
                {description}
            </p>
        </div>
    </>
  )
}

export default SingleComicPage;