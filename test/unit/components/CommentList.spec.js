import { expect } from 'code';
import Chance from 'chance';
import freeze from 'deep-freeze';

import * as TestUtils from '../../utils';
import CommentList from '../../../src/components/CommentList';

describe(`Given the CommentList component`, () => {

  let chance = new Chance(),
    commentListEl,
    expectedAuthor,
    expectedId,
    expectedText,
    props;

  function getPropTypes() {

    return freeze({
      data: [
        {
          author: expectedAuthor,
          id: expectedId,
          text: expectedText
        }
      ]
    });

  }

  beforeEach(`Setup`, () => {

    expectedAuthor = chance.string();
    expectedId = chance.hash();
    expectedText = chance.string();

    props = getPropTypes();

    commentListEl = TestUtils.shallowRenderElement(CommentList, props, 'random');

  });

  it(`should have a div with a className of 'comment-list'`, () => {

    expect(commentListEl.type)
      .to
      .equal('div');

    expect(commentListEl.props.className)
      .to
      .equal('comment-list');

  });

  describe(`given the Comment sub component`, () => {

    let commentEl;

    beforeEach(() => {

      commentEl = TestUtils.findByType(commentListEl, 'Comment');

    });

    it(`should contain an ID`, () => {

      expect(commentEl.key)
        .to
        .equal(expectedId);

    });

    it(`should contain an author`, () => {

      expect(commentEl.props.author)
        .to
        .equal(expectedAuthor);

    });

    it(`should contain the comment`, () => {

      expect(commentEl.props.children)
        .to
        .equal(expectedText);

    });

  });

});
