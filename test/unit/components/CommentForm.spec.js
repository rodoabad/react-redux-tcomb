import { expect } from 'code';
import Chance from 'chance';
import deepFreeze from 'deep-freeze';

import * as TestUtils from '../../utils';
import CommentForm from '../../../src/components/CommentForm';

describe(`Given the CommentForm component`, () => {

  let chance = new Chance(),
    commentFormEl;

  function getPropTypes() {

  }

  beforeEach(`Setup`, () => {

    commentFormEl = TestUtils.shallowRenderElement(CommentForm, {});

  });

  it(`should have a form`, () => {

    expect(commentFormEl.type)
      .to
      .equal('form');

    expect(commentFormEl.props.className)
      .to
      .equal('comment-form');

  });

  describe(`Given the text input`, () => {

    let textInputEl;

    beforeEach(() => {

      textInputEl = TestUtils.findByType(commentFormEl, 'input');

    });

    it(`should have a text input`, () => {

      expect(textInputEl.type)
        .to
        .equal('input');

      expect(textInputEl.props.type)
        .to
        .equal('text');

    });

  });

});
