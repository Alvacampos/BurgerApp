import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = ( props ) => {
  const { SideDrawer, Open, Close } = classes;
  const { open, closed } = props;
  let attachedClasses = [ SideDrawer, Close ];
  if( open ){
    attachedClasses = [ SideDrawer, Open];
  }  
  return (
    <Auxiliary>
      <Backdrop show = { open } clicked = { closed }/>
      <div className = { attachedClasses.join(' ') }>
        <Logo height = '11%' className = { classes.Logo } />
        <nav>
          <NavigationItems/>
        </nav>
      </div>  
    </Auxiliary>    
  );
}

export default sideDrawer;