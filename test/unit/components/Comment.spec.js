import { expect } from 'code';
import Chance from 'chance';
import deepFreeze from 'deep-freeze';

import * as TestUtils from '../../utils';
import Comment from '../../../src/views/components/Comment';

describe('Given the Comment component', () => {

  let chance = new Chance(),
    commentEl,
    expectedAuthor,
    props;

  function getPropTypes() {

    return deepFreeze({
      author: expectedAuthor
    });

  }

  beforeEach('Setup', () => {

    expectedAuthor = chance.string();

    props = getPropTypes();

    commentEl = TestUtils.shallowRenderElement(Comment, props, 'random');

  });

  it('should have a div with a className of "comment"', () => {

    expect(commentEl.type).equal('div');

    expect(commentEl.props.className).equal('comment');

  });

  it('should contain an author', () => {

    const authorEl = TestUtils.findByClassName(commentEl, 'comment-author');

    expect(authorEl.type).equal('h2');

    expect(authorEl.props.title).equal(expectedAuthor);

    expect(authorEl.props.children).equal(expectedAuthor);

  });

});
