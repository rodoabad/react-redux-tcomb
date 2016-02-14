import React from 'react';

const Comment = ({
  author,
  children
  }) => (

  <div className="comment">
    <h2
      className="comment-author"
      title={author}
    >
      {author}
    </h2>
    {children}
  </div>
);

Comment.displayName = 'Comment';

Comment.propTypes = {
  author: React.PropTypes.string.isRequired,
  children: React.PropTypes.string.isRequired
};

export default Comment;
