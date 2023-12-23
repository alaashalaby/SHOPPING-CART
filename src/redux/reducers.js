import { combineReducers } from 'redux'
const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.products };
    default:
      return state;
  }
};
const selectedProductReducer = (state = {}, action) => {
  switch (action.type) {
      case "SELECTED_PRODUCT":
          return {...state,...action.product}
    default:
      return state;
  }
};

const cartReducer = (state = { item: [] }, action) => {
    switch (action.type) {
      case "ADD_PRODUCT":
        const productExist = state.item.find(
          (item) => item.id === action.product.id
        );
        if (productExist) {
          return {
            ...state,
            item: state.item.map((item) =>
              item.id === action.product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        } else {
          return {
            ...state,
            item: [...state.item, { ...action.product, quantity: 1 }],
          };
        }
      case "REMOVE_PRODUCT":
        return {
          ...state,
          item: state.item.filter((item) => item.id !== action.id),
        };
      case "INCREASE_QUANTITY":
        return {
          ...state,
          item: state.item.map((item) =>
            item.id === action.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      case "DECREASE_QUANTITY":
            return {
              ...state,
              item: state.item.map((item) =>
                item.id === action.id
                  ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
                  : item
              ),
            };
      default:
        return state;
    }
    
}
const rootReducers = combineReducers({
  productReducer,
  selectedProductReducer,
  cartReducer,
});
export default rootReducers