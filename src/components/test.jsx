import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, desc, addAsync, descAsync } from '../store/action-creators';

@connect(
    state => state,
    { add, desc, addAsync, descAsync }
)
export default class Test extends Component {
    render() {
        return (
            <div>
                <p>{this.props.counter}</p>
                <button onClick={this.props.add}>add</button>
                <button onClick={this.props.desc}>desc</button>
                <button onClick={this.props.addAsync}>addAsync</button>
                <button onClick={this.props.descAsync}>descAsync</button>
            </div>
        );
    }
}