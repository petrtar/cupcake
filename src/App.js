import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { booksList } from './json.js'

import Header from './components/header.js'
import Contant from './components/contant.js'
import Basket from './components/basket.js'


function App(props) {
  props.dispatch({
    type: "ADD_CATALOG",
    data: booksList.books
  });
  return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <Container fluid="true">
          <Header />
          <Switch>
            <Route exact path='/' component={Contant} />
            <Route path='/Basket' component={Basket} />
          </Switch>
        </Container>
      </React.Fragment>
    </Router>
  );
}


export default connect()(App);
