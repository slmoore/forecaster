import * as Actions from '../Actions/index'

export const initForecast = {
  isFetching: false,
  days: [],
  lat: "47.6038",
  lon: "-122.3301"
}

export const forecast = (state = initForecast, action) => {
  switch (action.type) {
    case Actions.GET_COORDINATES:
    case Actions.GET_FORECAST:
    case Actions.PARSE_FORECAST:
    default:
      return state
  }
}

export default forecast