import React from 'react';
import classes from './Burger.css';
import { withRouter } from 'react-router-dom';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {
  let newIngredients = Object.keys( props.ingredients )
    .map( element => {
      return [...Array(props.ingredients[ element ])].map((_, i) => {
        return (
          <BurgerIngredient 
            key = { element + i }
            type = { element }
            click = { () => props.click( element ) }
          />
        );
      });
    }).reduce( (arr, el) => {
        return arr.concat(el);
      }, []); 
  if(newIngredients.length === 0){
    newIngredients = <p>Please add ingredients</p>
  }
  
  return (
    <div className = { classes.Burger }>
      <BurgerIngredient type = 'bread-top' />
      {newIngredients}
      <BurgerIngredient type = 'bread-bottom' />
    </div>
  );
}

export default withRouter(burger);