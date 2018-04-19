import React from 'react';
import { connect } from 'react-redux';
import './style.scss';
import { getSearch } from '../../views/search-result/actions';

@connect(
    null,
    { getSearch }
)
export default class Search extends React.Component {
    handleSearch = (event) => {
        if (event.keyCode === 13) {
            let val = event.target.value;
            if (!val) return;
            this.props.getSearch(val);
        }
    };

    render() {
        return (
            <section className="search">
                <input type="text" placeholder="搜索菜谱，食材" onKeyDown={this.handleSearch} />
                <i className="iconfont icon-fangdajing"></i>
            </section>
        );
    }
}