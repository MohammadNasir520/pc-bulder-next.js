"use strict";
exports.id = 265;
exports.ids = [265];
exports.modules = {

/***/ 3265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   up: () => (/* binding */ addToStor)
/* harmony export */ });
/* unused harmony export componentSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    components: []
};
const componentSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "component",
    initialState,
    reducers: {
        addToStor: (state, action)=>{
            const existingComponentIndex = state.components.findIndex((component)=>component.category === action.payload.category);
            if (existingComponentIndex >= 0) {
                state.components[existingComponentIndex] = action.payload;
            } else {
                state.components.push({
                    ...action.payload
                });
            }
        }
    }
});
const { addToStor } = componentSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (componentSlice.reducer);


/***/ })

};
;