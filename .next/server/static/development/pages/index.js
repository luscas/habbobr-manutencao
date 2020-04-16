module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./helpers/xmlToJson.js":
/*!******************************!*\
  !*** ./helpers/xmlToJson.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function xmlToJson(xml) {
  var obj = {};

  if (xml.nodeType == 1) {
    if (xml.attributes.length > 0) {
      obj["@attributes"] = {};

      for (var j = 0; j < xml.attributes.length; j++) {
        var attribute = xml.attributes.item(j);
        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (xml.nodeType == 3) {
    obj = xml.nodeValue;
  }

  if (xml.hasChildNodes()) {
    for (var i = 0; i < xml.childNodes.length; i++) {
      var item = xml.childNodes.item(i);
      var nodeName = item.nodeName;

      if (typeof obj[nodeName] == "undefined") {
        obj[nodeName] = xmlToJson(item);
      } else {
        if (typeof obj[nodeName].push == "undefined") {
          var old = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push(old);
        }

        obj[nodeName].push(xmlToJson(item));
      }
    }
  }

  return obj;
}

/* harmony default export */ __webpack_exports__["default"] = (xmlToJson);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_howler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-howler */ "react-howler");
/* harmony import */ var react_howler__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_howler__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tooltip */ "react-tooltip");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slider */ "react-slider");
/* harmony import */ var react_slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_xmlToJson__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/xmlToJson */ "./helpers/xmlToJson.js");
var _jsxFileName = "/Users/lucas/Desktop/habbobr-manutencao/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class Index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      stream: "https://player.audiovox.pw/proxy/6768/;",
      status: 'stop',
      format: ['mp3', 'acc'],
      volume: 100,
      locutor: null,
      programa: null,
      ouvintes: 0,
      equipe: [{
        habbo: 'Colecction',
        cargo: 'Web Master'
      }, {
        habbo: ',Abobado',
        cargo: 'Web Master'
      }, {
        habbo: 'Sven',
        cargo: 'Web Master'
      }, {
        habbo: 'Renato_Moura',
        cargo: 'Administrador de Conteúdo'
      }, {
        habbo: '.:Root:.',
        cargo: 'Jornalista'
      }, {
        habbo: 'CaioXzZ',
        cargo: 'Locutor'
      }, {
        habbo: 'Frats',
        cargo: 'Locutor'
      }]
    };
  }

  radioNewStatus(type, newText) {
    switch (type) {
      case 'locutor':
        this.setState({
          locutor: newText
        });
        break;

      case 'programa':
        this.setState({
          programa: newText
        });
        break;

      case 'ouvintes':
        this.setState({
          ouvintes: newText
        });
        break;
    }
  }

  radioUpdate(action) {
    this.radioNewStatus(action, null);
    fetch('https://painel.audiovox.pw/api/Njc2OCsw').then(response => response.text()).then(str => new window.DOMParser().parseFromString(str, "text/xml")).then(data => {
      let status = Object(_helpers_xmlToJson__WEBPACK_IMPORTED_MODULE_4__["default"])(data).info;

      switch (action) {
        case 'all':
          this.radioNewStatus('locutor', status.titulo['#text']);
          this.radioNewStatus('programa', status.genero['#text']);
          this.radioNewStatus('ouvintes', status.ouvintes_conectados['#text']);
          break;

        case 'locutor':
          this.radioNewStatus('locutor', status.titulo['#text']);
          break;

        case 'programa':
          this.radioNewStatus('programa', status.genero['#text']);
          break;

        case 'ouvintes':
          this.radioNewStatus('ouvintes', status.ouvintes_conectados['#text']);
          break;
      }
    });
  }

  componentDidMount() {
    this.radioUpdate('all');
  }

  setSlider(value) {
    if (value > 0) {
      this.sound.volume(parseFloat(value));
    }
  }

  toggle() {
    if (window.Howler._muted == true) {
      window.Howler.mute(false);
      this.setState({
        status: 'stop'
      });
    } else {
      window.Howler.mute(true);
      this.setState({
        status: 'play'
      });
    }
  }

  render() {
    let {
      stream,
      format,
      status,
      volume
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_tooltip__WEBPACK_IMPORTED_MODULE_2___default.a, {
      backgroundColor: "#000",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }
    }), __jsx(react_howler__WEBPACK_IMPORTED_MODULE_1___default.a, {
      src: stream,
      autoplay: true,
      volume: 1.0,
      html5: true,
      format: format,
      ref: ref => this.sound = ref,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }
    }), __jsx("input", {
      type: "checkbox",
      id: "close",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "backdrop",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "panel",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 29
      }
    }, __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 33
      }
    }, "Equipe"), __jsx("label", {
      htmlFor: "close",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 33
      }
    }, "\u274C")), __jsx("div", {
      className: "equipe",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 29
      }
    }, this.state.equipe.map(membro => __jsx("div", {
      className: "membro",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 33
      }
    }, __jsx("img", {
      "data-tip": `${membro.habbo} - ${membro.cargo}`,
      width: 33,
      height: 56,
      src: `https://www.habbo.com.br/habbo-imaging/avatarimage?hb=image&user=${membro.habbo}&headonly=0&direction=2&head_direction=2&action=&gesture=&size=s`,
      alt: `Habbo ${membro.habbo}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 37
      }
    }), __jsx("div", {
      className: "habbo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 37
      }
    }, membro.habbo))))))), __jsx("div", {
      className: "background",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "radial",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "player",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "radio-status",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "radio-status-avatar",
      style: {
        backgroundImage: `url(https://www.habbo.com.br/habbo-imaging/avatarimage?img_format=gif&user=${this.state.locutor == null ? 'Colecction' : this.state.locutor}&direction=2&head_direction=2&gesture=sml&size=b)`
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 25
      }
    }), __jsx("div", {
      className: "radio-status-data",
      onClick: () => this.radioUpdate('locutor'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 25
      }
    }, this.state.locutor == null ? __jsx("img", {
      src: "img/loading.gif",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 60
      }
    }) : this.state.locutor), __jsx("div", {
      className: "radio-status-data",
      onClick: () => this.radioUpdate('programa'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 25
      }
    }, this.state.programa == null ? __jsx("img", {
      src: "img/loading.gif",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 61
      }
    }) : this.state.programa)), __jsx(react_slider__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "radio-slider",
      trackClassName: "radio-slider-control",
      onChange: value => this.setSlider(value / 100),
      min: 0,
      defaultValue: volume,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "radio-status-data-listeners",
      onClick: () => this.radioUpdate('ouvintes'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 21
      }
    }, !this.state.ouvintes ? __jsx("img", {
      src: "img/loading.gif",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 50
      }
    }) : this.state.ouvintes, __jsx("div", {
      className: "radio-status-data-listeners-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 25
      }
    }, "ouvintes"))), __jsx("div", {
      className: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "vacancies",
      onClick: () => alert('vagas@habbobr.org'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 25
      }
    }, "Vagas"), __jsx("div", {
      className: `control ${status}`,
      onClick: () => this.toggle(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 25
      }
    }), __jsx("label", {
      htmlFor: "close",
      className: "team",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 25
      }
    }, "Equipe"))));
  }

} // Index.getInitialProps = async function() {
//     const res  = await fetch('http://serv3.audiovox.pw:6768/stats?sid=1&json=1');
//     const data = await res.json();
//     return {
//         radio: data
//     };
// };


/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lucas/Desktop/habbobr-manutencao/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-howler":
/*!*******************************!*\
  !*** external "react-howler" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-howler");

/***/ }),

/***/ "react-slider":
/*!*******************************!*\
  !*** external "react-slider" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slider");

/***/ }),

/***/ "react-tooltip":
/*!********************************!*\
  !*** external "react-tooltip" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-tooltip");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map