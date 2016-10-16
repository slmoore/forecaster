import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './combinedReducers'

/*
  Store Config 
*/

const configureStore = function (preloadedState) {
  let logger = createLogger()

  if (process.env.NODE_ENV === 'production' || 
      process.env.NODE_ENV === 'test') {
    return createStore(
      rootReducer,
      preloadedState,
      compose(
        applyMiddleware(thunkMiddleware)
        )
    )
  } else {
    return createStore(
      rootReducer,
      preloadedState,
      compose(
        applyMiddleware(thunkMiddleware, logger),
        window.devToolsExtension()
        )
    )
  }
}

const store = configureStore()

export default store
