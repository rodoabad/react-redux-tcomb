import { expect } from 'code';

import * as TestUtils from '../../utils';
import Header from '../../../src/views/components/Header';

describe('Given the Header component', () => {

  let headerEl;

  beforeEach('Setup', () => {

    headerEl = TestUtils.shallowRenderElement(Header);

  });

  it('should have a header element', () => {

    expect(headerEl.type).equal('header');

  });

  it('should contain an author', () => {

    const h1El = TestUtils.findByType(headerEl, 'h1');

    expect(h1El.type).equal('h1');

    expect(h1El.props.children).equal('This is a header');

  });

});
