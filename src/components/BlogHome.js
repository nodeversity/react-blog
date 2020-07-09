import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../contextData/actions/postActions';
import { PostDetail } from './blog/PostDetail'


import { AppContext } from '../contextData';

export const BlogHome = () => {
    const { posts } = useContext(AppContext)

    console.log(posts);

    useEffect(() => {
        getAllPosts();
    }, [])
    
    return (
        <>
             <div>
                <h3> Blog Home</h3>
                <ul className="list">
                { posts.map(post => (
                       <Link to={`/${post.id}`} key={post.id}> 
                        {post.title}
                       </Link>
                    )
                    )}
                </ul>
            </div>
        </>
        
    )
}
