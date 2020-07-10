import React, {useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import PostApi from '../../api/PostApi';
import {
	GET_POST, GET_POST_FAILED, DELETE_POST,
	DELETE_POST_FAILED
} from '../../contextData/actions/types/posts';

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

    useEffect(() => {
        getPostById();
    }, [state.post.id])

    console.log(state.post);

    return (
        <>
            <div>
                <h3> 
                {state.post.id}: { state.post.title }
                </h3>
                
                <div>
                    {state.post.body}
                </div>
            </div>
        </>
    )
}

export default PostDetail;