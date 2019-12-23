import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import NoMatch from './components/NoMatch'
import Projects from './components/Projects'
import { Container, } from "semantic-ui-react"
import styled from 'styled-components'
import Icons from './components/Icons'






const App = () => (
  <AppContainer>
  <Navbar />
  <Icons />


  <Fragment>
   
    <Container>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/Projects" component={Projects} />
    <Route exact path="/contact" component={Contact} />
    <Route component={NoMatch} />
    </Switch>
    </Container>
  </Fragment>
  </AppContainer>
);

const AppContainer = styled.div `

body {
  margin: 0;
  padding: 0;
}

main {
  position: relative;
}

background: #000000;
width: 100vw;
  height: 100vh;

`

export default App;