import { Component } from 'react';

import MarvelService from '../../services/MarvelService';

import './RandCharacter.scss';
import mjolnir from '../../resources/img/mjolnir.png';

class RandCharacter extends Component {
    constructor(props) {
        super(props);
        this.updateCharacter();
    }
    state = {
        character: {}
    }

    marvelService = new MarvelService();

    onCharacterLoaded = (character) => {
        this.setState({character})
    }   

    updateCharacter = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.marvelService
            .getCharacter(id)
            .then(this.onCharacterLoaded);
    }

    render() {
        const {character: {name, description, thumbnail, homepage, wiki}} = this.state;
        return (
            <div className='RandCharacter'>
                <div className="RandCharacter__about">
                    <img src={thumbnail} alt="Thor" />
                    <div className="RandCharacter__info">
                        <h3 className="RandCharacter__name">{name}</h3>
                        <p className="RandCharacter__descr">{description}</p>
                        <div className="RandCharacter__buttons-group">
                            <a href={homepage} className="button">HOMEPAGE</a>
                            <a href={wiki} className="button button_gray">WIKI</a>
                        </div>
                    </div>
                </div>
        
                <div className="RandCharacter__banner">
                    <p className="RandCharacter__banner-text">Random character for today!<br/>
        Do you want to get to know him better?</p>
                    <p className="RandCharacter__banner-text">Or choose another one</p>
                    <button className="button" onClick={this.updateCharacter}>TRY IT</button>
                    <img className="RandCharacter__banner-bg" src={mjolnir} alt="mjolnir" />
                </div>
            </div>
          )
    }
}

export default RandCharacter