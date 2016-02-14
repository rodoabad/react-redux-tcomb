import { expect } from 'code';
import deepFreeze from 'deep-freeze';

import comments from '../../../src/reducers/comments';

describe(`Given the comments reducer`, () => {

  context(`when passing invalid arguments`, () => {

    let initialState;

    beforeEach(() => {

      initialState = [];

      deepFreeze(initialState);

    });

    it(`should return the initial state if you pass an undefined state`, () => {

      expect(comments(undefined, {})).to.be.an.array().and.deep.equal(initialState);

    });

    it(`should return the initial state if you pass an invalid action type`, () => {

      expect(comments(undefined, {
        type: 'RANDOM_ACTION_TYPE'
      })).to.be.an.array().deep.equal(initialState);

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

      expect(comments(initialState, addCommentAction)).to.be.an.array().deep.equal(expectedState);

    });

  });

  context(`when deleting a comment`, () => {

    it(`should delete the comment if the right action is passed`, () => {

      const initialState = [
        {
          author: 'Rodo Abad',
          id: 0,
          text: 'This is a comment'
        },
        {
          author: 'Rodo Abad',
          id: 1,
          text: 'This is another comment'
        }
      ];

      const deleteCommentAction = {
        type: 'DELETE_COMMENT',
        id: 0
      };

      const expectedState = [
        {
          author: 'Rodo Abad',
          id: 1,
          text: 'This is another comment'
        }
      ];

      expect(comments(initialState, deleteCommentAction)).to.be.an.array().deep.equal(expectedState);

    });

  });

});
