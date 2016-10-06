import React, { Component } from 'react'
import { render } from 'react-dom'
import Forecast from '../Components/Forecast'


class Home extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>{"This is Home"}
        <Forecast />
      </div>
    )
  }
}

export default Home

// mapStateToProps

// mapDispatchToProps