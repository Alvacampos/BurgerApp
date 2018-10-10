import React from 'react';
import classes from './NavigationItem.css';

const navigationItem = ( props ) => {
  return (
      <li className = { classes.NavigationItem }>
        <p           
          className = { props.active ? classes.active : null }
          onClick = {props.z}>{ props.children }</p>
      </li>   
  );
}

export default navigationItem;