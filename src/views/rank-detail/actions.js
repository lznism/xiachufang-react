import { SET_RANK_DETAIL } from './actionTypes';
import http from '../../utils/http';

export const setRankDetail = (detail) => ({
    type: SET_RANK_DETAIL,
    detail
});

export const getRankDetail = (type) => dispatch => {
    http.get(`/explore/${type}`).then(res => {
        if (res.code === 0) {
            dispatch(setRankDetail(res.data));
        }
    });
};
