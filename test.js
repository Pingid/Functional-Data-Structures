var List = require('./List');
var Stream = require('./Stream');

function sieve(s) {
  var head = s.head();
  return Stream.cons(
    function() { return head },
    function() { return sieve(s.tail().filter(function(x) { return x % head !== 0 })) }
  )
}

var stream = Stream.of(2, function(x) { return x + 1 })
console.log(stream.tail().head())
console.log('Prime numbers', sieve(stream).take(20));
