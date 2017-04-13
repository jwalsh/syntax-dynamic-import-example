webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./books.js": 8,
	"./movies.js": 9,
	"./video-games.js": 10
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 7;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('application - books');

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('application - movies');

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('application - video-games');

/***/ })
]);