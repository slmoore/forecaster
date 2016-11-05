import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'

// used only for server-side bundling
if (typeof window === 'undefined') {
  global.window = {}
}

const Skycons = require('skycons')(window)

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

class Icon extends Component {
  constructor (props) {
    super(props)
    this.handleCanvas = this.handleCanvas.bind(this)
  }

  // react ref callback to access canvas
  handleCanvas (canvas) {
    this.skycons = new Skycons({'color': 'black'})
    this.skycons.add(canvas, this.props.icon)
    this.skycons.play()
  }

  render () {
    return (
      <canvas ref={this.handleCanvas} style={{'width':'64px', 'height':'32px'}} ></canvas>
    )
  }
}

// utility to improve date string
const calendarDate = (date) => {
  // Sat Oct 15 2016
  const dayNames = ['Sun','Mon','Tues','Weds','Thurs','Fri','Sat']
  const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  return (
    `${dayNames[date.getDay()]} ${monthNames[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`
  )
}

const DayPartial = (props) => {
  const { time, summary, icon, temperatureMin, temperatureMax } = props
  let date = new Date(time*1000)
  return (
    <div className="day">
      <div className="dayDate">{calendarDate(date)}</div>
      <Icon icon={icon} />
      <div>{summary}</div>
      <div>Min: {Math.round(temperatureMin)} &#8457;</div>
      <div>Max: {Math.round(temperatureMax)} &#8457;</div>
    </div>
  )
}

const FiveDays = (props) => {
  const { first, isFetching, days, formatted_address, alerts } = props
  const mapParameters = formatted_address.replace(/\s/g,'+')
  const mapLink = `https://www.google.com/maps/place/${mapParameters}`

  // display nothing on load
  if (first) {
    return null
  }

  // fetching data
  if (isFetching) {
    return (
      <div className="spinnerBlock">
        <i className="fa fa-circle-o-notch fa-2x fa-spin"></i>
      </div>
    )
  }

  // unknown location
  if (days.length === 0) {
    return (
      <div>
        <h4>{"Sorry, we couldn't find that location."}</h4>
      </div>
    )
  } else {
  // found weather
    return (
      <div className="forecastBlock fadeIn">
        <h1 className="address"><a href={mapLink} target="_blank">{formatted_address}</a></h1>
        <div className="fiveBlock">
          <h2>Five Day Forecast</h2>
          <ul className="list-inline">
            {days.slice(0,5).map((day, index) => {
                return <li key={index}><DayPartial {...day} /></li>
             })}
          </ul>
        </div>
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
      </div>
    )
  }

}

export default FiveDays
