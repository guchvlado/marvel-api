import React from 'react'

import './ComicsItem.scss';
import comicsImg from '../../resources/img/UW.png';

function ComicsItem() {
  return (
    <a href='/' className='ComicsItem'>
        <img src={comicsImg} alt="poster" />
        <h4 className="ComicsItem__name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</h4>
        <div className="ComicsItem__price">9.99$</div>
    </a>
  )
}

export default ComicsItem