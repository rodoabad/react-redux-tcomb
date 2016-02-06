export function addComment(comment) {

  return {
    type: 'ADD_COMMENT',
    author: comment.author,
    id: comment.id,
    text: comment.text
  };

}

