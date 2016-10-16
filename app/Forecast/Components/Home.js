import React, { Component } from 'react'
import { render } from 'react-dom'
import Footer from './Footer'
import Forecast from '../Containers/Forecast'


class Home extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="container-fluid">
        <Forecast />
        <Footer />
      </div>
    )
  }
}

export default Home