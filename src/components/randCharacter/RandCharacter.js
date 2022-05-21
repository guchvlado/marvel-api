import './RandCharacter.scss';
import thor from '../../resources/img/thor.png';
import mjolnir from '../../resources/img/mjolnir.png';

function RandCharacter() {
  return (
    <div className='RandCharacter'>
        <div className="RandCharacter__about">
            <img src={thor} alt="Thor" />
            <div className="RandCharacter__info">
                <h3 className="RandCharacter__name">THOR</h3>
                <p className="RandCharacter__descr">As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...</p>
                <div className="RandCharacter__buttons-group">
                    <button className="button">HOMEPAGE</button>
                    <button className="button button_gray">WIKI</button>
                </div>
            </div>
        </div>

        <div className="RandCharacter__banner">
            <p className="RandCharacter__banner-text">Random character for today!<br/>
Do you want to get to know him better?</p>
            <p className="RandCharacter__banner-text RandCharacter__banner-text_middle">Or choose another one</p>
            <button className="button">TRY IT</button>
            <img className="RandCharacter__banner-bg" src={mjolnir} alt="mjolnir" />
        </div>
    </div>
  )
}

export default RandCharacter