import { ActionTypes } from "../constants/productConstants";
import axios from "axios";

// //get all products
// export const setProducts = (products) => {
//   return {
//     type: ActionTypes.SET_PRODUCTS,
//     payload: products,
//   };
// };

//get a product
export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const getProduct =
  (keyword = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: ActionTypes.ALL_PRODUCT_REQUEST });

      let link = `/api/products?keyword=${keyword}`;

      // if (category) {
      //   link = `/api/products?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
      // }

      const { data } = await axios.get(link);

      dispatch({
        type: ActionTypes.ALL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.ALL_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };
// Create Product
export const createProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.NEW_PRODUCT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/admin/product/new`,
      productData,
      config
    );

    dispatch({
      type: ActionTypes.NEW_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.NEW_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Product
export const updateProduct = (id, productData) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.UPDATE_PRODUCT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/admin/product/${id}`,
      productData,
      config
    );

    dispatch({
      type: ActionTypes.UPDATE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.UPDATE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Product
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.DELETE_PRODUCT_REQUEST });

    const { data } = await axios.delete(`/api/admin/product/${id}`);

    dispatch({
      type: ActionTypes.DELETE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.DELETE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: ActionTypes.CLEAR_ERRORS });
};
