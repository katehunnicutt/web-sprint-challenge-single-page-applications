import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PizzaForm from './PizzaForm'
import Home from './Home'
import Header from './Header'





export default function App() {


  return (
    <Router>
      <div>
        <Header />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/pizza">
            <PizzaForm />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
