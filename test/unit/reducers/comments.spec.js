import { expect } from 'code';

import { comments } from '../../../src/reducers/comments';

describe(`Given the comments reducer`, () => {

  it(`should return the initial state`, () => {

    expect(
      comments(undefined, {})
    )
      .to
      .deep
      .equal([]);

  });

});
