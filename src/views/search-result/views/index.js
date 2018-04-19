import React from 'react';
import { connect } from 'react-redux';
import './style.scss';
import MenuList from '../../../components/menu-list';
import { getSearch } from '../actions';
import XcfHeader from '../../../components/header';
import Search from '../../../components/search';

@connect(
    state => ({
        searchResults: state.searchResult
    }),
    { getSearch }
)
export default class SearchResult extends React.Component {
    componentDidMount() {
        if (this.props.searchResults.length === 0) {
            console.log(this.props);
            const params = new URLSearchParams(this.props.location.search);
            const keyword = params.get('keyword');
            this.props.getSearch(keyword);
        }
    }
    render() {
        return (
            <div>
                <XcfHeader />
                <Search />
                <MenuList list={this.props.searchResults} />
            </div>
        );
    }
}