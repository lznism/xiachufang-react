import { SET_CATEGORY_ITEM_LIST, SET_CATEGORY_ITEM_TITLE } from './actionTypes';

const initState = {
    categoryItemList: [],
    categoryItemTitle: ''
};
const reducer = (state = initState, action) => {
    switch(action.type) {
        case SET_CATEGORY_ITEM_LIST:
            return {...state, categoryItemList: action.list};
        case SET_CATEGORY_ITEM_TITLE:
            return {...state, categoryItemTitle: action.title};
        default:
            return state;
    }
}
export default reducer;