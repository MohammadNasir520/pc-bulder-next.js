"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/redux/feature/component/componentSlice.js":
/*!*******************************************************!*\
  !*** ./src/redux/feature/component/componentSlice.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToStor: function() { return /* binding */ addToStor; },\n/* harmony export */   componentSlice: function() { return /* binding */ componentSlice; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\n\nconst initialState = {\n    components: []\n};\nconst componentSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"component\",\n    initialState,\n    reducers: {\n        addToStor: (state, action)=>{\n            const exist = state.components.find((component)=>component.category === action.payload.category);\n            // Updated: Removed the use of `current`. `exist` is the original object from the state.\n            console.log(\"exist\", exist);\n            state.components.push({\n                ...action.payload\n            });\n        }\n    }\n});\nconst { addToStor } = componentSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (componentSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvZmVhdHVyZS9jb21wb25lbnQvY29tcG9uZW50U2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQztBQUNYO0FBRXBDLE1BQU1FLGVBQWU7SUFDakJDLFlBQVksRUFBRTtBQUNsQjtBQUVPLE1BQU1DLGlCQUFpQkosNkRBQVdBLENBQUM7SUFDdENLLE1BQU07SUFDTkg7SUFDQUksVUFBVTtRQUNOQyxXQUFXLENBQUNDLE9BQU9DO1lBQ2YsTUFBTUMsUUFBUUYsTUFBTUwsV0FBV1EsS0FDM0IsQ0FBQ0MsWUFBY0EsVUFBVUMsYUFBYUosT0FBT0ssUUFBUUQ7WUFHekQsd0ZBQXdGO1lBQ3hGRSxRQUFRQyxJQUFJLFNBQVNOO1lBRXJCRixNQUFNTCxXQUFXYyxLQUFLO2dCQUFFLEdBQUdSLE9BQU9LLE9BQU87WUFBQztRQUM5QztJQUNKO0FBQ0osR0FBRztBQUVJLE1BQU0sRUFBRVAsU0FBUyxFQUFFLEdBQUdILGVBQWVjLFFBQVE7QUFFcEQsK0RBQWVkLGVBQWVlLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L2ZlYXR1cmUvY29tcG9uZW50L2NvbXBvbmVudFNsaWNlLmpzP2M3ODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHRvYXN0IGZyb20gJ3JlYWN0LWhvdC10b2FzdCc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBjb21wb25lbnRzOiBbXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb21wb25lbnRTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICdjb21wb25lbnQnLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBhZGRUb1N0b3I6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0ID0gc3RhdGUuY29tcG9uZW50cy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKGNvbXBvbmVudCkgPT4gY29tcG9uZW50LmNhdGVnb3J5ID09PSBhY3Rpb24ucGF5bG9hZC5jYXRlZ29yeVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8gVXBkYXRlZDogUmVtb3ZlZCB0aGUgdXNlIG9mIGBjdXJyZW50YC4gYGV4aXN0YCBpcyB0aGUgb3JpZ2luYWwgb2JqZWN0IGZyb20gdGhlIHN0YXRlLlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXhpc3QnLCBleGlzdCk7XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5jb21wb25lbnRzLnB1c2goeyAuLi5hY3Rpb24ucGF5bG9hZCB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBhZGRUb1N0b3IgfSA9IGNvbXBvbmVudFNsaWNlLmFjdGlvbnM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnRTbGljZS5yZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJ0b2FzdCIsImluaXRpYWxTdGF0ZSIsImNvbXBvbmVudHMiLCJjb21wb25lbnRTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImFkZFRvU3RvciIsInN0YXRlIiwiYWN0aW9uIiwiZXhpc3QiLCJmaW5kIiwiY29tcG9uZW50IiwiY2F0ZWdvcnkiLCJwYXlsb2FkIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/redux/feature/component/componentSlice.js\n"));

/***/ })

});