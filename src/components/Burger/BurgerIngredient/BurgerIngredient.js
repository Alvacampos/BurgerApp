import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

class BurgerIngredient extends Component {
	render () {
		let ingredient = null;
		switch ( this.props.type ) {
			case ( 'bread-top' ):
				ingredient = ( 
					<div className = { classes.BreadTop } title = ' Calories 79 '>
						<div className = { classes.Seeds1 } title = ' Calories 5 '></div> 
						<div className = { classes.Seeds2 } title = ' Calories 5 '></div> 
					</div> 
				);
				break;
			case ( 'salad' ):
				ingredient = 
					<div 
						className = { classes.Salad } 
						onClick = { this.props.click } 
						title = ' Calories 5 '>
					</div>;
				break;
			case ( 'bacon' ):
				ingredient = 
					<div 
						className = { classes.Bacon } 
						onClick = { this.props.click } 
						title = ' Calories 93 '>
					</div>;
				break;
			case ( 'cheese' ):
				ingredient = 
					<div 
						className = { classes.Cheese } 
						onClick = { this.props.click } 
						title = ' Calories 130 '>
					</div>;
				break;
			case ( 'meat' ):
				ingredient = 
					<div 
						className = { classes.Meat } 
						onClick = { this.props.click } 
						title = ' Calories 175 '>
					</div>;
				break;
			case ( 'bread-bottom' ):
				ingredient = 
					<div 
						className = { classes.BreadBottom } 
						title = ' Calories 79 '>
					</div>;
				break;
			default: 
				ingredient = null;			
		}
		return (
			<Auxiliary>
				{ingredient}
			</Auxiliary>
		);		
	}	
}

BurgerIngredient.propTypes = {
	type: PropTypes.string.isRequired
};

export default BurgerIngredient;