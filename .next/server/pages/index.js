"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_js_preferredRegion_middlewareConfig_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_js_preferredRegion_middlewareConfig_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/index.js
var pages_namespaceObject = {};
__webpack_require__.r(pages_namespaceObject);
__webpack_require__.d(pages_namespaceObject, {
  "default": () => (Home),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/components/ProductCard.js
var ProductCard = __webpack_require__(214);
// EXTERNAL MODULE: external "@material-tailwind/react"
var react_ = __webpack_require__(4715);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/FeaturedCard.js



function FeaturedCard() {
    const FeaturedItems = [
        {
            id: 1,
            title: "Processor",
            image: "https://www.startech.com.bd/image/cache/catalog/processor/amd/ryzen-3-3200g/ryzen-3-3200g-3-500x500.jpg"
        },
        {
            id: 2,
            title: "Monitor",
            image: "https://www.startech.com.bd/image/cache/catalog/monitor/walton/wd215v04/wd215v04-01-500x500.webp"
        },
        {
            id: 3,
            title: "MotherBoard",
            image: "https://www.startech.com.bd/image/cache/catalog/Motherboard/Gigabyte/Gigabyte%20GA-H110M%20S2PH-DDR4-500x500.jpg"
        },
        {
            id: 4,
            title: "PowerSupply",
            image: "https://www.startech.com.bd/image/cache/catalog/power-supply/Antec/neoeco-gold-650w/neoeco-gold-650w-01-500x500.webp"
        },
        {
            id: 5,
            title: "Ram",
            image: "https://www.startech.com.bd/image/cache/catalog/ram/lexar/16gb-ddr4-3200mhz/16gb-ddr4-3200mhz-01-500x500.webp"
        },
        {
            id: 6,
            title: "StorageUnit",
            image: "https://www.startech.com.bd/image/cache/catalog/server-accessories/ssd/dell/ssd-240gb-500x500.jpg"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "my-7",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "flex justify-center my-4 text-2xl",
                children: /*#__PURE__*/ jsx_runtime.jsx("h1", {
                    className: "font-semibold font-sans ",
                    children: "Features"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center space-y-6",
                children: FeaturedItems.map((item)=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: `/products/${item?.title}`,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_.Card, {
                            shadow: false,
                            className: "relative grid h-[12rem]  w-[17rem] items-end justify-center overflow-hidden text-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(react_.CardHeader, {
                                    floated: false,
                                    shadow: false,
                                    color: "transparent",
                                    style: {
                                        backgroundImage: `url('${item.image}')`
                                    },
                                    className: "absolute inset-0 m-0 h-full w-full rounded-none  bg-cover object-cover bg-center",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(react_.CardBody, {
                                    className: "relative py-1 px-6 md:px-12",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(react_.Typography, {
                                        variant: "h2",
                                        color: "white",
                                        className: "mb-6 font-medium leading-[1.5]",
                                        children: item?.title
                                    })
                                })
                            ]
                        })
                    }, item?.id))
            })
        ]
    });
}

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Banner.js


const Banner = ()=>{
    const backgroundRadialGradientStyles = {
        backgroundColor: "hsl(218, 41%, 15%)",
        backgroundImage: "radial-gradient(650px circle at 0% 0%, hsl(218, 41%, 35%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100%), radial-gradient(1250px circle at 100% 100%, hsl(218, 41%, 45%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100%)"
    };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            className: "background-radial-gradient mb-4 mt-4",
            style: backgroundRadialGradientStyles,
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "px-6 py-12 text-center md:px-12 lg:text-left",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid items-center gap-12 lg:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mt-12 lg:mt-0",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                        className: "mt-0 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[hsl(218,81%,95%)]",
                                        children: [
                                            "The best offer ",
                                            /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "text-[hsl(218,81%,75%)]",
                                                children: "for your DeskTop"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        className: "mb-2 bg-white inline-block rounded bg-neutral-50 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] md:mr-2 md:mb-0",
                                        "data-te-ripple-init": true,
                                        "data-te-ripple-color": "light",
                                        href: "#!",
                                        role: "button",
                                        children: "Get started"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        className: "inline-block font-sans font-semibold text-white rounded px-12 pt-4 pb-3.5 text-sm  uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-200 focus:text-neutral-200 focus:outline-none focus:ring-0 active:text-neutral-300",
                                        "data-te-ripple-init": true,
                                        "data-te-ripple-color": "light",
                                        href: "#!",
                                        role: "button",
                                        children: "Learn more"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "mb-12 lg:mb-0 flex justify-center",
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: "https://www.startech.com.bd/image/cache/catalog/desktop-pc/desktop-offer/core-i9-13900k-gaming-desktop-pc-0001-500x500.webp",
                                    className: "w-full lg:w-10/12 h-[400px] rounded-lg shadow-lg dark:shadow-black/20",
                                    alt: ""
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const components_Banner = (Banner);

;// CONCATENATED MODULE: ./src/pages/index.js




function Home({ products }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(components_Banner, {}),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-3",
                children: products.slice(0, 6).map((product, i)=>/*#__PURE__*/ jsx_runtime.jsx(ProductCard/* default */.Z, {
                        product: product
                    }, i))
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime.jsx(FeaturedCard, {})
            })
        ]
    });
}
const getStaticProps = async ()=>{
    const res = await fetch(`https://pc-builder-backend-omega.vercel.app/api/v1/products`);
    const data = await res.json();
    return {
        props: {
            products: data?.data
        }
    };
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F&absolutePagePath=private-next-pages%2Findex.js&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_js_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(pages_namespaceObject, "default"));

        // Re-export methods.
        const next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_js_preferredRegion_middlewareConfig_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(pages_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(pages_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/index","pathname":"/","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: pages_namespaceObject })
        
        
    

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [812,664,636,675,214], () => (__webpack_exec__(1808)));
module.exports = __webpack_exports__;

})();