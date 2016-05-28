var List = require('./LinkedList');
var Stream = require('./Stream');
var BSTree = require('./BinarySearchTree');

function sieve(s) {
  var head = s.head();
  return Stream.cons(
    function() { return head },
    function() { return sieve(s.tail().filter(function(x) { return x % head !== 0 })) }
  )
}

// var stream = Stream.of(2, function(x) { return x + 1 })
// console.log(stream.tail().head())
// console.log('Prime numbers', sieve(stream).take(20));

console.log(
  JSON.stringify(
    BSTree.cons(10, null, null).add(8).add(5).add(3).add(13).add(12).add(14).add(16).add(11).add(15).add(7).remove(13),
    null,
    2
  )
);
