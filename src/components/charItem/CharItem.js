import './CharItem.scss';

import React from 'react'

function CharItem({name, thumbnail}) {
  return (
    <div className='CharItem'>
        <img className='CharItem__img' src={thumbnail} alt="abyss" />
        <div className="CharItem__block">
            <h4 className="CharItem__name">
                {name}
            </h4>
        </div>
    </div>
  )
}

export default CharItem