import React from 'react';

const Comment = ({ comment }) => {
    if(!comment) return <div></div>

    return (
        <div className="comment">
            <p>{comment.body}</p>
        </div>
    )
}

export default Comment;