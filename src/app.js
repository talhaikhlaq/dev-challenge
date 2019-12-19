import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './css/dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './components/Dashboard'

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)