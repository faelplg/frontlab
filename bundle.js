/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _base_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_base_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lab_data_fetch_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(133);



/*
 *
 *  Urls
 *  Available content URLs
 *
 */

var _wtf_ = 'https://api.github.com/repos/faelplg/web-development-researches/readme';
var _deployment_ = 'https://api.github.com/repos/faelplg/web-development-researches/contents/deployment/README.md';
/*
 *
 *  Fetch Service
 *  Call services
 *
*/

var fetchService = new _lab_data_fetch_data__WEBPACK_IMPORTED_MODULE_2__["default"]();
/*
 *
 *  Content management
 *  Update information about content.
 *
 */

var now = moment__WEBPACK_IMPORTED_MODULE_1___default()();
/*
 *
 *  WTF button
 *
 */

var buttonWTF = document.getElementById('button-wtf');
buttonWTF.addEventListener("click", function () {
  var FrontlabWTF = localStorage.getItem('frontlab-wtf');
  var wtfDuration;
  var wtfHours;

  if (FrontlabWTF) {
    var FrontlabWTFStamp = moment__WEBPACK_IMPORTED_MODULE_1___default()(localStorage.getItem('frontlab-wtf-stamp'));
    wtfDuration = moment__WEBPACK_IMPORTED_MODULE_1___default.a.duration(now.diff(FrontlabWTFStamp));
    wtfHours = wtfDuration.asHours();
  }

  if (!wtfDuration) {
    console.log('NEW ACCESS. FETCHING CONTENT.');
    fetchService.fetchUrl(_wtf_, 'frontlab-wtf');
  } else {
    if (wtfHours < 1) {
      console.log('VALID CONTENT. REFRESHING');
      fetchService.refreshContent(FrontlabWTF);
    } else {
      console.log('EXPIRED. FETCHING NEW CONTENT.');
      fetchService.fetchUrl(_wtf_, 'frontlab-wtf');
    }
  }
});
/*
 *
 *  Deployment card
 *
 */

var cardDeployment = document.getElementById('card-deployment');
cardDeployment.addEventListener("click", function () {
  var FrontlabDeployment = localStorage.getItem('frontlab-deployment');
  var deploymentDuration;
  var deploymentHours;

  if (FrontlabDeployment) {
    var FrontlabDeploymentStamp = moment__WEBPACK_IMPORTED_MODULE_1___default()(localStorage.getItem('frontlab-deployment-stamp'));
    deploymentDuration = moment__WEBPACK_IMPORTED_MODULE_1___default.a.duration(now.diff(FrontlabDeploymentStamp));
    deploymentHours = deploymentDuration.asHours();
  }

  if (!deploymentDuration) {
    console.log('NEW ACCESS. FETCHING CONTENT.');
    fetchService.fetchUrl(_deployment_, 'frontlab-deployment');
  } else {
    if (deploymentHours < 1) {
      console.log('VALID CONTENT. REFRESHING');
      fetchService.refreshContent(FrontlabDeployment);
    } else {
      console.log('EXPIRED. FETCHING NEW CONTENT');
      fetchService.fetchUrl(_deployment_, 'frontlab-deployment');
    }
  }
});

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FetchService; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var converter = new showdown.Converter({
  tables: true
});

var FetchService =
/*#__PURE__*/
function () {
  function FetchService() {
    _classCallCheck(this, FetchService);
  }

  _createClass(FetchService, [{
    key: "refreshContent",
    value: function refreshContent(_md) {
      var _content_ = converter.makeHtml(_md);

      document.getElementById('web-development-researches').innerHTML = _content_;
      var linksArray;
      linksArray = document.getElementsByTagName('a');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = linksArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var link = _step.value;
          link.setAttribute('target', '_blank');
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "fetchUrl",
    value: function fetchUrl(_url, _key) {
      var _this = this;

      fetch(_url, {
        headers: {
          Accept: 'application/vnd.github.v3.raw+json'
        }
      }).then(function (response) {
        return response.text();
      }).then(function (result) {
        localStorage.removeItem("".concat(_key, "-stamp"));
        localStorage.removeItem(_key);
        localStorage.setItem("".concat(_key, "-stamp"), moment__WEBPACK_IMPORTED_MODULE_0___default()().format());
        localStorage.setItem(_key, result);

        _this.refreshContent(result);
      });
    }
  }]);

  return FetchService;
}();


;

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 10,
	"./af.js": 10,
	"./ar": 11,
	"./ar-dz": 12,
	"./ar-dz.js": 12,
	"./ar-kw": 13,
	"./ar-kw.js": 13,
	"./ar-ly": 14,
	"./ar-ly.js": 14,
	"./ar-ma": 15,
	"./ar-ma.js": 15,
	"./ar-sa": 16,
	"./ar-sa.js": 16,
	"./ar-tn": 17,
	"./ar-tn.js": 17,
	"./ar.js": 11,
	"./az": 18,
	"./az.js": 18,
	"./be": 19,
	"./be.js": 19,
	"./bg": 20,
	"./bg.js": 20,
	"./bm": 21,
	"./bm.js": 21,
	"./bn": 22,
	"./bn.js": 22,
	"./bo": 23,
	"./bo.js": 23,
	"./br": 24,
	"./br.js": 24,
	"./bs": 25,
	"./bs.js": 25,
	"./ca": 26,
	"./ca.js": 26,
	"./cs": 27,
	"./cs.js": 27,
	"./cv": 28,
	"./cv.js": 28,
	"./cy": 29,
	"./cy.js": 29,
	"./da": 30,
	"./da.js": 30,
	"./de": 31,
	"./de-at": 32,
	"./de-at.js": 32,
	"./de-ch": 33,
	"./de-ch.js": 33,
	"./de.js": 31,
	"./dv": 34,
	"./dv.js": 34,
	"./el": 35,
	"./el.js": 35,
	"./en-au": 36,
	"./en-au.js": 36,
	"./en-ca": 37,
	"./en-ca.js": 37,
	"./en-gb": 38,
	"./en-gb.js": 38,
	"./en-ie": 39,
	"./en-ie.js": 39,
	"./en-il": 40,
	"./en-il.js": 40,
	"./en-nz": 41,
	"./en-nz.js": 41,
	"./eo": 42,
	"./eo.js": 42,
	"./es": 43,
	"./es-do": 44,
	"./es-do.js": 44,
	"./es-us": 45,
	"./es-us.js": 45,
	"./es.js": 43,
	"./et": 46,
	"./et.js": 46,
	"./eu": 47,
	"./eu.js": 47,
	"./fa": 48,
	"./fa.js": 48,
	"./fi": 49,
	"./fi.js": 49,
	"./fo": 50,
	"./fo.js": 50,
	"./fr": 51,
	"./fr-ca": 52,
	"./fr-ca.js": 52,
	"./fr-ch": 53,
	"./fr-ch.js": 53,
	"./fr.js": 51,
	"./fy": 54,
	"./fy.js": 54,
	"./gd": 55,
	"./gd.js": 55,
	"./gl": 56,
	"./gl.js": 56,
	"./gom-latn": 57,
	"./gom-latn.js": 57,
	"./gu": 58,
	"./gu.js": 58,
	"./he": 59,
	"./he.js": 59,
	"./hi": 60,
	"./hi.js": 60,
	"./hr": 61,
	"./hr.js": 61,
	"./hu": 62,
	"./hu.js": 62,
	"./hy-am": 63,
	"./hy-am.js": 63,
	"./id": 64,
	"./id.js": 64,
	"./is": 65,
	"./is.js": 65,
	"./it": 66,
	"./it.js": 66,
	"./ja": 67,
	"./ja.js": 67,
	"./jv": 68,
	"./jv.js": 68,
	"./ka": 69,
	"./ka.js": 69,
	"./kk": 70,
	"./kk.js": 70,
	"./km": 71,
	"./km.js": 71,
	"./kn": 72,
	"./kn.js": 72,
	"./ko": 73,
	"./ko.js": 73,
	"./ky": 74,
	"./ky.js": 74,
	"./lb": 75,
	"./lb.js": 75,
	"./lo": 76,
	"./lo.js": 76,
	"./lt": 77,
	"./lt.js": 77,
	"./lv": 78,
	"./lv.js": 78,
	"./me": 79,
	"./me.js": 79,
	"./mi": 80,
	"./mi.js": 80,
	"./mk": 81,
	"./mk.js": 81,
	"./ml": 82,
	"./ml.js": 82,
	"./mn": 83,
	"./mn.js": 83,
	"./mr": 84,
	"./mr.js": 84,
	"./ms": 85,
	"./ms-my": 86,
	"./ms-my.js": 86,
	"./ms.js": 85,
	"./mt": 87,
	"./mt.js": 87,
	"./my": 88,
	"./my.js": 88,
	"./nb": 89,
	"./nb.js": 89,
	"./ne": 90,
	"./ne.js": 90,
	"./nl": 91,
	"./nl-be": 92,
	"./nl-be.js": 92,
	"./nl.js": 91,
	"./nn": 93,
	"./nn.js": 93,
	"./pa-in": 94,
	"./pa-in.js": 94,
	"./pl": 95,
	"./pl.js": 95,
	"./pt": 96,
	"./pt-br": 97,
	"./pt-br.js": 97,
	"./pt.js": 96,
	"./ro": 98,
	"./ro.js": 98,
	"./ru": 99,
	"./ru.js": 99,
	"./sd": 100,
	"./sd.js": 100,
	"./se": 101,
	"./se.js": 101,
	"./si": 102,
	"./si.js": 102,
	"./sk": 103,
	"./sk.js": 103,
	"./sl": 104,
	"./sl.js": 104,
	"./sq": 105,
	"./sq.js": 105,
	"./sr": 106,
	"./sr-cyrl": 107,
	"./sr-cyrl.js": 107,
	"./sr.js": 106,
	"./ss": 108,
	"./ss.js": 108,
	"./sv": 109,
	"./sv.js": 109,
	"./sw": 110,
	"./sw.js": 110,
	"./ta": 111,
	"./ta.js": 111,
	"./te": 112,
	"./te.js": 112,
	"./tet": 113,
	"./tet.js": 113,
	"./tg": 114,
	"./tg.js": 114,
	"./th": 115,
	"./th.js": 115,
	"./tl-ph": 116,
	"./tl-ph.js": 116,
	"./tlh": 117,
	"./tlh.js": 117,
	"./tr": 118,
	"./tr.js": 118,
	"./tzl": 119,
	"./tzl.js": 119,
	"./tzm": 120,
	"./tzm-latn": 121,
	"./tzm-latn.js": 121,
	"./tzm.js": 120,
	"./ug-cn": 122,
	"./ug-cn.js": 122,
	"./uk": 123,
	"./uk.js": 123,
	"./ur": 124,
	"./ur.js": 124,
	"./uz": 125,
	"./uz-latn": 126,
	"./uz-latn.js": 126,
	"./uz.js": 125,
	"./vi": 127,
	"./vi.js": 127,
	"./x-pseudo": 128,
	"./x-pseudo.js": 128,
	"./yo": 129,
	"./yo.js": 129,
	"./zh-cn": 130,
	"./zh-cn.js": 130,
	"./zh-hk": 131,
	"./zh-hk.js": 131,
	"./zh-tw": 132,
	"./zh-tw.js": 132
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 9;

/***/ })

/******/ });