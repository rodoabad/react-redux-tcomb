import { expect } from 'code';

import { comments } from '../../../src/reducers/comments';

describe(`Given the comments reducer`, () => {

  context(`when passing invalid arguments`, () => {

    it(`should return the initial state if you pass an undefined state`, () => {

      expect(
        comments(undefined, {})
      )
        .to
        .deep
        .equal([]);

    });

    it(`should return the initial state if you pass an invalid action type`, () => {

      expect(
        comments(undefined, {
          type: 'RANDOM_ACTION_TYPE'
        })
      )
        .to
        .deep
        .equal([]);

    });

  });

});
