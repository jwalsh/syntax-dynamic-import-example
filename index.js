console.log('index.js')

var a = require('./a')
var b = require('./b')
require.ensure('./c', function() {
  var a = require('./a')
  var d = require('./d')
})
