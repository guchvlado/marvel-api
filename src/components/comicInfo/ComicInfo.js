import React from 'react'

import './ComicInfo.scss';
import comicPoster from '../../resources/img/poster_big.png';

function ComicInfo() {
  return (
    <div className='ComicInfo'>
        <img src={comicPoster} alt="comicPoster" />
        <div className="ComicInfo__about">
            <div className="ComicInfo__header">
                <h2 className="ComicInfo__name">X-Men: Days of Future Past</h2>
                <a href="/" className="ComicInfo__back">Back to all</a>
            </div>
            <p className="ComicInfo__text">
            Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?
            </p>
            <div className="ComicInfo__pages">144 pages</div>
            <div className="ComicInfo__lang">Language: en-us</div>
            <div className="ComicInfo__price">9.99$</div>
        </div>
    </div>
  )
}

export default ComicInfo