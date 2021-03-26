import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PizzaForm from './PizzaForm'
import Home from './Home'
import Header from './Header'
import styled from 'styled-components'

const Page = styled.div`
  padding: 1rem;
`

export default function App() {
  return (
    <Router>
      <div>
        <Header />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Page>
          <Switch>
            <Route path="/pizza">
              <PizzaForm />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Page>
      </div>
    </Router>
  )
}
