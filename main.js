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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! asset/background2.png */ \"./src/asset/background2.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ` /* google font (api) */\r\n \r\n *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }\r\n\r\n        :root {\r\n            --bg: #0f0e0c;\r\n            --surface: #1a1814;\r\n            --gold: #c9a96e;\r\n            --gold-light: #e8cfa0;\r\n            --gold-dark: #927b50;\r\n            --gold-dark-muted: rgba(146, 123, 80, 0.2);\r\n            --text: #e8e0d5;\r\n            --muted: #b99d6b;\r\n        }\r\n        /* default body with home image */\r\n        body {\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: space-between;\r\n            font-family: 'Jost', sans-serif;\r\n            font-weight: 300;\r\n            min-height: 100vh;\r\n            width: 100vw;\r\n            background-color: var(--bg);\r\n            color: var(--text);\r\n            overflow-y: auto;\r\n            overflow-x: hidden;\r\n            background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n            background-size: cover;\r\n            transition: background-image 0.5s ease;\r\n        }\r\n\r\n        /* tablet */\r\n        @media (max-width: 1024px) {\r\n            body {\r\n                overflow-x: auto;\r\n            }\r\n        }\r\n\r\n        /* mobile */\r\n        @media (max-width: 720px) {\r\n            body {\r\n                overflow-x: auto;\r\n            }\r\n        }\r\n\r\n        /* Ambient background texture */\r\n        body::before {\r\n            content: '';\r\n            position: fixed;\r\n            inset: 0;\r\n            background:\r\n                radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,169,110,0.07) 0%, transparent 70%),\r\n                radial-gradient(ellipse 40% 40% at 80% 80%, rgba(201,169,110,0.04) 0%, transparent 60%);\r\n            pointer-events: none;\r\n            z-index: 0;\r\n        }\r\n\r\n        body::after {\r\n            content: '';\r\n            position: fixed;\r\n            inset: 0;\r\n            background: var(--bg);\r\n            opacity: 0;\r\n            pointer-events: none;\r\n            z-index: 999;\r\n            transition: opacity 0.5s ease;\r\n        }\r\n\r\n        body.fading::after {\r\n            opacity: 1;\r\n        }\r\n\r\n        header {\r\n            display: flex;\r\n            justify-content: center;\r\n            padding: 28px 0 0;\r\n            position: relative;\r\n            z-index: 1;\r\n            animation: fadeDown 0.9s ease both;\r\n        }\r\n\r\n        nav {\r\n            display: flex;\r\n            gap: 0;\r\n            border: 1px solid rgba(201,169,110,0.25);\r\n            border-radius: 2px;\r\n        }\r\n\r\n        button {\r\n            padding: 10px 28px;\r\n            width: auto;\r\n            border: none;\r\n            border-right: 1px solid rgba(201,169,110,0.2);\r\n            border-radius: 0;\r\n            background: transparent;\r\n            font-family: 'Jost', sans-serif;\r\n            font-size: 1rem;\r\n            font-weight: 900;\r\n            letter-spacing: 0.2em;\r\n            text-transform: uppercase;\r\n            color: var(--muted);\r\n            cursor: pointer;\r\n            transition: color 0.3s, background 0.3s;\r\n            box-shadow: none;\r\n        }\r\n\r\n        button:last-child { border-right: none; }\r\n\r\n        button:hover {\r\n            color: var(--gold-light);\r\n            background: rgba(201,169,110,0.07);\r\n            transform: none;\r\n            box-shadow: none;\r\n        }\r\n\r\n        #content {\r\n            display: flex;\r\n            flex-direction: column;\r\n            align-items: center;\r\n            justify-content: center;\r\n            text-align: center;\r\n            border: none;\r\n            gap: 20px;\r\n            position: relative;\r\n            z-index: 1;\r\n            flex: 1;\r\n            animation: fadeUp 1.1s ease 0.2s both;\r\n            transition: opacity 0.4s ease, transform 0.4s ease;\r\n        }\r\n\r\n        #content.page-exit {\r\n            opacity: 0;\r\n            transform: translateY(10px);\r\n            filter: blur(4px);\r\n        }\r\n\r\n        #content.page-enter {\r\n            opacity: 0;\r\n            transform: translateY(-10px);\r\n        }\r\n\r\n        .eyebrow {\r\n            font-family: 'Jost', sans-serif;\r\n            font-size: 1rem;\r\n            letter-spacing: 0.35em;\r\n            text-transform: uppercase;\r\n            color: var(--gold);\r\n            display: flex;\r\n            align-items: center;\r\n            gap: 14px;\r\n        }\r\n\r\n        .eyebrow::before, .eyebrow::after {\r\n            content: '';\r\n            width: 40px;\r\n            height: 1px;\r\n            background: var(--gold);\r\n            opacity: 0.5;\r\n        }\r\n\r\n        h2 {\r\n            font-family: 'Cormorant Garamond', serif;\r\n            font-weight: 500;\r\n            font-size: clamp(2.4rem, 5vw, 3.8rem);\r\n            line-height: 1.1;\r\n            color: var(--text);\r\n            letter-spacing: 0.02em;\r\n        }\r\n\r\n        h2 em {\r\n            font-style: italic;\r\n            color: var(--gold-light);\r\n        }\r\n\r\n        p {\r\n            font-size: 0.9rem;\r\n            font-weight: 400;\r\n            letter-spacing: 0.08em;\r\n            color: var(--muted);\r\n            max-width: 340px;\r\n            line-height: 1.8;\r\n        }\r\n\r\n        #content img {\r\n            width: clamp(80px, 10vw, 130px);\r\n            opacity: 0.88;\r\n            filter: drop-shadow(0 8px 24px rgba(201, 169, 110, 0.25));\r\n            animation: floatUpDown 4s ease-in-out infinite;\r\n            margin: 4px 0;\r\n        }\r\n\r\n        @keyframes floatUpDown {\r\n            0%, 100% { transform: translateY(0px); }\r\n            50%       { transform: translateY(-8px); }\r\n        }\r\n\r\n        .cta-row {\r\n            display: flex;\r\n            gap: 16px;\r\n            align-items: center;\r\n            margin-top: 8px;\r\n        }\r\n\r\n        .btn-primary {\r\n            padding: 12px 32px;\r\n            background: var(--gold);\r\n            color: var(--bg);\r\n            font-family: 'Jost', sans-serif;\r\n            font-size: 0.68rem;\r\n            font-weight: 400;\r\n            letter-spacing: 0.2em;\r\n            text-transform: uppercase;\r\n            border: none;\r\n            border-radius: 1px;\r\n            cursor: pointer;\r\n            transition: background 0.3s, color 0.3s;\r\n            width: auto;\r\n            box-shadow: none;\r\n        }\r\n\r\n        .btn-primary:hover {\r\n            background: var(--gold-light);\r\n            transform: none;\r\n            box-shadow: none;\r\n        }\r\n\r\n        a {\r\n            font-size: 0.68rem;\r\n            letter-spacing: 0.15em;\r\n            text-transform: uppercase;\r\n            color: var(--muted);\r\n            text-decoration: none;\r\n            border-bottom: 1px solid rgba(122,112,96,0.4);\r\n            padding-bottom: 2px;\r\n            transition: color 0.3s, border-color 0.3s;\r\n        }\r\n\r\n        a:hover { color: var(--gold); border-color: var(--gold); }\r\n\r\n        /* Decorative divider */\r\n        .divider {\r\n            display: flex;\r\n            align-items: center;\r\n            gap: 12px;\r\n            opacity: 0.3;\r\n        }\r\n        .divider::before, .divider::after {\r\n            content: '';\r\n            width: 60px;\r\n            height: 1px;\r\n            background: var(--gold);\r\n        }\r\n        .diamond {\r\n            width: 5px;\r\n            height: 5px;\r\n            background: var(--gold);\r\n            transform: rotate(45deg);\r\n        }\r\n\r\n        #footer {\r\n            display: flex;\r\n            justify-content: center;\r\n            padding: 20px 0 24px;\r\n            position: relative;\r\n            z-index: 1;\r\n            border-top: 1px solid rgba(228, 182, 98, 0.1);\r\n            animation: fadeUp 1s ease 0.4s both;\r\n        }\r\n\r\n        #footer p {\r\n            font-size: 0.75rem;\r\n            letter-spacing: 0.15em;\r\n            text-transform: uppercase;\r\n            color: var(--gold-dark);\r\n        }\r\n\r\n        @keyframes fadeDown {\r\n            from { opacity: 0; transform: translateY(-16px); }\r\n            to   { opacity: 1; transform: translateY(0); }\r\n        }\r\n        @keyframes fadeUp {\r\n            from { opacity: 0; transform: translateY(20px); }\r\n            to   { opacity: 1; transform: translateY(0); }\r\n        }\r\n\r\n        /* MENUPAGES */\r\n\r\n        .menu-wrapper {\r\n            display: grid;\r\n            grid-template-columns: 1fr 1fr;\r\n            gap: 40px 80px;\r\n            padding: 40px 100px;\r\n            width: 100%;\r\n        }\r\n\r\n        /* Tablet */\r\n        @media (max-width: 1024px) {\r\n            .menu-wrapper {\r\n                grid-template-columns: 1fr;\r\n                padding: 40px 60px;\r\n            }\r\n        }\r\n\r\n        /* mobile */\r\n        @media (max-width: 720px) {\r\n            .menu-wrapper {\r\n                grid-template-columns: 1fr;\r\n                padding: 10px 20px;\r\n            }\r\n            .menu-item {\r\n                min-width: unset;\r\n                width: 100%;\r\n            }\r\n        }\r\n\r\n        .h2menu {\r\n            margin-top: 80px;\r\n            align-self: center;\r\n            color: var(--gold-dark);\r\n        }\r\n\r\n        .menu-section {\r\n            display: flex;\r\n            flex-direction: column;\r\n        }\r\n\r\n        .menu-section h3 {\r\n            color: var(--gold-dark);\r\n            font-family: 'Jost', sans-serif;\r\n            letter-spacing: 0.2em;\r\n            font-size: 0.8rem;\r\n            text-transform: uppercase;\r\n            padding: 16px 0 8px;\r\n            text-align: start;\r\n            cursor: default;\r\n        }\r\n\r\n       .menu-item {\r\n            display: flex;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n            padding: 10px 0;\r\n            border-bottom: 1px solid var(--gold-dark-muted);\r\n            color: var(--text);\r\n            letter-spacing: 0.05em;\r\n            min-width: 400px;\r\n            transition: 0.2s;\r\n        }\r\n\r\n        .menu-item span:last-child {\r\n            color: var(--gold);\r\n            font-family: 'Cormorant Garamond', serif;\r\n            font-size: 1.1rem;            \r\n        }\r\n\r\n        .menu-item:hover {\r\n            cursor: default;\r\n            scale: 1.05;\r\n            box-shadow: rgba(226, 167, 56, 0.07);\r\n        }\r\n\r\n        /* ABOUT PAGES */\r\n        .aboutInfo {\r\n            display: grid;\r\n            border-color: var(--gold-dark);\r\n            gap: 120px;\r\n            justify-items: center;\r\n            padding: 100px 250px;  \r\n            margin-top: 80px;\r\n            margin-bottom: 80px;\r\n            position: relative;\r\n            border-radius: 10px;\r\n        }\r\n\r\n        .aboutInfo legend {\r\n            color: var(--gold-dark);\r\n            font-family: \"Josh\", \"sans-serif\";\r\n            font-size: 1.5rem;\r\n        }\r\n\r\n        .founder, .email, .number {\r\n            display: grid;\r\n            gap: 12px;\r\n            justify-items: center;\r\n            border: 1px solid var(--gold-dark);\r\n            padding: 50px;\r\n            border-radius: 20px;\r\n            width: 500px;\r\n            transition: 0.15s;\r\n        }     \r\n\r\n        .founder:hover, .email:hover, .number:hover {\r\n            cursor: default;\r\n            scale: 1.1;\r\n        }\r\n\r\n        .founder p:first-of-type, .email p:first-of-type, .number p:first-of-type{\r\n            color: var(--gold);\r\n            font-size: 1.2rem;\r\n            font-weight: 600;\r\n            cursor: default;\r\n        }\r\n\r\n        .founder p{\r\n            font-size: 1.4rem;\r\n        }\r\n\r\n        .email p {\r\n            font-size: 1.2rem;\r\n        }\r\n\r\n        .number p {\r\n            font-size: 1.2rem;\r\n        }\r\n        \r\n        .founder p, .email p, .number p{\r\n            color: var(--gold-dark);\r\n            max-width: none;\r\n        }`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _resetApp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resetApp.js */ \"./src/resetApp.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home.js */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/menu.js */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_about_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/about.js */ \"./src/pages/about.js\");\n/* harmony import */ var _asset_background2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asset/background2.png */ \"./src/asset/background2.png\");\n/* harmony import */ var _transition_transition_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transition/transition.js */ \"./src/transition/transition.js\");\n// entry file\r\n// reset app\r\n\r\n\r\n// PAGES\r\n// home, menu, about & stylle\r\n\r\n\r\n\r\n\r\n\r\n//img\r\n\r\n// preload cache img\r\nconst preloadBg = document.createElement(\"img\");\r\npreloadBg.src = _asset_background2_png__WEBPACK_IMPORTED_MODULE_5__;\r\n// Transition\r\n\r\n\r\n// ----------------------------------------------------------------------\r\n\r\n// Event Listener Home\r\nconst btnHome = document.getElementById(\"home\");\r\nbtnHome.addEventListener(\"click\", function () {\r\n   (0,_transition_transition_js__WEBPACK_IMPORTED_MODULE_6__.transitionTo)(() => {\r\n      // logs\r\n      console.log(\"Clicking home pages...\")\r\n      ;(0,_resetApp_js__WEBPACK_IMPORTED_MODULE_0__.resetPage)();\r\n      (0,_pages_home_js__WEBPACK_IMPORTED_MODULE_2__.home)();\r\n      // change button color on current's page\r\n      btnHome.style.backgroundColor = \"rgba(201,169,110,0.07)\";\r\n      btnMenu.style.backgroundColor = \"transparent\";\r\n      btnAbout.style.backgroundColor = \"transparent\";\r\n      document.body.style.backgroundImage = `url('${_asset_background2_png__WEBPACK_IMPORTED_MODULE_5__}')`;\r\n      document.body.style.backgroundSize = \"cover\";\r\n    }, _asset_background2_png__WEBPACK_IMPORTED_MODULE_5__); \r\n});\r\n\r\n// event listener about\r\nconst btnAbout = document.getElementById(\"about\");\r\nbtnAbout.addEventListener(\"click\", function() {\r\n   (0,_transition_transition_js__WEBPACK_IMPORTED_MODULE_6__.transitionTo)(() => {\r\n      // logs\r\n      console.log(\"Clicking About Pages...\");\r\n      (0,_resetApp_js__WEBPACK_IMPORTED_MODULE_0__.resetPage)();\r\n      (0,_pages_about_js__WEBPACK_IMPORTED_MODULE_4__.about)();\r\n      // change button color on current's page\r\n      btnHome.style.backgroundColor = \"transparent\";\r\n      btnMenu.style.backgroundColor = \"transparent\";\r\n      btnAbout.style.backgroundColor = \"rgba(201,169,110,0.07)\";\r\n      // change or removing the background\r\n      document.body.style.backgroundImage = \"url()\";\r\n   });   \r\n});\r\n\r\nconst btnMenu = document.getElementById(\"menu\");\r\nbtnMenu.addEventListener(\"click\", function() {\r\n   (0,_transition_transition_js__WEBPACK_IMPORTED_MODULE_6__.transitionTo)(() => {\r\n      // logs\r\n      console.log(\"Clicking About Pages...\");\r\n      (0,_resetApp_js__WEBPACK_IMPORTED_MODULE_0__.resetPage)();\r\n      (0,_pages_menu_js__WEBPACK_IMPORTED_MODULE_3__.menu)();\r\n      // change button color on current's page\r\n      btnHome.style.backgroundColor = \"transparent\";\r\n      btnMenu.style.backgroundColor = \"rgba(201,169,110,0.07)\";\r\n      btnAbout.style.backgroundColor = \"transparent\";\r\n      // change or removing the background\r\n      document.body.style.backgroundImage = \"url()\";\r\n   });   \r\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/pages/about.js"
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   about: () => (/* binding */ about)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/pages/home.js\");\n\r\n\r\nfunction about(){\r\n    // about btn\r\n    const btnAbout = document.querySelector(\"#about\");\r\n    // get the year\r\n    const currentYear = new Date().getFullYear();\r\n    // delete the background\r\n    document.body.style.backgroundImage = \"url()\";\r\n    // back to top when change's pages\r\n    window.scrollTo(0, 0);\r\n\r\n    // DOM\r\n    const content = document.querySelector(\"#content\");\r\n        const aboutInfo = document.createElement(\"fieldset\");\r\n        // contact about\r\n        const aboutHeader = document.createElement(\"legend\");\r\n            const aboutTitle = document.createElement(\"p\");\r\n        // contact founder\r\n        const founder = document.createElement(\"div\");\r\n            const founderTitle= document.createElement(\"p\");\r\n            const founderName = document.createElement(\"p\");\r\n        // contact email\r\n        const email = document.createElement(\"div\");\r\n            const emailTitle = document.createElement(\"p\");\r\n            const emailDetail = document.createElement(\"p\");\r\n        // contact Number\r\n        const number = document.createElement(\"div\");\r\n            const numberTitle = document.createElement(\"p\");\r\n            const numberDetail = document.createElement(\"p\");\r\n\r\n\r\n    const footer = document.querySelector(\"#footer\");\r\n    const footerTitle = document.createElement(\"p\");\r\n    \r\n    // classtList Add \r\n    aboutInfo.classList.add(\"aboutInfo\");\r\n        aboutHeader.classList.add(\"about-header\");\r\n        founder.classList.add(\"founder\");\r\n        email.classList.add(\"email\");\r\n        number.classList.add(\"number\");\r\n    footerTitle.classList.add(\"footer-title\");\r\n\r\n    // content text\r\n    // about, founder, email\r\n    aboutHeader.textContent = \"ABOUT US\";\r\n    founderTitle.textContent = \"FOUNDER\";\r\n    founderName.textContent = \"Wahyu Isnaeni\";\r\n    emailTitle.textContent = \"EMAIL\";\r\n    emailDetail.textContent = \"wahyuisnaeni2002@gmail.com\";\r\n    numberTitle.textContent = \"CONTACT\";\r\n    numberDetail.textContent = \"+6289-562-334-6XXX\";\r\n    // footer text\r\n    footerTitle.textContent = footerTitle.textContent = `© ${currentYear} WAYS. ALL RIGHTS RESERVED` ;\r\n    \r\n    // append\r\n    // content, about, footer\r\n    content.appendChild(aboutInfo);\r\n    // about child\r\n    aboutInfo.appendChild(aboutHeader);\r\n    aboutHeader.appendChild(aboutTitle);\r\n    aboutInfo.appendChild(founder);\r\n        founder.appendChild(founderTitle);\r\n        founder.appendChild(founderName);\r\n    aboutInfo.appendChild(email);\r\n        email.appendChild(emailTitle);\r\n        email.appendChild(emailDetail);\r\n    aboutInfo.appendChild(number);\r\n        number.appendChild(numberTitle);\r\n        number.appendChild(numberDetail);\r\n    // footer\r\n    footer.appendChild(footerTitle);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/about.js?\n}");

/***/ },

/***/ "./src/pages/home.js"
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   home: () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _asset_background2_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../asset/background2.png */ \"./src/asset/background2.png\");\n\r\n\r\nconst home = function() {\r\n    // Current year for footer\r\n    const currentYear = new Date().getFullYear();\r\n\r\n    // DOM Manipulation\r\n    // main content\r\n    const mainContent = document.getElementById(\"content\");\r\n    // est\r\n    const estDiv = document.createElement(\"div\");\r\n    // main title \r\n    const welcomeTitle = document.createElement(\"h2\");\r\n    const greetingTitle = document.createElement(\"p\");\r\n    // footer\r\n    const footerDiv = document.getElementById(\"footer\");\r\n    const footerTitle = document.createElement(\"p\");\r\n    \r\n    // classList add\r\n    estDiv.classList.add(\"eyebrow\");\r\n    footerTitle.classList.add(\"footer-title\")\r\n    \r\n    // text Content\r\n    estDiv.textContent = \"EST. 2026\";\r\n    welcomeTitle.textContent = \"Welcome to the Restaurant\";\r\n    greetingTitle.textContent = \"Delicious food and greate atmosphere.\";\r\n    footerTitle.textContent = `© ${currentYear} WAYS. ALL RIGHTS RESERVED`;\r\n\r\n    // append DOM\r\n    mainContent.appendChild(estDiv);\r\n    mainContent.appendChild(welcomeTitle);\r\n    mainContent.appendChild(greetingTitle);\r\n    // footer content\r\n    footerDiv.appendChild(footerTitle);\r\n};\r\n\r\n// default pages\r\nhome();\r\n\r\n// export var\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/home.js?\n}");

/***/ },

/***/ "./src/pages/menu.js"
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\nconst menuList = {\r\n    'Main Courses': [\r\n        {name: \"Spaghetti Carbonara\", price: 9.99},\r\n        {name: \"Chicken Roast\", price: 5.99},\r\n        {name: \"Rice Chicken Curry\", price: 5.99},\r\n        {name: \"Butter Soup Beef\", price: 8.99},\r\n        {name: \"Crisp Chicken Wings\", price: 4.99},\r\n        {name: \"Rice Macaroni Cheese\", price: 7.99},\r\n    ],\r\n    'Pizza': [\r\n        {name: \"Margherita\", price: 5.99},\r\n        {name: \"Cheesy Galore\", price: 4.99},\r\n        {name: \"Tuna Melt\", price: 3.99},\r\n        {name: \"Spicy Meal\", price: 5.99},\r\n        {name: \"Meat Lovers\", price: 7.99},        \r\n    ],\r\n    'Dessert': [\r\n        {name: \"Ice Cream Moca with Strawberry\", price: 4.99},\r\n        {name: \"Chocolate Cheese Brownies\", price: 3.59},\r\n        {name: \"Waffle with Vanilla Ice Cream\", price: 4.99},\r\n    ],\r\n    'Beverages': [\r\n        {name: \"Americano\", price: 1.99},\r\n        {name: \"Mocachino\", price: 1.99},\r\n        {name: \"Milk Tea\", price: 1.99},\r\n        {name: \"Macha\", price: 2.99},\r\n        {name: \"Cappucino\", price: 2.99},\r\n        {name: \"Black Coffe\", price: 0.99},\r\n    ]\r\n};\r\n\r\nfunction menu() {\r\n    const currentYear = new Date().getFullYear();\r\n    // reset background & enable horizontal scroll\r\n    document.body.style.backgroundImage = \"url()\";\r\n\r\n    const content = document.getElementById(\"content\");\r\n    content.style.alignItems = \"flex-start\";\r\n\r\n    // Menu title\r\n    const menuTitle = document.createElement(\"h2\");\r\n    menuTitle.classList.add(\"h2menu\");\r\n    menuTitle.textContent = \"MENU\";\r\n    content.appendChild(menuTitle);\r\n    \r\n    // wrapper 2 column\r\n    const wrapper = document.createElement(\"div\");\r\n    wrapper.classList.add(\"menu-wrapper\");\r\n    content.appendChild(wrapper);   \r\n\r\n    // Loop tiap kategori\r\n    Object.entries(menuList).forEach(([category, items]) => {\r\n        // Section container\r\n        const section = document.createElement(\"div\");\r\n        section.classList.add(\"menu-section\");\r\n\r\n        // Category title\r\n        const categoryTitle = document.createElement(\"h3\");\r\n        categoryTitle.textContent = category;\r\n        section.appendChild(categoryTitle);\r\n\r\n        // Loop every item\r\n        items.forEach(item => {\r\n            const row = document.createElement(\"div\");\r\n            row.classList.add(\"menu-item\");\r\n\r\n            const itemName = document.createElement(\"span\");\r\n            itemName.textContent = item.name;\r\n\r\n            const itemPrice = document.createElement(\"span\");\r\n            itemPrice.textContent = `$${item.price.toFixed(2)}`;\r\n\r\n            row.appendChild(itemName);\r\n            row.appendChild(itemPrice);\r\n            section.appendChild(row);\r\n        });\r\n\r\n        wrapper.appendChild(section);\r\n    });\r\n\r\n    // footer\r\n    const footer = document.getElementById(\"footer\");\r\n    const footerTitle = document.createElement(\"p\");\r\n    footerTitle.textContent = `© ${currentYear} WAYS. ALL RIGHTS RESERVED`;\r\n    footer.appendChild(footerTitle);\r\n}\r\n\r\n// menu();\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/menu.js?\n}");

/***/ },

/***/ "./src/resetApp.js"
/*!*************************!*\
  !*** ./src/resetApp.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resetPage: () => (/* binding */ resetPage)\n/* harmony export */ });\nfunction resetPage() {\r\n    const content = document.getElementById(\"content\");\r\n    const footer = document.getElementById(\"footer\");\r\n\r\n    // reset flex direction after switch menu\r\n    content.style.alignItems = \"\";\r\n    document.body.style.overflowX = \"\";\r\n\r\n    // Delete all the child\r\n    content.replaceChildren();\r\n    footer.replaceChildren();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/resetApp.js?\n}");

/***/ },

/***/ "./src/transition/transition.js"
/*!**************************************!*\
  !*** ./src/transition/transition.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   transitionTo: () => (/* binding */ transitionTo)\n/* harmony export */ });\nfunction transitionTo(callback, bgImage = null) {\r\n    const body = document.body;\r\n\r\n    body.classList.add(\"fading\");\r\n\r\n    setTimeout(() => {\r\n        callback();\r\n\r\n        if (bgImage) {\r\n            // Pastikan gambar sudah loaded sebelum fade in\r\n            const img = new Image();\r\n            img.onload = () => {\r\n                setTimeout(() => body.classList.remove(\"fading\"), 20);\r\n            };\r\n            img.src = bgImage;\r\n        } else {\r\n            setTimeout(() => body.classList.remove(\"fading\"), 20);\r\n        }\r\n\r\n    }, 500);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/transition/transition.js?\n}");

/***/ },

/***/ "./src/asset/background2.png"
/*!***********************************!*\
  !*** ./src/asset/background2.png ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"60be9b8a69cc7dd328d1.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/asset/background2.png?\n}");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
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