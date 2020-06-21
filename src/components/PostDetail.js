import React from 'react'

export const PostDetail = ({ post }) => {
    console.log(post)
    return (
        <>
            <div>
                A Post Detail
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
