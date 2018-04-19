import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import XcfHeader from '../../../components/header';
import { setCategoryItemTitle } from '../actions';
import Pop from './pop';
import Recent from './recent';
import './style.scss';

@connect(
    state => ({
        title: state.categoryItem.categoryItemTitle
    }),
    { setCategoryItemTitle }
)
export default class CategoryItem extends React.Component {
    render() {
        return (
            <div className="category-item">
                <XcfHeader />
                <div className="head">
                    <p className="title">{this.props.title}</p>
                    <p className="choice">
                        <NavLink className="welcome" activeClassName="router-active" to={`/category/${this.props.match.params.id}/pop`}>最受欢迎</NavLink>
                        <NavLink activeClassName="router-active" to={`/category/${this.props.match.params.id}/recent`}>最近流行</NavLink>
                    </p>
                </div>
                <Route path="/category/:id/pop" component={Pop}></Route>
                <Route path="/category/:id/recent" component={Recent}></Route>
            </div>
        )
    }
}