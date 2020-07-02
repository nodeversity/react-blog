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
        case NEW_POST:
            return {
                ...state,
                post: action.payload.post,
                post_list: [action.payload, ...state.post_list]
            }
        case NEW_POST_FAILED:
            return {
                ...state, 
                post_error_msg: action.payload
            }
        case GET_POST:
            return {
                ...state, 
                post: action.payload
            }
        case GET_POST_FAILED:
            return {
                ...state,
                post_error_msg: action.payload
            }
        case UPDATE_POST:
            return {
                ...state,
                post_list: action.payload,
                post: action.payload
            }
        case UPDATE_POST_FAILED:
            return {
                ...state,
                post_error_msg: action.paylod
            }
        case GET_ALL_POSTS:
            return {
                ...state,
                post_list: action.payload,
                post_error_msg: null,
            }
        case GET_ALL_POSTS_FAILED:
            return {
                ...state, 
                post_list: [],
                post_error_msg: action.payload
            }
        case DELETE_POST:
            return {
                ...state,
                post_list: action.payload
            }
        case DELETE_POST_FAILED:
            return {
                ...state,
                post_error_msg: action.payload
            }
        default:
            return state
    }
}


export default postReducer;