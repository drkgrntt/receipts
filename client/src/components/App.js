import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import NewReceipt from './NewReceipt';
import IndexCollections from './IndexCollections';
import ShowCollection from './ShowCollection';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="container">
            <Route exact path="/" component={Landing} />
            <Route exact path="/receipt" component={NewReceipt} />
            <Route exact path="/collections" component={IndexCollections} />
            <Route exact path="/collections/:id" component={ShowCollection} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
