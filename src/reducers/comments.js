import { ADD_COMMENT, DELETE_COMMENT } from '../constants/ActionTypes';

function addComment(comments, action) {

  return [
    ...comments,
    {
      author: action.author,
      id: action.id,
      text: action.text
    }
  ];

}

function deleteComment(comments, action) {

  return comments.filter(comment => comment.id !== action.id);

}

function comments(comments = [], action) {

  const actionTypes = {
    [ ADD_COMMENT ]: addComment,
    [ DELETE_COMMENT ]: deleteComment
  };

  const reducer = actionTypes[action.type];

  return reducer
    ? reducer(comments, action)
    : comments;

}

export default comments;
