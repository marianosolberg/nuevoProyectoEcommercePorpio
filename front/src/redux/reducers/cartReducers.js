//importo todas las acciones como actionTypes
import * as actionTypes from "../constants/cartConst";

const CART_INITIAL_STATE = {
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      //item es el que nos llega del action.payload
      const item = action.payload;
      //buscamos en el cartItems si el producto que tenemos en el array es igual al item
      //que  nos llega en el payload
      const existItem = state.cartItems.find(
        (elem) => elem.product === item.product
      );

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((elem) =>
            elem.product === existItem.product ? item : elem
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (elem) => elem.product !== action.payload
        ),
      };
    default:
      return state;
  }
};
