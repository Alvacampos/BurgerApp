import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const buildControls = ( props ) => {
  const controls = [
    { label: 'Salad', type: 'salad', price: 10 },
    { label: 'Bacon', type: 'bacon', price: 15 },
    { label: 'Cheese', type: 'cheese', price: 20 },
    { label: 'Meat', type: 'meat', price: 40 },
  ];

  return (
    <div className = { classes.BuildControls }>
      <p>Total Price: <strong>{ props.price.toFixed(2) }</strong></p>
      { controls.map( ctrl => {
        return (
          <BuildControl 
            key = { ctrl.label } 
            label = { ctrl.label }
            price = { ctrl.price }
            add = { () => props.add( ctrl.type ) }
            delete = { () => props.delete( ctrl.type ) }
            disabled = { props.disabled[ ctrl.type ] }            
          />  
        );        
      })}
      <button 
        className = { classes.OrderButton } 
        disabled = { !props.purchaseable }
        onClick = { props.ordered }>Check Out</button>  
    </div>
  );
}

export default buildControls;