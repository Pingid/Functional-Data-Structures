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

BSTree.prototype.addTree = function(tree) {
  console.log(this);
  if (this.value > tree.value) {
    if (!this.left) return BSTree.cons(this.value, tree, this.right);
    return BSTree.cons(this.value, this.left.addTree(tree), this.right);
  } else if (this.value < tree.value) {
    if (!this.right) return BSTree.cons(this.value, this.left, tree);
    return BSTree.cons(this.value, this.left, this.right.addTree(tree));
  }
}

BSTree.prototype.contains = function(value) {
  if (value === this.value) return true;
  else if (!this.left && !this.right) return false;
  else if (value > this.value) return this.right.contains(value);
  else if (value < this.value) return this.left.contains(value);
}

BSTree.prototype.remove = function(value) {
  if (value !== this.value) {
    if (value > this.value && this.right) return BSTree.cons(this.value, this.left, this.right.remove(value));
    else if (value < this.value && this.left) return BSTree.cons(this.value, this.left.remove(value), this.right);
    return null
  } else if (value === this.value) {
    if (!this.left) {
      if (!this.right) return null;
      return BSTree.cons(this.right.value, this.right.left, this.right.right);
    } else if (!this.right) {
      return BSTree.cons(this.left.value, this.left.left, this.left.right);
    } else if (!this.left.right) return BSTree.cons(this.left.value, this.left.left, this.right)
    return BSTree.cons(this.left.value, this.left.left, this.left.right.addTree(this.right))
  }
}

module.exports = BSTree;
