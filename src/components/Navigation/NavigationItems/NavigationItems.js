import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
	return (
		<ul className = { classes.NavigationItems }>
			<NavigationItem link = '/'>Burger Builder</NavigationItem>
			<NavigationItem link = '/'>Check Out</NavigationItem>
			<NavigationItem link = '/'>Contact</NavigationItem>
			<NavigationItem link = '/'>Skills</NavigationItem>
			<NavigationItem link = '/'>Home</NavigationItem>
		</ul>
	);
}

export default navigationItems;