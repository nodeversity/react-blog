import React, { useReducer } from 'react';
//Import the postReducer for use with the useReducer() hook to pull out its 'state' and 'dispatch' props
import postReducer from '../reducers/postReducer';
import PostApi from '../../api/CommentApi.js';

import {
	NEW_POST, NEW_POST_FAILED, GET_POST, GET_POST_FAILED, UPDATE_POST,
	UPDATE_POST_FAILED, GET_ALL_POSTS, GET_ALL_POSTS_FAILED, DELETE_POST,
	DELETE_POST_FAILED
} from './types/posts';

import initialPostState from '../reducers/postReducer';

/**
	Each action CREATOR/function handles the dispatch of payload/data for two action TYPES/scenarios: when the intended action succeeds or fails.
*/
const [state, dispatch] = useReducer(postReducer, initialPostState)

