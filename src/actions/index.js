import * as types from '../constants/ActionTypes';

let nextCommentId = 0;

export function addComment(comment) {

  return {
    type: types.ADD_COMMENT,
    author: comment.author,
    id: nextCommentId++,
    text: comment.text
  };

}

export function deleteComment(comment) {

  return {
    type: types.DELETE_COMMENT,
    id: comment.id
  };

}
