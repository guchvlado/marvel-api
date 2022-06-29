import './CharItem.scss';

import React from 'react'

function CharItem({name, thumbnail, onSelectCharacter, refFunc}) {

  return (
      <div ref={refFunc} className='CharItem' onClick={onSelectCharacter} tabIndex={0}>
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