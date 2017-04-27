import {RECEIVE_ITEM, RECEIVE_ITEMS} from '../actions/item_actions'
import merge from 'lodash/merge';
const initialState = {
  1: {
    id: 1,
    title: "Widget",
    qty: "2",
    price: 10,
    total: 20
  },
  2: {
    id: 2,
    title: "Cog",
    qty: "2",
    price: 15.99,
    total: 31.98
  }
};

const ItemsReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_ITEMS:
      const newState = {};
      action.items.forEach(item => newState[item.id] = item);
      return newState;
    case RECEIVE_ITEM:
      const newItem = {[action.item.id]: action.item}
      return merge({},state,newItem);
    default:
      return state;
  }
};

export default ItemsReducer;
