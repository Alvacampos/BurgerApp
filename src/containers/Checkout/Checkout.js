import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: 0
  }

  componentWillMount () {
    const query = new URLSearchParams( this.props.location.search );
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      if(param[0] === 'price') {
        price = param[1];
      }else {
        ingredients[param[0]] = +param[1];
      }      
    }
    this.setState({ ingredients: ingredients, totalPrice: price });
  }

  onCancel = () => {
    this.props.history.goBack();
  }

  onContinue = () => {
    this.props.history.replace( '/checkout/contact-data' );
  }

  render () {    
    return (
      <div>
        <CheckoutSummary 
          ingredients = { this.state.ingredients }
          onCancel = { this.onCancel }
          onContinue = {this.onContinue }
          />
        <Route 
          path = { this.props.match.path + '/contact-data'}  
          render = {() => (<ContactData ingredients = { this.state.ingredients } price = { this.state.totalPrice } dir = {this.props.history} />)} 
        />
      </div>
    );
  }
}

export default Checkout;