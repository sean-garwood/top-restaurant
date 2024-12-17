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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/load.js */ \"./src/modules/load.js\");\n\n\n\n//# sourceURL=webpack://top-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/modules.js":
/*!************************!*\
  !*** ./src/modules.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contact: () => (/* reexport safe */ _modules_contact_js__WEBPACK_IMPORTED_MODULE_0__.contact),\n/* harmony export */   home: () => (/* reexport safe */ _modules_home_js__WEBPACK_IMPORTED_MODULE_1__.home),\n/* harmony export */   menu: () => (/* reexport safe */ _modules_menu_js__WEBPACK_IMPORTED_MODULE_2__.menu)\n/* harmony export */ });\n/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/contact.js */ \"./src/modules/contact.js\");\n/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home.js */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n\n\n\n\n\n//# sourceURL=webpack://top-restaurant/./src/modules.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contact: () => (/* binding */ contact)\n/* harmony export */ });\nconst contact = () => {\n  const contactHeader = document.createElement('h2');\n  contactHeader.textContent = 'Contact Us';\n  content.appendChild(contactHeader);\n\n  const contactDiv = document.createElement('div');\n  contactDiv.id = 'contact';\n  content.appendChild(contactDiv);\n\n  const contactP = document.createElement('p');\n  contactP.textContent = 'Calabasas Restaurant is located at 123 Main Street, Calabasas, CA 90210. Our hours of operation are Monday through Friday from 11:00 am to 9:00 pm and Saturday and Sunday from 10:00 am to 10:00 pm. For reservations, please call (818) 123-4567.';\n  contactDiv.appendChild(contactP);\n  Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./load.js */ \"./src/modules/load.js\"))\n}\n\n\n//# sourceURL=webpack://top-restaurant/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   home: () => (/* binding */ home)\n/* harmony export */ });\nconst home = () => {\n  const homeHeader = document.createElement('h1');\n  homeHeader.textContent = 'Calabasas Restaurant';\n  content.appendChild(homeHeader);\n\n  const div = document.createElement('div');\n  div.id = 'home';\n  content.appendChild(div);\n\n  const h2 = document.createElement('h2');\n  h2.textContent = 'Welcome to Calabasas Restaurant';\n  div.appendChild(h2);\n\n  const p = document.createElement('p');\n  p.textContent = 'Calabasas Restaurant is a family-owned restaurant that has been serving the community since 2001. We specialize in chilaquiles, a traditional Mexican dish that consists of fried tortillas, salsa, and cheese. Our chilaquiles are made fresh daily and are served with your choice of meat, beans, and rice. We also offer a variety of other Mexican dishes, including tacos, burritos, and enchiladas. Come visit us today and experience the authentic flavors of Mexico!';\n  div.appendChild(p);\n}\n\n\n//# sourceURL=webpack://top-restaurant/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   load: () => (/* binding */ load)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules */ \"./src/modules.js\");\n// page load module\n\n\n\nconst load = (() => {\n  const buttons = document.querySelectorAll('button');\n  for (let i = 0; i < buttons.length; i++) {\n    buttons[i].addEventListener('click', () => {\n      const callback = getFunctionName(buttons[i]);\n      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.clearContent)();\n      callback();\n    });\n  }\n\n  (0,_modules__WEBPACK_IMPORTED_MODULE_1__.home)();\n})();\n\nfunction getFunctionName(button) {\n  const functions = {\n    contact: _modules__WEBPACK_IMPORTED_MODULE_1__.contact,\n    home: _modules__WEBPACK_IMPORTED_MODULE_1__.home,\n    menu: _modules__WEBPACK_IMPORTED_MODULE_1__.menu\n  };\n  return functions[button.textContent.toLowerCase()];\n}\n\n\n//# sourceURL=webpack://top-restaurant/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\nconst menu = () => {\n  const menuHeader = document.createElement('h2');\n  menuHeader.textContent = 'Menu';\n  content.appendChild(menuHeader);\n\n  const div = document.createElement('div');\n  div.id = 'menu';\n  content.appendChild(div);\n\n  const p = document.createElement('p');\n  p.textContent = \"If you don't know, chilaquiles is a crummy Mexican dish of crumbled tortilla chips stirred in with scrambled eggs and salsa. It is crass and shitty. It is no good and not a nice dish.\";\n  div.appendChild(p);\n}\n\n\n//# sourceURL=webpack://top-restaurant/./src/modules/menu.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearContent: () => (/* reexport safe */ _utils_clear_content__WEBPACK_IMPORTED_MODULE_1__.clearContent),\n/* harmony export */   content: () => (/* reexport safe */ _utils_content__WEBPACK_IMPORTED_MODULE_0__.content)\n/* harmony export */ });\n/* harmony import */ var _utils_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/content */ \"./src/utils/content.js\");\n/* harmony import */ var _utils_clear_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/clear-content */ \"./src/utils/clear-content.js\");\n\n\n\n\n//# sourceURL=webpack://top-restaurant/./src/utils.js?");

/***/ }),

/***/ "./src/utils/clear-content.js":
/*!************************************!*\
  !*** ./src/utils/clear-content.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearContent: () => (/* binding */ clearContent)\n/* harmony export */ });\nconst clearContent = () => {\n  while (content.firstChild) {\n    content.removeChild(content.firstChild);\n  }\n};\n\n\n//# sourceURL=webpack://top-restaurant/./src/utils/clear-content.js?");

/***/ }),

/***/ "./src/utils/content.js":
/*!******************************!*\
  !*** ./src/utils/content.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   content: () => (/* binding */ content)\n/* harmony export */ });\nconst content = document.getElementById('content');\n\n\n//# sourceURL=webpack://top-restaurant/./src/utils/content.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;