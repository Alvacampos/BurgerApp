import React, { Component } from 'react';
import axios from '../../axios-order';
import Modal from '../../components/UI/Modal/Modal';
import Burger from '../../components/Burger/Burger';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component{
	state = {
		ingredients: null,
    prices: null,
		totalPrice: 0,
		purchaseable: false,
		purchasing: false,
		loading: false,
    error: null
	}

  getIngredients = () => {
    axios.get('/ingredients.json')
      .then( response => {
        this.setState({ ingredients: response.data });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  getPrices = () => {
    axios.get('/price.json')
      .then( response => {
        this.setState({ prices: response.data });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  getTotalPrice = () => {
    axios.get('/totalPrice.json')
      .then( response => {
        this.setState({ totalPrice: response.data });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

	componentDidMount(){
    this.getIngredients();
    this.getPrices();
    this.getTotalPrice();   
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
		const priceAddition = this.state.prices[ type ];
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
		const priceDeduction = this.state.prices[ type ];
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
		}
		axios.post('/orders.json', order)
			.then( response => {
				this.setState({ loading: false, purchasing: false });
			})
			.catch( error => {
				this.setState({ loading: false, purchasing: false });
				alert('Error');
			});
		this.getIngredients();
    this.getTotalPrice();			
		this.puchaseCancelHandler();
	}

	render(){
    let orderSummary = null;      
    let burger = this.state.error ? <p>Ups! there is an problem with the burger</p> : <Spinner />;
		const disabledInfo = {
			...this.state.ingredients
		};		
		for ( let key in disabledInfo ) {
			disabledInfo[key] = disabledInfo[key] <= 0;						
		}		
		if( this.state.ingredients ) {
			burger = (
				<Auxiliary>
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
			orderSummary = (
				<OrderSummary 
					ingredients = { this.state.ingredients } 
					price = { this.state.totalPrice }
					cancel = { this.puchaseCancelHandler }
					continue = { this.puchaseContinueHandler }	
				/>
			);
		}
		if ( this.state.loading ){
			orderSummary = <Spinner />;
		}	

		return(
			<Auxiliary>
				<Modal show = { this.state.purchasing } modalClosed = { this.puchaseCancelHandler }>
					{ orderSummary }
				</Modal>
				{ burger }	
			</Auxiliary>
		);
	}
}

export default withErrorHandler( BurgerBuilder, axios );