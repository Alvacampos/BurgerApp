import React, { Component } from 'react';
import classes from './ContactData.css';
import axios from '../../../axios-order';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    address: {
      street: '',
      zipCode: '',
      country: ''
    },
    email: '',
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    alert('Thank You');
    this.setState({ loading: true });
    const order = {
     ingredients: this.props.ingredients,
     price: this.props.price,
     customer: {
       name: 'Gonzalo Alvarez Campos',
       address: {
         street: 'asd123',
         zipCode: '4107',
         country: 'Argentina'
       },
       email: 'gonzalo@mail.com',
     },      
    }
    axios.post('/orders.json', order)
     .then( response => {
       this.setState({ loading: false });
     })
     .catch( error => {
       this.setState({ loading: false });
       alert('Error');
     });    
     this.props.dir.replace( '/' );
  }

  render () {
    let form = (
      <form>
        <input className = { classes.Input } type="text" name = 'name' placeholder = 'Your name' />
        <input className = { classes.Input } type="email" name = 'email' placeholder = 'Your email' />
        <input className = { classes.Input } type="text" name = 'street' placeholder = 'Your street' />
        <input className = { classes.Input } type="text" name = 'code' placeholder = 'Your zipcode' />
        <input className = { classes.Input } type="text" name = 'country' placeholder = 'Your country' />
        <Button btnType = 'Success' clicked = { this.orderHandler } >Order</Button>
      </form>
    );
    if ( this.state.loading ) {
      form = <Spinner />;
    }
    return (
      <div className = { classes.ContactData }>
        <h4>Enter your contact data</h4>
        { form }                
      </div>
    );
  }
}

export default ContactData;