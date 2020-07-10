import React, { useEffect, useContext} from 'react';

const CommentDetail = ({ comment }) => {
    return(
        <p className="commentItem" key={comment.id}>
            <small> {comment.email} says:</small>
            <h5>
                {comment.body}
            </h5>
        </p>
    )
}

export default CommentDetail;