import React, { useContext } from 'react';
import { PostDetail } from './PostDetail'

import { GlobalContext } from '../contextData';

export const BlogHome = () => {
    const { blog_posts } = useContext(GlobalContext)

    console.log(blog_posts);
    
    return (
        <>
             <div>
                <h3> Blog Home</h3>
                <ul className="list">
                    { blog_posts.map(post => (
                        <PostDetail post={post} key={post.id} />
                    )
                    )}
                </ul>
            </div>
        </>
        
    )
}
