import React from 'react';
import { Link } from 'react-router-dom';

const homeCategoryInfo = [{
    title: '家常菜',
    id: 40076
}, {
    title: '快手菜',
    id: 40077
}, {
    title: '下饭菜',
    id: 40078
}, {
    title: '早餐',
    id: 40071
}, {
    title: '肉',
    id: 1012713
}, {
    title: '鱼',
    id: 957
}];

const handleClick = (title) => {
    console.log(title);
};

const Category = () => (
    <section className="category">
        <div className="row">
            {
                homeCategoryInfo.slice(0, 3).map(item => (
                    <Link
                        className="category-item"
                        to={`/category/${item.id}`}
                        onClick={handleClick.bind(this, item.title)}
                        key={item.id}>
                        <p>{item.title}</p>
                    </Link>
                ))
            }
        </div>
        <div className="row">
            {
                homeCategoryInfo.slice(-3).map(item => (
                    <Link
                        className="category-item"
                        to={`/category/${item.id}`}
                        onClick={handleClick.bind(this, item.title)}
                        key={item.id}>
                        <p>{item.title}</p>
                    </Link>
                ))
            }
        </div>
        <Link className="all-category" to="/category">全部菜谱分类</Link>
    </section>
);

export default Category;