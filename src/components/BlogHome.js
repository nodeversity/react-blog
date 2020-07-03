import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PostDetail } from './blog/PostDetail'

import { AppContext } from '../contextData';

export const BlogHome = () => {
    const { posts } = useContext(AppContext)

    console.log(posts);
    
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
