import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import Checkout from './containers/Checkout/Checkout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
        	<Switch>
        		<Route path = '/' exact render = { () => <h1>Home</h1> } />
	        	<Route path = '/skills' exact render = { () => <h1>Skills</h1> } />
	        	<Route path = '/contact' exact render = { () => <h1>Contact</h1> } />
	        	<Route path = '/burgerbuilder' exact component = { BurgerBuilder } />
	        	<Route path = '/checkout' exact component = { Checkout } />
        	</Switch>        	
        </Layout>
      </div>
    );
  }
}

export default App;
