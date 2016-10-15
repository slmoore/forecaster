import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import Location from '../Components/Location'
import FiveDays from '../Components/FiveDays'

class Forecast extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Location dispatch={this.props.dispatch} />
        <FiveDays {...this.props.forecast} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

// connect redux state and dispatch() to react
export default connect(mapStateToProps)(Forecast)