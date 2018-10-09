import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
	return (
		<ul className = { classes.NavigationItems }>
			<NavLink to = '/burgerbuilder'>Burger Builder</NavLink>
			<NavLink to = '/checkout'>Check Out</NavLink>
			<NavLink to = '/contact'>Contact</NavLink>
			<NavLink to = '/skills'>Skills</NavLink>
			<NavLink to = '/'>Home</NavLink>
		</ul>
	);
}

export default navigationItems;