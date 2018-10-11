import React, { Component } from 'react';
import axios from '../../axios-order';
import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  }
  componentDidMount () {
    axios.get('/orders.json')
      .then( response => {
        const fetchedOrders = [];
        for (let key in response.data) {
          fetchedOrders.push({
            ...response.data[key],
            id: key
          });
        }
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch( error => {
        this.setState({ loading: false });
        console.log( error );
      })    
  }
  render () {
    let load = null;
    let order  = this.state.orders.map( item => {      
      return (
        <Order
          key = { item.id }
          customer = { item.customer.name } 
          bacon = { item.ingredients.bacon }
          cheese = { item.ingredients.cheese }
          meat =  { item.ingredients.meat }
          salad = { item.ingredients.salad }            
          price = { item.price }          
        />
      );
    });
    if(this.state.loading){
      load = (<Spinner />);
    }else if(order.length === 0){
      order = (<h1 
        style = {{
          textAlign: 'center', 
          fontSize: '50px', 
          marginTop: '200px'
        }}>There are no orders, yet!</h1>);
      }
    return (
      <div>
        {load}      
        {order}
      </div>
    );
  }
}

export default withErrorHandler( Orders, axios );