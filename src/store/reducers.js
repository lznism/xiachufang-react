import * as types from './action-types';
export const counter = (state = 0, action) => {
    switch(action.type) {
        case types.ADD:
            return state + 1;
        case types.DESC:
            return state - 1;
        default:
            return state;
    }
};