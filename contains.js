var scopes = require('./index')

function contains (token, required, cb) {
  required = [].concat(required)

  scopes(token, function (err, list) {
    if (err) return cb(err)

    var scope
    var l = required.length
    while (scope = required[--l])
      if (!~list.indexOf(scope.trim()))
        return cb(null, false)

    cb(null, true)
  })
}

module.exports = contains
