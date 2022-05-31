import React from 'react'

import './ComicsItem.scss';

function ComicsItem({title, price, thumbnail}) {
  return (
    <a href='/' className='ComicsItem'>
        <img src={thumbnail} alt="poster" />
        <h4 className="ComicsItem__name">{title}</h4>
        <div className="ComicsItem__price">{price}</div>
    </a>
  )
}

export default ComicsItem