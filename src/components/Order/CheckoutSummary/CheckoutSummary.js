import React from 'react';
import Burger from '../../Burger/Burger';
import { NavLink } from 'react-router-dom';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';
const CheckoutSummary = (props) => {
  return (
    <div className = { classes.CheckoutSummary }>
      <h1>We hope you enjoy it!</h1>
      <div style = {{ width: '100%', margin: 'auto'}}>
        <Burger ingredients = { props.ingredients }/>       
      </div>
      <Button 
        btnType = 'Danger'
        clicked = { props.onCancel } >Cancel</Button>     
      <Button 
        btnType = 'Success'
        clicked = {props.onContinue } >Continue</Button>
    </div>
  );
}

export default CheckoutSummary;