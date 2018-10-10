import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';
const CheckoutSummary = (props) => {
  const { ingredients, onContinue, onCancel } = props;
  return (
    <div className = { classes.CheckoutSummary }>
      <h1>We hope you enjoy it!</h1>
      <div style = {{ width: '100%', margin: 'auto'}}>
        <Burger ingredients = { ingredients }/>       
      </div>
      <Button 
        btnType = 'Danger'
        clicked = { onCancel } >Cancel</Button>     
      <Button 
        btnType = 'Success'
        clicked = { onContinue } >Continue</Button>
    </div>
  );
}

export default CheckoutSummary;