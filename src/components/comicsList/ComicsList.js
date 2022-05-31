import {useState, useEffect} from 'react'

import './ComicsList.scss';

import ComicsItem from '../comicsItem/ComicsItem';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';

function ComicsList() {
  const [comics, setComics] = useState([]);
  const [newItemsLoading, setNewItemsLoading] = useState(false);
  const [comicsEnded, setComicsEnded] = useState(false);
  const [offset, setOffset] = useState(12);

  const {loading, error, getAllComics} = useMarvelService();

  const limit = 8;

  useEffect(() => {
    onLoadNewComics(true);
    // eslint-disable-next-line
  }, [])

  const onLoadNewComics = (initial) => {
    setNewItemsLoading(!initial);
    getAllComics(limit, offset)
      .then(onComicsLoaded);
    
    setOffset(offset => offset + limit);
  }

  const onComicsLoaded = (newComics) => {
    let ended = false;
    if (newComics.length < limit)  {
      ended = true;
    }
    setComics(comics => [...comics, ...newComics]);
    setNewItemsLoading(false);
    setComicsEnded(ended);
  }


  const renderComics = (comics) => {
    return comics.map((comic, i) => 
    <ComicsItem
      key={i}
      id={comic.id}
      title={comic.title} 
      price={comic.price}
      thumbnail={comic.thumbnail}/>);
  }

  const spinner = loading && !newItemsLoading ? <Spinner/> : null
  const errorMessage = error ? <ErrorMessage/> : null;
  const content = renderComics(comics);

  return (
    <div className='ComicsList'>
      {spinner}
      {errorMessage}
        <div className="ComicsList__grid">
            {content}
        </div>
        <button 
        style={{display: comicsEnded ? 'none' : 'block'}}
        disabled={newItemsLoading}
        onClick={() => onLoadNewComics()}
        className="button button_long">LOAD MORE</button>
    </div>
  )
}

export default ComicsList