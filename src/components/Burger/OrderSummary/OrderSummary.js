import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = ( props ) => {
  const { ingredients, cancel, price } = props;
	const ingredientSummary = Object.keys( ingredients )
		.map( ( igKey ) => {
			return (
				<li key = { igKey }>
					<span style = {{ textTransform: ' capitalize '}}>
						{ igKey }
					</span>: { ingredients[ igKey ]}
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
			<p><strong>Total: ${ price.toFixed(2) }</strong></p>
			<Button btnType = 'Danger' clicked = { cancel }>Cancer Order</Button>
			<Button btnType = 'Success' clicked = { props.continue }>Continue</Button>
		</Auxiliary>
	);
}

export default orderSummary;