import './app.scss'

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header } from 'components/header/header'
// Routes
import { UserRegistration } from 'containers/user/user-registration'
import { UserLogin } from 'containers/user/user-login'
import { REGISTER } from 'common/const-routes'

export const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path={`/${REGISTER}`} component={UserRegistration} />
      <Route path="/" component={UserLogin} />
    </Switch>
  </Router>
)
