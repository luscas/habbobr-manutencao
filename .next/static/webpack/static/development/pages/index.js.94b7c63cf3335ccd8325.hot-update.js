webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_howler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-howler */ "./node_modules/react-howler/lib/index.js");
/* harmony import */ var react_howler__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_howler__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.es.js");
/* harmony import */ var react_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-slider */ "./node_modules/react-slider/es/components/ReactSlider/ReactSlider.js");
/* harmony import */ var _helpers_xmlToJson__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/xmlToJson */ "./helpers/xmlToJson.js");





var _jsxFileName = "/Users/lucas/Desktop/habbobr-manutencao/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Index = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _Component);

  var _super = _createSuper(Index);

  function Index(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = _super.call(this, props);
    _this.state = {
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
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "radioNewStatus",
    value: function radioNewStatus(type, newText) {
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
  }, {
    key: "radioUpdate",
    value: function radioUpdate(action) {
      var _this2 = this;

      this.radioNewStatus(action, null);
      fetch('https://painel.audiovox.pw/api/Njc2OCsw').then(function (response) {
        return response.text();
      }).then(function (str) {
        return new window.DOMParser().parseFromString(str, "text/xml");
      }).then(function (data) {
        var status = Object(_helpers_xmlToJson__WEBPACK_IMPORTED_MODULE_9__["default"])(data).info;

        switch (action) {
          case 'all':
            _this2.radioNewStatus('locutor', status.titulo['#text']);

            _this2.radioNewStatus('programa', status.genero['#text']);

            _this2.radioNewStatus('ouvintes', status.ouvintes_conectados['#text']);

            break;

          case 'locutor':
            _this2.radioNewStatus('locutor', status.titulo['#text']);

            break;

          case 'programa':
            _this2.radioNewStatus('programa', status.genero['#text']);

            break;

          case 'ouvintes':
            _this2.radioNewStatus('ouvintes', status.ouvintes_conectados['#text']);

            break;
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.radioUpdate('all');
    }
  }, {
    key: "setSlider",
    value: function setSlider(value) {
      if (value > 0) {
        this.sound.volume(parseFloat(value));
      }
    }
  }, {
    key: "toggle",
    value: function toggle() {
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
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          stream = _this$state.stream,
          format = _this$state.format,
          status = _this$state.status,
          volume = _this$state.volume;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(react_tooltip__WEBPACK_IMPORTED_MODULE_7__["default"], {
        backgroundColor: "#000",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 17
        }
      }), __jsx(react_howler__WEBPACK_IMPORTED_MODULE_6___default.a, {
        src: stream,
        autoplay: true,
        volume: 1.0,
        html5: true,
        format: format,
        ref: function ref(_ref) {
          return _this3.sound = _ref;
        },
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
      }, this.state.equipe.map(function (membro) {
        return __jsx("div", {
          className: "membro",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 33
          }
        }, __jsx("img", {
          "data-tip": "".concat(membro.habbo, " - ").concat(membro.cargo),
          width: 33,
          height: 56,
          src: "https://www.habbo.com.br/habbo-imaging/avatarimage?hb=image&user=".concat(membro.habbo, "&headonly=0&direction=2&head_direction=2&action=&gesture=&size=s"),
          alt: "Habbo ".concat(membro.habbo),
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 37
          }
        }), __jsx("div", {
          "class": "habbo",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 37
          }
        }, membro.habbo));
      }))))), __jsx("div", {
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
          backgroundImage: "url(https://www.habbo.com.br/habbo-imaging/avatarimage?img_format=gif&user=".concat(this.state.locutor == null ? 'Colecction' : this.state.locutor, "&direction=2&head_direction=2&gesture=sml&size=b)")
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 25
        }
      }), __jsx("div", {
        className: "radio-status-data",
        onClick: function onClick() {
          return _this3.radioUpdate('locutor');
        },
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
        onClick: function onClick() {
          return _this3.radioUpdate('programa');
        },
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
      }) : this.state.programa)), __jsx(react_slider__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "radio-slider",
        trackClassName: "radio-slider-control",
        onChange: function onChange(value) {
          return _this3.setSlider(value / 100);
        },
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
        onClick: function onClick() {
          return _this3.radioUpdate('ouvintes');
        },
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
        onClick: function onClick() {
          return alert('vagas@habbobr.org');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 25
        }
      }, "Vagas"), __jsx("div", {
        className: "control ".concat(status),
        onClick: function onClick() {
          return _this3.toggle();
        },
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
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]); // Index.getInitialProps = async function() {
//     const res  = await fetch('http://serv3.audiovox.pw:6768/stats?sid=1&json=1');
//     const data = await res.json();
//     return {
//         radio: data
//     };
// };


/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.94b7c63cf3335ccd8325.hot-update.js.map