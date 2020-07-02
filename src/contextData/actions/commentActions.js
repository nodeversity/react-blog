import React, { useReducer, useContext } from 'react';
import commentReducer from '../reducers/commentReducer'

import {
    NEW_COMMENT, NEW_COMMENT_FAILED, GET_COMMENT, ,GET_COMMENT_FAILED, GET_COMMENTS_FOR_POST, 
    GET_COMMENTS_FOR_POST_FAILED, DELETE_COMMENT, DELETE_COMMENT_FAILED, UPDATE_COMMENT, UPDATE_COMMENT_FAILED
} from './types/comments';


const [state, dispatch] = useReducer(commentReducer, initialCommentState)

export const newComment = (new_comment_obj) => {

}