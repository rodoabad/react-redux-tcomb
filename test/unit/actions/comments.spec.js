import { expect } from 'code';
import * as comments from '../../../src/actions/comments';

describe(`Given the comments actions`, () => {

  it(`should add a new comment`, () => {

    const commentToAdd = {
      author: 'Rodo Abad',
      id: 1,
      text: 'This is a comment'
    };

    const expectedNewComment = {
      type: 'ADD_COMMENT',
      author: 'Rodo Abad',
      id: 1,
      text: 'This is a comment'
    };

    expect(comments.addComment(commentToAdd))
      .to
      .deep
      .equal(expectedNewComment);

  });

});
