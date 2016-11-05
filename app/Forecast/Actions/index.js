import fetch from 'isomorphic-fetch'
import store from '../../store'

// used only for server-side bundling
if (typeof window === 'undefined') {
  global.window = {}
}

// Google Geocode API endpoint
// https://maps.googleapis.com/maps/api/geocode/json?address=Seattle&key=[key]

// DARK SKY API endpoint
// https://api.darksky.net/forecast/[key]/[latitude],[longitude]

const DARK_SKY = process.env.DARK_SKY
const GEOCODE = process.env.GEOCODE

// notify user that fetching is happening
export const GET_COORDINATES = 'GET_COORDINATES'
export const getCoordinates = () => {
  return {
    type: GET_COORDINATES,
    payload: {
      first: false,
      isFetching: true
    }
  }
}

// send the coordinates
export const PARSE_COORDINATES = 'PARSE_COORDINATES'
export const parseCoordinates = (coordinates) => {
  return {
    type: PARSE_COORDINATES,
    payload: {
      ...coordinates
    }
  }
}

// push new route programmatically after forecast is processed. - incomplete
// perhaps make another thunk to dispatch parseForecast as a promise and then push the route when finished.


// send the forecast
export const PARSE_FORECAST = 'PARSE_FORECAST'
export const parseForecast = (forecast) => {
  return {
    type: PARSE_FORECAST,
    payload: {
      isFetching: false,
      ...forecast
    }
  }
}

// send the day
export const PARSE_DAY = 'PARSE_DAY'
export const parseDay = (day) => {
  return {
    type: PARSE_DAY,
    payload: {
      isFetching: false,
      ...day
    }
  }
}

// notify of an error
export const FETCH_ERROR = 'FETCH_ERROR'
export const fetchError = (error) => {
  return {
    type: FETCH_ERROR,
    payload: {
      isFetching: false,
      error
    }
  }
}

// fetch location coordinates
export const coordinatesRequest = (address = 'Seattle') => {
  return (dispatch,getState) => {
    // notify user that requests are running
    dispatch(getCoordinates())

    if (address.location) {
      address = address.location
    }

    return (
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GEOCODE}`)
      .then(response => response.json())
      .then(data => {
        let coordinates = {}
        try {
          // return the first possible coordinates from the list
          coordinates.lat = data.results[0].geometry.location.lat
          coordinates.lng = data.results[0].geometry.location.lng
          coordinates.fa = data.results[0].formatted_address
          // same address - skip weather request
          if (coordinates.fa === getState().forecast.formatted_address) {
            dispatch(parseForecast({
              current: getState().forecast.current,
              days: getState().forecast.days,
              alerts: getState().forecast.alerts
            }))
          } else {
            dispatch(parseCoordinates(coordinates))
            dispatch(weatherRequest(coordinates))
          }
        } catch(e) {
          console.log("Longitude and latitude not found.")
          dispatch(fetchError(e))
        }
      })
      .catch(err => dispatch(fetchError(err)))
    )
  }
}

// separate darksky data
const buildForecast = (weather) => {
  let current = {}
  let days = []
  let alerts = []

  try {
    current = weather.currently
    days = weather.daily.data
    alerts = weather.alerts
    store.dispatch(
      parseForecast({
        current,
        days,
        alerts
      })
    )
  } catch(e) {
    console.log("Weather not found. "+e.message)
    store.dispatch(fetchError(e))
  }
}

// jsonp weather callback
window.darkSkyCallback = (weather) => {
  buildForecast(weather)
}

// request that bypasses CORS requirements using JSONP
const requestJSONP = (url) => {
  let head = document.getElementsByTagName('head')[0]
  let script = document.createElement('script')
  script.src = url
  script.addEventListener("load", (e) => {
    e.target.remove()
  })
  head.insertBefore(script, null)
}

// initiate darksky request
export const weatherRequest = (coordinates) => {
  return (dispatch) => {
    let url = `https://api.darksky.net/forecast/${DARK_SKY}/${coordinates.lat},${coordinates.lng}?callback=darkSkyCallback`
    requestJSONP(url)
  }
}
