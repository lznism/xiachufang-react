import React from 'react';
import Category from './category';
import Recommend from './recommend';
import './style.scss';
import HomeHeader from './header';

export default () => (
    <div id="home">
        <HomeHeader />
        <Category />
        <Recommend />
    </div>
);