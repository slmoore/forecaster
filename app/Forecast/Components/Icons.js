import React, { Component } from 'react'
import { render } from 'react-dom'

// used only for server-side bundling
if (typeof window === 'undefined') {
  global.window = {}
}

const Skycons = require('skycons')(window)

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
      <canvas ref={this.handleCanvas} className="icon"></canvas>
    )
  }
}

export default Icon