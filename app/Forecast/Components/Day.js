import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import { forecastConverter } from '../Utilities'
import Icon from './Icons'


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
    const data = this.props.days[this.props.params.dayID]
    // let date = new Date(time*1000)
    return (
      <div className="fadeIn">
        <Link to={`/fivedays/${this.props.params.requested}`}>Five Days Forecast</Link>
        <h1>{this.props.formatted_address}</h1>
        <div>{this.dataDisplay(data)}</div>
      </div>
    )
  }
}

export default Day