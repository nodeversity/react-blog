import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import PostApi from '../api/PostApi';
//import { getAllPosts } from '../contextData/actions/postActions';
import postReducer, { initialPostState } from '../contextData/reducers/postReducer';
import { PostDetail } from './blog/PostDetail'
import {
	GET_ALL_POSTS, GET_ALL_POSTS_FAILED, DELETE_POST,
	DELETE_POST_FAILED
} from '../contextData/actions/types/posts';

//import { AppContext } from '../contextData';

export const BlogHome = () => {
    //const { posts } = useContext(AppContext)
    const [state, dispatch] = useReducer(postReducer, initialPostState);

    const getAllPosts = () => {
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

    console.log(state.post_list);

    useEffect(() => {
        getAllPosts();
    }, [])
    
    return (
        <>
             <div>
                <h3> Blog Home</h3>
                <ul className="list">
                {state.post_list.map(post => (
                    <li key={post.id}>
                        <Link to={`/${post.id}`}> { post.title } </Link>
                    </li>
                ))}
                </ul>
            </div>
        </>
        
    )
}
