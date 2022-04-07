"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/test";
exports.ids = ["pages/api/test"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/test.ts":
/*!***************************!*\
  !*** ./pages/api/test.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n        apiKey: process.env.OPENAI_API_KEY\n    });\n    const openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n    const response = await openai.createSearch(\"babbage\", {\n        documents: [\n            \"buhmbooo\"\n        ],\n        query: \"buhmbo\",\n        return_metadata: true\n    });\n    res.json(response.data);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGVzdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBa0Q7QUFHbkMsZUFBZUUsT0FBTyxDQUNuQ0MsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ3BCO0lBQ0EsTUFBTUMsYUFBYSxHQUFHLElBQUlMLGlEQUFhLENBQUM7UUFDdENNLE1BQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGNBQWM7S0FDbkMsQ0FBQztJQUNGLE1BQU1DLE1BQU0sR0FBRyxJQUFJVCw2Q0FBUyxDQUFDSSxhQUFhLENBQUM7SUFFM0MsTUFBTU0sUUFBUSxHQUFHLE1BQU1ELE1BQU0sQ0FBQ0UsWUFBWSxDQUFDLFNBQVMsRUFBRTtRQUNwREMsU0FBUyxFQUFFO1lBQUMsVUFBVTtTQUFDO1FBQ3ZCQyxLQUFLLEVBQUUsUUFBUTtRQUNmQyxlQUFlLEVBQUUsSUFBSTtLQUN0QixDQUFDO0lBRUZYLEdBQUcsQ0FBQ1ksSUFBSSxDQUFDTCxRQUFRLENBQUNNLElBQUksQ0FBQyxDQUFDO0NBQ3pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9hcGkvdGVzdC50cz8zNjFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZ3VyYXRpb24sIE9wZW5BSUFwaSB9IGZyb20gXCJvcGVuYWlcIjtcclxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZVxyXG4pIHtcclxuICBjb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xyXG4gICAgYXBpS2V5OiBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSxcclxuICB9KTtcclxuICBjb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJQXBpKGNvbmZpZ3VyYXRpb24pO1xyXG5cclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG9wZW5haS5jcmVhdGVTZWFyY2goXCJiYWJiYWdlXCIsIHtcclxuICAgIGRvY3VtZW50czogW1wiYnVobWJvb29cIl0sXHJcbiAgICBxdWVyeTogXCJidWhtYm9cIixcclxuICAgIHJldHVybl9tZXRhZGF0YTogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgcmVzLmpzb24ocmVzcG9uc2UuZGF0YSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJPcGVuQUlBcGkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uZmlndXJhdGlvbiIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsIm9wZW5haSIsInJlc3BvbnNlIiwiY3JlYXRlU2VhcmNoIiwiZG9jdW1lbnRzIiwicXVlcnkiLCJyZXR1cm5fbWV0YWRhdGEiLCJqc29uIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/test.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/test.ts"));
module.exports = __webpack_exports__;

})();