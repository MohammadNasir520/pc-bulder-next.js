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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToStor: function() { return /* binding */ addToStor; },\n/* harmony export */   componentSlice: function() { return /* binding */ componentSlice; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst initialState = {\n    components: []\n};\nconst componentSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"component\",\n    initialState,\n    reducers: {\n        addToStor: (state, action)=>{\n            const existingComponentIndex = state.components.findIndex((component)=>component.category === action.payload.category);\n            if (existingComponentIndex >= 0) {\n                state.components[existingComponentIndex] = action.payload;\n            } else {\n                state.components.push({\n                    ...action.payload\n                });\n            }\n        }\n    }\n});\nconst { addToStor } = componentSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (componentSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvZmVhdHVyZS9jb21wb25lbnQvY29tcG9uZW50U2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVEO0FBRXZELE1BQU1FLGVBQWU7SUFDakJDLFlBQVksRUFBRTtBQUNsQjtBQUVPLE1BQU1DLGlCQUFpQkosNkRBQVdBLENBQUM7SUFDdENLLE1BQU07SUFDTkg7SUFDQUksVUFBVTtRQUNOQyxXQUFXLENBQUNDLE9BQU9DO1lBQ2YsTUFBTUMseUJBQXlCRixNQUFNTCxXQUFXUSxVQUFVQyxDQUFBQSxZQUFhQSxVQUFVQyxhQUFhSixPQUFPSyxRQUFRRDtZQUU3RyxJQUFJSCwwQkFBMEIsR0FBRztnQkFDN0JGLE1BQU1MLFVBQVUsQ0FBQ08sdUJBQXVCLEdBQUdELE9BQU9LO1lBRXRELE9BQU87Z0JBRUhOLE1BQU1MLFdBQVdZLEtBQUs7b0JBQUUsR0FBR04sT0FBT0ssT0FBTztnQkFBQztZQUM5QztRQUVKO0lBQ0o7QUFDSixHQUFFO0FBQ0ssTUFBTSxFQUFFUCxTQUFTLEVBQUUsR0FBR0gsZUFBZVksUUFBTztBQUVuRCwrREFBZVosZUFBZWEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdXgvZmVhdHVyZS9jb21wb25lbnQvY29tcG9uZW50U2xpY2UuanM/Yzc4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgY3VycmVudCB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBjb21wb25lbnRzOiBbXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY29tcG9uZW50U2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiAnY29tcG9uZW50JyxcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgYWRkVG9TdG9yOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ0NvbXBvbmVudEluZGV4ID0gc3RhdGUuY29tcG9uZW50cy5maW5kSW5kZXgoY29tcG9uZW50ID0+IGNvbXBvbmVudC5jYXRlZ29yeSA9PT0gYWN0aW9uLnBheWxvYWQuY2F0ZWdvcnkpXHJcblxyXG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdDb21wb25lbnRJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5jb21wb25lbnRzW2V4aXN0aW5nQ29tcG9uZW50SW5kZXhdID0gYWN0aW9uLnBheWxvYWRcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3RhdGUuY29tcG9uZW50cy5wdXNoKHsgLi4uYWN0aW9uLnBheWxvYWQgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KVxyXG5leHBvcnQgY29uc3QgeyBhZGRUb1N0b3IgfSA9IGNvbXBvbmVudFNsaWNlLmFjdGlvbnNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudFNsaWNlLnJlZHVjZXJcclxuLy8gaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuXHJcbi8vIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuLy8gICAgIGNvbXBvbmVudHM6IFtdLFxyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGNvbXBvbmVudFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4vLyAgICAgbmFtZTogJ2NvbXBvbmVudCcsXHJcbi8vICAgICBpbml0aWFsU3RhdGUsXHJcbi8vICAgICByZWR1Y2Vyczoge1xyXG4vLyAgICAgICAgIGFkZFRvU3RvcjogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuLy8gICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdDb21wb25lbnRJbmRleCA9IHN0YXRlLmNvbXBvbmVudHMuZmluZEluZGV4KFxyXG4vLyAgICAgICAgICAgICAgICAgKGNvbXBvbmVudCkgPT4gY29tcG9uZW50LmNhdGVnb3J5ID09PSBhY3Rpb24ucGF5bG9hZC5jYXRlZ29yeVxyXG4vLyAgICAgICAgICAgICApO1xyXG5cclxuLy8gICAgICAgICAgICAgaWYgKGV4aXN0aW5nQ29tcG9uZW50SW5kZXggPj0gMCkge1xyXG4vLyAgICAgICAgICAgICAgICAgLy8gSWYgY2F0ZWdvcnkgYWxyZWFkeSBleGlzdHMsIHJlcGxhY2UgdGhlIGV4aXN0aW5nIGNvbXBvbmVudCB3aXRoIHRoZSBuZXcgb25lXHJcbi8vICAgICAgICAgICAgICAgICBzdGF0ZS5jb21wb25lbnRzW2V4aXN0aW5nQ29tcG9uZW50SW5kZXhdID0gYWN0aW9uLnBheWxvYWQ7XHJcbi8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICAvLyBJZiBjYXRlZ29yeSBkb2Vzbid0IGV4aXN0LCBhZGQgdGhlIG5ldyBjb21wb25lbnQgdG8gdGhlIGNvbXBvbmVudHMgYXJyYXlcclxuLy8gICAgICAgICAgICAgICAgIHN0YXRlLmNvbXBvbmVudHMucHVzaCh7IC4uLmFjdGlvbi5wYXlsb2FkIH0pO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgIH0sXHJcbi8vIH0pO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IHsgYWRkVG9TdG9yIH0gPSBjb21wb25lbnRTbGljZS5hY3Rpb25zO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50U2xpY2UucmVkdWNlcjtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiY3VycmVudCIsImluaXRpYWxTdGF0ZSIsImNvbXBvbmVudHMiLCJjb21wb25lbnRTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImFkZFRvU3RvciIsInN0YXRlIiwiYWN0aW9uIiwiZXhpc3RpbmdDb21wb25lbnRJbmRleCIsImZpbmRJbmRleCIsImNvbXBvbmVudCIsImNhdGVnb3J5IiwicGF5bG9hZCIsInB1c2giLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/redux/feature/component/componentSlice.js\n"));

/***/ })

});