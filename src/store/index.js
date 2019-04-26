/* eslint-disable global-require */
import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from 'store/root-reducer'
import { rootSaga } from 'store/root-saga'

const reduxDevtoolsCompose = process.env.NODE_ENV !== 'production'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    actionsBlacklist: null
  })

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  const composeEnhancers = reduxDevtoolsCompose || compose
  const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware))

  const store = createStore(rootReducer, enhancers)

  rootSaga(sagaMiddleware.run)

  store.sagaMiddlewareRun = sagaMiddleware.run

  return store
}
