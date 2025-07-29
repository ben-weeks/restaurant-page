/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/about-styles.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/about-styles.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.about {\n    display: flex;\n    flex-flow: column wrap;\n\n    gap: 2rem;\n}\n\n.about-title {\n    display: flex;\n    justify-content: center;\n\n    font-family: 'Merriweather', serif;\n    font-size: 3rem;\n}\n\n.about-intro,\n.about-mission {\n    background-color: var(--cream);\n    color: var(--navy);\n\n    border-radius: 1rem;\n\n    display: flex;\n    gap: 1rem;\n\n    padding: 1rem;\n}\n\n.about-chef {\n    width: 15rem;\n    height: auto;\n    border-radius: 0.5rem;\n}\n\n.about-intro-text,\n.about-intro-text strong {\n    font-size: 1.25rem;\n}\n\n.about-mission {\n    flex-flow: column wrap;\n}\n\n.about-mission-title,\n.about-location-title {\n    font-family: 'Merriweather', serif;\n    font-size: 1.75rem;\n}\n\n.about-location {\n    padding: 0 1rem;\n\n    display: flex;\n    flex-flow: column wrap;\n    gap: 1rem;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/stylesheets/about-styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/home-styles.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/home-styles.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.home {\n    display: flex;\n    flex-flow: column nowrap;\n}\n\n/* Hero */\n.home-hero {\n    position: relative;\n    color: black;\n}\n\n.home-hero-image {\n    width: 100%;\n    height: auto;\n\n    border-radius: 1rem;\n}\n\n.home-hero-content {\n    position: absolute;\n    top: 1rem;\n    left: 1.5rem;\n}\n\n.home-hero-title {\n    font-family: \"Merriweather\", serif;\n\n    max-width: 10ch;\n    font-size: 3rem;\n    text-shadow: 0 0 1rem var(--cream);\n}\n\n.home-hero-button {\n    background-color: var(--burnt-orange);\n    color: black;\n    padding: 0.5rem 0.75rem;\n    margin-top: 2rem;\n    border-radius: 2rem;\n}\n\n/* Menu */\n.home-menu {\n    z-index: -1;\n    margin-top: -2rem;\n    color: var(--navy);\n    background-color: var(--cream);\n\n    border-radius: 1rem;\n\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: center;\n}\n\n.home-menu-title {\n    font-size: 1.75rem;\n    font-family: 'Merriweather', serif;\n    margin-top: 3rem;\n    margin-bottom: 1rem;\n\n    font-weight: normal;\n}\n\n.home-menu-content {\n    margin: 1rem;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.home-menu-item {\n    display: flex;\n    flex-flow: column wrap;\n    justify-content: center;\n    align-items: center;\n}\n\n.home-menu-item-image {\n    width: 80%;\n    border-radius: 1rem;\n\n    box-shadow: 0 0 0.5rem var(--navy);\n}\n\n.home-menu-item-title {\n    font-family: 'Merriweather', serif;\n    font-size: 1.25rem;\n    font-weight: normal;\n    margin-top: 1rem;\n    margin-bottom: 0.25rem;\n}\n\n.home-menu-item-price {\n    font-size: 1.25rem;\n}\n\n.home-menu-view {\n    font-size: 1.25rem;\n    margin: 1rem 0;\n    color: var(--navy);\n\n    font-weight: normal;\n}\n\n.home-reviews-title {\n    margin: 2rem auto;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-family: 'Merriweather', serif;\n    font-size: 1.75rem;\n}\n\n.home-reviews-container {\n    display: flex;\n    justify-content: flex-end;\n\n    gap: 1rem;\n}\n\n.home-review {\n    padding: 1rem;\n    border-radius: 1rem;\n    \n    flex: 1;\n\n    display: flex;\n    flex-flow: column wrap;\n    gap: 1rem;\n\n    color: var(--navy);\n}\n\n.home-review-name {\n    font-weight: bold;\n}\n\n.home-review:nth-child(odd) {\n    background-color: var(--cream);\n    box-shadow: 0 0 0.25rem var(--cream);\n}\n\n.home-review:nth-child(even) {\n    background-color: var(--golden-yellow);\n    box-shadow: 0 0 0.25rem var(--golden-yellow);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/stylesheets/home-styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/main-styles.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/main-styles.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/address.svg */ \"./src/images/address.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/hours.svg */ \"./src/images/hours.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/phone.svg */ \"./src/images/phone.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/email.svg */ \"./src/images/email.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*, :root {\n    font-family: 'Open Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;\n    font-size: 16px;\n    \n    padding: 0;\n    margin: 0;\n\n    --navy: #0B2342;\n    --cream: #F8F2E7;\n    --golden-yellow: #FFC857;\n    --burnt-orange: #D57E00;\n    --charcoal: #333;\n}\n\nbody {\n    background-color: var(--navy);\n    color: var(--cream);\n}\n\n.header-content,\n.content,\n.footer-content {\n    width: clamp(400px, 60vw, 800px);\n    margin: 0 auto;\n}\n\n.header-content {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding: 1rem 0;\n}\n\n.header-title {\n    font-family: 'Merriweather', serif;\n    color: var(--golden-yellow);\n    font-size: 2rem;\n}\n\n.nav-list {\n    list-style: none;\n\n    display: flex;\n    gap: 2rem;\n}\n\nbutton {\n    appearance: none;\n    border: none;\n    background: none;\n\n    color: var(--cream);\n}\n\n.nav-button {\n    transition: 0.2s;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\n.content-end-bar {\n    margin: 2rem auto 1rem;\n\n    border-top: 2px solid var(--cream);\n    opacity: 0.2;\n}\n\n/* Footer */\n.footer-content {\n    display: grid;\n    grid-template: 2fr 3fr / repeat(3, 1fr);\n    column-gap: 1rem;\n\n    margin: 1rem auto;\n}\n\n.footer-content > div {\n    display: flex;\n    flex-flow: column nowrap;\n}\n\n.footer-title {\n    grid-column: 1 / -1;\n    grid-row-start: 1;\n\n    font-family: 'Merriweather', serif;\n    font-size: 1.25rem;\n    font-weight: bold;\n\n    color: var(--golden-yellow);\n}\n\n.footer-address::before {\n    content: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n.footer-hours::before {\n    content: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n\n.footer-contact > div {\n    display: flex;\n    align-items: center;\n}\n\n.footer-phone-number::before {\n    content: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n    margin-right: 0.5rem;\n    vertical-align: middle;\n}\n\n.footer-email::before {\n    content: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n    margin-right: 0.5rem;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/stylesheets/main-styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/menu-styles.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/menu-styles.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.menu {\n    background-color: var(--cream);\n    color: var(--navy);\n\n    padding: 2rem;\n\n    border-radius: 1rem;\n}\n\n.menu-heading {\n    display: flex;\n    flex-flow: column nowrap;\n\n    justify-content: center;\n    align-items: center;\n}\n\n.menu-title,\n.menu-subtitle {\n    font-size: 3rem;\n    font-family: 'Merriweather', serif;\n}\n\n.menu-subtitle {\n    font-size: 1.5rem;\n}\n\n.menu-content {\n    margin-top: 1.5rem;\n\n    display: grid;\n    grid-template: repeat(2, 1fr) / repeat(2, 1fr);\n    gap: 3rem;\n}\n\n.menu-section-title {\n    display: flex;\n    justify-content: center;\n    align-items: space-between;\n\n    font-size: 1.5rem;\n    font-family: 'Merriweather', serif;\n    \n    margin-bottom: 1rem;\n}\n\n.menu-section-item-list {\n    display: flex;\n    flex-flow: column wrap;\n\n    gap: 0.75rem;\n}\n\n.menu-section-item {\n    display: grid;\n    grid-template-columns: 5fr 1fr;\n}\n\n.menu-section-item-name,\n.menu-section-item-price {\n    font-weight: bold;\n}\n\n.menu-section-item-description {\n    font-size: 0.75rem;\n    font-style: italic;\n}\n\n.menu-section-item-price {\n    display: flex;\n    justify-content: flex-end;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/stylesheets/menu-styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/content/about.html":
/*!********************************!*\
  !*** ./src/content/about.html ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Imports\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/chef-francesco.png */ \"./src/images/chef-francesco.png\"), __webpack_require__.b);\n// Module\nvar code = `<div class=\"about-title\">About Us</div>\n<div class=\"about-intro\">\n    <img src=\"${___HTML_LOADER_IMPORT_0___}\" alt=\"A photograph of Head Chef Francesco\" class=\"about-chef\">\n    <div class=\"about-intro-text\">\n        At <strong>O Sabores de Azores</strong>, we are passionate about bringing the authentic\n        flavours of Portugal to your tastebuds. Founded by a loving Portuguese family with a deep passion\n        for traditional cuisine, our restaurant celebrates the rich culinary heritage of our homeland.\n        We always use the freshest ingredients and traditional recipes to create an unforgettable dining experience.\n    </div>\n</div>\n<div class=\"about-mission\">\n    <div class=\"about-mission-title\">Our Mission</div>\n    <div class=\"about-mission-text\">\n        Our mission is to provide a warm and welcoming atmosphere where guests can enjoy genuine Portuguese cuisine\n        while experiencing the spirit and hospitality of Portugal. Additionally, head chef Francesco works diligently to\n        maintain an accommodating menu, allowing everyone to enjoy what <strong>O Sabores de Azores</strong> has to offer.\n    </div>\n</div>\n<div class=\"about-location\">\n    <div class=\"about-location-title\">Our Location</div>\n    <div class=\"about-location-text\">\n        Located in the heart of Ponta Delgada on the island of São Miguel, our restaurant is the perfect place for casual\n        meals, family gatherings, and special occasions. We look forward to welcoming you to <strong>O Sabores de Azores</strong>\n        to share the true taste of Portugal with you.\n    </div>\n</div>`;\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://restaurant-page/./src/content/about.html?\n}");

/***/ }),

/***/ "./src/content/about.js":
/*!******************************!*\
  !*** ./src/content/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutPage: () => (/* binding */ aboutPage)\n/* harmony export */ });\n/* harmony import */ var _about_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.html */ \"./src/content/about.html\");\n\n\nconst aboutPage = (function() {\n    const mainDiv = document.createElement(\"div\")\n    mainDiv.classList.add(\"about\")\n    mainDiv.innerHTML = _about_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n\n    return { mainDiv }\n})()\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/content/about.js?\n}");

/***/ }),

/***/ "./src/content/home.html":
/*!*******************************!*\
  !*** ./src/content/home.html ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Imports\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/pastel-de-nata.jpg */ \"./src/images/pastel-de-nata.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bacalhau.jpg */ \"./src/images/bacalhau.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/caldo-verde.jpg */ \"./src/images/caldo-verde.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/massa-sovada.jpg */ \"./src/images/massa-sovada.jpg\"), __webpack_require__.b);\n// Module\nvar code = `<div class=\"home-hero\">\n    <img src=\"${___HTML_LOADER_IMPORT_0___}\" alt=\"Pastel de nata\" class=\"home-hero-image\">\n    <div class=\"home-hero-content\">\n        <h1 class=\"home-hero-title\">Authentic Portuguese Flavours</h1>\n        <button class=\"home-hero-button\">RESERVE A TABLE</button>\n    </div>\n</div>\n<div class=\"home-menu\">\n    <h1 class=\"home-menu-title\">Our Menu</h1>\n    <div class=\"home-menu-content\">\n        <div class=\"home-menu-item\">\n            <img src=\"${___HTML_LOADER_IMPORT_1___}\" alt=\"Bacalhau\" class=\"home-menu-item-image\">\n            <h2 class=\"home-menu-item-title\">Bacalhau</h2>\n            <h3 class=\"home-menu-item-price\">\\$20</h3>\n        </div>\n        <div class=\"home-menu-item\">\n            <img src=\"${___HTML_LOADER_IMPORT_2___}\" alt=\"Caldo verde\" class=\"home-menu-item-image\">\n            <h2 class=\"home-menu-item-title\">Caldo Verde</h2>\n            <h3 class=\"home-menu-item-price\">\\$8</h3>\n        </div>\n        <div class=\"home-menu-item\">\n            <img src=\"${___HTML_LOADER_IMPORT_3___}\" alt=\"Massa sovada\" class=\"home-menu-item-image\">\n            <h2 class=\"home-menu-item-title\">Massa Sovada</h2>\n            <h3 class=\"home-menu-item-price\">\\$16</h3>\n        </div>\n    </div>\n    <button class=\"home-menu-view\">View Full Menu →</button>\n</div>\n<div class=\"home-reviews\">\n    <div class=\"home-reviews-title\">Our Customer Feedback</div>\n    <div class=\"home-reviews-container\">\n        <div class=\"home-review\">\n            <div class=\"home-review-quote\">\n                \"The best Portuguese food in Ponta Delgada!\"\n            </div>\n            <div class=\"home-review-name\">Tina B.</div>\n        </div>\n        <div class=\"home-review\">\n            <div class=\"home-review-quote\">\n                \"The serving staff were so friendly and accommodating!\"\n            </div>\n            <div class=\"home-review-name\">Amanda C.</div>\n        </div>\n        <div class=\"home-review\">\n            <div class=\"home-review-quote\">\n                \"Tastes like my mother's kitchen! You won't believe it 'till you try it.\"\n            </div>\n            <div class=\"home-review-name\">Lucia M.</div>\n        </div>\n    </div>\n</div>`;\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://restaurant-page/./src/content/home.html?\n}");

/***/ }),

/***/ "./src/content/home.js":
/*!*****************************!*\
  !*** ./src/content/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homePage: () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _home_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.html */ \"./src/content/home.html\");\n// image imports\n// import pastel_de_nata from \"../images/pastel-de-nata.jpg\"\n\n// html import\n\n\nconst homePage = (function() {\n    const mainDiv = document.createElement(\"div\")\n    mainDiv.classList.add(\"home\")\n    mainDiv.innerHTML = _home_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n\n    return { mainDiv }\n})()\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/content/home.js?\n}");

/***/ }),

/***/ "./src/content/menu.html":
/*!*******************************!*\
  !*** ./src/content/menu.html ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = `<div class=\"menu-heading\">\n    <h1 class=\"menu-title\">Menu</h1>\n    <h2 class=\"menu-subtitle\">O Sabores de Azores</h2>\n</div>\n<div class=\"menu-content\">\n    <!-- Starters -->\n    <div class=\"menu-section menu-starters\">\n        <div class=\"menu-section-title\">Starters</div>\n        <div class=\"menu-section-item-list\">\n            <div class=\"menu-section-item\">\n                <div class=\"menu-section-item-text\">\n                    <div class=\"menu-section-item-name\">Caldo verde</div>\n                    <div class=\"menu-section-item-description\">Traditional kale soup with potatoes, collard greens, and chorizo</div>\n                </div>\n                <div class=\"menu-section-item-price\">8</div>\n            </div>\n            <div class=\"menu-section-item\">\n                <div class=\"menu-section-item-text\">\n                    <div class=\"menu-section-item-name\">Amêijoas à bulhão pato</div>\n                    <div class=\"menu-section-item-description\">Clams served in garlic, olive oil, and white wine sauce</div>\n                </div>\n                <div class=\"menu-section-item-price\">16</div>\n            </div>\n            <div class=\"menu-section-item\">\n                <div class=\"menu-section-item-text\">\n                    <div class=\"menu-section-item-name\">Bolinhos de bacalhau</div>\n                    <div class=\"menu-section-item-description\">Crispy codfish fritters seasoned with parsley</div>\n                </div>\n                <div class=\"menu-section-item-price\">12</div>\n            </div>\n            <div class=\"menu-section-item\">\n                <div class=\"menu-section-item-text\">\n                    <div class=\"menu-section-item-name\">Sopa de pedra</div>\n                    <div class=\"menu-section-item-description\">Portuguese stone soup with beans, meats, and greens</div>\n                </div>\n                <div class=\"menu-section-item-price\">10</div>\n            </div>\n        </div>\n    </div>\n    <!-- Mains -->\n    <div class=\"menu-section menu-mains\">\n        <div class=\"menu-section-title\">Mains</div>\n        <div class=\"menu-section-item-list\">\n            <div class=\"menu-section-item\">\n                <div class=\"menu-section-item-text\">\n                    <div class=\"menu-section-item-name\">Bacalhau à brás</div>\n                    <div class=\"menu-section-item-description\">Shredded codfish with potatoes, onions, and eggs</div>\n                </div>\n                <div class=\"menu-section-item-price\">20</div>\n            </div>\n            <div class=\"menu-section-item\">\n                <div class=\"menu-section-item-text\">\n                    <div class=\"menu-section-item-name\">Frango piri-piri</div>\n                    <div class=\"menu-section-item-description\">Char-grilled chicken seasoned with spicy piri-piri sauce</div>\n                </div>\n                <div class=\"menu-section-item-price\">25</div>\n            </div>\n            <div class=\"menu-section-item\">\n                <div class=\"menu-section-item-text\">\n                    <div class=\"menu-section-item-name\">Cataplana de Marisco</div>\n                    <div class=\"menu-section-item-description\">Seafood stew with shrimp, clams, lobster, and fresh-caught grouper</div>\n                </div>\n                <div class=\"menu-section-item-price\">32</div>\n            </div>\n            <div class=\"menu-section-item\">\n                <div class=\"menu-section-item-text\">\n                    <div class=\"menu-section-item-name\">Cozido à Portuguesa</div>\n                    <div class=\"menu-section-item-description\">Traditional assortment of boiled vegetables, meats, and sausages</div>\n                </div>\n                <div class=\"menu-section-item-price\">36</div>\n            </div>\n            <div class=\"menu-section-item\">\n                <div class=\"menu-section-item-text\">\n                    <div class=\"menu-section-item-name\">Polvo à lagareiro</div>\n                    <div class=\"menu-section-item-description\">Baked octopus tentacles served with olive oil and crushed baby potatoes</div>\n                </div>\n                <div class=\"menu-section-item-price\">40</div>\n            </div>\n        </div>\n    </div>\n    <!-- Desserts -->\n    <div class=\"menu-section menu-desserts\">\n        <div class=\"menu-section-title\">Desserts</div>\n        <div class=\"menu-section-item-list\">\n            <div class=\"menu-section-item\">\n                <div class=\"menu-section-item-text\">\n                    <div class=\"menu-section-item-name\">Pastel de nata</div>\n                    <div class=\"menu-section-item-description\">Classic Portuguese custard tart</div>\n                </div>\n                <div class=\"menu-section-item-price\">7</div>\n            </div>\n            <div class=\"menu-section-item\">\n                <div class=\"menu-section-item-text\">\n                    <div class=\"menu-section-item-name\">Arroz doce</div>\n                    <div class=\"menu-section-item-description\">Creamy rice pudding topped with cinnamon</div>\n                </div>\n                <div class=\"menu-section-item-price\">6</div>\n            </div>\n            <div class=\"menu-section-item\">\n                <div class=\"menu-section-item-text\">\n                    <div class=\"menu-section-item-name\">Bolo de bolacha</div>\n                    <div class=\"menu-section-item-description\">Layered biscuit cake soaked with coffee and layered with buttercream</div>\n                </div>\n                <div class=\"menu-section-item-price\">10</div>\n            </div>\n            <div class=\"menu-section-item\">\n                <div class=\"menu-section-item-text\">\n                    <div class=\"menu-section-item-name\">Toucinho do ceu</div>\n                    <div class=\"menu-section-item-description\">Almond-based egg yolk tart</div>\n                </div>\n                <div class=\"menu-section-item-price\">9</div>\n            </div>\n            <div class=\"menu-section-item\">\n                <div class=\"menu-section-item-text\">\n                    <div class=\"menu-section-item-name\">Massa sovada</div>\n                    <div class=\"menu-section-item-description\">Famous Portuguese sweet bread served with butter</div>\n                </div>\n                <div class=\"menu-section-item-price\">8</div>\n            </div>\n        </div>\n    </div>\n    <!-- Drinks -->\n    <div class=\"menu-section menu-drinks\">\n        <div class=\"menu-section-title\">Drinks</div>\n        <div class=\"menu-section-item-list\">\n            <div class=\"menu-section-item\">\n                <div class=\"menu-section-item-text\">\n                    <div class=\"menu-section-item-name\">Vinho verde</div>\n                    <div class=\"menu-section-item-description\">Light, crisp green wine</div>\n                </div>\n                <div class=\"menu-section-item-price\">13</div>\n            </div>\n            <div class=\"menu-section-item\">\n                <div class=\"menu-section-item-text\">\n                    <div class=\"menu-section-item-name\">Douro red wine</div>\n                    <div class=\"menu-section-item-description\">Full-bodied red wine from the Douro valley</div>\n                </div>\n                <div class=\"menu-section-item-price\">16</div>\n            </div>\n            <div class=\"menu-section-item\">\n                <div class=\"menu-section-item-text\">\n                    <div class=\"menu-section-item-name\">Sangria Portuguesa</div>\n                    <div class=\"menu-section-item-description\">Red wine sangria with Portuguese fruits</div>\n                </div>\n                <div class=\"menu-section-item-price\">15</div>\n            </div>\n            <div class=\"menu-section-item\">\n                <div class=\"menu-section-item-text\">\n                    <div class=\"menu-section-item-name\">Ginjinha</div>\n                    <div class=\"menu-section-item-description\">Portuguese cherry liqueur made with infused ginja berries</div>\n                </div>\n                <div class=\"menu-section-item-price\">14</div>\n            </div>\n        </div>\n    </div>\n</div>`;\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://restaurant-page/./src/content/menu.html?\n}");

/***/ }),

/***/ "./src/content/menu.js":
/*!*****************************!*\
  !*** ./src/content/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuPage: () => (/* binding */ menuPage)\n/* harmony export */ });\n/* harmony import */ var _menu_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.html */ \"./src/content/menu.html\");\n\n\nconst menuPage = (function() {\n    const mainDiv = document.createElement(\"div\")\n    mainDiv.classList.add(\"menu\")\n    mainDiv.innerHTML = _menu_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n\n    return { mainDiv }\n})()\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/content/menu.js?\n}");

/***/ }),

/***/ "./src/images/address.svg":
/*!********************************!*\
  !*** ./src/images/address.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"329ea18d346e49806c6e.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/address.svg?\n}");

/***/ }),

/***/ "./src/images/bacalhau.jpg":
/*!*********************************!*\
  !*** ./src/images/bacalhau.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"7df120b74de99398ac08.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/bacalhau.jpg?\n}");

/***/ }),

/***/ "./src/images/caldo-verde.jpg":
/*!************************************!*\
  !*** ./src/images/caldo-verde.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"ac21c8ee1781e6592be9.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/caldo-verde.jpg?\n}");

/***/ }),

/***/ "./src/images/chef-francesco.png":
/*!***************************************!*\
  !*** ./src/images/chef-francesco.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"7bc4a45b365b0a29b214.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/chef-francesco.png?\n}");

/***/ }),

/***/ "./src/images/email.svg":
/*!******************************!*\
  !*** ./src/images/email.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"f042f89b2aa921fd51a9.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/email.svg?\n}");

/***/ }),

/***/ "./src/images/hours.svg":
/*!******************************!*\
  !*** ./src/images/hours.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"539d40eeb2d95aad345c.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/hours.svg?\n}");

/***/ }),

/***/ "./src/images/massa-sovada.jpg":
/*!*************************************!*\
  !*** ./src/images/massa-sovada.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"c782552e1f691cbf32f3.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/massa-sovada.jpg?\n}");

/***/ }),

/***/ "./src/images/pastel-de-nata.jpg":
/*!***************************************!*\
  !*** ./src/images/pastel-de-nata.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"5c696a6f14c846dcdeb9.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/pastel-de-nata.jpg?\n}");

/***/ }),

/***/ "./src/images/phone.svg":
/*!******************************!*\
  !*** ./src/images/phone.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"ab1ca09dd475f3c451b5.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/phone.svg?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _content_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content/home.js */ \"./src/content/home.js\");\n/* harmony import */ var _content_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content/menu.js */ \"./src/content/menu.js\");\n/* harmony import */ var _content_about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/about.js */ \"./src/content/about.js\");\n/* harmony import */ var _stylesheets_main_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stylesheets/main-styles.css */ \"./src/stylesheets/main-styles.css\");\n/* harmony import */ var _stylesheets_home_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stylesheets/home-styles.css */ \"./src/stylesheets/home-styles.css\");\n/* harmony import */ var _stylesheets_menu_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stylesheets/menu-styles.css */ \"./src/stylesheets/menu-styles.css\");\n/* harmony import */ var _stylesheets_about_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stylesheets/about-styles.css */ \"./src/stylesheets/about-styles.css\");\n\n\n\n\n\n\n\n\n\nconst manageNav = (function() {\n    const content = document.querySelector(\".content\")\n    content.appendChild(_content_home_js__WEBPACK_IMPORTED_MODULE_0__.homePage.mainDiv) // display homepage by default\n\n    function init() {\n        const homeButton = document.querySelector(\".nav-home\")\n        const menuButton = document.querySelector(\".nav-menu\")\n        const aboutButton = document.querySelector(\".nav-about\")\n\n        homeButton.addEventListener(\"click\", () => {\n            content.innerHTML = ''\n            content.appendChild(_content_home_js__WEBPACK_IMPORTED_MODULE_0__.homePage.mainDiv)\n        })\n        menuButton.addEventListener(\"click\", () => {\n            content.innerHTML = ''\n            content.appendChild(_content_menu_js__WEBPACK_IMPORTED_MODULE_1__.menuPage.mainDiv)\n        })    \n        aboutButton.addEventListener(\"click\", () => {\n            content.innerHTML = ''\n            content.appendChild(_content_about_js__WEBPACK_IMPORTED_MODULE_2__.aboutPage.mainDiv)\n        })\n    }\n\n    return { init }\n})()\n\nmanageNav.init()\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ }),

/***/ "./src/stylesheets/about-styles.css":
/*!******************************************!*\
  !*** ./src/stylesheets/about-styles.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_about_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./about-styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/stylesheets/about-styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_about_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_about_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_about_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_about_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/stylesheets/about-styles.css?\n}");

/***/ }),

/***/ "./src/stylesheets/home-styles.css":
/*!*****************************************!*\
  !*** ./src/stylesheets/home-styles.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./home-styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/stylesheets/home-styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_home_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_home_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/stylesheets/home-styles.css?\n}");

/***/ }),

/***/ "./src/stylesheets/main-styles.css":
/*!*****************************************!*\
  !*** ./src/stylesheets/main-styles.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main-styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/stylesheets/main-styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/stylesheets/main-styles.css?\n}");

/***/ }),

/***/ "./src/stylesheets/menu-styles.css":
/*!*****************************************!*\
  !*** ./src/stylesheets/menu-styles.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu-styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/stylesheets/menu-styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_menu_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_menu_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/stylesheets/menu-styles.css?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;