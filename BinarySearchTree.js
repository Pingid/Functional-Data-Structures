var BSTree = function() {
  this.value = null;
  this.left = null;
  this.right = null;
}

BSTree.cons = function(value, left, right) {
  var newTree = new BSTree();
  if (value) newTree.value = value;
  if (left) newTree.left = left;
  if (right) newTree.right = right;
  return newTree;
}

BSTree.prototype.add = function(value) {
  if (value < this.value) {
    if (!this.left) return BSTree.cons(this.value, BSTree.cons(value, null, null), this.right)
    return BSTree.cons(this.value, this.left.add(value), this.right)
  } else if (value > this.value) {
    if (!this.right) return BSTree.cons(this.value, this.left, BSTree.cons(value, null, null))
    return BSTree.cons(this.value, this.left, this.right.add(value))
  }
}

BSTree.prototype.contains = function(value) {
  if (value === this.value) return true;
  else if (!this.left && !this.right) return false;
  else if (value > this.value) return this.right.contains(value);
  else if (value < this.value) return this.left.contains(value);
}

BSTree.prototype.remove = function(value) {
  // // Left value matches
  // if (value === this.left.value) {
  //   // Left has no children
  //   if (!this.left.left && !this.left.right) return BSTree.cons(this.value, null, this.right);
  //   // Left has a right child
  //   else if (!this.left.left) return BSTree.cons(this.value, BSTree.cons(this.left.right.value, this.left.right.left, this.left.right.right), this.right);
  //   // Left has a left child
  //   else if (!this.right.right) return BSTree.cons(this.value, BSTree.cons(this.left.left.value, this.left.left, this.left.right), this.right);
  // }
  // // Right value matches
  // else if (value === this.right.value) {
  //   // Right has no children
  //   if (!this.right.left && !this.right.right) return BSTree.cons(this.value, this.left, null);
  //   // Right has a right child
  //   else if (!this.right.left) return BSTree.cons(this.value, this.left, BSTree.cons(this.right.right.value, this.right.right.left, this.right.right.right))
  //   // Right has a left child
  //   else if (!this.right.right) return BSTree.cons(this.value, this.left, BSTree.cons(this.right.left.value, this.right.left.left, this.right.left.right))
  // }
  // else if (value > this.value && this.right) return BSTree.cons(this.value, this.left, this.right.remove(value));
  // else if (value < this.value && this.left) return BSTree.cons(this.value, this.left.remove(value), this.right);
  // // return this;
}

module.exports = BSTree;
