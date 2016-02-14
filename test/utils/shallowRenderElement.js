import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

export function shallowRenderElement(component, props, children) {

  const renderer = ReactTestUtils.createRenderer();

  const element = children
    ? React.createElement(component, props, children)
    : React.createElement(component, props);

  renderer.render(element);

  return renderer.getRenderOutput();

}
