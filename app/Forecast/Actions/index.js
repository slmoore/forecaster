import fetch from 'isomorphic-fetch'

// example API endpoint
// https://api.darksky.net/forecast/[key]/[latitude],[longitude]
// 47.6038,-122.3301

export const GET_COORDINATES = 'GET_COORDINATES'
export const getCoordinates = (address) => {
  console.log("called getCoordinates")
  return {
    type: GET_COORDINATES
  }
}


export const GET_FORECAST = 'GET_FORECAST'
export const getForecast = () => {
  return {
    type: GET_FORECAST
  }
}

export const PARSE_FORECAST = 'PARSE_FORECAST'
export const parseForecast = (payload) => {
  return {
    type: PARSE_FORECAST,
    payload
  }
}

