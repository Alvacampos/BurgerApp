import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

class BurgerIngredient extends Component {
  render () {
    let ingredient = null;
    const { BreadTop, Seeds1, Seeds2, Salad, Bacon, Cheese, Meat, BreadBottom } = classes;
    const { click } = this.props;
    switch ( this.props.type ) {
      case ( 'bread-top' ):
        ingredient = ( 
          <div className = { BreadTop } title = ' Calories 79 '>
            <div className = { Seeds1 } title = ' Calories 5 '></div> 
            <div className = { Seeds2 } title = ' Calories 5 '></div> 
          </div> 
        );
        break;
      case ( 'salad' ):
        ingredient = 
          <div 
            className = { Salad } 
            onClick = { click } 
            title = ' Calories 5 '>
          </div>;
        break;
      case ( 'bacon' ):
        ingredient = 
          <div 
            className = { Bacon } 
            onClick = { click } 
            title = ' Calories 93 '>
          </div>;
        break;
      case ( 'cheese' ):
        ingredient = 
          <div 
            className = { Cheese } 
            onClick = { click } 
            title = ' Calories 130 '>
          </div>;
        break;
      case ( 'meat' ):
        ingredient = 
          <div 
            className = { Meat } 
            onClick = { click } 
            title = ' Calories 175 '>
          </div>;
        break;
      case ( 'bread-bottom' ):
        ingredient = 
          <div 
            className = { BreadBottom } 
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