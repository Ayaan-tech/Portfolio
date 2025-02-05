"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/HomePage.tsx":
/*!*****************************************!*\
  !*** ./src/app/components/HomePage.tsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _barrel_optimize_names_GitlabIcon_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=GitlabIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/gitlab.js\");\n/* harmony import */ var _barrel_optimize_names_Linkedin_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Linkedin!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/linkedin.js\");\n/* harmony import */ var _barrel_optimize_names_Instagram_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Instagram!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/instagram.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction HomePage(param) {\n    let { onNavigate } = param;\n    _s();\n    const [profile, setProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        image: \"\",\n        github: \"\",\n        instagram: \"\",\n        linkedin: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"HomePage.useEffect\": ()=>{\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:5000/profile\").then({\n                \"HomePage.useEffect\": (response)=>{\n                    setProfile(response.data);\n                }\n            }[\"HomePage.useEffect\"]).catch({\n                \"HomePage.useEffect\": (error)=>console.error(\"Error fetching profile:\", error)\n            }[\"HomePage.useEffect\"]);\n        }\n    }[\"HomePage.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center min-h-screen p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                src: profile.image,\n                alt: profile.name,\n                width: 200,\n                height: 200,\n                className: \"rounded-lg mb-8 border-4 border-white\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ayaan\\\\Desktop\\\\Portfolio\\\\frontend\\\\src\\\\app\\\\components\\\\HomePage.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold mb-4\",\n                children: profile.name || \"Your Name\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ayaan\\\\Desktop\\\\Portfolio\\\\frontend\\\\src\\\\app\\\\components\\\\HomePage.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row space-x-4 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: profile.github,\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        className: \"flex items-center mb-8 hover:text-gray-300 transition-colors\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_GitlabIcon_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            className: \"mr-2\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ayaan\\\\Desktop\\\\Portfolio\\\\frontend\\\\src\\\\app\\\\components\\\\HomePage.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ayaan\\\\Desktop\\\\Portfolio\\\\frontend\\\\src\\\\app\\\\components\\\\HomePage.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: profile.instagram,\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        className: \"flex items-center mb-8 hover:text-gray-300 transition-colors\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Instagram_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            className: \"mr-2\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ayaan\\\\Desktop\\\\Portfolio\\\\frontend\\\\src\\\\app\\\\components\\\\HomePage.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ayaan\\\\Desktop\\\\Portfolio\\\\frontend\\\\src\\\\app\\\\components\\\\HomePage.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: profile.linkedin,\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        className: \"flex items-center mb-8 hover:text-gray-300 transition-colors\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Linkedin_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            className: \"mr-2\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ayaan\\\\Desktop\\\\Portfolio\\\\frontend\\\\src\\\\app\\\\components\\\\HomePage.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ayaan\\\\Desktop\\\\Portfolio\\\\frontend\\\\src\\\\app\\\\components\\\\HomePage.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ayaan\\\\Desktop\\\\Portfolio\\\\frontend\\\\src\\\\app\\\\components\\\\HomePage.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                onClick: onNavigate,\n                className: \"text-lg px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors\",\n                children: \"View My Skills\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ayaan\\\\Desktop\\\\Portfolio\\\\frontend\\\\src\\\\app\\\\components\\\\HomePage.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ayaan\\\\Desktop\\\\Portfolio\\\\frontend\\\\src\\\\app\\\\components\\\\HomePage.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"gZCR3vDu7uGxwdrIbDNzV7Ds9PE=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ2I7QUFDcUI7QUFDWjtBQUNDO0FBQ087QUFFdEI7QUFHWCxTQUFTUyxTQUFTLEtBQTZCO1FBQTdCLEVBQUVDLFVBQVUsRUFBaUIsR0FBN0I7O0lBQy9CLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztRQUNyQ1ksTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsV0FBVztRQUNYQyxVQUFVO0lBQ1o7SUFFQWpCLGdEQUFTQTs4QkFBQztZQUNSUSw2Q0FBS0EsQ0FBQ1UsR0FBRyxDQUFDLGlDQUNQQyxJQUFJO3NDQUFDQyxDQUFBQTtvQkFDSlIsV0FBV1EsU0FBU0MsSUFBSTtnQkFDMUI7cUNBQ0NDLEtBQUs7c0NBQUNDLENBQUFBLFFBQVNDLFFBQVFELEtBQUssQ0FBQywyQkFBMkJBOztRQUM3RDs2QkFBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDeEIsa0RBQUtBO2dCQUNKeUIsS0FBS2hCLFFBQVFHLEtBQUs7Z0JBQ2xCYyxLQUFLakIsUUFBUUUsSUFBSTtnQkFDakJnQixPQUFPO2dCQUNQQyxRQUFRO2dCQUNSSixXQUFVOzs7Ozs7MEJBR1osOERBQUNLO2dCQUFHTCxXQUFVOzBCQUEyQmYsUUFBUUUsSUFBSSxJQUFJOzs7Ozs7MEJBQ3pELDhEQUFDWTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNNO3dCQUFFQyxNQUFNdEIsUUFBUUksTUFBTTt3QkFBRW1CLFFBQU87d0JBQVNDLEtBQUk7d0JBQXNCVCxXQUFVO2tDQUMzRSw0RUFBQ3RCLHNGQUFNQTs0QkFBQ3NCLFdBQVU7Ozs7Ozs7Ozs7O2tDQUVwQiw4REFBQ007d0JBQUVDLE1BQU10QixRQUFRSyxTQUFTO3dCQUFFa0IsUUFBTzt3QkFBU0MsS0FBSTt3QkFBc0JULFdBQVU7a0NBQzlFLDRFQUFDcEIscUZBQVNBOzRCQUFDb0IsV0FBVTs7Ozs7Ozs7Ozs7a0NBRXZCLDhEQUFDTTt3QkFBRUMsTUFBTXRCLFFBQVFNLFFBQVE7d0JBQUVpQixRQUFPO3dCQUFTQyxLQUFJO3dCQUFzQlQsV0FBVTtrQ0FDN0UsNEVBQUNyQixvRkFBUUE7NEJBQUNxQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHeEIsOERBQUNuQix5REFBTUE7Z0JBQUM2QixTQUFTMUI7Z0JBQVlnQixXQUFVOzBCQUFvRTs7Ozs7Ozs7Ozs7O0FBS2pIO0dBNUN3QmpCO0tBQUFBIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEF5YWFuXFxEZXNrdG9wXFxQb3J0Zm9saW9cXGZyb250ZW5kXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcSG9tZVBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IEdpdGxhYkljb24gYXMgR2l0SHViIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rZWRpbiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcclxuaW1wb3J0IHsgSW5zdGFncmFtIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSh7IG9uTmF2aWdhdGUgfTogSG9tZVBhZ2VQcm9wcykge1xyXG4gIGNvbnN0IFtwcm9maWxlLCBzZXRQcm9maWxlXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBpbWFnZTogXCJcIixcclxuICAgIGdpdGh1YjogXCJcIixcclxuICAgIGluc3RhZ3JhbTogXCJcIixcclxuICAgIGxpbmtlZGluOiBcIlwiXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvcHJvZmlsZVwiKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgc2V0UHJvZmlsZShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwcm9maWxlOlwiLCBlcnJvcikpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIHAtNFwiPlxyXG4gICAgICA8SW1hZ2VcclxuICAgICAgICBzcmM9e3Byb2ZpbGUuaW1hZ2UgfVxyXG4gICAgICAgIGFsdD17cHJvZmlsZS5uYW1lICB9XHJcbiAgICAgICAgd2lkdGg9ezIwMH1cclxuICAgICAgICBoZWlnaHQ9ezIwMH1cclxuICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIG1iLTggYm9yZGVyLTQgYm9yZGVyLXdoaXRlXCJcclxuICAgICAgLz5cclxuICAgICAgXHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItNFwiPntwcm9maWxlLm5hbWUgfHwgXCJZb3VyIE5hbWVcIn08L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgc3BhY2UteC00IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxhIGhyZWY9e3Byb2ZpbGUuZ2l0aHVifSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWItOCBob3Zlcjp0ZXh0LWdyYXktMzAwIHRyYW5zaXRpb24tY29sb3JzXCI+XHJcbiAgICAgICAgICA8R2l0SHViIGNsYXNzTmFtZT1cIm1yLTJcIiAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YSBocmVmPXtwcm9maWxlLmluc3RhZ3JhbX0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1iLTggaG92ZXI6dGV4dC1ncmF5LTMwMCB0cmFuc2l0aW9uLWNvbG9yc1wiPlxyXG4gICAgICAgICAgPEluc3RhZ3JhbSBjbGFzc05hbWU9XCJtci0yXCIgLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGEgaHJlZj17cHJvZmlsZS5saW5rZWRpbn0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1iLTggaG92ZXI6dGV4dC1ncmF5LTMwMCB0cmFuc2l0aW9uLWNvbG9yc1wiPlxyXG4gICAgICAgICAgPExpbmtlZGluIGNsYXNzTmFtZT1cIm1yLTJcIiAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxCdXR0b24gb25DbGljaz17b25OYXZpZ2F0ZX0gY2xhc3NOYW1lPVwidGV4dC1sZyBweC02IHB5LTMgYmctYmx1ZS02MDAgaG92ZXI6YmctYmx1ZS03MDAgdHJhbnNpdGlvbi1jb2xvcnNcIj5cclxuICAgICAgICBWaWV3IE15IFNraWxsc1xyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJHaXRsYWJJY29uIiwiR2l0SHViIiwiTGlua2VkaW4iLCJJbnN0YWdyYW0iLCJCdXR0b24iLCJheGlvcyIsIkhvbWVQYWdlIiwib25OYXZpZ2F0ZSIsInByb2ZpbGUiLCJzZXRQcm9maWxlIiwibmFtZSIsImltYWdlIiwiZ2l0aHViIiwiaW5zdGFncmFtIiwibGlua2VkaW4iLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgxIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/HomePage.tsx\n"));

/***/ })

});