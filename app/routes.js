import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Home from './Home/index'
import Preview from './Home/Components/Preview'
import Recipe from './Recipe/index'

module.exports = (
  <Route path="/" component={Home}>
    <IndexRoute component={Preview} />
    <Route path="remove" component={Preview} />
    <Route path="add" component={Recipe} />
    <Route path="edit/:recipeID" component={Recipe} />
  </Route>
)

