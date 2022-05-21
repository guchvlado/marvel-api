import './CharItem.scss';

import React from 'react'

import abyss from '../../resources/img/abyss.png';

function CharItem() {
  return (
    <div className='CharItem'>
        <img className='CharItem__img' src={abyss} alt="abyss" />
        <div className="CharItem__block">
            <h4 className="CharItem__name">
                abyss
            </h4>
        </div>
    </div>
  )
}

export default CharItem