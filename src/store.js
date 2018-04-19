import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { reducer as homeReducer } from './views/home';
import { reducer as categoryReducer } from './views/category';

const reducer = combineReducers({
    home: homeReducer,
    category: categoryReducer
});

const logger = createLogger({});

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk, logger),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;