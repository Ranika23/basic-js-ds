const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.parentRoot = null;
  }

  root() {
    return this.parentRoot;
  }

  add(data) {
    this.parentRoot = addRoot(this.parentRoot, data);
    function addRoot(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addRoot(node.left, data)
      } else {
        node.rigth = addRoot(node.rigth, data)
      }
      return node;
    }
  }

  has(data) {
    return hasRoot(this.parentRoot, data);
    function hasRoot(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (data < node.data) {
        return hasRoot(node.left, data)
      } else {
        return hasRoot(node.rigth, data);
      }
    }
  }

  find(data) {
    return findRoot(this.parentRoot, data);
    function findRoot(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        return findRoot(node.left, data)
      } else {
        return findRoot(node.rigth, data);
      }
    }
  }

  remove(data) {
    this.parentRoot = removeRoot(this.parentRoot, data);
    function removeRoot(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeRoot(node.left, data)
        return node;
      }
      else if (node.data < data) {
        node.rigth = removeRoot(node.rigth, data)
        return node;
      } else {
        if (!node.left && !node.rigth) {
          return null
        }
        if (!node.left) {
          node = node.rigth;
          return node;
        }
        if (!node.rigth) {
          node = node.left;
          return node;
        }
        let minRootRigth = node.rigth;
        while (minRootRigth.left) {
          minRootRigth = minRootRigth.left;
        }
        node.data = minRootRigth.data;
        node.rigth = removeRoot(node.rigth, minRootRigth.data);
        return node;
      }
    }
  }

  min() {
    if (!this.parentRoot) {
      return;
    }
    let node = this.parentRoot;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.parentRoot) {
      return;
    }
    let node = this.parentRoot;
    while (node.rigth) {
      node = node.rigth;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};