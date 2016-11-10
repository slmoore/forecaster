import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import { forecastConverter } from '../Utilities'
import Icon from './Icons'
import { Processing, Unknown } from './Processing'

class Day extends Component {
  constructor (props) {
    super(props)
    this.dataDisplay = this.dataDisplay.bind(this)
  }

  dataDisplay (data) {
    let list = [], i = 0
    if (data.icon) {
      list.push(<div key={i}><Icon icon={data.icon} /></div>)
      i++
    }
    for (let item in data) {
      if (item !== "icon") {
        list.push(<div key={i}>{item}:{forecastConverter[item](data[item])}</div>)
        i++
      }
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
      <div className="forecastBlock fadeIn">
        <Link to={`/fivedays/${params.requested}`}>Five Day Forecast</Link>
        <h1>{formatted_address}</h1>
        <div>{this.dataDisplay(data)}</div>
      </div>
    )
  }
}

export default Day