import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const buildControls = ( props ) => {

	const controls = [
		{ label: 'Salad', type: 'salad', price: 0.5 },
		{ label: 'Bacon', type: 'bacon', price: 0.8 },
		{ label: 'Cheese', type: 'cheese', price: 0.6 },
		{ label: 'Meat', type: 'meat', price: 1.2 },
	];

	return (
		<div className = { classes.BuildControls }>
			<p>Total Price: <strong>{ props.price.toFixed(2) }</strong></p>
			{ controls.map( ctrl => {
				return (
					<BuildControl 
						key = { ctrl.label } 
						label = { ctrl.label }
						price = { ctrl.price }
						add = { () => props.add( ctrl.type ) }
						delete = { () => props.delete( ctrl.type )}
						disabled = { props.disabled[ ctrl.type ] }						
					/>	
				);				
			})}
			<button 
				className = { classes.OrderButton } 
				disabled = { !props.purchaseable }
				onClick = { props.ordered }>Check Out</button>	
		</div>
	);
}

export default buildControls;