import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header.js'
import Contant from './components/contant.js'
import Basket from './components/basket.js'


function App() {
  return (
    <Router>
    <React.Fragment>
      <CssBaseline />
      <Container fluid="true">
        <Header/>
        <Switch>
          <Route exact path='/' component={Contant} />
          <Route path='/Basket' component={Basket} />
        </Switch>
      </Container>
    </React.Fragment>
    </Router>
  );
}


export default App;
