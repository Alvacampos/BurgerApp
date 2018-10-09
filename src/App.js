import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Checkout from './containers/Checkout/Checkout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path = '/' exact component = { Home } />
            <Route path = '/skills' exact component = { Skills } />
            <Route path = '/contact' exact render = { () => <h1>Contact</h1> } />
            <Route path = '/burgerbuilder' exact component = { BurgerBuilder } />
            <Route path = '/checkout' component = { Checkout } />
          </Switch>         
        </Layout>
      </div>
    );
  }
}

export default App;
