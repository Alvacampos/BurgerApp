import React, { Component } from 'react';
import axios from '../../axios-order';
import Modal from '../../components/UI/Modal/Modal';
import Burger from '../../components/Burger/Burger';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    prices: null,
    totalPrice: 0,
    purchaseable: false,
    purchasing: false,
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

  componentDidMount () {
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
    this.getIngredients();
    this.getTotalPrice(); 
  }

  puchaseContinueHandler = () => {
    const data =  [];
    for ( let i in this.state.ingredients ) {
      data.push( encodeURIComponent(i) + '=' + encodeURIComponent( this.state.ingredients[i] ));
    }
    data.push(`price=${this.state.totalPrice}`);
    const dataString = data.join('&');
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + dataString
    });
  }

  render () {
    let orderSummary = null;  
    const { ingredients, purchaseable, purchasing, totalPrice, loading } = this.state;
    const { removeIngredient, addIngredient, puchaseHangler, puchaseContinueHandler, puchaseCancelHandler } = this;
    let burger = this.state.error ? <p>Ups! there is an problem with the burger</p> : <Spinner />;
    const disabledInfo = {
      ...ingredients
    };    
    for ( let key in disabledInfo ) {
      disabledInfo[key] = disabledInfo[key] <= 0;           
    }   
    if( ingredients ) {
      burger = (
        <Auxiliary>
          <Burger 
            ingredients = { ingredients } 
            click = { removeIngredient }
          />
          <BuildControls 
            add = { addIngredient } 
            delete = { removeIngredient }
            disabled = { disabledInfo }
            price = { totalPrice }
            purchaseable = { purchaseable }
            ordered = { puchaseHangler }
          />
        </Auxiliary>
      );
      orderSummary = (
        <OrderSummary 
          ingredients = { ingredients } 
          price = { totalPrice }
          cancel = { puchaseCancelHandler }
          continue = { puchaseContinueHandler }  
        />
      );
    }
    if ( loading ) {
      orderSummary = <Spinner />;
    } 

    return (
      <Auxiliary>
        <Modal show = { purchasing } modalClosed = { puchaseCancelHandler }>
          { orderSummary }
        </Modal>
        { burger }  
      </Auxiliary>
    );
  }
}

export default withErrorHandler( BurgerBuilder, axios );