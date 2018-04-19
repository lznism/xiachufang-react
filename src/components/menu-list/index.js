import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

function MenuList({list}) {
    return (
        <div className="list">
            {
                list.map((item, index) => (
                    <Link
                        to={item.href}
                        className="list-item"
                        key={index}>
                        <img src={item.imgUrl} alt="menu"/>
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
    )
}

MenuList.propType = {
    list: PropTypes.array.isRequired
};

export default MenuList;