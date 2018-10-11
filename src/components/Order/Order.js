import React from 'react';
import classes from './Order.css';
import Button from '../UI/Button/Button';

const order = ({ customer, bacon, cheese, meat, salad, price }) => {
  return (
    <div className = { classes.Order }>
      <h5>Customer: { customer }</h5>
      <h5>Ingredients:</h5>
      <p>Bacon: { bacon }, Cheese: { cheese }, Meat: { meat }, Salad: { salad }</p>
      <h3>Price: <strong>${ price }</strong></h3>
      <Button btnType = 'Danger' clicked = { () => (alert('deleted')) }>Delete</Button>
    </div>
  );
};

export default order;
