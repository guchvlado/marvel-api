import React from 'react'

import CharItem from '../charItem/CharItem'

import './CharList.scss';

function CharList() {
  return (
    <div className='CharList'>
        <div className="CharList__grid">
          <CharItem/>
          <CharItem/>
          <CharItem/>
          <CharItem/>
          <CharItem/>
          <CharItem/>
          <CharItem/>
          <CharItem/>
          <CharItem/>
        </div>
        <button className="button button_long">LOAD MORE</button>
    </div>
  )
}

export default CharList