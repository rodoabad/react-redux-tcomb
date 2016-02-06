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
    case 'DELETE_COMMENT':
      if (state.id !== action.id) {
        return state;
      }
      break;
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
        c => comment(c, action));
    default:
      return state;
  }
}
