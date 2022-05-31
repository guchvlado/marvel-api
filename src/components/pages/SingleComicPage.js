import {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import AppBanner from '../appBanner/AppBanner';

import './SingleComicPage.scss';

function SingleComicPage() {
  const [comic, setComic] = useState(null);
  const {loading, error, getComic, clearError} = useMarvelService();

  const {comicId} = useParams();


  const onComicLoaded = (comic) => {
    setComic(comic);
  }

  const loadComic = () => {
    clearError();
    getComic(comicId)
      .then(onComicLoaded);
  }

  useEffect(() => {
    loadComic();
    // eslint-disable-next-line
  }, [comicId]);

  const spinner = loading ? <Spinner/> : null;
  const errMessage = error ? <ErrorMessage/> : null;
  const content = !(loading || error || !comic) ? <View comic={comic}/> : null;

  return (
    <main>
      <AppBanner/>
      <div className='ComicInfo'>
        {spinner}
        {errMessage}
        {content}
      </div>
    </main>
  )
}

const View = ({comic}) => {
  const {title, price, description, language, pageCount, thumbnail} = comic;
  return (
    <>
      <img src={thumbnail} alt={title} />
      <div className="ComicInfo__about">
        <div className="ComicInfo__header">
          <h2 className="ComicInfo__name">{title}</h2>
          <Link to="/comics" className="ComicInfo__back">Back to all</Link>
        </div>
        <p className="ComicInfo__text">
        {description}
        </p>
        <div className="ComicInfo__pages">{pageCount}</div>
        <div className="ComicInfo__lang">Language: {language}</div>
        <div className="ComicInfo__price">{price}</div>
      </div>
    </>
  )
}

export default SingleComicPage;