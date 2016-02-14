import { expect } from 'code';
import Chance from 'chance';
import deepFreeze from 'deep-freeze';

import * as TestUtils from '../../utils';
import App from '../../../src/components/App';

describe(`Given the App component`, () => {

  let appEl;

  beforeEach(`Setup`, () => {

    appEl = TestUtils.shallowRenderElement(App);

  });

  it(`should have a div`, () => {

    expect(appEl.type).equal('div');

  });

  describe(`Given the AddComment container`, () => {

    let addCommentEl;

    beforeEach(() => {

      addCommentEl = TestUtils.findByType(appEl, 'AddComment');

    });

    it(`should have a wrapped component AddComment`, () => {

      const expectedComponent = 'AddComment';

      expect(addCommentEl.type.WrappedComponent.displayName).equal(expectedComponent);

    });

  });

  describe(`Given the CommentBox container`, () => {

    let commentBoxEl;

    beforeEach(() => {

      commentBoxEl = TestUtils.findByType(appEl, 'CommentBox');

    });

    it(`should have a wrapped component CommentBox`, () => {

      const expectedComponent = 'CommentBox';

      expect(commentBoxEl.type.WrappedComponent.displayName).equal(expectedComponent);

    });

  });

});
