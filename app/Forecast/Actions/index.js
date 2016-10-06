import fetch from 'isomorphic-fetch'

// sample API endpoint
// https://api.darksky.net/forecast/API_KEY/37.8267,-122.4233


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
