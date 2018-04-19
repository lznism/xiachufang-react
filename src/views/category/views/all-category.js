import React from 'react';
import { connect } from 'react-redux';
import { getCategory } from '../actions';

@connect(
    state => ({
        category: state.category
    }),
    { getCategory }
)
export default class AllCategory extends React.Component {
    componentDidMount() {
        this.props.getCategory();
    }
    handleClick = (href) => {
        console.log(href);
    }
    render() {
        return (
            <div id="all-category">
                {
                    this.props.category.map((item, index) => (
                        <section key={index}>
                            <h3 className="title">{item.title}</h3>
                            <div className="category-section clearfix">
                                {
                                    item.info.map((_item, _index) => (
                                        <div className="category-item" key={_index} onClick={this.handleClick.bind(this, _item.href)}>
                                            <img src={_item.imgUrl} alt="item"/>
                                            <p>{_item.title}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </section>
                    ))
                }
            </div>
        );
    }
}