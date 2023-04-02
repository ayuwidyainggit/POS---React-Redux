import { combineReducers } from 'redux';
import tableReducer from './tableReducers';
import tableReducer2 from './tableReducers2';
import productReducer from './productReducers';
import drinksReducer from './drinksReducers';
import dessertReducer from './dessertReducers';

export default combineReducers({
  table: tableReducer,
  table2: tableReducer2,
  product: productReducer,
  drinks: drinksReducer,
  dessert: dessertReducer,
});
