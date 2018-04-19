import { SET_RANK_MENU, SET_POP_MENU, SET_RISING_MENU } from './actionTypes';
import http from '../utils/http';

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

}