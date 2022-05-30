import { useState, useEffect } from 'react';

import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './RandCharacter.scss';
import mjolnir from '../../resources/img/mjolnir.png';

const RandCharacter = () => {
    const [character, setCharacter] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const marvelService = new MarvelService();

    const onCharacterLoaded = (character) => {
        setCharacter(character);
        setLoading(false);
    }   

    const onError = () => {
        setLoading(false);
        setError(true);
    }

    const updateCharacter = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);

        setLoading(true);
        setError(false);

        marvelService
            .getCharacter(id)
            .then(onCharacterLoaded)
            .catch(onError);
    }

    useEffect(() => {
        updateCharacter();
        // eslint-disable-next-line
    }, []);

    
    const spinner = loading ? <Spinner/> : null;
    const err = error ? <ErrorMessage/> : null;
    const content = !(loading || error) ? <View char={character}/> : null;

    return (
        <div className='RandCharacter'>
            {err}
            {spinner}
            {content}
    
            <div className="RandCharacter__banner">
                <p className="RandCharacter__banner-text">Random character for today!<br/>
    Do you want to get to know him better?</p>
                <p className="RandCharacter__banner-text">Or choose another one</p>
                <button className="button" onClick={updateCharacter}>TRY IT</button>
                <img className="RandCharacter__banner-bg" src={mjolnir} alt="mjolnir" />
            </div>
        </div>
        )
}

const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki} = char;
    const haveImage = thumbnail.search("image_not_available") > 0 ? false : true;

    return (
        <div className="RandCharacter__about">
            <img src={thumbnail} alt="Thor" style={haveImage ? {} : {objectFit: "contain"}} />
            <div className="RandCharacter__info">
                <h3 className="RandCharacter__name">{name}</h3>
                <p className="RandCharacter__descr">{description}</p>
                <div className="RandCharacter__buttons-group">
                    <a target={'_blank'} rel={'noreferrer'} href={homepage} className="button">HOMEPAGE</a>
                    <a target={'_blank'} rel={'noreferrer'} href={wiki} className="button button_gray">WIKI</a>
                </div>
            </div>
        </div>
    );
}

export default RandCharacter