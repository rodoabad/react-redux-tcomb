import React from 'react';

import Comment from './Comment';

class CommentList extends React.Component {

  static displayName = 'CommentList';

  static propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  };

  render() {

    const commentNodes = this.props.data.map(
      comment => (
        <Comment
          author={comment.author}
          key={comment.id}
        >
          {comment.text}
        </Comment>
      )
    );

    return (
      <div className="comment-list">
        {commentNodes}
      </div>
    );

  }

}

export default CommentList;
