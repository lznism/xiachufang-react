import React from 'react';
import Category from './category';
import Recommend from './recommend';
import './style.scss';
import HomeHeader from './header';
import Search from '../../../components/search';

export default () => (
    <div id="home">
        <HomeHeader />
        <Search />
        <Category />
        <Recommend />
    </div>
);