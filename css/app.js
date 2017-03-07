/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "html {\n  overflow: hidden !important;\n  background-color: #F2F2F2;\n  margin: 0px;\n  padding: 0px; }\n\nbody {\n  color: #F2F2F2;\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  margin: 0px;\n  padding: 0px;\n  overflow: hidden !important; }\n\na {\n  text-decoration: none;\n  font-size: 1em;\n  color: #0095DD;\n  font-weight: bold; }\n\na:hover {\n  color: #1d5930; }\n\n/*\ndiv.bar{    \n    margin: 0px;\n    padding: 2px 10px;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: flex-end;\n    align-items: center;\n}\ndiv.bar.top, div.bar.bottom{\n    position: absolute;    \n}\ndiv.bar.top{\n    top:0%;\n    left:0%;\n}\ndiv.bar.bottom{\n    bottom:0%;\n    left:0%;\n}\ndiv.bar label.title,.messagebox .sidebar label{\n    text-align: center;\n}\ndiv.bar > .left_side,div.bar > .right_side,div.bar > .center_side{\n    overflow: hidden;\n}\ndiv.bar > .left_side,div.bar > .right_side{\n    flex: 1 1 14%;\n}\ndiv.bar > .right_side{    \n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: flex-end;\n    align-items: center;\n    margin: 0px 0px 0px 10px;\n}\ndiv.bar > .left_side{\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    margin: 0px 10px 0px 0px;\n}\ndiv.bar > .center_side{\n    flex: 51 1 60%;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: center;\n    align-items: center;\n    margin: 0px auto;\n}\ndiv.bar > .center_side:first-child{\n    margin-left: 14% !important;\n}\ndiv.bar.crystal{    \n    width:100%;\n    z-index: 1000;\n    padding: inherit;\n    background-color: rgba(0, 0, 0, 0.69);  \n    / * opacity:0.25;    * /\n}\ndiv.bar.crystal.black{    \n    background: -webkit-linear-gradient(rgba(0, 0, 0, 0.69), transparent);\n    background: -moz-linear-gradient(rgba(0, 0, 0, 0.69), transparent);\n    background: -o-linear-gradient(rgba(0, 0, 0, 0.69), transparent);\n}\n/ *div.bar.crystal:hover,div.bar.crystal:active{\n    opacity: 1;\n}* /\ndiv.bar.crystal label.title{\n    color:white;\n    font-weight: bold;\n    width:100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    text-shadow: 1px 1px 2px rgba(0,0,0,.5);\n}\n/*         Container Main Apps         * /\ndiv.content{\n    display:flex;\n    overflow: hidden;   \n    flex-flow: row nowrap;\n    width: 175vw;\n    height: 100vh;\n    margin: 0px auto;\n    padding: 0px;\n}\ndiv.content.slider[data-align=\"left\"]{\n    transform: translate(-50vw);\n}\ndiv.content div.body{    \n    display: flex;\n    position: relative;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    margin: 0%;\n    padding: 0%;\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n    align-items: stretch;\n}\ndiv.content div.body section.page{\n    position: relative;\n    display: flex;\n    width: 100vw;\n    height: 100vh;\n    flex-flow: column nowrap;\n    justify-content: flex-start;\n    align-items: stretch;\n    overflow: hidden;   \n}\n\n/*      Menu Panel Config * /\ndiv.content div.menu{\n    width: 75vw;\n    height: 100vh;\n    background: #FFF none repeat scroll 0% 0%;\n    overflow-y: auto;\n}\ndiv.menu ul{\n    margin: 0px;\n    padding: 0px;\n    display: block;\n    position: relative;\n    overflow: visible;\n}\ndiv.menu ul li a{\nborder-width: 1px 0px 0px;\nborder-style: solid;\nmargin: 0px;\ndisplay: block;\nposition: relative;\ntext-align: left;\ntext-overflow: ellipsis;\noverflow: hidden;\nwhite-space: nowrap;\nbackground-color: rgb(237, 237, 237);\nborder-color: #DDD;\npadding: 16px 20px;\ncolor: rgba(0, 0, 0, 0.71);\ntext-decoration: none;\n}\ndiv.menu ul li a:hover{\nbackground-color: #C0C0C0;\nborder-color: #DDD;\ncolor: #0856AE;\ntext-shadow: 0px 1px 0px #7D7A7A;\n}\ndiv.menu ul li a:after{\n    padding:5px;\n    position: absolute;\n    right:15px;\n    content:url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgd2lkdGg9IjE0cHgiIGhlaWdodD0iMTRweCIgdmlld0JveD0iMCAwIDE0IDE0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNCAxNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cG9seWdvbiBwb2ludHM9IjMuNDA0LDIuMDUxIDguMzU0LDcgMy40MDQsMTEuOTUgNS41MjUsMTQuMDcgMTIuNTk2LDcgNS41MjUsLTAuMDcxICIvPgo8L3N2Zz4K');\n    }\ndiv.menu ul li a.display:after{\n    padding:5px;\n    position: absolute;\n    right:15px;\n    content:url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgd2lkdGg9IjE0cHgiIGhlaWdodD0iMTRweCIgdmlld0JveD0iMCAwIDE0IDE0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNCAxNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cG9seWdvbiBwb2ludHM9IjExLjk0OSwzLjQwNCA3LDguMzU0IDIuMDUsMy40MDQgLTAuMDcxLDUuNTI1IDcsMTIuNTk2IDE0LjA3LDUuNTI1ICIvPgo8L3N2Zz4K');\n}\ndiv.menu ul li ul li a{\npadding-left: 52px;\n}\n\n/*          App Messenger           * /\ndiv.content div.body.messenger .header, div.content div.body.messenger .header.hiden ~ *{\n    padding-top: 50px;\n}\ndiv.content div.body.messenger .header{\n    position: relative;\n    overflow: hidden;\n    flex: 3 1 35%;        \n    margin: 0px;\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: stretch;\n    justify-content: flex-end;\n}\ndiv.content div.body.messenger .header > div.cover{\n    position: relative;\n    opacity: 0;\n    overflow:hidden;\n    flex: 1 1 30%;\n    cursor: pointer;\n}\ndiv.content div.body.messenger .header > div.cover > div.placeholder{\n    overflow: hidden;\n    align-self: center;\n    position: absolute;\n    top: 0px;\n    right: 1%;\n    background-color: black;\n    padding: 5px;\n    border-radius: 0.35em;\n    font-weight: bold;    \n}\ndiv.content div.body.messenger .header > div.tag.bottom{\n    overflow:hidden;\n    text-align: left;\n    position: relative;\n    z-index: 0;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: stretch;\n    justify-content: flex-start;\n}\ndiv.content div.body.messenger .header > div.tag.bottom{\n    flex: 2 1 70%;\n}\ndiv.content div.body.messenger .header > div.tag > div.profile{\n    align-self: center;\n}\ndiv.content div.body.messenger .header > div.tag > div.info{\n    overflow: hidden;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: stretch;\n}\ndiv.content div.body.messenger .header > div.tag > div.info > div.description{\n    margin-bottom: 5px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    font-size: 0.75em;\n    font-weight: bold;\n    line-height: 1.35em;\n}\ndiv.content div.body.messenger .header > div.tag > div.info > div.description[contenteditable]{\n    min-height: 1.35em;\n    padding: 2px 5px;\n    cursor:pointer;\n    overflow-x: auto !important;\n    overflow-y: hidden !important;\n}\ndiv.content div.body.messenger .header > div.tag > div.info > a.title{\n    text-align: left;    \n    font-size: 1.45em;\n    text-shadow: 1px 1px 1px rgba(158, 157, 157, 0.3);\n    line-height: 2.35em;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n}\n/*      Content Messenger       * /\n.header ~ *, div.content div.body.messenger .content{\n    flex: 1 1 55%;\n    overflow: hidden;\n}\ndiv.content div.body.messenger .content{\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-evenly;\n    align-items: stretch;\n    position: relative;    \n    background-size: 10px 10px, 100% 100%;\n}\ndiv.content div.body.messenger .content .container{\n    max-height: 100%;\n    padding: 10px 5px;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: flex-start;\n    align-items: stretch;\n}\n/* class Important's Propertys * /\n*[data-transition=\"ease-out\"],div.bar.crystal,*[data-transition=\"ease-out\"] > *{\n    transition: all 0.45s ease-out 0.25s;\n}\n.hiden:not([data-transition]){\n    display: none !important;\n}\n.hiden[data-transition=\"ease-out\"]{\n    overflow: hidden !important;\n    position: absolute !important;\n    margin:0px !important;\n    padding:0px !important;\n    height: 0% !important;\n    opacity: 0 !important;  \n    \n}\n.scroll:not(.x):not(.y){\n    overflow: auto !important; \n}\n.scroll.x{\n    overflow-x: auto !important;\n    overflow-y: hidden !important;\n}\n.scroll.y{\n    overflow-y: auto !important;\n    overflow-x: hidden !important;\n}\n/*        Panel Controls        * /\ndiv.panel{\n    flex: 1 1 50%;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: flex-start;\n    align-items: stretch;\n    box-shadow: 0px -3px 37px rgba(0,0,0,.5) inset;\n    border-bottom: 1px solid #83838366;\n    overflow: hidden;\n    padding-bottom: 5px;\n}\ndiv.panel h1.title{\n    padding: 5px 10px;\n    border-radius: 0.35em 0.35em 0em 0em;\n    margin: 5px 3px;\n    display: block;\n    box-shadow: -1px -1px 13px rgba(254, 254, 254, 0.38) inset, 1px 1px 2px rgba(0,0,0,.25);\n    border: 1px solid #83838366;\n    background-color: #fff3;\n    color: white;\n    text-shadow: 1px 1px rgba(0,0,0,.5);\n    cursor: pointer;\n}\ndiv.panel:not(.active){\n    flex: 0 1 auto;\n}\ndiv.panel:not(.active) > div.container{\n    height: 0px !important;\n    margin: 0px !important;\n    padding: 0px !important;\n}\ndiv.panel h1.title:hover,div.panel.active h1.title{\n    background-color: #fff;\n    color: #3c3c3c;\n}\n/*      Iposts Controls     * /\n.Ipost,div.thumb{\n    display: inline-flex;\n    background-color: white;\n    border-radius: 0.35em;\n    padding: 5px 0px;\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n    align-items: flex-start;\n    box-shadow: -1px 0px 5px rgba(0,0,0,.25) inset, 1px 1px 2px rgba(0,0,0,.25);\n    overflow:hidden;\n    position: relative;\n    flex: 0 0 auto;\n    \n}\n.Ipost{\n   align-self: center;    \n}\n.Ipost > div.container{\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: flex-start;\n    align-items: stretch;\n    line-height: 1.35em;\n    color: #454545;\n}\n.Ipost > div.container >p{\n    margin: 0.35em 0px;\n    color: #5D5C5C;\n    font-size: 1em;\n}\n.Ipost > div.container >small{\n    font-size: 0.75em;\n    font-style: italic;\n    color: #7e7e7e;\n}\n.Ipost > div.mime{\n    margin: 5px !important;\n}\n.Ipost > div.controls{\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: center;\n    align-items: center;\n    overflow:hidden;\n    align-self: stretch;\n}\n/*           Thumbnail Elements               * /\n\ndiv.thumb{\n    flex-flow: column nowrap;\n    justify-content: flex-start;\n    align-items: stretch;\n    margin:5px;    \n}\ndiv.thumb > div.cover{\n    flex: 1 1 30%;\n    min-height: 120px;\n    background-color: #cfcfcf;\n    margin: -5px 0px;\n    padding: 0px;\n    box-shadow: 0px -12px 15px rgba(0,0,0,.25) inset;\n    position: relative;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: flex-start;\n    align-items: center;\n}\ndiv.thumb > div.cover > img.cover{\n    position: absolute;\n    top:0%;\n    left:0%;\n    width: 100%;\n    height: 100%;\n}\ndiv.thumb > div.caption,div.thumb > div.cover{\n    position: relative;\n}\ndiv.thumb > div.caption{\n    padding: 48px 5px 5px 5px;\n    text-align: center;\n    overflow: hidden;    \n}\ndiv.thumb > div.caption > *{\n    display: block;\n}\ndiv.thumb > div.caption > a.link{\n    font-size: 1.5em;\n    font-weight: bold;\n    color: #0C90D1;\n    margin: -7px 5px 5px 5px;\n}\ndiv.thumb > div.caption > small{\n    line-height: 2.35em;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n}\ndiv.thumb > div.cover > div.profile{\n    bottom: -58%;\n    margin: 0px;\n}\n@media screen and (min-width: 800px) {\n    div.thumb{\n        max-width: 320px;\n    }\n    div.content div.body.messenger .content .container.collections{\n        flex-flow: row nowrap;\n        justify-content: flex-start;\n    }\n}\ndiv.content div.body.middle{\n    align-items: center;\n    flex-flow: column nowrap;\n    justify-content: center;\n}\n*/\n", ""]);

// exports


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(0);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./main.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./main.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })
/******/ ]);