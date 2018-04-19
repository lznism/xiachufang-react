import { SET_CATEGORY } from './actionTypes';

const categoryReducer = (state = [], action) => {
    switch(action.type) {
        case SET_CATEGORY:
            return action.category;
        default:
            return state;
    }
}

export default categoryReducer;