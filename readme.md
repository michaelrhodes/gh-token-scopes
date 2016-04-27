# gh-token-scopes

If your application relies on [personal access tokens](https://github.com/settings/tokens) (whose permissions can be updated at any time) you may want to verify the scope range *before* making any API calls; this module helps you do just that.

** I don’t want to expose an access token, so CI is out of the question, but you can easily [run the tests](#running-the-tests) yourself. **

## Install

```sh
$ npm install gh-token-scopes
```

## Usage

```js
var scopes = require('gh-token-scopes')
var contains = require('gh-token-scopes/contains')

var token = '{some-personal-access-token}'

scopes(token, function (err, list) {
  console.log(list)
  > ['public_repo', 'gist', ...]
})

contains(token, ['gist'], function (err, yes) {
  console.log(yes)
  > true
})
```

### Running the tests

```sh
$ TOKEN={some-personal-access-token} REQUIRED_SCOPES={some-comma-delimited-list-of-scopes} npm test
```

*Note: `TOKEN` is the only required environment variable.*

#### License

[MIT](http://opensource.org/licenses/MIT)
