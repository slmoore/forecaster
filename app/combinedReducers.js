import { combineReducers } from 'redux'
import forecast from './Forecast/Reducers/index'
import { reducer as form } from 'redux-form'

export default combineReducers({
  forecast,
  form
})

