import React from 'react'

import './Sceleton.scss';

function Sceleton() {
  return (
    <article className='Sceleton'>
        <h4 className="Sceleton__name">
            Please select a character to see information
        </h4>
        <div className="Sceleton__header pulse">
            <div className="Sceleton__circle"></div>
            <div className="Sceleton__line Sceleton__line_small"></div>
        </div>
        <div className="Sceleton__content pulse">
            <div className="Sceleton__line"></div>
            <div className="Sceleton__line"></div>
            <div className="Sceleton__line"></div>
        </div>
    </article>
  )
}

export default Sceleton