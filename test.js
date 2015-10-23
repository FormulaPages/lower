var test = require('tape');
var lower = require('./LOWER');

test('it should lower case a string', (t) => {
  t.plan(1)
  t.equal( lower("UPPER"), "upper" )
})
