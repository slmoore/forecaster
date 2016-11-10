import React, { Component } from 'react'
import { render } from 'react-dom'

const Alert = (props) => {
  const { title, uri } = props
  return (
    <div className="alertSingle">
      <div className="alertTitle">{title}</div>
      <div className="alertLink">
        <a href={uri} target="_blank">More Information</a>
      </div>
    </div>
  )
}

const Alerts = (props) => {
  const alerts = props.alerts

  return (
    <div className="alertBlock">
      <h2>Alerts</h2>
      <ul className="list-unstyled">
        {(alerts) ? 
          alerts.map((alert, index) => {
            return <li key={index}><Alert {...alert} /></li>
         }) :
          "No alerts found."
        }
      </ul>
    </div>
  )
}

export default Alerts