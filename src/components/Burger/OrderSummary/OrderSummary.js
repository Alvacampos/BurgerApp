import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

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
			<p><strong>Total: ${ props.price.toFixed(2) }</strong></p>
			<Button btnType = 'Danger' clicked = { props.cancel }>Cancer Order</Button>
			<Button btnType = 'Success' clicked = { props.continue }>Continue</Button>
		</Auxiliary>
	);
}

export default orderSummary;