import React, { Component } from 'react';
import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';

class ContactData extends Component {
  state = {
    name: '',
    address: {
      street: '',
      zipCode: '',
      country: ''
    },
    email: '',
  }

  render () {
    return (
      <div className = { classes.ContactData }>
        <h4>Enter your contact data</h4>
        <form>
          <input className = { classes.Input } type="text" name = 'name' placeholder = 'Your name' />
          <input className = { classes.Input } type="email" name = 'email' placeholder = 'Your email' />
          <input className = { classes.Input } type="text" name = 'street' placeholder = 'Your street' />
          <input className = { classes.Input } type="text" name = 'code' placeholder = 'Your zipcode' />
          <input className = { classes.Input } type="text" name = 'country' placeholder = 'Your country' />
        </form>
        <Button btnType = 'Success' >Order</Button>
      </div>
    );
  }
}

export default ContactData;