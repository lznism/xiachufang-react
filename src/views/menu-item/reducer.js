import { SET_MENU_DETAIL } from './actionTypes';

const initState = {
    headImgUrl: '',
    title: '',
    rate: '',
    doneNum: '',
    description: '',
    author: '',
    avatar: '',
    materials: [],
    steps: []
};
const reducer = (state = initState, action) => {
    switch(action.type) {
        case SET_MENU_DETAIL:
            return action.detail;
        default:
            return state;
    }
}

export default reducer;