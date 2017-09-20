import { ADD_POST, REMOVE_POST, FETCH_POSTS } from '../actions';
import { combineReducers } from 'redux';

const postStore = ( state = { posts: [] }, action ) => { 
    switch (action.type) {
        case ADD_POST:
            return {
                ...state, 
            }
        case REMOVE_POST:
            return {
                ...state,
            }
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        default:
            return state
    }
};

export default combineReducers({
  postStore
});