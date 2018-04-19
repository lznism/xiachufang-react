import { SET_MENU_DETAIL } from './actionTypes';
import http from '../../utils/http';

export const setMenuDetail = (detail) => ({
    type: SET_MENU_DETAIL,
    detail
});

export const getMenuDetail = (id) => dispatch => {
    http.get(`/detail/${id}`).then(res => {
        if (res.code === 0) {
            dispatch(setMenuDetail(res.data));
        }
    });
};