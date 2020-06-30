import React, {useEffect, useContext} from 'react'

const PostDetail = ({ post }) => {
    console.log(post)
    return (
        <>
            <div>
                <h3> 
                    { post.title }
                </h3>
                {post.id}
                <div>
                    {post.body}
                </div>
            </div>
        </>
    )
}

export default PostDetail;