import React, { useState, useRef, useCallback } from 'react'
import Dashboard from './component/dashboard';
import Login from './component/login'
import Register from './component/register'

import {BrowserRouter as Router,HashRouter, Switch, Route} from 'react-router-dom'

export default function App() {

  return (

    <HashRouter basename="/">
    <div>
      <Switch>
        <Route path='/' exact component={Login}/>
        <Route path= '/register' exact component={Register}/>
        <Route path= '/dashboard' exact component={Dashboard}/>

      </Switch>
 

    </div>
    </HashRouter>

  )
}

