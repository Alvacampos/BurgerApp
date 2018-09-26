import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const buildControls = ( props ) => {

	const controls = [
		{label: 'Salad', type: 'salad'},
		{label: 'Bacon', type: 'bacon'},
		{label: 'Cheese', type: 'cheese'},
		{label: 'Meat', type: 'meat'},
	];

	return (
		<div className = { classes.BuildControls }>
			{ controls.map( ctrl => {
				return (
					<BuildControl 
						key = { ctrl.label } 
						label = { ctrl.label }
						add = { () => props.add( ctrl.type )}
					/>	
				);				
			})}			
		</div>
	);
}

export default buildControls;