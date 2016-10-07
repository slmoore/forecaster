import React from 'react'

const FiveDays = (props) => {
  return (
    <div>
      <h4>{"The next five days will be like..."}</h4>
      <div>{props.data}</div>
    </div>
  )
}

export default FiveDays
