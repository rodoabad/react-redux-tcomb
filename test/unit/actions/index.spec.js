import { expect } from 'code';
import * as comments from '../../../src/actions';

describe('Given the comments actions', () => {

  it('should add a new comment', () => {

    const commentToAdd = {
      author: 'Rodo Abad',
      text: 'This is a comment'
    };

    const expectedNewComment = {
      type: 'ADD_COMMENT',
      author: 'Rodo Abad',
      id: 0,
      text: 'This is a comment'
    };

    expect(comments.addComment(commentToAdd)).to.be.an.object().and.deep.equal(expectedNewComment);

  });

  it('should add another comment', () => {

    const commentToAdd = {
      author: 'Rodo Abad',
      text: 'This is another comment'
    };

    const expectedNewComment = {
      type: 'ADD_COMMENT',
      author: 'Rodo Abad',
      id: 1,
      text: 'This is another comment'
    };

    expect(comments.addComment(commentToAdd)).to.be.an.object().and.deep.equal(expectedNewComment);

  });

  it('should require a comment id in order to delete a comment', () => {

    const commentToDelete = {
      id: 1
    };

    const expectedDeleteCommentAction = {
      type: 'DELETE_COMMENT',
      id: 1
    };

    expect(comments.deleteComment(commentToDelete)).to.be.an.object().and.deep.equal(expectedDeleteCommentAction);

  });

});
