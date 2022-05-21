import React from 'react'

import './ComicsList.scss';

import ComicsItem from '../comicsItem/ComicsItem';

function ComicsList() {
  return (
    <div className='ComicsList'>
        <div className="ComicsList__grid">
            <ComicsItem/>
            <ComicsItem/>
            <ComicsItem/>
            <ComicsItem/>

            <ComicsItem/>
            <ComicsItem/>
            <ComicsItem/>
            <ComicsItem/>
        </div>
        <button className="button button_long">LOAD MORE</button>
    </div>
  )
}

export default ComicsList