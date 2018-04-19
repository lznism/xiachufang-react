import { SET_SEARCH_RESULT } from './actionTypes';

const reducer = (state = [], action) => {
    switch (action.type) {
        case SET_SEARCH_RESULT:
            return action.result;
        default:
            return state;
    }
};

export default reducer;