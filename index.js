var request = require('xhr-request')
var headers = require('gh-api-headers')
var noop = function () {}

function scopes (token, cb) {
  var opt = {
    json: true,
    headers: headers({
      token: token
    })
  }

  request('https://api.github.com', opt, collect)

  function collect (err, data, res) {
    if (err) return cb(err)
    var header = res.headers['x-oauth-scopes']
    var scopes = header ? header.split(/,\s*/) : []
    cb(null, scopes)
  }
}

module.exports = scopes
