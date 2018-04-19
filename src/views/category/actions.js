import { SET_CATEGORY } from './actionTypes';
import http from '../../utils/http';

export const setCategory = (category) => ({
    type: SET_CATEGORY,
    category
});

export const getCategory = () => dispatch => {
    http.get('/category').then(res => {
        if (res.code === 0) {
            dispatch(setCategory(res.data));
        }
    });
}