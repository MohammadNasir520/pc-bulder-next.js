"use strict";
(() => {
var exports = {};
exports.id = 601;
exports.ids = [601];
exports.modules = {

/***/ 1586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2FproductDetailsPage_2F_5BproductId_5D_absolutePagePath_private_next_pages_2FproductDetailsPage_2F_5BproductId_5D_js_preferredRegion_middlewareConfig_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ next_route_loaderpage_2FproductDetailsPage_2F_5BproductId_5D_absolutePagePath_private_next_pages_2FproductDetailsPage_2F_5BproductId_5D_js_preferredRegion_middlewareConfig_e30_3D_getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderpage_2FproductDetailsPage_2F_5BproductId_5D_absolutePagePath_private_next_pages_2FproductDetailsPage_2F_5BproductId_5D_js_preferredRegion_middlewareConfig_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/productDetailsPage/[productId].js
var _productId_namespaceObject = {};
__webpack_require__.r(_productId_namespaceObject);
__webpack_require__.d(_productId_namespaceObject, {
  "default": () => (_productId_),
  getStaticPaths: () => (getStaticPaths),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/components/SingleReviewCard.jsx

const SingleReviewCard = ({ review })=>{
    console.log("review", review);
    const { name } = review?.user;
    const fullname = name.firstName + " " + name.lastName;
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "mt-5",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "flex-col w-full py-4 mx-auto mt-3 bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "flex flex-row md-10",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex-col mt-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "flex items-center flex-1 px-4 font-bold leading-tight",
                                children: fullname
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600",
                                children: review?.reviewText
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: "inline-flex items-center px-1 pt-2 ml-1 flex-column",
                                children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                    className: "w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900",
                                    viewBox: "0 0 95 78",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                        d: "M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z",
                                        fillRule: "nonzero"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: "inline-flex items-center px-1 -ml-1 flex-column",
                                children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                    className: "w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const components_SingleReviewCard = (SingleReviewCard);

// EXTERNAL MODULE: ./src/redux/api/apiSlice.js + 1 modules
var apiSlice = __webpack_require__(619);
;// CONCATENATED MODULE: ./src/redux/api/ReviewApi/reviewApi.js

const reviewsApi = apiSlice/* api */.h.injectEndpoints({
    endpoints: (builder)=>({
            getAllReviews: builder.query({
                query: ()=>"/reviews"
            }),
            getSingleProduct: builder.query({
                query: (id)=>`/products/${id}`
            })
        })
});
const { useGetAllReviewsQuery, useGetSingleProductQuery } = reviewsApi;

// EXTERNAL MODULE: external "@material-tailwind/react"
var react_ = __webpack_require__(4715);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/pages/productDetailsPage/[productId].js







const ProductDetails = ({ product })=>{
    const router = (0,router_namespaceObject.useRouter)();
    const { productId } = router?.query;
    const { data } = useGetSingleProductQuery(productId);
    console.log("data", data);
    // const product = data?.data
    const { image, name, rating, description, status, category, price, keyFeature } = product;
    const { data: reviews } = useGetAllReviewsQuery(null);
    console.log(product);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "h-screen relative",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "w-full flex justify-center mt-6 ",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "relative flex  flex-col w-full justify-center max-w-[55rem] md:flex-row rounded-sm bg-white bg-clip-border text-gray-700 shadow-md",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "relative m-0 md:w-2/5  flex justify-center shrink-0 overflow-hidden rounded-sm rounded-r-none bg-white bg-clip-border text-gray-700",
                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                width: 300,
                                height: 400,
                                alt: "image",
                                className: "max-w-full max-h-[400px]",
                                src: `${image}`
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "p-6 flex flex-col justify-center w-full",
                            children: [
                                "product name",
                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                    className: "mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased",
                                    children: name
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: " flex gap-x-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                            color: "blue-gray",
                                            className: "flex items-center gap-1.5 font-normal ",
                                            children: [
                                                "Rating:",
                                                /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                    xmlns: "http:www.w3.org/2000/svg",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    className: "-mt-0.5 h-5 w-5 text-yellow-700",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                        fillRule: "evenodd",
                                                        d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z",
                                                        clipRule: "evenodd"
                                                    })
                                                }),
                                                rating
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                            color: "blue-gray",
                                            className: "flex items-center gap-1.5 font-normal ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: "Average: "
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                    xmlns: "http:www.w3.org/2000/svg",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    className: "-mt-0.5 h-5 w-5 text-yellow-700",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                        fillRule: "evenodd",
                                                        d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z",
                                                        clipRule: "evenodd"
                                                    })
                                                }),
                                                rating - 0.8
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: " flex space-x-2",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        className: "mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased",
                                        children: category
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: " flex space-x-2",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        className: "mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased",
                                        children: price
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: " flex space-x-2",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        className: "mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased",
                                        children: status
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "my-1",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "font-semibold",
                                            children: "Key Features"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                            children: [
                                                "Model:",
                                                keyFeature?.model
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                            children: [
                                                "speed:",
                                                keyFeature?.speed
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: description
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            reviews?.data.length > 0 ? (reviews?.data?.map((review, i)=>{
                return /*#__PURE__*/ jsx_runtime.jsx(components_SingleReviewCard, {
                    review: review
                }, i);
            })) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: " flex justify-center mt-5 text-2xl font-sans font-bold",
                children: /*#__PURE__*/ jsx_runtime.jsx("h1", {
                    children: "No Review Yet, Please add"
                })
            })
        ]
    });
};
/* harmony default export */ const _productId_ = (ProductDetails);
const getStaticPaths = async ()=>{
    const res = await fetch(`https://pc-builder-backend-omega.vercel.app/api/v1/products`);
    const products = await res.json();
    const paths = products?.data?.map((product)=>({
            params: {
                productId: product._id
            }
        }));
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async (context)=>{
    const { params } = context;
    // const res = await fetch(`http://localhost:5000/api/v1/products/${params?.productId}`)
    const res = await fetch(`https://pc-builder-backend-omega.vercel.app/api/v1/products/${params.productId}`);
    const data = await res.json();
    return {
        props: {
            product: data.data
        }
    };
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2FproductDetailsPage%2F%5BproductId%5D&absolutePagePath=private-next-pages%2FproductDetailsPage%2F%5BproductId%5D.js&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2FproductDetailsPage_2F_5BproductId_5D_absolutePagePath_private_next_pages_2FproductDetailsPage_2F_5BproductId_5D_js_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(_productId_namespaceObject, "default"));

        // Re-export methods.
        const next_route_loaderpage_2FproductDetailsPage_2F_5BproductId_5D_absolutePagePath_private_next_pages_2FproductDetailsPage_2F_5BproductId_5D_js_preferredRegion_middlewareConfig_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(_productId_namespaceObject, "getStaticProps")
        const next_route_loaderpage_2FproductDetailsPage_2F_5BproductId_5D_absolutePagePath_private_next_pages_2FproductDetailsPage_2F_5BproductId_5D_js_preferredRegion_middlewareConfig_e30_3D_getStaticPaths = (0,helpers/* hoist */.l)(_productId_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(_productId_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(_productId_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_productId_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_productId_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_productId_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_productId_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_productId_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_productId_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/productDetailsPage/[productId]","pathname":"/productDetailsPage/[productId]","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: _productId_namespaceObject })
        
        
    

/***/ }),

/***/ 619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h: () => (/* binding */ api)
});

;// CONCATENATED MODULE: external "@reduxjs/toolkit/query/react"
const react_namespaceObject = require("@reduxjs/toolkit/query/react");
;// CONCATENATED MODULE: ./src/redux/api/apiSlice.js

const api = (0,react_namespaceObject.createApi)({
    reducerPath: "api",
    baseQuery: (0,react_namespaceObject.fetchBaseQuery)({
        baseUrl: `https://pc-builder-backend-omega.vercel.app/api/v1`
    }),
    endpoints: ()=>({})
});


/***/ }),

/***/ 4715:
/***/ ((module) => {

module.exports = require("@material-tailwind/react");

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

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 167:
/***/ ((__unused_webpack_module, exports) => {



exports._ = exports._interop_require_default = _interop_require_default;
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [812,636,675], () => (__webpack_exec__(1586)));
module.exports = __webpack_exports__;

})();