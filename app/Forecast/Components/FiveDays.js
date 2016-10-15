import React from 'react'

const FiveDays = (props) => {
  console.log(props)
  const { isFetching, days } = props
  return (
    <div>
      <h4>{"The next five days will be like..."}</h4>
      <div>{JSON.stringify(days)}</div>
    </div>
  )
}

export default FiveDays
