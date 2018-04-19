import React from 'react';
import { connect } from 'react-redux';
import './style.scss';
import XcfHeader from '../../../components/header';
import { getRankDetail } from '../actions';
import { withRouter } from 'react-router-dom';

@withRouter
@connect(
    state => ({
        title: state.rankDetail.title,
        explore: state.rankDetail.explore
    }),
    { getRankDetail }
)
export default class RankDetail extends React.Component {
    componentDidMount() {
        let type = this.props.match.params.type;
        this.props.getRankDetail(type);
    }
    jump = (url) => {
        this.props.history.push(url);
    }
    render() {
        const {title, explore} = this.props;
        return (
            <div>
                <XcfHeader />
                <div className="rank-detail">
                    <h1 className="title">{title}</h1>
                    <ul className="list">
                        {
                            explore.map((item, index) => (
                                <li key={index} onClick={this.jump.bind(this, item.href)}>
                                    <img src={item.imgUrl} alt="menu-pic" className="menu-pic"/>
                                    <div className="wrapper">
                                        <div className="info">
                                            <p className="title">{item.menuName}</p>
                                            <p className="author">{item.author}</p>
                                            <p className="doneNum">{item.doneNum}人做过</p>
                                        </div>
                                        <img src={item.authorImg} alt="avatar" className="avatar"/>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}