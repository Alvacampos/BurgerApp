import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';

const orderSummary = ( props ) => {
	const ingredientSummary = Object.keys( props.ingredients )
		.map( ( igKey ) => {
			return (
				<li key = { igKey }>
					<span style = {{ textTransform: ' capitalize '}}>
						{ igKey }
					</span>: { props.ingredients[ igKey ]}
				</li>
			);
		});
	return (
		<Auxiliary>
			<h3>Your Order</h3>
			<p>A monstrer burger with the following ingredients:</p>
			<ul>
				{ingredientSummary}
			</ul>
			<p>Total: ${ props.price.toFixed(2) }</p>
			<button onClick = { props.continue }>Continue</button>
			<button onClick = { props.cancel }>Cancel Order</button>
		</Auxiliary>
	);
}

export default orderSummary;