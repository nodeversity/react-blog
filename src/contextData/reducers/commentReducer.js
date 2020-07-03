import {
    NEW_COMMENT, NEW_COMMENT_FAILED, GET_COMMENT, GET_COMMENT_FAILED, GET_COMMENTS_FOR_POST, 
    GET_COMMENTS_FOR_POST_FAILED, DELETE_COMMENT, DELETE_COMMENT_FAILED, UPDATE_COMMENT, UPDATE_COMMENT_FAILED
} from './types/comments';
import { initialPostState } from './postReducer';


const initialCommentState = {
    comments: [],
    comment: {},
    comment_error_msg: {}
}

const commentReducer = (state=initialCommentState, action) => {
    switch(action.type){
        default:
            return state
    }
}


export default commentReducer;