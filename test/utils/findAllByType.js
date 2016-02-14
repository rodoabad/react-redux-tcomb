import React from 'react';

import findAll from './findAll';

export function findAllByType(tree, type) {

  return findAll(tree, component => {

    if (React.isValidElement(component)) {

      if (component.type.WrappedComponent) {
        return component.type.WrappedComponent.displayName === type;
      } else {
        return component.type === type || component.type.displayName === type;
      }

    }

  });

}
