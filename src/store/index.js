import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';


const reducerFunc = combineReducers(reducers);
const store = createStore(reducerFunc);
export default store;