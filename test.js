var scopes = require('./index')
var contains = require('./contains')
var test = require('tape')

var token = process.env.TOKEN
var required = (function () {
  var scopes = process.env.REQUIRED_SCOPES || ''
  return scopes ? scopes.split(/,\s*/) : false
})()

if (!token) {
  console.error('***\n' +
    'please set the TOKEN environment variable\n' +
  '***')
  process.exit(1)
}

test('it gets a list of scopes', function (assert) {
  scopes(token, function (err, list) {
    assert.equal(err, null)
    assert.equal(Array.isArray(list), true)
    assert.end()
  })
})

test('it checks a list of scopes', function (assert) {
  contains(token, required || [], function (err, yes) {
    assert.equal(err, null)

    required ?
      assert.equal(yes, true) :
      assert.equal(typeof yes, 'boolean')

    assert.end()
  })
})
