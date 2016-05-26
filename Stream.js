/*
  Constructors
*/
var Stream = function() {
  this.head = function() { return null }
}
Stream.cons = function(head, tail) {
  var newStream = new Stream()
  newStream.head = head
  if (tail) { newStream.tail = tail }
  return newStream
}
Stream.of = function(head, next) {
  return Stream.cons(
    function() { return head },
    function() { return Stream.of(next(head), next)}
  )
}

/*
  Methods
*/
Stream.prototype.prepend = function(x) {
  var self = this;
  return Stream.cons(
    function() { return x },
    function() { return self }
  )
}
Stream.prototype.map = function(f) {
  var self = this;
  return Stream.cons(
    function() { return f(self.head()) },
    function() { return self.tail().map(f)}
  )
}
Stream.prototype.filter = function(f) {
  var self = this;
  if (f(this.head())) {
    return Stream.cons(
      this.head,
      function() { return self.tail().filter(f) }
    )
  }
  return this.tail().filter(f)
}
Stream.prototype.take = function(x) {
  function recurse(array, stream) {
    if (array.length >= x) return array;
    return recurse([].concat(array, stream.head()), stream.tail())
  }
  return recurse([], this);
}

// It needs a stream from 2 or higher
function sieve(s) {
  var head = s.head();
  return Stream.cons(
    function() { return head },
    function() { return sieve(s.tail().filter(function(x) { return x % head !== 0 })) }
  )
}

module.exports = Stream;
