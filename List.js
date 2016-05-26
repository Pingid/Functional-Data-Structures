// Constructors
var List = function(array) {
  this.head = null
}
List.cons = function(head, tail) {
  var newList = new List()
  if (head) {
    newList.head = head
    newList.tail = new List()
  }
  if (tail && head) { newList.tail = tail }
  return newList
}
List.of = function(array) {
  if (!array || array.length < 1 || array[0] === null) {
    return List.cons()
  }
  return List.cons(array[0], List.of(...array.slice(1, array.length)))
}

// Methods
List.prototype.prepend = function(x) {
  return List.cons(x, this)
}
List.prototype.append = function(x) {
  if (this.head === null) return List.cons(x)
  return List.cons(this.head, this.tail.append(x))
}
List.prototype.map = function(f) {
  if (this.tail) return List.cons(f(this.head), this.tail.map(f))
  return List.cons(this.head ? f(this.head) : null, null)
}
List.prototype.reduce = function(f) {
  if (!this.tail) return this.head
  else return f(this.head, this.tail.reduce(f))
}
List.prototype.filter = function(f) {
  if (this.head === null) return List.cons()
  else if (f(this.head)) return List.cons(this.head, this.tail.filter(f))
  return this.tail.filter(f)
}
List.prototype.isEmpty = function() { return this.head === null }
List.prototype.toArray = function() {
  return this.reduce(function(a, b) { return b ? [].concat([a], b) : [].concat([a]) })
}

module.exports = List;
