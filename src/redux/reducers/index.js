import { combineReducers } from 'redux';
import filters from './filters';
import coffee from './coffee';
import cart from './cart';


const rootReducer = combineReducers({
    filters,
    coffee,
    cart,
})

export default rootReducer;