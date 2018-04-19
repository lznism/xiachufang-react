import { SET_RANK_DETAIL } from './actionTypes';

const initState = {
    title: '',
    explore: []
};
const reducer = (state = initState, action) => {
    switch(action.type) {
        case SET_RANK_DETAIL:
            return action.detail;
        default:
            return state;
    }
};

export default reducer;
