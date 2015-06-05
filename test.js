'use strict'

var test = require('tape')
var replace = require('./')

test(function (t) {
  t.equal(replace('require("foo")', {foo: 'bar'}), 'bar')
  t.equal(replace('require("foo");require("bar")', {foo: 'bar', bar: 'baz'}), 'bar;baz')
  t.end()
})
