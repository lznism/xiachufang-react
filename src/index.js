import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import { view as Home } from './views/home';
import { view as Category } from './views/category';

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path="/" component={Home} exact></Route>
                <Route path="/category" component={Category}></Route>
            </div>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
