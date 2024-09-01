import { combineReducers } from 'redux';

const balanceReducer = (state = 100000000000, action) => {
  switch (action.type) {
    case 'BUY_PRODUCT':
      return state - action.payload.price;
    case 'SELL_PRODUCT':
      return state + action.payload.price;
    default:
      return state;
  }
};

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'BUY_PRODUCT':
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        return state.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    case 'SELL_PRODUCT':
      return state.map(item =>
        item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
      ).filter(item => item.quantity > 0);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  balance: balanceReducer,
  cart: cartReducer,
});

export default rootReducer;