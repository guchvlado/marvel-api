import React from 'react'

import './CharInfo.scss';
import loki from '../../resources/img/loki_mini.png';

function CharInfo() {
  return (
    <article className='CharInfo'>
        <div className="CharInfo__header">
            <img src={loki} alt="loki" />
            <div className="CharInfo__about">
                <h4 className="CharInfo__name">LOKI</h4>
                <div className="CharInfo__buttons-group">
                    <button className="button">HOMEPAGE</button>
                    <button className="button button_gray">WIKI</button>
                </div>
            </div>
        </div>
        <p className="CharInfo__descr">
        In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
        </p>
        <div className="CharInfo__comics">Comics:</div>
        <ul className="CharInfo__comics-list">
            <li className="CharInfo__comics-item">
                All-Winners Squad: Band of Heroes (2011) #3
            </li>
            <li className="CharInfo__comics-item">
                Alpha Flight (1983) #50
            </li>
            <li className="CharInfo__comics-item">
                Amazing Spider-Man (1999) #503
            </li>
            <li className="CharInfo__comics-item">
                Amazing Spider-Man (1999) #504
            </li>
            <li className="CharInfo__comics-item">
                AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
            </li>
            <li className="CharInfo__comics-item">
                Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)
            </li>
            <li className="CharInfo__comics-item">
                Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)
            </li>
            <li className="CharInfo__comics-item">
                Vengeance (2011) #4
            </li>
            <li className="CharInfo__comics-item">
                Avengers (1963) #1
            </li>
            <li className="CharInfo__comics-item">
                Avengers (1996) #1
            </li>
        </ul>
    </article>
  )
}

export default CharInfo