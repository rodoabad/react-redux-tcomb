import { expect } from 'code';
import * as comments from '../../../src/actions/comments';

describe(`Given the comments actions`, () => {

  it(`should add a new comment`, () => {

    const expectedNewComment = {
      type: 'ADD_COMMENT',
      id: 0,
      comment: 'New comment'
    };

    expect(comments.addComment(`New comment`))
      .to
      .deep
      .equal(expectedNewComment);

  });

});
