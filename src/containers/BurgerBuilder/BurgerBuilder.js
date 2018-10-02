import React, { Component } from 'react';
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
	salad: 10,
	cheese: 20,
	meat: 30,
	bacon: 15
};

class BurgerBuilder extends Component{
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
		totalPrice: 150,
		purchaseable: false,
		purchasing: false,
		loading: false
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
		//alert('Thank You');
		this.setState({ loading: true });
		const order = {
			ingredients: this.state.ingredients,
			price: this.state.totalPrice,
			customer: {
				name: 'Gonzalo Alvarez Campos',
				address: {
					street: 'asd123',
					zipCode: '4107',
					country: 'Argentina'
				},
				email: 'gonzalo@mail.com',
			},
			deliveryMethod: 'fastest'
		}
		axios.post('/orders.json', order)
			.then( response => {
				this.setState({ loading: false, purchasing: false });
			})
			.catch( error => {
				this.setState({ loading: false, purchasing: false });
				alert('Error');
			});
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
		for ( let key in disabledInfo ) {
			disabledInfo[key] = disabledInfo[key] <= 0;						
		}
		let orderSummary = (
			<OrderSummary 
						ingredients = { this.state.ingredients } 
						price = { this.state.totalPrice }
						cancel = { this.puchaseCancelHandler }
						continue = { this.puchaseContinueHandler }	
			/>
		);
		if ( this.state.loading ){
			orderSummary = <Spinner />;
		}


		return(
			<Auxiliary>
				<Modal show = { this.state.purchasing } modalClosed = { this.puchaseCancelHandler }>
					{ orderSummary }
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