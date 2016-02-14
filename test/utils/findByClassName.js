import { findAllByClassName } from './findAllByClassName';

export function findByClassName(tree, className) {

  return findAllByClassName(tree, className)[0];

}
