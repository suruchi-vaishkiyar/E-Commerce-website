import { ActionTypes } from "../constants/cartConstants";
export const addToCart = (product) => (dispatch, getState) => {
  dispatch({
    // return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
    // }
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (product) => (dispatch, getState) => {
  dispatch({
    type: ActionTypes.REMOVE_FROM_CART,
    payload: product,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeOne = (product) => (dispatch, getState) => {
  dispatch({
    type: ActionTypes.REMOVE_ONE,
    payload: product,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// SAVE SHIPPING INFO
export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: ActionTypes.SAVE_SHIPPING_INFO,
    payload: data,
  });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};

// import {
//   ADD_TO_CART,
//   REMOVE_CART_ITEM,
//   SAVE_SHIPPING_INFO,
// } from "../constants/cartConstants";
// import axios from "axios";

// // Add to Cart
// export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
//   const { data } = await axios.get(`/api/v1/product/${id}`);

//   dispatch({
//     type: ADD_TO_CART,
//     payload: {
//       product: data.product._id,
//       name: data.product.name,
//       price: data.product.price,
//       image: data.product.images[0].url,
//       stock: data.product.Stock,
//       quantity,
//     },
//   });

//   localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
// };

// // REMOVE FROM CART
// export const removeItemsFromCart = (id) => async (dispatch, getState) => {
//   dispatch({
//     type: REMOVE_CART_ITEM,
//     payload: id,
//   });

//   localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
// };

// // SAVE SHIPPING INFO
// export const saveShippingInfo = (data) => async (dispatch) => {
//   dispatch({
//     type: SAVE_SHIPPING_INFO,
//     payload: data,
//   });

//   localStorage.setItem("shippingInfo", JSON.stringify(data));
// };
