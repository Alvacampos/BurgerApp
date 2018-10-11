import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => { 
  return (
    <ul className = { classes.NavigationItems }>
      <NavLink to = '/' className = { classes.NavLink }><NavigationItem>Home</NavigationItem></NavLink>
      <NavLink to = '/skills' className = { classes.NavLink }><NavigationItem>Skills</NavigationItem></NavLink>
      <NavLink to = '/contact' className = { classes.NavLink }><NavigationItem>Contact</NavigationItem></NavLink>
      <NavLink to = '/burgerbuilder' className = { classes.NavLink }><NavigationItem>Burger Builder</NavigationItem></NavLink>
      <NavLink to = '/orders' className = { classes.NavLink }><NavigationItem>Orders</NavigationItem></NavLink>     
    </ul>
  );   
}

export default navigationItems;