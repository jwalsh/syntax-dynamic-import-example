console.log('index.js')

import a from './a'
const bPromise = import('./b')
bPromise.then(r => {
  // Module build failed: SyntaxError: 'import' and 'export' may only appear at the top level (6:2)
  // import c from './c'

  // Module build failed: SyntaxError: import() requires exactly one argument (7:2)
  // import('./c', './a', './e')

  // Critical dependency: the request of a dependency is an expression
  // var _ = './c'
  // import(_)
  import('./c')
    .then((c) => c.default && e.default)
    .then((c) => import(d))
    .catch(err => console.error(`Chunk loading failed, ${err}`))
  // var c = require('./c')
  var d = require('./d')
})
import d from './d'
