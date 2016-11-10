import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import { Link } from 'react-router'
import { calendarDate } from '../Utilities/index'
import Icon from './Icons'
import { Processing, Unknown } from './Processing'
import Alerts from './Alerts'

const DayLink = (props) => {
  const { time, summary, icon, temperatureMin, temperatureMax, dayID, requested } = props
  return (
    <div className="day">
      <Link to={`/day/${requested}/${dayID}`}>
        <div className="dayDate">{calendarDate(time)}</div>
        <Icon icon={icon} />
        <div>{summary}</div>
        <div>Min: {Math.round(temperatureMin)} &#8457;</div>
        <div>Max: {Math.round(temperatureMax)} &#8457;</div>
      </Link>
    </div>
  )
}

const FiveDays = (props) => {
  const { first, isFetching, days, requested, formatted_address, alerts } = props
  const mapParameters = formatted_address.replace(/\s/g,'+')
  const mapLink = `https://www.google.com/maps/place/${mapParameters}`

  // display nothing on load
  if (first) {
    return null
  }

  // fetching data
  if (isFetching) {
    return <Processing />
  }

  // unknown location
  if (days.length === 0) {
    return <Unknown />
  }

  // found weather
  return (
    <div className="forecastBlock fadeIn">
      <h1 className="address"><a href={mapLink} target="_blank">{formatted_address}</a></h1>
      <div className="fiveBlock">
        <h2>Five Day Forecast</h2>
        <ul className="list-inline">
          {days.slice(0,5).map((day, index) => {
              return <li key={index}><DayLink {...day} dayID={index} requested={requested} /></li>
           })}
        </ul>
      </div>
      <Alerts alerts={alerts} />
    </div>
  )
}

export default FiveDays
