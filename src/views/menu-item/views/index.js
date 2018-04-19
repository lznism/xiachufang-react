import React from 'react';
import { connect } from 'react-redux';
import XcfHeader from '../../../components/header';
import { getMenuDetail } from '../actions';
import './style.scss';

@connect(
    state => ({detail: state.menuItem}),
    { getMenuDetail }
)
export default class MenuItem extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.getMenuDetail(id);
    }
    render() {
        const {detail} = this.props;
        return (
            <div>
                <XcfHeader />
                <div className="head-img">
                    <img src={detail.headImgUrl} alt="head img"/>
                </div>
                <div className="title">
                    <h1>{detail.title}</h1>
                    <p>
                        <span>{detail.rate}综合评分</span>
                        <span>{detail.doneNum}人做过</span>
                    </p>
                </div>
                <div className="description">{detail.description}</div>
                <div className="userinfo">
                    <p className="author">作者：{detail.author}</p>
                    <img src={detail.avatar} alt="avatar" className="avatar"/>
                </div>
                <table className="materials">
                    <tbody>
                        <tr>
                            <td colSpan="2">用料</td>
                        </tr>
                        {
                            detail.materials.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.ingredient}</td>
                                    <td>{item.weight}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <ul className="steps">
                    {
                        detail.steps.map((item, index) => (
                            <li key={index}>
                                <p className="step-num">{item.subTitle}</p>
                                {item.stepImg ? <img src={item.stepImg} alt=""/> : null}
                                <p className="desc">{item.description}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}