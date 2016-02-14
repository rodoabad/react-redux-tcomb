import { ADD_COMMENT, DELETE_COMMENT } from '../constants/ActionTypes';

const comments = (state = [], action) => {

  switch (action.type) {
    case ADD_COMMENT:
      return [
        ...state,
        {
          author: action.author,
          id: action.id,
          text: action.text
        }

      ];
    case DELETE_COMMENT:
      return state.filter(comment => comment.id !== action.id);
    default:
      return state;
  }
};

export default comments;
