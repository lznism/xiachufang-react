import { SET_CATEGORY_ITEM_LIST, SET_CATEGORY_ITEM_TITLE } from './actionTypes';
import http from '../../utils/http';

export const setCategoryItemList = (list) => ({
    type: SET_CATEGORY_ITEM_LIST,
    list
});

export const setCategoryItemTitle = (title) => ({
    type: SET_CATEGORY_ITEM_TITLE,
    title
});

export const getCategoryItem = ({id, type=''}) => dispatch => {
    dispatch(setCategoryItemList([]));
    http.get(`/category-item-list?id=${id}&type=${type}`).then(res => {
        if (res.code === 0) {
            dispatch(setCategoryItemList(res.data));
        }
    });
}