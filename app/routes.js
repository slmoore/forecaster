import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Home from './Forecast/index'
import FiveDays from './Forecast/Components/FiveDays'
import Day from './Forecast/Components/Day'
import store from './store'
import { coordinatesRequest } from './Forecast/Actions/index'

const fivedaysDirect = (props) => {
  // `this` === Route
  store.dispatch(coordinatesRequest(props.params.requested))
}

const dayDirect = (props) => {
  // dispatch direct day request
  // handled just like the fivedays request just pass day the right props.
}

module.exports = (
  <Route path="/" component={Home}>
    {/*Handled as Children inside of the Home Container*/}
    <Route path="fivedays/:requested" component={FiveDays} onEnter={fivedaysDirect} />
    <Route path="day/:requested/:dayID" component={Day} />
  </Route>
)
