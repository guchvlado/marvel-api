import './AppBanner.scss';
import avengers from "../../resources/img/Avengers.png";
import avengersLogo from "../../resources/img/Avengers_logo.png";

import React from 'react'

function AppBanner() {
  return (
    <div className='AppBanner'>
        <img src={avengers} alt="Avengers" className='AppBanner__avengers' />
        <div className="AppBanner__title">New comics every week!<br/>Stay tuned!</div>
        <img src={avengersLogo} alt="avengersLogo" className='AppBanner__avengers-logo' />
    </div>
  )
}

export default AppBanner