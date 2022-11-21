const addToCart = (pizza, quantity, varient) => (dispatch, getState) => {
  const cartItem = {
    name: pizza.name,
    _id: pizza._id,
    image: pizza.image,
    varients: varient,
    quantity: quantity,
    prices: pizza.prices,
    price: pizza.prices[0][varient] * quantity,
  };

  if (cartItem.quantity < 0) {
    dispatch({ type: "DELETE_FROM_CART", payload: pizza });
  } else {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  }

  const cartItems = getState().carReducer.cartItems;
  localStorage.getItem("cartItems", JSON.stringify(cartItems));
};

export const deleteFromCart = (pizza) => (dispatch) => {
  dispatch({ type: "DELETE_FROM_CART", payload: pizza });
};

export default addToCart;
