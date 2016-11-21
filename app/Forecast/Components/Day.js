import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import { calendarDate, forecastConverter } from '../Utilities'
import Icon from './Icons'
import { Processing, Unknown } from './Processing'
import AddressLink from './AddressLink'

class Day extends Component {
  constructor (props) {
    super(props)
    this.dataDisplay = this.dataDisplay.bind(this)
  }

  dataDisplay (data) {
    let list = [], i = 0
    list.push(<h2 key={i}>{calendarDate(data.time)}</h2>)
    i++
    if (data.icon) {
      list.push(<div key={i}><Icon icon={data.icon} isDay={(this.props.params.dayID !== undefined)?true:false} /></div>)
      i++
    }
    for (let item in data) {
      if (item === "summary") {
        list.push(<div key={i} className="summary">{forecastConverter[item].format(data[item])}</div>)
      } else if (item !== "icon" && item !== "time") {
        try {
          list.push(<div key={i}>{forecastConverter[item].name}: {forecastConverter[item].format(data[item])}</div>)
        } catch(e) {
          console.log(`${item} is unknown`)
        }
      }
      i++
    }
    return list
  }

  render () {
    const { isFetching, days, formatted_address, params } = this.props
    const data = days[params.dayID]

    // fetching data
    if (isFetching) {
      return <Processing />
    }

    // unknown location
    if (days.length === 0) {
      return <Unknown />
    }

    return (
      <div className="forecastBlock fadeIn dayBlock">
        <Link to={`/fivedays/${params.requested}`}>Five Day Forecast</Link>
        <h1 className="address"><AddressLink formatted_address={formatted_address} /></h1>
        <div className="dayBlock">{this.dataDisplay(data)}</div>
      </div>
    )
  }
}

export default Day