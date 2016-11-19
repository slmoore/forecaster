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

export const standardTime = (time) => {
  let date = new Date(time*1000)
  let hours = (date.getHours() === 0) ? 12 : date.getHours()
  let minutes = date.getMinutes().toString()
  minutes = (minutes.length > 1) ? minutes : "0" + minutes
  return (hours > 12) ? hours - 12 +":"+ minutes + " PM" : hours +":"+ minutes + " AM"
}

export const forecastConverter = {
  time: {name: "Date", format: (value) => {return calendarDate(value)} },
  summary: {name: "Summary", format: (value) => value },
  sunriseTime: {name: "Sunrise", format: (value) => {return standardTime(value)} },
  sunsetTime: {name: "Sunset", format: (value) => {return standardTime(value)} },
  moonPhase: {name: "Moon Phase", format: (value) => value },
  precipIntensity: {name: "Precipitation Intensity", format: (value) => value },
  precipIntensityMax: {name: "Max Precipitation", format: (value) => value },
  precipIntensityMaxTime: {name: "Max Precipitation Time", format: (value) => {return standardTime(value)} },
  precipProbability: {name: "Precipitation Probability", format: (value) => value },
  precipType: {name: "Precipitation Type", format: (value) => value },
  temperatureMin: {name: "Min Temperature", format: (value) => <span>{value}&#8457;</span> },
  temperatureMinTime: {name: "Min Temperature Time", format: (value) => {return standardTime(value)} },
  temperatureMax: {name: "Max Temperature", format: (value) => <span>{value}&#8457;</span> },
  temperatureMaxTime: {name: "Max Temperature Time", format: (value) => {return standardTime(value)} },
  apparentTemperatureMin: {name: "Apparent Min Temperature", format: (value) => <span>{value}&#8457;</span> },
  apparentTemperatureMinTime: {name: "Apparent Min Temperature Time", format: (value) => {return standardTime(value)} },
  apparentTemperatureMax: {name: "Apparent Max Temperature", format: (value) => <span>{value}&#8457;</span> },
  apparentTemperatureMaxTime: {name: "Apparent Max Temperature Time", format: (value) => {return standardTime(value)} },
  dewPoint: {name: "Dew Point", format: (value) => value },
  humidity: {name: "Humidity", format: (value) => value },
  windSpeed: {name: "Wind Speed", format: (value) => value },
  windBearing: {name: "Wind Bearing", format: (value) => value },
  visibility: {name: "Visibility", format: (value) => value },
  cloudCover: {name: "Cloud Cover", format: (value) => value },
  pressure: {name: "Pressure", format: (value) => value },
  ozone: {name: "Ozone", format: (value) => value }
}

