import { expect } from 'code';
import Chance from 'chance';
import freeze from 'deep-freeze';

import * as TestUtils from '../../utils';
import CommentBox from '../../../src/components/CommentBox';

describe(`Given the CommentBox component`, () => {

  let chance = new Chance(),
    commentBoxEl,
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
    expectedId = chance.string();
    expectedText = chance.string();

    props = getPropTypes();

    commentBoxEl = TestUtils.shallowRenderElement(CommentBox, props, 'random');

  });

  it(`should have a div with a className of 'comment-box'`, () => {

    expect(commentBoxEl.type)
      .to
      .equal('div');
    expect(commentBoxEl.props.className)
      .to
      .equal('comment-box');

  });

  it(`should have a header`, () => {

    const headerEl = TestUtils.findByType(commentBoxEl, 'h1');

    expect(headerEl.type)
      .to
      .equal('h1');
    expect(headerEl.props.children)
      .to
      .equal('Comments');

  });

  describe(`given the CommentList sub component`, () => {

    let commentListEl;

    beforeEach(() => {

      commentListEl = TestUtils.findByType(commentBoxEl, 'CommentList');

    });

    it(`should have a data prop that accepts a list of comments`, () => {

      expect(commentListEl.props.data)
        .to
        .deep
        .equal(props.data);

    });

  });

});
