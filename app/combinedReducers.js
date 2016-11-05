import { combineReducers } from 'redux'
import forecast from './Forecast/Reducers/FiveDaysReducer'
import day from './Forecast/Reducers/DayReducer'
import { reducer as form } from 'redux-form'

export default combineReducers({
  forecast,
  day,
  form
})

