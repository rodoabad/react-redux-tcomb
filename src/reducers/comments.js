export function comment(
  state,
  action
) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return {
        author: action.author,
        id: action.id,
        text: action.text
      };
    default:
      return state;
  }
}

export function comments(
  state = [],
  action
) {

  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        comment(undefined, action)
      ];
    case 'DELETE_COMMENT':
      return state.filter(
        comment => {
          if (comment.id !== action.id) {
            return comment;
          }
        });
    default:
      return state;
  }
}
