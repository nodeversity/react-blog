import React, { useReducer, /*dispatch*/ } from 'react';
//Import the postReducer for use with the useReducer() hook to pull out its 'state' and 'dispatch' props
import postReducer from '../reducers/postReducer';
import initialPostState from '../reducers/postReducer';

import PostApi from '../../api/PostApi.js';

import {
	NEW_POST, NEW_POST_FAILED, GET_POST, GET_POST_FAILED, UPDATE_POST,
	UPDATE_POST_FAILED, GET_ALL_POSTS, GET_ALL_POSTS_FAILED, DELETE_POST,
	DELETE_POST_FAILED
} from './types/posts';

/**
	Each action CREATOR/function handles the dispatch of payload/data for two action TYPES/scenarios: when the intended action succeeds or fails.
*/

//const [state, dispatch] = useReducer(postReducer, initialPostState)

export const createNewPost =(new_post_obj) => {
	const [state, dispatch] = useReducer(postReducer, initialPostState)
	PostApi.newPost(new_post_obj)
		.then(response => {
			dispatch({
				type: NEW_POST,
				payload: response.data
			})
		})
		.catch(err => {
			dispatch({
				type: NEW_POST_FAILED,
				payload: err
			})
		})
}

export const getPostById = (post_id) => {
	const [state, dispatch] = useReducer(postReducer, initialPostState)
	PostApi.getPost(post_id)
		.then(response => {
			dispatch({
				type: GET_POST,
				payload: response.data
			})
		})
		.catch(err => {
			dispatch({
				type: GET_POST_FAILED,
				payload: err
			})
		})
}

export const updatePost = (post_id, updated_post_obj) => {
	PostApi.updatePost(post_id, updated_post_obj)
		.then(response => {
			dispatch({
				type: UPDATE_POST,
				payload: response.data
			})
		})
		.catch(err => {
			dispatch({
				type: UPDATE_POST_FAILED,
				payload: err
			})
		})
}

export const getAllPosts = () => {
	const [state, dispatch] = useReducer(postReducer, initialPostState)
	PostApi.getPosts()
		.then(response => {
			dispatch({
				type: GET_ALL_POSTS,
				payload: response.data
			})
		})
		.catch(err => {
			dispatch({
				type: GET_ALL_POSTS_FAILED,
				payload: err
			})
		})
}

export const deletePostById = (post_id) => dispatch =>  {
	PostApi.deletePost(post_id)
		.then(response => {
			dispatch({
				type: DELETE_POST,
				payload: response.data
			})
		})
		.catch(err => {
			dispatch({
				type: DELETE_POST_FAILED,
				payload: err
			})
		})
}

