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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToStor: function() { return /* binding */ addToStor; },\n/* harmony export */   componentSlice: function() { return /* binding */ componentSlice; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n// import { createSlice, current } from '@reduxjs/toolkit'\n// const initialState = {\n//     components: []\n// }\n// export const componentSlice = createSlice({\n//     name: 'component',\n//     initialState,\n//     reducers: {\n//         addToStor: (state, action) => {\n//             const exist = state.components.find(component => component.category === action.payload.category)\n//             if (exist) {\n//                 console.log('exist', current(exist))\n//             }\n//             state.components.push({ ...action.payload })\n//         }\n//     },\n// })\n// export const { addToStor } = componentSlice.actions\n// export default componentSlice.reducer\n\nconst initialState = {\n    components: []\n};\nconst componentSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"component\",\n    initialState,\n    reducers: {\n        addToStor: (state, action)=>{\n            const existingComponentIndex = state.components.findIndex((component)=>component.category === action.payload.category);\n            if (existingComponentIndex !== -1) {\n                // If category already exists, replace the existing component with the new one\n                state.components[existingComponentIndex] = action.payload;\n            } else {\n                // If category doesn't exist, add the new component to the components array\n                state.components.push({\n                    ...action.payload\n                });\n            }\n        }\n    }\n});\nconst { addToStor } = componentSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (componentSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvZmVhdHVyZS9jb21wb25lbnQvY29tcG9uZW50U2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsMERBQTBEO0FBRTFELHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckIsSUFBSTtBQUVKLDhDQUE4QztBQUM5Qyx5QkFBeUI7QUFDekIsb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQiwwQ0FBMEM7QUFDMUMsK0dBQStHO0FBQy9HLDJCQUEyQjtBQUUzQix1REFBdUQ7QUFDdkQsZ0JBQWdCO0FBQ2hCLDJEQUEyRDtBQUUzRCxZQUFZO0FBQ1osU0FBUztBQUNULEtBQUs7QUFDTCxzREFBc0Q7QUFFdEQsd0NBQXdDO0FBQ087QUFFL0MsTUFBTUMsZUFBZTtJQUNqQkMsWUFBWSxFQUFFO0FBQ2xCO0FBRU8sTUFBTUMsaUJBQWlCSCw2REFBV0EsQ0FBQztJQUN0Q0ksTUFBTTtJQUNOSDtJQUNBSSxVQUFVO1FBQ05DLFdBQVcsQ0FBQ0MsT0FBT0M7WUFDZixNQUFNQyx5QkFBeUJGLE1BQU1MLFdBQVdRLFVBQzVDLENBQUNDLFlBQWNBLFVBQVVDLGFBQWFKLE9BQU9LLFFBQVFEO1lBR3pELElBQUlILDJCQUEyQixDQUFDLEdBQUc7Z0JBQy9CLDhFQUE4RTtnQkFDOUVGLE1BQU1MLFVBQVUsQ0FBQ08sdUJBQXVCLEdBQUdELE9BQU9LO1lBQ3RELE9BQU87Z0JBQ0gsMkVBQTJFO2dCQUMzRU4sTUFBTUwsV0FBV1ksS0FBSztvQkFBRSxHQUFHTixPQUFPSyxPQUFPO2dCQUFDO1lBQzlDO1FBQ0o7SUFDSjtBQUNKLEdBQUc7QUFFSSxNQUFNLEVBQUVQLFNBQVMsRUFBRSxHQUFHSCxlQUFlWSxRQUFRO0FBRXBELCtEQUFlWixlQUFlYSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1eC9mZWF0dXJlL2NvbXBvbmVudC9jb21wb25lbnRTbGljZS5qcz9jNzgxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjdXJyZW50IH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuXHJcbi8vIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuLy8gICAgIGNvbXBvbmVudHM6IFtdXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBjb21wb25lbnRTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuLy8gICAgIG5hbWU6ICdjb21wb25lbnQnLFxyXG4vLyAgICAgaW5pdGlhbFN0YXRlLFxyXG4vLyAgICAgcmVkdWNlcnM6IHtcclxuLy8gICAgICAgICBhZGRUb1N0b3I6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbi8vICAgICAgICAgICAgIGNvbnN0IGV4aXN0ID0gc3RhdGUuY29tcG9uZW50cy5maW5kKGNvbXBvbmVudCA9PiBjb21wb25lbnQuY2F0ZWdvcnkgPT09IGFjdGlvbi5wYXlsb2FkLmNhdGVnb3J5KVxyXG4vLyAgICAgICAgICAgICBpZiAoZXhpc3QpIHtcclxuXHJcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXhpc3QnLCBjdXJyZW50KGV4aXN0KSlcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICBzdGF0ZS5jb21wb25lbnRzLnB1c2goeyAuLi5hY3Rpb24ucGF5bG9hZCB9KVxyXG5cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9LFxyXG4vLyB9KVxyXG4vLyBleHBvcnQgY29uc3QgeyBhZGRUb1N0b3IgfSA9IGNvbXBvbmVudFNsaWNlLmFjdGlvbnNcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudFNsaWNlLnJlZHVjZXJcclxuaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGNvbXBvbmVudHM6IFtdLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ2NvbXBvbmVudCcsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIGFkZFRvU3RvcjogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdDb21wb25lbnRJbmRleCA9IHN0YXRlLmNvbXBvbmVudHMuZmluZEluZGV4KFxyXG4gICAgICAgICAgICAgICAgKGNvbXBvbmVudCkgPT4gY29tcG9uZW50LmNhdGVnb3J5ID09PSBhY3Rpb24ucGF5bG9hZC5jYXRlZ29yeVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgaWYgKGV4aXN0aW5nQ29tcG9uZW50SW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBjYXRlZ29yeSBhbHJlYWR5IGV4aXN0cywgcmVwbGFjZSB0aGUgZXhpc3RpbmcgY29tcG9uZW50IHdpdGggdGhlIG5ldyBvbmVcclxuICAgICAgICAgICAgICAgIHN0YXRlLmNvbXBvbmVudHNbZXhpc3RpbmdDb21wb25lbnRJbmRleF0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIElmIGNhdGVnb3J5IGRvZXNuJ3QgZXhpc3QsIGFkZCB0aGUgbmV3IGNvbXBvbmVudCB0byB0aGUgY29tcG9uZW50cyBhcnJheVxyXG4gICAgICAgICAgICAgICAgc3RhdGUuY29tcG9uZW50cy5wdXNoKHsgLi4uYWN0aW9uLnBheWxvYWQgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBhZGRUb1N0b3IgfSA9IGNvbXBvbmVudFNsaWNlLmFjdGlvbnM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnRTbGljZS5yZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJjb21wb25lbnRzIiwiY29tcG9uZW50U2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJhZGRUb1N0b3IiLCJzdGF0ZSIsImFjdGlvbiIsImV4aXN0aW5nQ29tcG9uZW50SW5kZXgiLCJmaW5kSW5kZXgiLCJjb21wb25lbnQiLCJjYXRlZ29yeSIsInBheWxvYWQiLCJwdXNoIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/feature/component/componentSlice.js\n"));

/***/ })

});