import { ADD_POST, REMOVE_POST } from '../actions';
import { combineReducers } from 'redux';

const post = ( state = {msg: null}, action ) => { 
    switch (action.type) {
        case ADD_POST:
            return {
                ...state, 
                msg: action.msg
            }
        case REMOVE_POST:
            return {
                ...state,
                msg: action.msg
            }
        default:
            return state
    }
};

export default combineReducers({
  post
});