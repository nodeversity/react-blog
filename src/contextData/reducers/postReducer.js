import {
	NEW_POST, NEW_POST_FAILED, GET_POST, GET_POST_FAILED, UPDATE_POST,
	UPDATE_POST_FAILED, GET_ALL_POSTS, GET_ALL_POSTS_FAILED, DELETE_POST,
	DELETE_POST_FAILED
} from '../actions/types/posts';

export const initialPostState = {
    post_list: [],
    post: {},
    post_error_msg: {}
}

const postReducer = (state=initialPostState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default postReducer;