import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './combinedReducers'

// used only for server-side bundling
if (typeof window === 'undefined') {
  global.window = {}
}

// get the state from the server first
const preloadedState = window.__PRELOADED_STATE__

/*
  Store Config 
*/

export const configureStore = function (preloadedState = {}) {
  
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
    let logger = createLogger()
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

const store = configureStore(preloadedState)

export default store
