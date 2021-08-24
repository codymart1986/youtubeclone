import React from 'react';
import Comment from '../Comment/Comment';

const Comments = ({comments}) => {
    const listOfComments = comments.map((comment, id) => <Comment key={id} comment={comment} />)

    return(
        <div className="comments">
            {listOfComments}
        </div>
    )
}

export default Comments;