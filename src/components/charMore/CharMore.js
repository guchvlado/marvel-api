import React from 'react'

import './CharMore.scss';
import charImg from '../../resources/img/loki_big.png';

function CharMore() {
  return (
    <div className='CharMore'>
        <img src={charImg} alt="charImg" />
        <div className="CharMore__about">
            <h4 className="CharMore__name">LOKI</h4>
            <p className="CharMore__text">
            In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
            </p>
        </div>
    </div>
  )
}

export default CharMore