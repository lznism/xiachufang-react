import * as types from './action-types';

export function add() {
    return {
        type: types.ADD
    };
}

export function desc() {
    return {
        type: types.DESC
    };
}

export function addAsync() {
    return dispatch => {
        setTimeout(() => {
            dispatch(add());
        }, 1000);
    }
}

export function descAsync() {
    return dispatch => {
        setTimeout(() => {
            dispatch(desc());
        }, 1000);
    };
}