import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import CommentList from './../components/CommentList';

const CommentBox = ({ comments }) => (
  <div className="comment-box">
    <h1>{'Comments'}</h1>
    <CommentList comments={comments}/>
  </div>
);

CommentBox.displayName = 'CommentBox';
CommentBox.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired
};

function mapStateToProps(state) {

  return {
    comments: state.comments
  };

}

export default connect(
  mapStateToProps
)(CommentBox);
