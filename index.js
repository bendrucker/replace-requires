'use strict'

const detective = require('detective')
const patch = require('patch-text')
const hasRequire = require('has-require')
const extend = require('xtend')

module.exports = function replaceRequires (code, replacements) {
  const checker = new hasRequire.Checker(code)
  const ids = Object.keys(replacements)
  if (!ids.some(checker.has, checker)) return code
  return patch(code, detective
    .find(code, { nodes: true })
    .nodes
    .filter(requireLiteral)
    .map(function (node) {
      return extend(node, { replacement: replacements[node.arguments[0].value] })
    })
    .filter(function (node) {
      return node.replacement != null
    }))
}

function requireLiteral (node) {
  const arg = node.arguments[0]
  return arg && arg.type === 'Literal'
}
