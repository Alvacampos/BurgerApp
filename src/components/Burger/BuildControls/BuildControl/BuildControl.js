import React from 'react';
import classes from './BuildControl.css';

const buildControl = ( props ) => {
  return (
    <div className = { classes.BuildControl }>
      <div className = { classes.Label }>
        { props.label }<br/><em>Price: ${props.price}</em>
      </div>
      <button 
        className = { classes.Less } 
        onClick = { props.delete } 
        disabled = { props.disabled }>Less</button>
      <button 
        className = { classes.More } 
        onClick = { props.add }>More</button>
    </div>
  );
}

export default buildControl;