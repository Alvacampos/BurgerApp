import React, { Component } from 'react';
import classes from './ContactData.css';
import axios from '../../../axios-order';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: '',
        validation: {
          required: true,
          minLength: 3
        },
        valid: false,
        touched: false
      },
      email:{
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Email'
        },
        value: '',
        validation: {
          required: true,
          minLength: 5,
          real: '@'
        },
        valid: false,
        touched: false
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Street'
        },
        value: '',
        validation: {
          required: true,
          minLength: 5
        },
        valid: false,
        touched: false
      },
      zipcode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Zipcode'
        },
        value: '',
        validation: {
          required: true,
          minLength: 5,
        },
        valid: false,
        touched: false
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Country'
        },
        value: '',
        validation: {
          required: true,
          minLength: 5
        },
        valid: false,
        touched: false
      },
    },
    formIsValid: false,
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();    
    this.setState({ loading: true });
    const formData = {};
    for ( let formElement in this.state.orderForm ) {
      formData[formElement] = this.state.orderForm[formElement].value;
    }
    const order = {
     ingredients: this.props.ingredients,
     price: this.props.price,
     orderData: formData
    }
    axios.post('/orders.json', order)
     .then( response => {
       this.setState({ loading: false });
       this.props.history.push('/');
     })
     .catch( error => {
       this.setState({ loading: false });
       alert('Error');
     });     
  }

  checkValidity = ( value, rules ) => {
    let isValid = true;
    if ( rules.required ) {
      isValid = value.trim() !== '' && isValid;
    }
    if( rules.minLength ) {
      isValid = value.length >= rules.minLength && isValid;
    }
    return isValid;
  }

  inputChanged = ( event, inputId ) => {
    const updatedForm = {
      ...this.state.orderForm
    };
    const updatedFormItem = {
      ...updatedForm[inputId]
    };
    updatedFormItem.value = event.target.value;
    updatedFormItem.valid = this.checkValidity( updatedFormItem.value, updatedFormItem.validation );
    updatedFormItem.touched = true;
    updatedForm[inputId] = updatedFormItem;
    let formIsValid = true;
    for ( let inputId in updatedForm ) {
      formIsValid = updatedForm[inputId].valid && formIsValid;
    }
    this.setState({ orderForm: updatedForm, formIsValid: formIsValid });
  }

  

  render () {
    const formArray = [];
    for( let key in this.state.orderForm ) {
      formArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }
    let form = (
      <form onSubmit = { this.orderHandler }>        
        {formArray.map(formItem=> {
          return (
            <Input
              key = { formItem.id }
              elementType = { formItem.config.elementType }
              elementConfig = { formItem.config.elementConfig }
              value = { formItem.config.value }
              invalid = { !formItem.config.valid }
              touched = { formItem.config.touched }
              changed = { ( event ) => { this.inputChanged( event, formItem.id ) }}
            />
          );
        })}        
        <Button btnType = 'Success' disabled = { !this.state.formIsValid }>Order</Button>
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