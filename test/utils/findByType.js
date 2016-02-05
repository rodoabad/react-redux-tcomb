import { findAllByType } from './findAllByType';

export function findByType(
  tree,
  type
) {

  return findAllByType(tree, type)[0];

}
