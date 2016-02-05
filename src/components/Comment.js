import React from 'react';

class Comment extends React.Component {

  static displayName = 'Comment';

  static propTypes = {
    author: React.PropTypes.string.isRequired,
    children: React.PropTypes.string.isRequired
  };

  render() {

    return (
      <div className="comment">
        <h2
          className="comment-author"
          title={this.props.author}
        >
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );

  }

}

export default Comment;
