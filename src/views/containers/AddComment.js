import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../action-creators';

const AddComment = ({ actions }) => {

  let author,
    text;

  return (
    <div>
      {'Name: '}
      <input
        className="author"
        ref={node => author = node}
        type="text"
      />
      <br/>
      {'Comment: '}
      <input
        className="text"
        ref={node => text = node}
        type="text"
      />
      <br/>
      <button
        onClick={() => {
          actions.addComment({
            author: author.value,
            text: text.value
          });
        }}
      >
        {'Add Comment'}
      </button>
    </div>
  );
};

AddComment.displayName = 'AddComment';
AddComment.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

function mergeProps(state, actions) {

  return {
    ...state,
    actions: {
      ...actions
    }
  };

}

export default connect(mapStateToProps, actionCreators, mergeProps)(AddComment);
