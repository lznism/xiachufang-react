import { SET_SEARCH_RESULT } from './actionTypes';
import http from '../../utils/http';
import history from '../../utils/history';

export const setSearchResult = (result) => ({
    type: SET_SEARCH_RESULT,
    result
});

export const getSearch = (keyword) => dispatch => {
    http.get(`/search?keyword=${keyword}`).then(res => {
        if (res.code === 0) {
            if (res.isRedirect) {
                let url = res.redirectUrl.match(/\/category\/\d+/)[0];
                history.push(url);
            } else {
                dispatch(setSearchResult(res.data));
                history.push(`/search?keyword=${keyword}`);
            }
        }
    });
};