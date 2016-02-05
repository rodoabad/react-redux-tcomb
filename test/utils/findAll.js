import React from 'react';

function hasChildren(tree) {

  return React.isValidElement(tree) && React.Children.count(tree.props.children) > 0;

}

export default function findAll(
  tree,
  test
) {

  let found = test(tree)
    ? [tree]
    : [];

  if (hasChildren(tree)) {

    React.Children.forEach(tree.props.children,
      child => {

        found = found.concat(findAll(child, test));

      });

  }

  return found;

}
