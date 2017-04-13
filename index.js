console.log('index.js')

import a from './a'
const bPromise = import('./b')
bPromise.then(r => {
  // import c from './c'
  import('./c', './a')
    .then(module => module.default)
    .catch(err => console.error(`Chunk loading failed, ${err}`))
  // var c = require('./c')
  var d = require('./d')
})
import d from './d'
