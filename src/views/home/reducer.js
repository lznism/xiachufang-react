import { SET_RANK_MENU, SET_POP_MENU, SET_RISING_MENU } from './actionTypes';

const initState = {
    rankMenu: {
        head: [],
        body: []
    },
    popMenu: {
        head: [],
        body: []
    },
    risingMenu: {
        head: [],
        body: []
    }
};

const homeReducer = (state = initState, action) => {
    switch(action.type) {
        case SET_RANK_MENU:
            return {...state, rankMenu: action.rankMenu};
        case SET_POP_MENU:
            return {...state, popMenu: action.popMenu};
        case SET_RISING_MENU:
            return {...state, risingMenu: action.risingMenu};
        default:
            return state;
    }
};

export default homeReducer;