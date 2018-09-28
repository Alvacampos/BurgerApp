import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = ( props ) => {
	return (
		<header className = { classes.Toolbar }>
			<img 
				src = { require( '../../../assets/Img/burger-logo.png' )} 
				alt = 'logo' 
				width = '50' 
				heigth = '50' 
				onClick = { props.menu }
			/>					
			<nav className = { classes.DesktopOnly }>
				<NavigationItems />
			</nav>
		</header>
	);
}

export default toolbar;