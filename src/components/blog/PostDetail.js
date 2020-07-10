import React, {useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import PostApi from '../../api/PostApi';
import CommentApi from '../../api/CommentApi';
import CommentDetail from './CommentDetail'

import {
	GET_POST, GET_POST_FAILED, DELETE_POST,
	DELETE_POST_FAILED
} from '../../contextData/actions/types/posts';

import {
	GET_COMMENTS_FOR_POST, GET_COMMENTS_FOR_POST_FAILED
} from '../../contextData/actions/types/comments';

import postReducer, { initialPostState } from '../../contextData/reducers/postReducer';

const PostDetail = ({ post }) => {
    const [state, dispatch] = useReducer(postReducer, initialPostState);
    let { postUrl } = useParams();

    const getPostById = () => {
        PostApi.getPost(postUrl)
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

    const getCommentsForPost = () => {
        CommentApi.getCommentsForPost(postUrl)
            .then(response => {
                dispatch({
                    type: GET_COMMENTS_FOR_POST,
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

    useEffect(() => {

        getPostById();
        getCommentsForPost();

    }, [state.post.id])

    console.log(state.post);

    return (
        <>
            <div>
                <h2> 
                {state.post.id}: { state.post.title }
                </h2>
                
                <div>
                    {state.post.body}
                </div>
            </div>
            <div className="comment_list">
                {state.comment_list.map(comment => (
                    <CommentDetail comment={comment} />
                )
                )}
            </div>
        </>
    )
}

export default PostDetail;