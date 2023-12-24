const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {

  function indexOf(k) {
    let current = l;
    let index = 0;


    while (current) {
      if (current.value === k) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1
  }


  function removeInd(ind) {

    let len = Object.keys(l).length;
    let current = l;
    if (ind === 0) {
      l = current.next;
    } else {
      let prev = null;
      let indexPrev = 0;
      while (indexPrev < ind) {
        prev = current;

        current = current.next;
        indexPrev++;
      }
      prev.next = current.next;
    }
    len--;
    return l;
  }

  removeInd(indexOf(k))
  if (l.next.next != null) {
    removeInd(indexOf(k))
  }
  return l
}

module.exports = {
  removeKFromList
};
