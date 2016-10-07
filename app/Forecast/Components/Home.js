import React, { Component } from 'react'
import { render } from 'react-dom'
import Header from './Header'
import Footer from './Footer'
import Forecast from '../Containers/Forecast'


class Home extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Header />
        <Forecast />
        <Footer />
      </div>
    )
  }
}

export default Home