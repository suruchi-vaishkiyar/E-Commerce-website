import { ActionTypes } from "../constants/productConstants";
const intialState = {
  products: [],
};

// export const productsReducer = (state = intialState, { type, payload }) => {
//   switch (type) {
//     case ActionTypes.SET_PRODUCTS:
//       return { ...state, products: payload };
//     default:
//       return state;
//   }
// };
export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ALL_PRODUCT_REQUEST:
      // case ADMIN_PRODUCT_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case ActionTypes.ALL_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        productsCount: action.payload.productsCount,

        filteredProductsCount: action.payload.filteredProductsCount,
      };

    // case ADMIN_PRODUCT_SUCCESS:
    //   return {
    //     loading: false,
    //     products: action.payload,
    //   };
    case ActionTypes.ALL_PRODUCT_FAIL:
      // case ADMIN_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case ActionTypes.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  // console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
export const newProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case ActionTypes.NEW_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.NEW_PRODUCT_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        product: action.payload.product,
      };
    case ActionTypes.NEW_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ActionTypes.NEW_PRODUCT_RESET:
      return {
        ...state,
        success: false,
      };
    case ActionTypes.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.DELETE_PRODUCT_REQUEST:
    case ActionTypes.UPDATE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case ActionTypes.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case ActionTypes.DELETE_PRODUCT_FAIL:
    case ActionTypes.UPDATE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ActionTypes.DELETE_PRODUCT_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case ActionTypes.UPDATE_PRODUCT_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case ActionTypes.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// const INIT_STATE = {
//   carts: [],
// };

// export const cartreducer = (state = INIT_STATE, { type, payload }) => {
//   switch (type) {
//     case ActionTypes.ADD_TO_CART:
//       //if item is already present in cart
//       const itemIndex = state.carts.findIndex((item) => item.id === payload.id);
//       if (itemIndex >= 0) {
//         state.carts[itemIndex].qnty += 1;
//         return {
//           ...state,
//           carts: [...state.carts],
//         };
//       } else {
//         const temp = { ...payload, qnty: 1 };
//         return {
//           ...state,
//           carts: [...state.carts, temp],
//         };
//       }
//     // return {
//     //   ...state,
//     //   carts: [...state.carts, payload],
//     // };
//     case ActionTypes.REMOVE_FROM_CART:
//       return {
//         ...state,
//         carts: state.carts.filter((item) => item.id !== payload.id),
//       };
// //decrease quantity
//     case ActionTypes.REMOVE_ONE:
//       const itemIndex_dec = state.carts.findIndex(
//         (item) => item.id === payload.id
//       );

//       if (state.carts[itemIndex_dec].qnty >= 1) {
//         const dltItems = (state.carts[itemIndex_dec].qnty -= 1);
//         console.log([...state.carts, dltItems]);
//         return {
//           ...state,
//           carts: [...state.carts],
//         };
//       } else if (state.carts[itemIndex_dec].qnty === 1) {
//         return {
//           ...state,
//           carts: state.carts.filter((item) => item.id !== payload.id),
//         };
//       }
//     default:
//       return state;
//   }
// };
