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
    const { onCancel, onContinue } = this;
    const { ingredients, totalPrice } = this.state;
    return (
      <div>
        <CheckoutSummary 
          ingredients = { ingredients }
          onCancel = { onCancel }
          onContinue = { onContinue }
          />
        <Route 
          path = { this.props.match.path + '/contact-data'}  
          render = {( props ) => (<ContactData ingredients = { ingredients } price = { totalPrice } {...props} />)} 
        />
      </div>
    );
  }
}

export default Checkout;