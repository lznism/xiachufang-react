import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { reducer as homeReducer } from './views/home';
import { reducer as categoryReducer } from './views/category';
import { reducer as categoryItemReducer } from './views/category-item';
import { reducer as menuItemReducer } from './views/menu-item';
import { reducer as rankDetailReducer } from './views/rank-detail';
import { reducer as searchResultReducer } from './views/search-result';

const reducer = combineReducers({
    home: homeReducer,
    category: categoryReducer,
    categoryItem: categoryItemReducer,
    menuItem: menuItemReducer,
    rankDetail: rankDetailReducer,
    searchResult: searchResultReducer
});

const logger = createLogger({});
const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk, logger, middleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;