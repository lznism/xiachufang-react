import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getHome } from '../actions';

@connect(
    state => ({
        rankMenu: state.home.rankMenu,
        popMenu: state.home.popMenu,
        risingMenu: state.home.risingMenu
    }),
    { getHome }
)
export default class Recommend extends React.Component {
    componentDidMount() {
        this.props.getHome();
    }
    render() {
        return (
            <div>
                <section className="list">
                    <h3>菜谱榜单</h3>
                    <div className="list-head">
                        {
                            this.props.rankMenu.head.map(item => (
                                <Link
                                    className="head-item"
                                    to={item.href}
                                    key={item.href}>
                                    <img src={item.imgUrl} alt="rank img"/>
                                    <p className="title">{item.title}</p>
                                    <p className="desc">{item.description}</p>
                                </Link>
                            ))
                        }
                    </div>
                    <div className="list-body">
                        {
                            this.props.rankMenu.body.map(item => (
                                <Link
                                    className="body-item"
                                    key={item.href}
                                    to={item.href}>
                                    <img src={item.imgUrl} alt="rank img"/>
                                    <div className="content">
                                        <p className="title">{item.title}</p>
                                        <p className="desc">
                                            {item.rate ? <span>评分{item.rate}</span> : null}
                                            {item.doneNum ? <span>{item.doneNum}人做过</span> : null}
                                        </p>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </section>
                <section className="list">
                    <h3>流行菜单</h3>
                    <div className="list-head">
                        {
                            this.props.popMenu.head.map(item => (
                                <Link
                                    className="head-item"
                                    to={item.href}
                                    key={item.href}>
                                    <img src={item.imgUrl} alt="rank img"/>
                                    <p className="title">{item.title}</p>
                                    <p className="desc">{item.description}</p>
                                </Link>
                            ))
                        }
                    </div>
                    <div className="list-body">
                        {
                            this.props.popMenu.body.map(item => (
                                <Link
                                    className="body-item"
                                    key={item.href}
                                    to={item.href}>
                                    <img src={item.imgUrl} alt="rank img"/>
                                    <div className="content">
                                        <p className="title">{item.title}</p>
                                        <p className="desc">
                                            {item.rate ? <span>评分{item.rate}</span> : null}
                                            {item.doneNum ? <span>{item.doneNum}人做过</span> : null}
                                        </p>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </section>
                <section className="list">
                    <h3>新秀菜单</h3>
                    <div className="list-head">
                        {
                            this.props.risingMenu.head.map(item => (
                                <Link
                                    className="head-item"
                                    to={item.href}
                                    key={item.href}>
                                    <img src={item.imgUrl} alt="rank img"/>
                                    <p className="title">{item.title}</p>
                                    <p className="desc">{item.description}</p>
                                </Link>
                            ))
                        }
                    </div>
                    <div className="list-body">
                        {
                            this.props.risingMenu.body.map(item => (
                                <Link
                                    className="body-item"
                                    key={item.href}
                                    to={item.href}>
                                    <img src={item.imgUrl} alt="rank img"/>
                                    <div className="content">
                                        <p className="title">{item.title}</p>
                                        <p className="desc">
                                            {item.rate ? <span>评分{item.rate}</span> : null}
                                            {item.doneNum ? <span>{item.doneNum}人做过</span> : null}
                                        </p>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </section>
            </div>
            
        );
    }
}