import React from 'react'

import './Form.scss';

function Form() {
  return (
    <form className='Form'>
        <label htmlFor='name' className="Form__name">Or find a character by name:</label>
        <div className="Form__content">
            <input className='Form__input' type="text" placeholder='Enter name' name='name' id='name' />
            <button className="button">FIND</button>
        </div>
    </form>
  )
}

export default Form