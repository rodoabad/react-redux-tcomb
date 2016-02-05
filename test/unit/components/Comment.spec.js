import { expect } from 'code';
import Chance from 'chance';
import freeze from 'deep-freeze';

import * as TestUtils from '../../utils';
import Comment from '../../../src/components/Comment';

describe(`Given the Comment component`, () => {

  let chance = new Chance(),
    commentEl,
    expectedAuthor,
    props;

  function getPropTypes() {

    return freeze({
      author: expectedAuthor
    });

  }

  beforeEach(`Setup`, () => {

    expectedAuthor = chance.string();

    props = getPropTypes();

    commentEl = TestUtils.shallowRenderElement(Comment, props, 'random');

  });

  it(`should have a div with a className of 'comment'`, () => {

    expect(commentEl.type)
      .to
      .equal('div');

    expect(commentEl.props.className)
      .to
      .equal('comment');

  });

  it(`should contain an author`, () => {

    const authorEl = TestUtils.findByClassName(commentEl, 'comment-author');

    expect(authorEl.type)
      .to
      .equal('h2');

    expect(authorEl.props.title)
      .to
      .equal(expectedAuthor);

    expect(authorEl.props.children)
      .to
      .equal(expectedAuthor);

  });

});
