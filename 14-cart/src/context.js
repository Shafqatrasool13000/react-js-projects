import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  amount: 0,
  total: 0,
}

export const actionTypes = {
  clear_cart: 'CLEAR_CART',
  remove_cart_item: 'REMOVE_CART_ITEM',
  increase_product_amount: 'DECREASE PRODUCT AMOUNT',
  decrease_product_amount: 'DECREASE PRODUCT  AMOUNT',
  get_Total: 'GET_TOTALS',
  loading: 'LOADING',
  cart_data: 'CART_DATA',
  toggleAmount: 'TOGGLE_AMOUNT',

}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchCartData = async () => {
    dispatch({ type: actionTypes.loading })
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: actionTypes.cart_data, payload: data })
  }

  useEffect(() => {
    fetchCartData();
  }, [])


  useEffect(() => {
    dispatch({ type: actionTypes.get_Total });
  }, [state.cart])

  // here clearing cart 
  const clearCart = () => {
    dispatch({ type: actionTypes.clear_cart })
  }

  // here removing single product from cart 

  const removeCartItem = (id) => {
    dispatch({ type: actionTypes.remove_cart_item, payload: id })
  }

  // here increasing signle product in cart 

  const increaseProductAmount = (id) => {
    dispatch({ type: actionTypes.increase_product_amount, payload: id })
  }

  // here increasing signle product in cart 

  const decreaseProductAmount = (id) => {
    dispatch({ type: actionTypes.decrease_product_amount, payload: id })
  }

  // increment and decrement in one
  const toggleAmount = (id, action) => {
    dispatch({ type: actionTypes.toggleAmount, payload: { id, action } })
  }
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeCartItem,
        increaseProductAmount,
        decreaseProductAmount,
        toggleAmount
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
