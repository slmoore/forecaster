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
    const { dispatch } = this.props

    return (
      <div>
        <Location dispatch={dispatch} />
        <FiveDays />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // simplify state to props here
  }
}

// connect redux state and dispatch() to react
export default connect(mapStateToProps)(Forecast)