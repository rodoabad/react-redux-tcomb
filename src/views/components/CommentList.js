import React, { PropTypes } from 'react';

import Comment from './Comment';

const CommentList = ({ comments }) => (
  <div className="comment-list">
    {comments.map(comment => (
      <Comment
        author={comment.author}
        key={comment.id}
      >
        {comment.text}
      </Comment>
    ))}
  </div>
);

CommentList.displayName = 'CommentList';
CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CommentList;
