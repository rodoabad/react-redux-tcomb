let initialId = 0;

export function addComment(comment) {

  return {
    type: 'ADD_COMMENT',
    id: initialId++,
    comment
  };

}

