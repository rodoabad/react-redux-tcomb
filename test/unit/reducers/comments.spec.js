import { expect } from 'code';
import deepFreeze from 'deep-freeze';

import { comments as commentsReducer } from '../../../src/reducers/comments';

describe(`Given the comments reducer`, () => {

  context(`when passing invalid arguments`, () => {

    let initialState;

    beforeEach(() => {

      initialState = [];

      deepFreeze(initialState);

    });

    it(`should return the initial state if you pass an undefined state`, () => {

      expect(
        commentsReducer(undefined, {})
      )
        .to
        .deep
        .equal(initialState);

    });

    it(`should return the initial state if you pass an invalid action type`, () => {

      expect(
        commentsReducer(undefined, {
          type: 'RANDOM_ACTION_TYPE'
        })
      )
        .to
        .deep
        .equal(initialState);

    });

  });

  context(`when adding a comment`, () => {

    it(`should add the comment if the right action type is passed`, () => {

      const initialState = [];

      const addCommentAction = {
        type: 'ADD_COMMENT',
        author: 'Rodo Abad',
        id: 0,
        text: 'This is a comment'
      };

      const expectedState = [
        {
          author: 'Rodo Abad',
          id: 0,
          text: 'This is a comment'
        }
      ];

      deepFreeze(initialState);
      deepFreeze(addCommentAction);

      expect(
        commentsReducer(initialState, addCommentAction)
      )
        .to
        .deep
        .equal(expectedState);

    });

  });

  context(`when deleting a comment`, () => {

    it(`should delete the comment if the right action is passed`, () => {

      const initialState = [
        {
          author: 'Rodo Abad',
          id: 0,
          text: 'This is a comment'
        }
      ];

      const deleteCommentAction = {
        type: 'DELETE_COMMENT',
        id: 0
      };

      const expectedState = [];

      expect(
        commentsReducer(initialState, deleteCommentAction)
      )
        .to
        .deep
        .equal(expectedState);

    });

  });

});
