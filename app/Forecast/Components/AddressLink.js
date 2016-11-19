import React, { Component } from 'react'
import { render } from 'react-dom'

const AddressLink = (props) => {
  const mapParameters = props.formatted_address.replace(/\s/g,'+')
  const mapLink = `https://www.google.com/maps/place/${mapParameters}`
  return (
    <a href={mapLink} target="_blank">{props.formatted_address}</a>
  )
}

export default AddressLink