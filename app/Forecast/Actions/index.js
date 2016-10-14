import fetch from 'isomorphic-fetch'

// Google Geocode API endpoint
// https://maps.googleapis.com/maps/api/geocode/json?address=Seattle&key=[key]

// DARK SKY API endpoint
// https://api.darksky.net/forecast/[key]/[latitude],[longitude]
//
// default latitude and longitude
// 47.6038,-122.3301

const DARK_SKY = process.env.DARK_SKY
const GEOCODE = process.env.GEOCODE

export const GET_COORDINATES = 'GET_COORDINATES'
export const getCoordinates = (payload) => {
  return {
    type: GET_COORDINATES,
    payload : {
      isFetching: true
    }
  }
}

export const PARSE_COORDINATES = 'PARSE_COORDINATES'
export const parseCoordinates = (payload) => {
  return {
    type: PARSE_COORDINATES,
    payload
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

export const coordinatesRequest = (googleKey,address,dispatch) => {
  return (dispatch) => {
    // https://maps.googleapis.com/maps/api/geocode/json?address=Seattle&key=[key]
    return (
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${googleKey}`)
      .then(response => response.json())
      .then(coordinates => console.log(coordinates)) // dispatch(weatherRequest(coordinates)))
      .catch(err => console.log(err))
    )
  }
}

export const weatherRequest = (darkSkyKey,coordinates,dispatch) => {
  // https://api.darksky.net/forecast/[key]/[latitude],[longitude]
  return (dispatch) => {
    // return fetch weather...
  }
}



