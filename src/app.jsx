import './app.scss'

import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from 'store/index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header } from 'components/header/header'
// Routes
import { UserRegistration } from 'containers/user/user-registration'
import { UserLogin } from 'containers/user/user-login'
import { REGISTER } from 'common/const-routes'

const store = configureStore()

export const App = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <Switch>
        <Route exact path={`/${REGISTER}`} component={UserRegistration} />
        <Route path="/" component={UserLogin} />
      </Switch>
    </Router>
  </Provider>
)
