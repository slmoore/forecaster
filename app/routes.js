import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Home from './Forecast/index'
// import Day from './Day/index'

console.log(Home)
 
module.exports = (
  <Route path="/" component={Home}>
    <IndexRoute component={Home} />
    {/*<Route path="day/:dayID" component={Day} />*/}
  </Route>
)
