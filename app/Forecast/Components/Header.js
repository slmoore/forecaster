import React, { Component } from 'react'
import { render } from 'react-dom'
import Location from './Location'

const Header = (props) => {
  return (
    <div>
      <Location dispatch={props.dispatch} />
    </div>
  )
}

export default Header