import * as Actions from '../Actions/index'

export const initForecast = {
  isFetching: false,
  days: []
}

export const forecast = (state = initForecast, action) => {
  switch (action.type) {
    case Actions.GET_FORECAST:
      return Object.assign({},state,{
        isFetching: true
      })
    case Actions.PARSE_FORECAST:
      return Object.assign({},state,{
        isFetching: false,
        days: action.payload
      })
    default:
      return state
  }
}

export default forecast