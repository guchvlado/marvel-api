import {useState, useEffect} from 'react'
import PropTypes from 'prop-types';

import MarvelService from '../../services/MarvelService';

import './CharInfo.scss';
import Sceleton from '../skeleton/Sceleton';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

const CharInfo = (props) => {
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(false);
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
        const {characterId} = props;
        if (!characterId) {
            return;
        }
        setLoading(true);
        setError(false);
        marvelService
            .getCharacter(characterId)
            .then(onCharacterLoaded)
            .catch(onError);
    }

    useEffect(() => {
        updateCharacter();
        // eslint-disable-next-line
    }, [props.characterId]);

    const skeleton = !character ? <Sceleton/> : null;
    const spinner = loading ? <Spinner/> : null;
    const errorMessage = error ? <ErrorMessage/> : null;
    const content = !(loading || error) && character ? <View character={character}/> : null;
    return (
        <>
            {skeleton}
            {spinner}
            {errorMessage}
            {content}
        </>
        )
}

const View = ({character}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = character;
    const haveImage = thumbnail.search("image_not_available") > 0 ? false : true;
    return (
        <article className='CharInfo'>
            <div className="CharInfo__header">
                <img src={thumbnail} alt="loki" style={haveImage ? {} : {objectFit: "contain"}} />
                <div className="CharInfo__about">
                    <h4 className="CharInfo__name">{name}</h4>
                    <div className="CharInfo__buttons-group">
                        <a target={'_blank'} rel={'noreferrer'} href={homepage} className="button">HOMEPAGE</a>
                        <a target={'_blank'} rel={'noreferrer'} href={wiki} className="button button_gray">WIKI</a>
                    </div>
                </div>
            </div>
            <p className="CharInfo__descr">
                {description}
            </p>
            <div className="CharInfo__comics">Comics:</div>
            <ul className="CharInfo__comics-list">
                {comics.length === 0 ? "There is no comics for this character." : null}
                {
                    comics.slice(0,10).map((item, i) => {
                        return (
                            <li key={i} className="CharInfo__comics-item">
                                {item.name}
                            </li>
                        );
                    })
                }
            </ul>
        </article>
    )
}

CharInfo.propTypes = {
    characterId: PropTypes.number
}

export default CharInfo