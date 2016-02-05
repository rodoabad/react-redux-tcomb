import React from 'react';

import findAll from './findAll';

function hasClassName(
  classNameList,
  className
) {

  return classNameList.indexOf(className) >= 0;

}

function findClassName(
  componentClasses,
  searchTerm
) {

  if (searchTerm.indexOf(' ') >= 0) {

    const classNameList = searchTerm.split(' ');

    return classNameList.every(
      value => hasClassName(componentClasses, value));

  }

  return hasClassName(componentClasses, searchTerm);

}

export function findAllByClassName(
  tree,
  className
) {

  return findAll(tree,
    component => {

      if (React.isValidElement(component) && component.props.className) {

        return findClassName(component.props.className, className);

      }

    });

}
