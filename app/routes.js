import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Home from './Forecast/index'
import FiveDays from './Forecast/Components/FiveDays'
import Day from './Forecast/Components/Day'
 
module.exports = (
  <Route path="/" component={Home}>
    {/*Handled as Children inside of the Home Container*/}
    <Route path="fivedays/:lat/:lon" component={FiveDays} />
    <Route path="day/:lat/:lon/:dayID" component={Day} />
  </Route>
)
