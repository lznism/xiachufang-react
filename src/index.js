import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { view as Home } from './views/home';
import { view as Category } from './views/category';
import { view as CategoryItem } from './views/category-item';
import { view as MenuItem } from './views/menu-item';
import { view as RankDetail } from './views/rank-detail';

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path="/" component={Home} exact></Route>
                <Route path="/category" component={Category} exact></Route>
                <Route path="/category/:id" exact render={({match}) => (
                    <Redirect to={`/category/${match.params.id}/pop`}></Redirect>
                )}></Route>
                <Route path="/category/:id/pop" component={CategoryItem}></Route>
                <Route path="/category/:id/recent" component={CategoryItem}></Route>
                <Route path="/recipe/:id" component={MenuItem}></Route>
                <Route path="/explore/:type" component={RankDetail}></Route>
            </div>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
