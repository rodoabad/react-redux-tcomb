import React from 'react';

import CommentList from './CommentList';
import CommentForm from './CommentForm';

class CommentBox extends React.Component {

  static displayName = 'CommentBox';

  static propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  };

  render() {
    return (
      <div className="comment-box">
        <h1>{'Comments'}</h1>
        <CommentList data={this.props.data}/>
        <CommentForm/>
      </div>
    );
  }

}

export default CommentBox;
