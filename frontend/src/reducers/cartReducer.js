import { ActionTypes } from "../constants/cartConstants";
const INIT_STATE = {
  cartItems: [],
  shippingInfo: {},
};

export const cartReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      //if item is already present in cart
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === payload._id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].qnty += 1;
        return {
          ...state,
          cartItems: [...state.cartItems],
        };
      } else {
        const temp = { ...payload, qnty: 1 };
        return {
          ...state,
          cartItems: [...state.cartItems, temp],
        };
      }
    // return {
    //   ...state,
    //   cartItems: [...state.cartItems, payload],
    // };
    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item._id !== payload._id),
      };
    //decrease quantity
    case ActionTypes.REMOVE_ONE:
      const itemIndex_dec = state.cartItems.findIndex(
        (item) => item._id === payload._id
      );

      if (state.cartItems[itemIndex_dec].qnty >= 1) {
        const dltItems = (state.cartItems[itemIndex_dec].qnty -= 1);
        // console.log([...state.cartItems, dltItems]);
        return {
          ...state,
          cartItems: [...state.cartItems],
        };
      } else if (state.cartItems[itemIndex_dec].qnty === 1) {
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item._id !== payload._id),
        };
      }

    case ActionTypes.SAVE_SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: payload,
      };

    default:
      return state;
  }
};

// import {
//   ADD_TO_CART,
//   REMOVE_CART_ITEM,
//   SAVE_SHIPPING_INFO,
// } from "../constants/cartConstants";

// export const cartReducer = (
//   state = { cartItems: [], shippingInfo: {} },
//   action
// ) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       const item = action.payload;

//       const isItemExist = state.cartItems.find(
//         (i) => i.product === item.product
//       );

//       if (isItemExist) {
//         return {
//           ...state,
//           cartItems: state.cartItems.map((i) =>
//             i.product === isItemExist.product ? item : i
//           ),
//         };
//       } else {
//         return {
//           ...state,
//           cartItems: [...state.cartItems, item],
//         };
//       }

//     case REMOVE_CART_ITEM:
//       return {
//         ...state,
//         cartItems: state.cartItems.filter((i) => i.product !== action.payload),
//       };

//     case SAVE_SHIPPING_INFO:
//       return {
//         ...state,
//         shippingInfo: action.payload,
//       };

//     default:
//       return state;
//   }
// };
