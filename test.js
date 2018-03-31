'use strict'

var test = require('tape')
var replace = require('./')

test(function (t) {
  t.equal(replace('require("foo")', {foo: 'bar'}), 'bar')
  t.equal(replace('require("foo");require("bar")', {foo: 'bar', bar: 'baz'}), 'bar;baz')
  t.equal(replace('require("foo")', {}), 'require("foo")')
  t.equal(replace('let n = require("n"); export { n }', {}), 'let n = require("n"); export { n }')
  t.equal(replace('require("foo"); async function someFunction () {}', {foo: 'bar'}), 'bar; async function someFunction () {}')
  t.equal(replace('require("foo/bar")', {'foo/bar': 'baz'}), 'baz')

  t.end()
})
