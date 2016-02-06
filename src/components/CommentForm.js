import React from 'react';

class CommentForm extends React.Component {

  static displayName = 'CommentForm';

  render() {

    return (
      <form className="comment-form">
        <input type="text"/>
      </form>
    );

  }

}

export default CommentForm;
