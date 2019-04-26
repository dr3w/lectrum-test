import './header.scss'

import React from 'react'
import { Link } from 'react-router-dom'
import { LOGIN, REGISTER } from 'common/const-routes'

export const Header = () => (
  <div className="header">
    <ul className="header-menu">
      <li><Link to={`/${LOGIN}`}>login</Link></li>
      <li><Link to={`/${REGISTER}`}>sign up</Link></li>
    </ul>
  </div>
)
