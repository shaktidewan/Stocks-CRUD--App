import { createStore, combineReducers,applyMiddleware } from 'redux';
import stocksReducers from './reducer/reducer';
import thunk from "redux-thunk";

// const rootReducer = combineReducers(
// { stocks: stocksReducers }
// );

const configureStore = () => {
return createStore(stocksReducers,applyMiddleware(thunk));
}
export default configureStore;