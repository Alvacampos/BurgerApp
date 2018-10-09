import React from 'react';
import classes from './Logo.css';

const logo = ( props ) => {
  return (
    <div className = { classes.Logo } style = {{ height: props.height }}>
      <img 
        src = { require( '../../assets/Img/burger-logo.png' )} 
        alt = 'logo' 
        width = '50' 
        heigth = '50' 
      />
    </div>
  );
}

export default logo;