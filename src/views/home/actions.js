import { SET_RANK_MENU, SET_POP_MENU, SET_RISING_MENU } from './actionTypes';
import http from '../../utils/http';

export const setRankMenu = (rankMenu) => ({
    type: SET_RANK_MENU,
    rankMenu
});

export const setPopMenu = (popMenu) => ({
    type: SET_POP_MENU,
    popMenu
});

export const setRisingMenu = (risingMenu) => ({
    type: SET_RISING_MENU,
    risingMenu
});

export const getHome = () => dispatch => {
    http.get('/home').then(res => {
        if (res.code === 0) {
            dispatch(setRankMenu({
                head: res.data.rankHead,
                body: res.data.rankBody
            }));
            dispatch(setPopMenu({
                head: res.data.popHead,
                body: res.data.popBody
            }));
            dispatch(setRisingMenu({
                head: res.data.newMenuHead,
                body: res.data.newMenuBody
            }));
        }
    });
}