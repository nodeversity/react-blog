import React, { useReducer, useContext, dispatch  } from 'react';
import CommentApi from '../../api/CommentApi';
import commentReducer from '../reducers/commentReducer'

import {
    NEW_COMMENT, NEW_COMMENT_FAILED, GET_COMMENT, ,GET_COMMENT_FAILED, GET_COMMENTS_FOR_POST, 
    GET_COMMENTS_FOR_POST_FAILED, DELETE_COMMENT, DELETE_COMMENT_FAILED, UPDATE_COMMENT, UPDATE_COMMENT_FAILED
} from './types/comments';

import { initialCommentState } from '../reducers/commentReducer';

//const [state, dispatch] = useReducer(commentReducer, initialCommentState)

export const newComment = (new_comment_obj) => {
    CommentApi.newComment(new_comment_obj)
        .then(response => {
            dispatch({
                type: NEW_COMMENT,
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: NEW_COMMENT_FAILED,
                payload: err
            })
        })
}

export const getComment = (comment_id) => {
    CommentApi.getComment(comment_id)
        .then(response => {
            dispatch({
                type: GET_COMMENT,
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_COMMENT_FAILED,
                payload: err
            })
        })
}

export const getCommentsForPost = (post_id) => {
    CommentApi.getCommentsForPost(post_id)
        .then(response => {
            dispatch({
                type: GET_COMMENTS_FOR_POST ,
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_COMMENTS_FOR_POST_FAILED,
                payload: err
            })
        })
}

export const deleteComment = (comment_id) => {
    CommentApi.deleteComment(comment_id)
        .then(response => {
            dispatch({
                type: DELETE_COMMENT,
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: DELETE_COMMENT_FAILED,
                payload: err
            })
        })
}

export const updateComment = (comment_id, updated_comment_obj) => {
    CommentApi.updateComment(comment_id, updated_comment_obj)
        .then(response => {
            dispatch({
                type: UPDATE_COMMENT,
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: UPDATE_COMMENT_FAILED,
                payload: err
            })
        })
}
