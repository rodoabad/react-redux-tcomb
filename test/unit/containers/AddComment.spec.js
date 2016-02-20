import { expect } from 'code';

import * as TestUtils from '../../utils';
import AddComment from '../../../src/views/containers/AddComment';

describe('Given the App component', () => {

  let addCommentEl;

  beforeEach('Setup', () => {

    addCommentEl = TestUtils.shallowRenderElement(AddComment.WrappedComponent);

  });

  it('should have a div', () => {

    expect(addCommentEl.type).equal('div');

  });

  describe('given the author input', () => {

    let inputAuthorEl;

    beforeEach(() => {

      inputAuthorEl = TestUtils.findByClassName(addCommentEl, 'author');

    });

    it('should be a text input', () => {

      expect(inputAuthorEl.type).equal('input');
      expect(inputAuthorEl.props.type).equal('text');

    });

    it('should have a className', () => {

      expect(inputAuthorEl.props.className).equal('author');

    });

  });

  describe('given the comment input', () => {

    let inputCommentEl;

    beforeEach(() => {

      inputCommentEl = TestUtils.findByClassName(addCommentEl, 'text');

    });

    it('should be a text input', () => {

      expect(inputCommentEl.type).equal('input');
      expect(inputCommentEl.props.type).equal('text');

    });

    it('should have a className', () => {

      expect(inputCommentEl.props.className).equal('text');

    });

  });

});
