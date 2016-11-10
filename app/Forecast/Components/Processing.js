import React, { Component } from 'react'
import { render } from 'react-dom'

export const Processing = () => {
  return (
    <div className="spinnerBlock">
      <i className="fa fa-circle-o-notch fa-2x fa-spin"></i>
    </div>
  )
}

export const Unknown = () => {
  return (
    <div>
      <h4>{"Sorry, we couldn't find that location."}</h4>
    </div>
  )
}