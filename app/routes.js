import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Home from './Forecast/Containers/Home'
// import Day from './Home/Components/Day'

module.exports = (
  <Route path="/" component={Home}>
    <IndexRoute component={Home} />
    {/*<Route path="day/:dayID" component={Day} />*/}
  </Route>
)
