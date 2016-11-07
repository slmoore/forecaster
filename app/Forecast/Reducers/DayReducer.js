import * as Actions from '../Actions/index'

export const initDay = {
  isFetching: false,
  requested: "",
  formatted_address: "",
  day: {},
  error: {}
}

export const day = (state = initDay, action) => {
  let newState = {}
  switch (action.type) {
/*    case Actions.GET_COORDINATES:
      newState = Object.assign({},state,initForecast)
      return Object.assign({},state,action.payload)
    case Actions.PARSE_COORDINATES:
      return Object.assign({},state,{
        formatted_address: action.payload.fa
      })
    case Actions.PARSE_FORECAST:
      return Object.assign({},state,action.payload)
    case Actions.FETCH_ERROR:
      newState = Object.assign({},state,initForecast)
      return Object.assign({},state,action.payload)*/
    default:
      return state
  }
}

export default day