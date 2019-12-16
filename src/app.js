import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './css/dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Selection from './components/Selection'

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Selection} />
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)