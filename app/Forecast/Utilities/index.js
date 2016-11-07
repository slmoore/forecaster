import React from 'react'

// utility to improve date string
export const calendarDate = (time) => {
  let date = new Date(time*1000)
  // Sat Oct 15 2016
  const dayNames = ['Sun','Mon','Tues','Weds','Thurs','Fri','Sat']
  const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  return (
    `${dayNames[date.getDay()]} ${monthNames[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`
  )
}

export const forecastConverter = {
  time: (value) => {return calendarDate(value)},
  summary: (value) => value,
  sunriseTime: (value) => {return calendarDate(value)},
  sunsetTime: (value) => {return calendarDate(value)},
  moonPhase: (value) => value,
  precipIntensity: (value) => value,
  precipIntensityMax: (value) => value,
  precipIntensityMaxTime: (value) => {return calendarDate(value)},
  precipProbability: (value) => value,
  precipType: (value) => value,
  temperatureMin: (value) => <span>{value}&#8457;</span>,
  temperatureMinTime: (value) => {return calendarDate(value)},
  temperatureMax: (value) => <span>{value}&#8457;</span>,
  temperatureMaxTime: (value) => {return calendarDate(value)},
  apparentTemperatureMin: (value) => <span>{value}&#8457;</span>,
  apparentTemperatureMinTime: (value) => {return calendarDate(value)},
  apparentTemperatureMax: (value) => <span>{value}&#8457;</span>,
  apparentTemperatureMaxTime: (value) => {return calendarDate(value)},
  dewPoint: (value) => value,
  humidity: (value) => value,
  windSpeed: (value) => value,
  windBearing: (value) => value,
  visibility: (value) => value,
  cloudCover: (value) => value,
  pressure: (value) => value,
  ozone: (value) => value
}

