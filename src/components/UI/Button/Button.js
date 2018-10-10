import React from 'react';
import classes from './Button.css';

const button = ( props ) => {
  const { clicked, children } = props;
  return (
    <button 
      className = { [classes.Button, classes[props.btnType]].join(' ') }
      onClick = { clicked }>{ children }</button>
  );
}

export default button;