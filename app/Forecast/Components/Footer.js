import React from 'react'

export default () => 
  <div className="footer">
    <div>Forecaster by Shawn Moore</div>
    <div>Powered by</div>
    <ul className="list-inline">
      <li>
        <a href="https://darksky.net" target="_blank">
          <img src="https://darksky.net/images/darkskylogo.png" alt="Dark Sky API" />
        </a>
      </li>
      <li>&</li>
      <li>
        <a href="https://developers.google.com/maps/documentation/geocoding/start" target="_blank">
          <i className="fa fa-google fa-2x"></i>
        </a>
      </li>
    </ul>
  </div>
