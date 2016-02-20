import React from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../action-creators';

const AddComment = ({ dispatch }) => {

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
          dispatch(addComment({
            author: author.value,
            text: text.value
          }));
        }}
      >
        {'Add Comment'}
      </button>
    </div>
  );
};

AddComment.displayName = 'AddComment';

export default connect()(AddComment);
