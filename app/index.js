import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import Routes from './routes'
import store from './store'
// app styles transformed by webpack
import './Forecast/Styles/Main.scss'
import './Forecast/Styles/Location.scss'
import './Forecast/Styles/FiveDays.scss'
import './Forecast/Styles/Responsive.scss'
import './Forecast/Styles/Icons.scss'
import './Forecast/Styles/Day.scss'

render(
  <Provider store={store}>
    <Router routes={Routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
)

