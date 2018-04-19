import React from 'react';
import { connect } from 'react-redux';
import { getCategoryItem } from '../actions';
import MenuList from '../../../components/menu-list';

@connect(
    state => ({list: state.categoryItem.categoryItemList}),
    {getCategoryItem}
)
export default class Pop extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.getCategoryItem({id, type: 'pop'});
    }
    render() {
        return (
            <MenuList list={this.props.list}></MenuList>
        );
    }
}