export function addComment(comment) {

  return {
    type: 'ADD_COMMENT',
    author: comment.author,
    id: comment.id,
    text: comment.text
  };

}

export function deleteComment(comment) {

  return {
    type: 'DELETE_COMMENT',
    id: comment.id
  };

}