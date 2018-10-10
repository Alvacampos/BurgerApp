import React from 'react';
import classes from './NavigationItem.css';

const navigationItem = ( props ) => {
  const { active, children } = props;
  return (
      <li className = { classes.NavigationItem }>
        <p           
          className = { active ? classes.active : null }>{ children }</p>
      </li>   
  );
}

export default navigationItem;