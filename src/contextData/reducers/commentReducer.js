import {
    NEW_COMMENT, NEW_COMMENT_FAILED, GET_COMMENT, GET_COMMENT_FAILED, GET_COMMENTS_FOR_POST, 
    GET_COMMENTS_FOR_POST_FAILED, DELETE_COMMENT, DELETE_COMMENT_FAILED, UPDATE_COMMENT, UPDATE_COMMENT_FAILED
} from '../actions/types/comments';
import { DELETE_POST } from '../actions/types/posts';

const initialCommentState = {
    comment_list: [],
    comment: {},
    comment_error_msg: {}
}

const commentReducer = (state=initialCommentState, action) => {
    switch(action.type){
        case NEW_COMMENT:
            return {
                ...state,
                comment: action.payload.comment,
                comment_list: [action.payload, ...state.comment_list]
            }
        case NEW_COMMENT_FAILED:
            return {
                ...state,
                comment_error_msg: action.payload
            }
        case GET_COMMENT:
            return {
                ...state,
                comment: action.payload
            }
        case GET_COMMENT_FAILED:
            return {
                ...state,
                comment_error_msg: action.payload
            }
        case GET_COMMENTS_FOR_POST:
            return {
                ...state,
                comment_list: action.payload
            }
        case GET_COMMENTS_FOR_POST_FAILED:
            return {
                ...state,
                comment_error_msg: action.payload
            }
        case DELETE_COMMENT:
            return {
                ...state,
                comment_list: action.payload
            }
        case DELETE_COMMENT_FAILED:
            return {
                ...state,
                comment_error_msg: action.payload
            }
        case UPDATE_COMMENT:
            return {
                ...state,
                comment_list: action.payload
            }
        case UPDATE_COMMENT_FAILED:
            return {
                ...state,
                comment_error_msg: action.payload
            }
        default:
            return state
    }
}


export default commentReducer;