import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.6,
	meat: 1.2,
	bacon: 0.8
};

class BurgerBuilder extends Component{
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
		totalPrice: 2,
		purchaseable: false,
		purchasing: false
	}

	checkOut = ( ingredients ) => {		
		const sum = Object.keys(ingredients)
			.map( (igKey) => {
				return ingredients[igKey];
			})
				.reduce(( sum, el ) => {
					return sum + el;
				}, 0);
		this.setState({ purchaseable: sum > 0 });		
	}

	addIngredient = ( type ) => {
		const oldCount = this.state.ingredients[ type ];
		const newCount = oldCount + 1;
		const updatedIngredientes = {
			...this.state.ingredients
		};
		updatedIngredientes[ type ] = newCount;
		const priceAddition = INGREDIENT_PRICES[ type ];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState({ totalPrice: newPrice, ingredients: updatedIngredientes });
		this.checkOut( updatedIngredientes );
	}

	removeIngredient = ( type ) => {
		const oldCount = this.state.ingredients[ type ];
		if( oldCount <= 0){
			return;
		}
		const newCount = oldCount - 1;
		const updatedIngredientes = {
			...this.state.ingredients
		};		
		updatedIngredientes[ type ] = newCount;
		const priceDeduction = INGREDIENT_PRICES[ type ];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;
		this.setState({ totalPrice: newPrice, ingredients: updatedIngredientes });
		this.checkOut( updatedIngredientes );
	}

	puchaseHangler = () => {
		this.setState({ purchasing: true });
	}

	puchaseCancelHandler = () => {
		this.setState({ purchasing: false });
	}

	puchaseContinueHandler = () => {
		alert('Thank You');
		const newOrder = {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		};
		const newTotal = 0;
		this.setState({ ingredients: newOrder, totalPrice: newTotal });
		this.puchaseCancelHandler();
	}

	render(){
		const disabledInfo = {
			...this.state.ingredients
		};		
		for(let key in disabledInfo){
			disabledInfo[key] = disabledInfo[key] <= 0;						
		}		

		return(
			<Auxiliary>
				<Modal show = { this.state.purchasing } modalClosed = { this.puchaseCancelHandler }>
					<OrderSummary 
						ingredients = { this.state.ingredients } 
						price = { this.state.totalPrice }
						cancel = { this.puchaseCancelHandler }
						continue = { this.puchaseContinueHandler }	
					/>
				</Modal>
				<Burger 
					ingredients = { this.state.ingredients } 
					click = { this.removeIngredient }
				/>
				<BuildControls 
					add = { this.addIngredient } 
					delete = { this.removeIngredient }
					disabled = { disabledInfo }
					price = { this.state.totalPrice }
					purchaseable = { this.state.purchaseable }
					ordered = { this.puchaseHangler }
				/>				
			</Auxiliary>
		);
	}
}

export default BurgerBuilder;