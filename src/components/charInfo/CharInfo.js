import {Component} from 'react'

import MarvelService from '../../services/MarvelService';

import './CharInfo.scss';
import Sceleton from '../skeleton/Sceleton';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

class CharInfo extends Component {
    state = {
        character: null,
        loading: false,
        error: false
    }

    marvelService = new MarvelService();

    onCharacterLoaded = (character) => {
        this.setState({
            character,
            loading: false
        })
    }   

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    updateCharacter = () => {
        const {characterId} = this.props;
        if (!characterId) {
            return;
        }
        this.setState({
            loading: true,
            error: false
        });
        this.marvelService
        .getCharacter(characterId)
        .then(this.onCharacterLoaded)///res => this.setState({character: res})
        .catch(this.onError);
    }

    componentDidMount() {
        this.updateCharacter();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.characterId !== this.props.characterId) {
            this.updateCharacter();
        }
    }

    render() {
        const {character, loading, error} = this.state;
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
                        <a href={homepage} className="button">HOMEPAGE</a>
                        <a href={wiki} className="button button_gray">WIKI</a>
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

export default CharInfo