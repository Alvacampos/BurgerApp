import React from 'react';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = ( props ) => {
  const { Toolbar, DesktopOnly } = classes;
  return (
    <header className = { Toolbar }>
      <img 
        src = { require( '../../../assets/Img/burger-logo.png' )} 
        alt = 'logo' 
        width = '50' 
        heigth = '50' 
        onClick = { props.menu }
      />
      <nav className = { DesktopOnly }>
        <NavigationItems />
      </nav>
    </header>
  );
}

export default toolbar;