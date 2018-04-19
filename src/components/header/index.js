import React from 'react';
import { withRouter } from 'react-router-dom';
import './style.scss';
import logoUrl from '../../assets/images/logo.png';

@withRouter
export default class Header extends React.Component {
    back = () => {
        this.props.history.go(-1);
    }
    render() {
        return (
            <header className="xcf-header">
                <i className="iconfont icon-zuojiantou" onClick={this.back}></i>
                <img src={logoUrl} alt="logo"/>
            </header>
        );
    }
}