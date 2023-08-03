"use strict";
(() => {
var exports = {};
exports.id = 184;
exports.ids = [184];
exports.modules = {

/***/ 8299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2FproductComponents_2F_5Bcategory_5D_absolutePagePath_private_next_pages_2FproductComponents_2F_5Bcategory_5D_js_preferredRegion_middlewareConfig_e30_3D_),
  getServerSideProps: () => (/* binding */ next_route_loaderpage_2FproductComponents_2F_5Bcategory_5D_absolutePagePath_private_next_pages_2FproductComponents_2F_5Bcategory_5D_js_preferredRegion_middlewareConfig_e30_3D_getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/productComponents/[category].js
var _category_namespaceObject = {};
__webpack_require__.r(_category_namespaceObject);
__webpack_require__.d(_category_namespaceObject, {
  "default": () => (_category_),
  getServerSideProps: () => (getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/redux/feature/component/componentSlice.js
var componentSlice = __webpack_require__(3265);
// EXTERNAL MODULE: external "@material-tailwind/react"
var react_ = __webpack_require__(4715);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./src/pages/productComponents/[category].js






const CategoryComponents = ({ components })=>{
    const storedComponents = (0,external_react_redux_.useSelector)((state)=>state.components);
    console.log(storedComponents);
    const dispatch = (0,external_react_redux_.useDispatch)();
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "overflow-hidden min-h-screen mx-auto border border-gray-200 shadow-md m-5",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
            className: "md:w-1/2 mx-auto border-collapse p-1 bg-white text-left text-sm  text-gray-800 font-sans",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("thead", {
                    className: "bg-gray-50 w-full ",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                        className: "w-full mx-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("th", {
                                scope: "col",
                                className: "px-6 py-4 font-medium text-gray-900",
                                children: "components"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("th", {
                                scope: "col",
                                className: "px-6 py-4 font-medium text-gray-900",
                                children: "Price"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("th", {
                                scope: "col",
                                className: "px-6 py-4 font-medium text-gray-900",
                                children: "Add To Builder"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("tbody", {
                    className: "divide-y divide-gray-100 border-t border-gray-100",
                    children: components?.map((component)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                            className: "hover:bg-gray-50",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("th", {
                                    className: "flex md:gap-3 md:px-6 py-4 font-normal items-center ",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "h-36 w-32",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                width: 250,
                                                height: 250,
                                                className: "h-full w-full  object-cover object-center",
                                                src: component.image,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "text-xs md:text-sm md:pl-3 pl-1",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "font-semibold",
                                                    children: component?.name
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "font-medium flex items-center gap-x-1",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            viewBox: "0 0 24 24",
                                                            fill: "currentColor",
                                                            className: "-mt-0.5 h-5 w-5 text-yellow-700",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                fillRule: "evenodd",
                                                                d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z",
                                                                clipRule: "evenodd"
                                                            })
                                                        }),
                                                        component?.rating
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "font-medium ",
                                                    children: component?.category
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "font-medium ",
                                                    children: component?.status
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("td", {
                                    className: "px-6 py-4",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "inline-flex items-center gap-1    py-1  font-semibold",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center gap-x-1",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    strokeWidth: 1.5,
                                                    stroke: "currentColor",
                                                    className: "w-6 h-6",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                                    className: "font-semibold",
                                                    children: [
                                                        "  ",
                                                        component?.price
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("td", {
                                    className: "px-6 py-4",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "flex gap-2",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/pcbuilder",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(react_.Button, {
                                                onClick: ()=>dispatch((0,componentSlice/* addToStor */.up)(component)),
                                                size: "sm",
                                                children: "Add"
                                            })
                                        })
                                    })
                                })
                            ]
                        }, component?.id))
                })
            ]
        })
    });
};
/* harmony default export */ const _category_ = (CategoryComponents);
const getServerSideProps = async (context)=>{
    const { params } = context;
    console.log(params.productId);
    const res = await fetch(`https://pc-builder-backend-omega.vercel.app/api/v1/products/categories/${params.category}`);
    const data = await res.json();
    console.log(data);
    return {
        props: {
            components: data?.data
        }
    };
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2FproductComponents%2F%5Bcategory%5D&absolutePagePath=private-next-pages%2FproductComponents%2F%5Bcategory%5D.js&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2FproductComponents_2F_5Bcategory_5D_absolutePagePath_private_next_pages_2FproductComponents_2F_5Bcategory_5D_js_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(_category_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(_category_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(_category_namespaceObject, "getStaticPaths")
        const next_route_loaderpage_2FproductComponents_2F_5Bcategory_5D_absolutePagePath_private_next_pages_2FproductComponents_2F_5Bcategory_5D_js_preferredRegion_middlewareConfig_e30_3D_getServerSideProps = (0,helpers/* hoist */.l)(_category_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(_category_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_category_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_category_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_category_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_category_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_category_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_category_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/productComponents/[category]","pathname":"/productComponents/[category]","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: _category_namespaceObject })
        
        
    

/***/ }),

/***/ 4715:
/***/ ((module) => {

module.exports = require("@material-tailwind/react");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [812,664,636,675,265], () => (__webpack_exec__(8299)));
module.exports = __webpack_exports__;

})();