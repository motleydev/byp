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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/client */ \"./utils/client.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_client__WEBPACK_IMPORTED_MODULE_2__]);\n_utils_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/jmartin/Development/Hasura/Demos/byp/www/pages/_app.tsx\",\n        lineNumber: 6,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(MyApp));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUVRO0FBRXZDLFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxFQUFFO0lBQ2pELHFCQUFPLDhEQUFDRCxTQUFTO1FBQUUsR0FBR0MsU0FBUzs7Ozs7WUFBSSxDQUFDO0NBQ3JDO0FBRUQsaUVBQWVILHlEQUFRLENBQUNDLEtBQUssQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3d3Ly4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB3aXRoVXJxbCBmcm9tIFwiLi4vdXRpbHMvY2xpZW50XCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhVcnFsKE15QXBwKTtcbiJdLCJuYW1lcyI6WyJ3aXRoVXJxbCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./utils/client.ts":
/*!*************************!*\
  !*** ./utils/client.ts ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _urql_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @urql/core */ \"@urql/core\");\n/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-urql */ \"next-urql\");\n/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_urql__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_ws__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-ws */ \"graphql-ws\");\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! urql */ \"urql\");\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_urql_core__WEBPACK_IMPORTED_MODULE_0__, graphql_ws__WEBPACK_IMPORTED_MODULE_2__]);\n([_urql_core__WEBPACK_IMPORTED_MODULE_0__, graphql_ws__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst isServerSide = \"undefined\" === \"undefined\";\nconst wsClient = ()=>(0,graphql_ws__WEBPACK_IMPORTED_MODULE_2__.createClient)({\n        url: \"http://localhost:8080/v1/graphql\".replace(\"http\", \"ws\"),\n        connectionParams: async ()=>{\n            return isServerSide ? {\n                headers: {\n                    \"x-hasura-admin-secret\": process.env.HASURA_ADMIN_SECRET\n                }\n            } : {};\n        }\n    });\nconst noopExchange = ({ forward  })=>{\n    return (operations$)=>{\n        const operationResult$ = forward(operations$);\n        return operationResult$;\n    };\n};\nconst subscribeOrNoopExchange = ()=>isServerSide ? noopExchange : (0,_urql_core__WEBPACK_IMPORTED_MODULE_0__.subscriptionExchange)({\n        forwardSubscription: (operation)=>{\n            return {\n                subscribe: (sink)=>({\n                        unsubscribe: wsClient().subscribe(operation, sink)\n                    })\n            };\n        }\n    });\nconst clientConfig = {\n    url: \"http://localhost:8080/v1/graphql\",\n    fetchOptions: ()=>{\n        return isServerSide ? {\n            headers: {\n                \"x-hasura-admin-secret\": process.env.HASURA_ADMIN_SECRET\n            }\n        } : {};\n    },\n    exchanges: [\n        ..._urql_core__WEBPACK_IMPORTED_MODULE_0__.defaultExchanges,\n        subscribeOrNoopExchange()\n    ]\n};\nconst client = (0,urql__WEBPACK_IMPORTED_MODULE_3__.createClient)(clientConfig);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_urql__WEBPACK_IMPORTED_MODULE_1__.withUrqlClient)((ssrExchange)=>{\n    const exchanges = [\n        ...clientConfig.exchanges,\n        ssrExchange\n    ];\n    return {\n        ...client,\n        exchanges\n    };\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFJb0I7QUFDdUI7QUFDaUI7QUFDWjtBQUVoRCxNQUFNSyxZQUFZLEdBQUcsV0FBYSxLQUFLLFdBQVc7QUFFbEQsTUFBTUMsUUFBUSxHQUFHLElBQ2ZGLHdEQUFjLENBQUM7UUFDYkcsR0FBRyxFQUFFLGtDQUFnRCxDQUFZSSxPQUFPLENBQ3RFLE1BQU0sRUFDTixJQUFJLENBQ0w7UUFDREMsZ0JBQWdCLEVBQUUsVUFBWTtZQUM1QixPQUFPUCxZQUFZLEdBQ2Y7Z0JBQ0VRLE9BQU8sRUFBRTtvQkFDUCx1QkFBdUIsRUFBRUwsT0FBTyxDQUFDQyxHQUFHLENBQ2pDSyxtQkFBbUI7aUJBQ3ZCO2FBQ0YsR0FDRCxFQUFFLENBQUM7U0FDUjtLQUNGLENBQUM7QUFFSixNQUFNQyxZQUFZLEdBQUcsQ0FBQyxFQUFFQyxPQUFPLEdBQWlCLEdBQWlCO0lBQy9ELE9BQU8sQ0FBQ0MsV0FBVyxHQUFLO1FBQ3RCLE1BQU1DLGdCQUFnQixHQUFHRixPQUFPLENBQUNDLFdBQVcsQ0FBQztRQUM3QyxPQUFPQyxnQkFBZ0IsQ0FBQztLQUN6QixDQUFDO0NBQ0g7QUFFRCxNQUFNQyx1QkFBdUIsR0FBRyxJQUM5QmQsWUFBWSxHQUNSVSxZQUFZLEdBQ1pmLGdFQUFvQixDQUFDO1FBQ25Cb0IsbUJBQW1CLEVBQUUsQ0FBQ0MsU0FBUyxHQUFLO1lBQ2xDLE9BQU87Z0JBQ0xDLFNBQVMsRUFBRSxDQUFDQyxJQUFJLEdBQUssQ0FBQzt3QkFDcEJDLFdBQVcsRUFBRWxCLFFBQVEsRUFBRSxDQUFDZ0IsU0FBUyxDQUFDRCxTQUFTLEVBQUVFLElBQUksQ0FBQztxQkFDbkQsQ0FBQzthQUNILENBQUM7U0FDSDtLQUNGLENBQUM7QUFFUixNQUFNRSxZQUFZLEdBQUc7SUFDbkJsQixHQUFHLEVBQUVDLGtDQUErQztJQUNwRGtCLFlBQVksRUFBRSxJQUFNO1FBQ2xCLE9BQU9yQixZQUFZLEdBQ2Y7WUFDRVEsT0FBTyxFQUFFO2dCQUNQLHVCQUF1QixFQUFFTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssbUJBQW1CO2FBQ3pEO1NBQ0YsR0FDRCxFQUFFLENBQUM7S0FDUjtJQUNEYSxTQUFTLEVBQUU7V0FBSTFCLHdEQUFnQjtRQUFFa0IsdUJBQXVCLEVBQUU7S0FBQztDQUM1RDtBQUVNLE1BQU1TLE1BQU0sR0FBR3pCLGtEQUFZLENBQUNzQixZQUFZLENBQUMsQ0FBQztBQUVqRCxpRUFBZXZCLHlEQUFjLENBQUMsQ0FBQzJCLFdBQVcsR0FBSztJQUM3QyxNQUFNRixTQUFTLEdBQUc7V0FBSUYsWUFBWSxDQUFDRSxTQUFTO1FBQUVFLFdBQVc7S0FBQztJQUMxRCxPQUFPO1FBQUUsR0FBR0QsTUFBTTtRQUFFRCxTQUFTO0tBQUUsQ0FBQztDQUNqQyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93d3cvLi91dGlscy9jbGllbnQudHM/ODFlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBzdWJzY3JpcHRpb25FeGNoYW5nZSxcbiAgZGVmYXVsdEV4Y2hhbmdlcyxcbiAgRXhjaGFuZ2VJbnB1dCxcbn0gZnJvbSBcIkB1cnFsL2NvcmVcIjtcbmltcG9ydCB7IHdpdGhVcnFsQ2xpZW50IH0gZnJvbSBcIm5leHQtdXJxbFwiO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IGFzIGNyZWF0ZVdTQ2xpZW50IH0gZnJvbSBcImdyYXBocWwtd3NcIjtcbmltcG9ydCB7IEV4Y2hhbmdlSU8sIGNyZWF0ZUNsaWVudCB9IGZyb20gXCJ1cnFsXCI7XG5cbmNvbnN0IGlzU2VydmVyU2lkZSA9IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCI7XG5cbmNvbnN0IHdzQ2xpZW50ID0gKCkgPT5cbiAgY3JlYXRlV1NDbGllbnQoe1xuICAgIHVybDogKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hBU1VSQV9QUk9KRUNUX0VORFBPSU5UIGFzIHN0cmluZykucmVwbGFjZShcbiAgICAgIFwiaHR0cFwiLFxuICAgICAgXCJ3c1wiXG4gICAgKSxcbiAgICBjb25uZWN0aW9uUGFyYW1zOiBhc3luYyAoKSA9PiB7XG4gICAgICByZXR1cm4gaXNTZXJ2ZXJTaWRlXG4gICAgICAgID8ge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICBcIngtaGFzdXJhLWFkbWluLXNlY3JldFwiOiBwcm9jZXNzLmVudlxuICAgICAgICAgICAgICAgIC5IQVNVUkFfQURNSU5fU0VDUkVUIGFzIHN0cmluZyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICA6IHt9O1xuICAgIH0sXG4gIH0pO1xuXG5jb25zdCBub29wRXhjaGFuZ2UgPSAoeyBmb3J3YXJkIH06IEV4Y2hhbmdlSW5wdXQpOiBFeGNoYW5nZUlPID0+IHtcbiAgcmV0dXJuIChvcGVyYXRpb25zJCkgPT4ge1xuICAgIGNvbnN0IG9wZXJhdGlvblJlc3VsdCQgPSBmb3J3YXJkKG9wZXJhdGlvbnMkKTtcbiAgICByZXR1cm4gb3BlcmF0aW9uUmVzdWx0JDtcbiAgfTtcbn07XG5cbmNvbnN0IHN1YnNjcmliZU9yTm9vcEV4Y2hhbmdlID0gKCkgPT5cbiAgaXNTZXJ2ZXJTaWRlXG4gICAgPyBub29wRXhjaGFuZ2VcbiAgICA6IHN1YnNjcmlwdGlvbkV4Y2hhbmdlKHtcbiAgICAgICAgZm9yd2FyZFN1YnNjcmlwdGlvbjogKG9wZXJhdGlvbikgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWJzY3JpYmU6IChzaW5rKSA9PiAoe1xuICAgICAgICAgICAgICB1bnN1YnNjcmliZTogd3NDbGllbnQoKS5zdWJzY3JpYmUob3BlcmF0aW9uLCBzaW5rKSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuY29uc3QgY2xpZW50Q29uZmlnID0ge1xuICB1cmw6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hBU1VSQV9QUk9KRUNUX0VORFBPSU5UIGFzIHN0cmluZyxcbiAgZmV0Y2hPcHRpb25zOiAoKSA9PiB7XG4gICAgcmV0dXJuIGlzU2VydmVyU2lkZVxuICAgICAgPyB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJ4LWhhc3VyYS1hZG1pbi1zZWNyZXRcIjogcHJvY2Vzcy5lbnYuSEFTVVJBX0FETUlOX1NFQ1JFVCBhcyBzdHJpbmcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgOiB7fTtcbiAgfSxcbiAgZXhjaGFuZ2VzOiBbLi4uZGVmYXVsdEV4Y2hhbmdlcywgc3Vic2NyaWJlT3JOb29wRXhjaGFuZ2UoKV0sXG59O1xuXG5leHBvcnQgY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KGNsaWVudENvbmZpZyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhVcnFsQ2xpZW50KChzc3JFeGNoYW5nZSkgPT4ge1xuICBjb25zdCBleGNoYW5nZXMgPSBbLi4uY2xpZW50Q29uZmlnLmV4Y2hhbmdlcywgc3NyRXhjaGFuZ2VdO1xuICByZXR1cm4geyAuLi5jbGllbnQsIGV4Y2hhbmdlcyB9O1xufSk7XG4iXSwibmFtZXMiOlsic3Vic2NyaXB0aW9uRXhjaGFuZ2UiLCJkZWZhdWx0RXhjaGFuZ2VzIiwid2l0aFVycWxDbGllbnQiLCJjcmVhdGVDbGllbnQiLCJjcmVhdGVXU0NsaWVudCIsImlzU2VydmVyU2lkZSIsIndzQ2xpZW50IiwidXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0hBU1VSQV9QUk9KRUNUX0VORFBPSU5UIiwicmVwbGFjZSIsImNvbm5lY3Rpb25QYXJhbXMiLCJoZWFkZXJzIiwiSEFTVVJBX0FETUlOX1NFQ1JFVCIsIm5vb3BFeGNoYW5nZSIsImZvcndhcmQiLCJvcGVyYXRpb25zJCIsIm9wZXJhdGlvblJlc3VsdCQiLCJzdWJzY3JpYmVPck5vb3BFeGNoYW5nZSIsImZvcndhcmRTdWJzY3JpcHRpb24iLCJvcGVyYXRpb24iLCJzdWJzY3JpYmUiLCJzaW5rIiwidW5zdWJzY3JpYmUiLCJjbGllbnRDb25maWciLCJmZXRjaE9wdGlvbnMiLCJleGNoYW5nZXMiLCJjbGllbnQiLCJzc3JFeGNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/client.ts\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-urql":
/*!****************************!*\
  !*** external "next-urql" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-urql");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "urql":
/*!***********************!*\
  !*** external "urql" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("urql");

/***/ }),

/***/ "@urql/core":
/*!*****************************!*\
  !*** external "@urql/core" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = import("@urql/core");;

/***/ }),

/***/ "graphql-ws":
/*!*****************************!*\
  !*** external "graphql-ws" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = import("graphql-ws");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();