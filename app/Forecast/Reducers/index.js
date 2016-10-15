import * as Actions from '../Actions/index'

export const initForecast = {
  isFetching: false,
  current: {},
  days: [],
  alerts: [],
  error: {}
}

export const forecast = (state = initForecast, action) => {
  switch (action.type) {
    case Actions.GET_COORDINATES:
      return Object.assign({},state,action.payload)
    case Actions.PARSE_FORECAST:
      return Object.assign({},state,action.payload)
    case Actions.FETCH_ERROR:
      let newState = Object.assign({},state,initForecast)
      return Object.assign({},state,action.payload)
    default:
      return state
  }
}

export default forecast