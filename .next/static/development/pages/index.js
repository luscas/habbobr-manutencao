(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\index.js"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/fast-levenshtein/levenshtein.js":
/*!******************************************************!*\
  !*** ./node_modules/fast-levenshtein/levenshtein.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;(function() {
  'use strict';
  
  var collator;
  try {
    collator = (typeof Intl !== "undefined" && typeof Intl.Collator !== "undefined") ? Intl.Collator("generic", { sensitivity: "base" }) : null;
  } catch (err){
    console.log("Collator could not be initialized and wouldn't be used");
  }
  // arrays to re-use
  var prevRow = [],
    str2Char = [];
  
  /**
   * Based on the algorithm at http://en.wikipedia.org/wiki/Levenshtein_distance.
   */
  var Levenshtein = {
    /**
     * Calculate levenshtein distance of the two strings.
     *
     * @param str1 String the first string.
     * @param str2 String the second string.
     * @param [options] Additional options.
     * @param [options.useCollator] Use `Intl.Collator` for locale-sensitive string comparison.
     * @return Integer the levenshtein distance (0 and above).
     */
    get: function(str1, str2, options) {
      var useCollator = (options && collator && options.useCollator);
      
      var str1Len = str1.length,
        str2Len = str2.length;
      
      // base cases
      if (str1Len === 0) return str2Len;
      if (str2Len === 0) return str1Len;

      // two rows
      var curCol, nextCol, i, j, tmp;

      // initialise previous row
      for (i=0; i<str2Len; ++i) {
        prevRow[i] = i;
        str2Char[i] = str2.charCodeAt(i);
      }
      prevRow[str2Len] = str2Len;

      var strCmp;
      if (useCollator) {
        // calculate current row distance from previous row using collator
        for (i = 0; i < str1Len; ++i) {
          nextCol = i + 1;

          for (j = 0; j < str2Len; ++j) {
            curCol = nextCol;

            // substution
            strCmp = 0 === collator.compare(str1.charAt(i), String.fromCharCode(str2Char[j]));

            nextCol = prevRow[j] + (strCmp ? 0 : 1);

            // insertion
            tmp = curCol + 1;
            if (nextCol > tmp) {
              nextCol = tmp;
            }
            // deletion
            tmp = prevRow[j + 1] + 1;
            if (nextCol > tmp) {
              nextCol = tmp;
            }

            // copy current col value into previous (in preparation for next iteration)
            prevRow[j] = curCol;
          }

          // copy last col value into previous (in preparation for next iteration)
          prevRow[j] = nextCol;
        }
      }
      else {
        // calculate current row distance from previous row without collator
        for (i = 0; i < str1Len; ++i) {
          nextCol = i + 1;

          for (j = 0; j < str2Len; ++j) {
            curCol = nextCol;

            // substution
            strCmp = str1.charCodeAt(i) === str2Char[j];

            nextCol = prevRow[j] + (strCmp ? 0 : 1);

            // insertion
            tmp = curCol + 1;
            if (nextCol > tmp) {
              nextCol = tmp;
            }
            // deletion
            tmp = prevRow[j + 1] + 1;
            if (nextCol > tmp) {
              nextCol = tmp;
            }

            // copy current col value into previous (in preparation for next iteration)
            prevRow[j] = curCol;
          }

          // copy last col value into previous (in preparation for next iteration)
          prevRow[j] = nextCol;
        }
      }
      return nextCol;
    }

  };

  // amd
  if ( true && __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") !== null && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return Levenshtein;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // commonjs
  else if ( true && module !== null && typeof exports !== "undefined" && module.exports === exports) {
    module.exports = Levenshtein;
  }
  // web worker
  else if (typeof self !== "undefined" && typeof self.postMessage === 'function' && typeof self.importScripts === 'function') {
    self.Levenshtein = Levenshtein;
  }
  // browser main thread
  else if (typeof window !== "undefined" && window !== null) {
    window.Levenshtein = Levenshtein;
  }
}());


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/fetch/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/fetch/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals self */var fetch=self.fetch.bind(self);module.exports=fetch;module.exports.default=module.exports;

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5Cwww%5Chabbobr-manutencao%5Cpages%5Cindex.js!./":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5Cwww%5Chabbobr-manutencao%5Cpages%5Cindex.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/react-audio-player/dist/bundle.js":
/*!********************************************************!*\
  !*** ./node_modules/react-audio-player/dist/bundle.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports=function(e){var t={};function o(r){if(t[r])return t[r].exports;var _=t[r]={i:r,l:!1,exports:{}};return e[r].call(_.exports,_,_.exports,o),_.l=!0,_.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var _ in e)o.d(r,_,function(t){return e[t]}.bind(null,_));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=3)}([function(e,t){e.exports=__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")},function(e,t){e.exports=__webpack_require__(/*! react */ "./node_modules/react/index.js")},function(e,t){e.exports=__webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(2)).enterModule,enterModule&&enterModule(module);var ReactAudioPlayer=function(_Component){function ReactAudioPlayer(){return _classCallCheck(this,ReactAudioPlayer),_possibleConstructorReturn(this,_getPrototypeOf(ReactAudioPlayer).apply(this,arguments))}return _inherits(ReactAudioPlayer,_Component),_createClass(ReactAudioPlayer,[{key:"componentDidMount",value:function(){var e=this,t=this.audioEl;this.updateVolume(this.props.volume),t.addEventListener("error",function(t){e.props.onError(t)}),t.addEventListener("canplay",function(t){e.props.onCanPlay(t)}),t.addEventListener("canplaythrough",function(t){e.props.onCanPlayThrough(t)}),t.addEventListener("play",function(t){e.setListenTrack(),e.props.onPlay(t)}),t.addEventListener("abort",function(t){e.clearListenTrack(),e.props.onAbort(t)}),t.addEventListener("ended",function(t){e.clearListenTrack(),e.props.onEnded(t)}),t.addEventListener("pause",function(t){e.clearListenTrack(),e.props.onPause(t)}),t.addEventListener("seeked",function(t){e.props.onSeeked(t)}),t.addEventListener("loadedmetadata",function(t){e.props.onLoadedMetadata(t)}),t.addEventListener("volumechange",function(t){e.props.onVolumeChanged(t)})}},{key:"componentWillReceiveProps",value:function(e){this.updateVolume(e.volume)}},{key:"setListenTrack",value:function(){var e=this;if(!this.listenTracker){var t=this.props.listenInterval;this.listenTracker=setInterval(function(){e.props.onListen(e.audioEl.currentTime)},t)}}},{key:"updateVolume",value:function(e){"number"==typeof e&&e!==this.audioEl.volume&&(this.audioEl.volume=e)}},{key:"clearListenTrack",value:function(){this.listenTracker&&(clearInterval(this.listenTracker),this.listenTracker=null)}},{key:"render",value:function(){var e=this,t=this.props.children||react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Your browser does not support the ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",null,"audio")," element."),o=!(!1===this.props.controls),r=this.props.title?this.props.title:this.props.src,_={};return this.props.controlsList&&(_.controlsList=this.props.controlsList),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("audio",_extends({autoPlay:this.props.autoPlay,className:"react-audio-player ".concat(this.props.className),controls:o,crossOrigin:this.props.crossOrigin,id:this.props.id,loop:this.props.loop,muted:this.props.muted,onPlay:this.onPlay,preload:this.props.preload,ref:function(t){e.audioEl=t},src:this.props.src,style:this.props.style,title:r},_),t)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),ReactAudioPlayer}(react__WEBPACK_IMPORTED_MODULE_0__.Component);ReactAudioPlayer.defaultProps={autoPlay:!1,children:null,className:"",controls:!1,controlsList:"",crossOrigin:null,id:"",listenInterval:1e4,loop:!1,muted:!1,onAbort:function(){},onCanPlay:function(){},onCanPlayThrough:function(){},onEnded:function(){},onError:function(){},onListen:function(){},onPause:function(){},onPlay:function(){},onSeeked:function(){},onVolumeChanged:function(){},onLoadedMetadata:function(){},preload:"metadata",src:null,style:{},title:"",volume:1},ReactAudioPlayer.propTypes={autoPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,controls:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,controlsList:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,crossOrigin:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,id:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,listenInterval:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,loop:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,muted:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,onAbort:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onCanPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onCanPlayThrough:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onEnded:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onError:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onListen:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onLoadedMetadata:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onPause:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onSeeked:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onVolumeChanged:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,preload:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["","none","metadata","auto"]),src:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,style:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),title:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,volume:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number};var _default=ReactAudioPlayer,reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(2)).default,reactHotLoader&&(reactHotLoader.register(ReactAudioPlayer,"ReactAudioPlayer","/home/justin/Projects/react-audio-player/src/index.jsx"),reactHotLoader.register(_default,"default","/home/justin/Projects/react-audio-player/src/index.jsx")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(2)).leaveModule,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(4)(module))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}}]);

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-hot-loader/dist/react-hot-loader.development.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-hot-loader/dist/react-hot-loader.development.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var React__default = _interopDefault(React);
var shallowEqual = _interopDefault(__webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js"));
var levenshtein = _interopDefault(__webpack_require__(/*! fast-levenshtein */ "./node_modules/fast-levenshtein/levenshtein.js"));
var ReactDOM = _interopDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));
var PropTypes = _interopDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var defaultPolyfill = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
var defaultPolyfill__default = _interopDefault(defaultPolyfill);
var hoistNonReactStatic = _interopDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/* eslint-disable no-underscore-dangle */

var isCompositeComponent = function isCompositeComponent(type) {
  return typeof type === 'function';
};
var isReloadableComponent = function isReloadableComponent(type) {
  return typeof type === 'function' || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object';
};

var getComponentDisplayName = function getComponentDisplayName(type) {
  var displayName = type.displayName || type.name;
  return displayName && displayName !== 'ReactComponent' ? displayName : 'Component';
};

var reactLifeCycleMountMethods = ['componentWillMount', 'componentDidMount'];

function isReactClass(Component) {
  return !!(Component.prototype && (React__default.Component.prototype.isPrototypeOf(Component.prototype) ||
  // react 14 support
  Component.prototype.isReactComponent || Component.prototype.componentWillMount || Component.prototype.componentWillUnmount || Component.prototype.componentDidMount || Component.prototype.componentDidUnmount || Component.prototype.render));
}

function isReactClassInstance(Component) {
  return Component && isReactClass({ prototype: Object.getPrototypeOf(Component) });
}

var getInternalInstance = function getInternalInstance(instance) {
  return instance._reactInternalFiber || // React 16
  instance._reactInternalInstance || // React 15
  null;
};

var updateInstance = function updateInstance(instance) {
  var updater = instance.updater,
      forceUpdate = instance.forceUpdate;

  if (typeof forceUpdate === 'function') {
    instance.forceUpdate();
  } else if (updater && typeof updater.enqueueForceUpdate === 'function') {
    updater.enqueueForceUpdate(instance);
  }
};

var isFragmentNode = function isFragmentNode(_ref) {
  var type = _ref.type;
  return React__default.Fragment && type === React__default.Fragment;
};

var ContextType = React__default.createContext ? React__default.createContext() : null;
var ConsumerType = ContextType && ContextType.Consumer.$$typeof;
var ProviderType = ContextType && ContextType.Provider.$$typeof;
var MemoType = React__default.memo && React__default.memo(function () {
  return null;
}).$$typeof;
var LazyType = React__default.lazy && React__default.lazy(function () {
  return null;
}).$$typeof;
var ForwardType = React__default.forwardRef && React__default.forwardRef(function () {
  return null;
}).$$typeof;

var CONTEXT_CURRENT_VALUE = '_currentValue';

var isContextConsumer = function isContextConsumer(_ref2) {
  var type = _ref2.type;
  return type && (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && '$$typeof' in type && type.$$typeof === ConsumerType && ConsumerType;
};
var isContextProvider = function isContextProvider(_ref3) {
  var type = _ref3.type;
  return type && (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && '$$typeof' in type && type.$$typeof === ProviderType && ProviderType;
};
var isMemoType = function isMemoType(_ref4) {
  var type = _ref4.type;
  return type && (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && '$$typeof' in type && type.$$typeof === MemoType && MemoType;
};
var isLazyType = function isLazyType(_ref5) {
  var type = _ref5.type;
  return type && (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && '$$typeof' in type && type.$$typeof === LazyType && LazyType;
};
var isForwardType = function isForwardType(_ref6) {
  var type = _ref6.type;
  return type && (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && '$$typeof' in type && type.$$typeof === ForwardType && ForwardType;
};
var isContextType = function isContextType(type) {
  return isContextConsumer(type) || isContextProvider(type);
};

var getElementType = function getElementType(type) {
  var element = { type: type };

  if (isContextConsumer(element)) {
    return 'Consumer';
  }
  if (isContextProvider(element)) {
    return 'Provider';
  }
  if (isLazyType(element)) {
    return 'Lazy';
  }
  if (isMemoType(element)) {
    return 'Memo';
  }
  if (isForwardType(element)) {
    return 'Forward';
  }

  if (isReactClass(type)) {
    return 'Class';
  }

  if (typeof element === 'function') {
    return 'FC';
  }

  return 'unknown';
};

var getContextProvider = function getContextProvider(type) {
  return type && type._context;
};

var configuration = {
  // Log level
  logLevel: 'error',

  // Allows using SFC without changes
  pureSFC: true,

  // keep render method unpatched, moving sideEffect to componentDidUpdate
  pureRender: true,

  // Allows SFC to be used, enables "intermediate" components used by Relay, should be disabled for Preact
  allowSFC: true,

  // Allow reload of effect hooks with non zero dependency list
  reloadHooks: true,

  // Allow reload of mount effect hooks - zero deps
  reloadLifeCycleHooks: false,

  // Enables hook reload on hook body change
  reloadHooksOnBodyChange: true,

  // Disable "hot-replacement-render"
  disableHotRenderer: false,

  // @private
  integratedComparator: false,
  // @private
  integratedResolver: false,

  // Disable "hot-replacement-render" when injection into react-dom is made
  disableHotRendererWhenInjected: true,

  // Controls `react-🔥-dom patch` notification
  showReactDomPatchNotification: true,

  // Hook on babel component register.
  onComponentRegister: false,

  // Hook on React renders for a first time component
  onComponentCreate: false,

  // flag to completely disable RHL for SFC. Probably don't use it without dom patch made.
  ignoreSFC: false,

  // ignoreSFC when injection into react-dom is made
  ignoreSFCWhenInjected: true,

  // flag to completely disable RHL for Components
  ignoreComponents: false,

  // default value for AppContainer errorOverlay
  errorReporter: undefined,

  // Global error overlay
  ErrorOverlay: undefined,

  // Actively track lazy loaded components
  trackTailUpdates: true,

  // react hot dom features enabled
  IS_REACT_MERGE_ENABLED: false
};

var internalConfiguration = {
  // control proxy creation
  disableProxyCreation: false
};

var setConfiguration = function setConfiguration(config) {
  // not using Object.assing for IE11 compliance
  for (var i in config) {
    if (config.hasOwnProperty(i)) {
      configuration[i] = config[i];
    }
  }
};

/* eslint-disable no-console */

var logger = {
  debug: function debug() {
    if (['debug'].indexOf(configuration.logLevel) !== -1) {
      var _console;

      (_console = console).debug.apply(_console, arguments);
    }
  },
  log: function log() {
    if (['debug', 'log'].indexOf(configuration.logLevel) !== -1) {
      var _console2;

      (_console2 = console).log.apply(_console2, arguments);
    }
  },
  warn: function warn() {
    if (['debug', 'log', 'warn'].indexOf(configuration.logLevel) !== -1) {
      var _console3;

      (_console3 = console).warn.apply(_console3, arguments);
    }
  },
  error: function error() {
    if (['debug', 'log', 'warn', 'error'].indexOf(configuration.logLevel) !== -1) {
      var _console4;

      (_console4 = console).error.apply(_console4, arguments);
    }
  }
};

/* eslint-disable no-eval, func-names */

function safeReactConstructor(Component, lastInstance) {
  try {
    if (lastInstance) {
      return new Component(lastInstance.props, lastInstance.context);
    }
    return new Component({}, {});
  } catch (e) {
    // some components, like Redux connect could not be created without proper context
  }
  return null;
}

function isNativeFunction(fn) {
  return typeof fn === 'function' ? fn.toString().indexOf('[native code]') > 0 : false;
}

var identity = function identity(a) {
  return a;
};
var indirectEval = eval;

var doesSupportClasses = function () {
  try {
    indirectEval('class Test {}');
    return true;
  } catch (e) {
    return false;
  }
}();

var ES6ProxyComponentFactory = function ES6ProxyComponentFactory(InitialParent, postConstructionAction) {
  return indirectEval('\n(function(InitialParent, postConstructionAction) {\n  return class ' + (InitialParent.name || 'HotComponent') + ' extends InitialParent {\n    /*\n     ! THIS IS NOT YOUR COMPONENT !\n     !  THIS IS REACT-HOT-LOADER  !\n  \n     this is a "' + InitialParent.name + '" component, patched by React-Hot-Loader\n     Sorry, but the real class code was hidden behind this facade\n     Please refer to https://github.com/gaearon/react-hot-loader for details...\n    */    \n    \n    constructor(props, context) {\n      super(props, context)\n      postConstructionAction.call(this)\n    }\n  }\n})\n')(InitialParent, postConstructionAction);
};

var ES5ProxyComponentFactory = function ES5ProxyComponentFactory(InitialParent, postConstructionAction) {
  function ProxyComponent(props, context) {
    InitialParent.call(this, props, context);
    postConstructionAction.call(this);
  }
  ProxyComponent.prototype = Object.create(InitialParent.prototype);
  Object.setPrototypeOf(ProxyComponent, InitialParent);
  return ProxyComponent;
};

var proxyClassCreator = doesSupportClasses ? ES6ProxyComponentFactory : ES5ProxyComponentFactory;

function getOwnKeys(target) {
  return [].concat(Object.getOwnPropertyNames(target), Object.getOwnPropertySymbols(target));
}

function shallowStringsEqual(a, b) {
  for (var key in a) {
    if (String(a[key]) !== String(b[key])) {
      return false;
    }
  }
  return true;
}

function deepPrototypeUpdate(dest, source) {
  var deepDest = Object.getPrototypeOf(dest);
  var deepSrc = Object.getPrototypeOf(source);
  if (deepDest && deepSrc && deepSrc !== deepDest) {
    deepPrototypeUpdate(deepDest, deepSrc);
  }
  if (source.prototype && source.prototype !== dest.prototype) {
    dest.prototype = source.prototype;
  }
}

function safeDefineProperty(target, key, props) {
  try {
    Object.defineProperty(target, key, props);
  } catch (e) {
    logger.warn('Error while wrapping', key, ' -> ', e);
  }
}

var PREFIX = '__reactstandin__';
var PROXY_KEY = PREFIX + 'key';
var GENERATION = PREFIX + 'proxyGeneration';
var REGENERATE_METHOD = PREFIX + 'regenerateByEval';
var UNWRAP_PROXY = PREFIX + 'getCurrent';
var CACHED_RESULT = PREFIX + 'cachedResult';
var PROXY_IS_MOUNTED = PREFIX + 'isMounted';

var RENDERED_GENERATION = 'REACT_HOT_LOADER_RENDERED_GENERATION';

var RESERVED_STATICS = ['length', 'displayName', 'name', 'arguments', 'caller', 'prototype', 'toString', 'valueOf', 'isStatelessFunctionalProxy', PROXY_KEY, UNWRAP_PROXY];

function transferStaticProps(ProxyComponent, savedDescriptors, PreviousComponent, NextComponent) {
  Object.getOwnPropertyNames(ProxyComponent).forEach(function (key) {
    if (RESERVED_STATICS.indexOf(key) !== -1) {
      return;
    }

    var prevDescriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);
    var savedDescriptor = savedDescriptors[key];

    if (!shallowEqual(prevDescriptor, savedDescriptor)) {
      safeDefineProperty(NextComponent, key, prevDescriptor);
    }
  });

  // Copy newly defined static methods and properties
  Object.getOwnPropertyNames(NextComponent).forEach(function (key) {
    if (RESERVED_STATICS.indexOf(key) !== -1) {
      return;
    }

    var prevDescriptor = PreviousComponent && Object.getOwnPropertyDescriptor(ProxyComponent, key);
    var savedDescriptor = savedDescriptors[key];

    // Skip redefined descriptors
    if (prevDescriptor && savedDescriptor && !shallowEqual(savedDescriptor, prevDescriptor)) {
      safeDefineProperty(NextComponent, key, prevDescriptor);
      return;
    }

    if (prevDescriptor && !savedDescriptor) {
      safeDefineProperty(ProxyComponent, key, prevDescriptor);
      return;
    }

    var nextDescriptor = _extends({}, Object.getOwnPropertyDescriptor(NextComponent, key), {
      configurable: true
    });

    savedDescriptors[key] = nextDescriptor;
    safeDefineProperty(ProxyComponent, key, nextDescriptor);
  });

  // Remove static methods and properties that are no longer defined
  Object.getOwnPropertyNames(ProxyComponent).forEach(function (key) {
    if (RESERVED_STATICS.indexOf(key) !== -1) {
      return;
    }
    // Skip statics that exist on the next class
    if (NextComponent.hasOwnProperty(key)) {
      return;
    }
    // Skip non-configurable statics
    var proxyDescriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);
    if (proxyDescriptor && !proxyDescriptor.configurable) {
      return;
    }

    var prevDescriptor = PreviousComponent && Object.getOwnPropertyDescriptor(PreviousComponent, key);
    var savedDescriptor = savedDescriptors[key];

    // Skip redefined descriptors
    if (prevDescriptor && savedDescriptor && !shallowEqual(savedDescriptor, prevDescriptor)) {
      return;
    }

    safeDefineProperty(ProxyComponent, key, {
      value: undefined
    });
  });

  return savedDescriptors;
}

function mergeComponents(ProxyComponent, NextComponent, InitialComponent, lastInstance, injectedMembers) {
  var injectedCode = {};
  try {
    var nextInstance = safeReactConstructor(NextComponent, lastInstance);

    try {
      // Bypass babel class inheritance checking
      deepPrototypeUpdate(InitialComponent, NextComponent);
    } catch (e) {
      // It was ES6 class
    }

    var proxyInstance = safeReactConstructor(ProxyComponent, lastInstance);

    if (!nextInstance || !proxyInstance) {
      return injectedCode;
    }

    var mergedAttrs = _extends({}, proxyInstance, nextInstance);
    var hasRegenerate = proxyInstance[REGENERATE_METHOD];
    var ownKeys = getOwnKeys(Object.getPrototypeOf(ProxyComponent.prototype));
    Object.keys(mergedAttrs).forEach(function (key) {
      if (key.indexOf(PREFIX) === 0) return;
      var nextAttr = nextInstance[key];
      var prevAttr = proxyInstance[key];
      if (nextAttr) {
        if (isNativeFunction(nextAttr) || isNativeFunction(prevAttr)) {
          // this is bound method
          var isSameArity = nextAttr.length === prevAttr.length;
          var existsInPrototype = ownKeys.indexOf(key) >= 0 || ProxyComponent.prototype[key];
          if ((isSameArity || !prevAttr) && existsInPrototype) {
            if (hasRegenerate) {
              injectedCode[key] = 'Object.getPrototypeOf(this)[\'' + key + '\'].bind(this)';
            } else {
              logger.warn('React Hot Loader:,', 'Non-controlled class', ProxyComponent.name, 'contains a new native or bound function ', key, nextAttr, '. Unable to reproduce');
            }
          } else {
            logger.warn('React Hot Loader:', 'Updated class ', ProxyComponent.name, 'contains native or bound function ', key, nextAttr, '. Unable to reproduce, use arrow functions instead.', '(arity: ' + nextAttr.length + '/' + prevAttr.length + ', proto: ' + (existsInPrototype ? 'yes' : 'no'));
          }
          return;
        }

        var nextString = String(nextAttr);
        var injectedBefore = injectedMembers[key];
        var isArrow = nextString.indexOf('=>') >= 0;
        var isFunction = nextString.indexOf('function') >= 0 || isArrow;
        var referToThis = nextString.indexOf('this') >= 0;
        if (nextString !== String(prevAttr) || injectedBefore && nextString !== String(injectedBefore) || isArrow && referToThis) {
          if (!hasRegenerate) {
            if (!isFunction) {
              // just copy prop over
              injectedCode[key] = nextAttr;
            } else {
              logger.warn('React Hot Loader:', ' Updated class ', ProxyComponent.name, 'had different code for', key, nextAttr, '. Unable to reproduce. Regeneration support needed.');
            }
          } else {
            injectedCode[key] = nextAttr;
          }
        }
      }
    });
  } catch (e) {
    logger.warn('React Hot Loader:', e);
  }
  return injectedCode;
}

function checkLifeCycleMethods(ProxyComponent, NextComponent) {
  try {
    var p1 = Object.getPrototypeOf(ProxyComponent.prototype);
    var p2 = NextComponent.prototype;
    reactLifeCycleMountMethods.forEach(function (key) {
      var d1 = Object.getOwnPropertyDescriptor(p1, key) || { value: p1[key] };
      var d2 = Object.getOwnPropertyDescriptor(p2, key) || { value: p2[key] };
      if (!shallowStringsEqual(d1, d2)) {
        logger.warn('React Hot Loader:', 'You did update', ProxyComponent.name, 's lifecycle method', key, '. Unable to repeat');
      }
    });
  } catch (e) {
    // Ignore errors
  }
}

function inject(target, currentGeneration, injectedMembers) {
  if (target[GENERATION] !== currentGeneration) {
    var hasRegenerate = !!target[REGENERATE_METHOD];
    Object.keys(injectedMembers).forEach(function (key) {
      try {
        if (hasRegenerate) {
          var usedThis = String(injectedMembers[key]).match(/_this([\d]+)/gi) || [];
          target[REGENERATE_METHOD](key, '(function REACT_HOT_LOADER_SANDBOX () {\n          var _this  = this; // common babel transpile\n          ' + usedThis.map(function (name) {
            return 'var ' + name + ' = this;';
          }) + '\n\n          return ' + injectedMembers[key] + ';\n          }).call(this)');
        } else {
          target[key] = injectedMembers[key];
        }
      } catch (e) {
        logger.warn('React Hot Loader: Failed to regenerate method ', key, ' of class ', target);
        logger.warn('got error', e);
      }
    });

    target[GENERATION] = currentGeneration;
  }
}

var has = Object.prototype.hasOwnProperty;

var proxies = new WeakMap();

var resetClassProxies = function resetClassProxies() {
  proxies = new WeakMap();
};

var blackListedClassMembers = ['constructor', 'render', 'componentWillMount', 'componentDidMount', 'componentDidCatch', 'componentWillReceiveProps', 'componentWillUnmount', 'hotComponentRender', 'getInitialState', 'getDefaultProps'];

var defaultRenderOptions = {
  componentWillRender: identity,
  componentDidUpdate: function componentDidUpdate(result) {
    return result;
  },
  componentDidRender: function componentDidRender(result) {
    return result;
  }
};

var filteredPrototypeMethods = function filteredPrototypeMethods(Proto) {
  return Object.getOwnPropertyNames(Proto).filter(function (prop) {
    var descriptor = Object.getOwnPropertyDescriptor(Proto, prop);
    return descriptor && prop.indexOf(PREFIX) !== 0 && blackListedClassMembers.indexOf(prop) < 0 && typeof descriptor.value === 'function';
  });
};

var defineClassMember = function defineClassMember(Class, methodName, methodBody) {
  return safeDefineProperty(Class.prototype, methodName, {
    configurable: true,
    writable: true,
    enumerable: false,
    value: methodBody
  });
};

var defineClassMembers = function defineClassMembers(Class, methods) {
  return Object.keys(methods).forEach(function (methodName) {
    return defineClassMember(Class, methodName, methods[methodName]);
  });
};

var setSFPFlag = function setSFPFlag(component, flag) {
  return safeDefineProperty(component, 'isStatelessFunctionalProxy', {
    configurable: false,
    writable: false,
    enumerable: false,
    value: flag
  });
};

var copyMethodDescriptors = function copyMethodDescriptors(target, source) {
  if (source) {
    // it is possible to use `function-double` to construct an ideal clone, but does not make a sence
    var keys = Object.getOwnPropertyNames(source);

    keys.forEach(function (key) {
      return safeDefineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });

    safeDefineProperty(target, 'toString', {
      configurable: true,
      writable: false,
      enumerable: false,
      value: function toString() {
        return String(source);
      }
    });
  }

  return target;
};

var knownClassComponents = [];

var forEachKnownClass = function forEachKnownClass(cb) {
  return knownClassComponents.forEach(cb);
};

function createClassProxy(InitialComponent, proxyKey) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var renderOptions = _extends({}, defaultRenderOptions, options);
  var proxyConfig = _extends({}, configuration, options.proxy);
  // Prevent double wrapping.
  // Given a proxy class, return the existing proxy managing it.
  var existingProxy = proxies.get(InitialComponent);

  if (existingProxy) {
    return existingProxy;
  }

  var CurrentComponent = void 0;
  var savedDescriptors = {};
  var injectedMembers = {};
  var proxyGeneration = 0;
  var classUpdatePostponed = null;
  var instancesCount = 0;
  var isFunctionalComponent = !isReactClass(InitialComponent);

  var lastInstance = null;

  function postConstructionAction() {
    this[GENERATION] = 0;

    lastInstance = this;
    // is there is an update pending
    if (classUpdatePostponed) {
      var callUpdate = classUpdatePostponed;
      classUpdatePostponed = null;
      callUpdate();
    }
    // As long we can't override constructor
    // every class shall evolve from a base class
    inject(this, proxyGeneration, injectedMembers);
  }

  function proxiedUpdate() {
    if (this) {
      inject(this, proxyGeneration, injectedMembers);
    }
  }

  function lifeCycleWrapperFactory(wrapperName) {
    var sideEffect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identity;

    return copyMethodDescriptors(function wrappedMethod() {
      proxiedUpdate.call(this);
      sideEffect(this);

      for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
        rest[_key] = arguments[_key];
      }

      return !isFunctionalComponent && CurrentComponent.prototype[wrapperName] && CurrentComponent.prototype[wrapperName].apply(this, rest);
    }, InitialComponent.prototype && InitialComponent.prototype[wrapperName]);
  }

  function methodWrapperFactory(wrapperName, realMethod) {
    return copyMethodDescriptors(function wrappedMethod() {
      for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        rest[_key2] = arguments[_key2];
      }

      return realMethod.apply(this, rest);
    }, realMethod);
  }

  var fakeBasePrototype = function fakeBasePrototype(Proto) {
    return filteredPrototypeMethods(Proto).reduce(function (acc, key) {
      acc[key] = methodWrapperFactory(key, Proto[key]);
      return acc;
    }, {});
  };

  var componentDidMount = lifeCycleWrapperFactory('componentDidMount', function (target) {
    target[PROXY_IS_MOUNTED] = true;
    target[RENDERED_GENERATION] = get$1();
    instancesCount++;
  });
  var componentDidUpdate = lifeCycleWrapperFactory('componentDidUpdate', renderOptions.componentDidUpdate);
  var componentWillUnmount = lifeCycleWrapperFactory('componentWillUnmount', function (target) {
    target[PROXY_IS_MOUNTED] = false;
    instancesCount--;
  });

  function hotComponentRender() {
    // repeating subrender call to keep RENDERED_GENERATION up to date
    renderOptions.componentWillRender(this);
    proxiedUpdate.call(this);
    var result = void 0;

    // We need to use hasOwnProperty here, as the cached result is a React node
    // and can be null or some other falsy value.
    if (has.call(this, CACHED_RESULT)) {
      result = this[CACHED_RESULT];
      delete this[CACHED_RESULT];
    } else if (isFunctionalComponent) {
      result = CurrentComponent(this.props, this.context);
    } else {
      var renderMethod = CurrentComponent.prototype.render || this.render;
      /* eslint-disable no-use-before-define */
      if (renderMethod === proxiedRender) {
        throw new Error('React-Hot-Loader: you are trying to render Component without .render method');
      }
      /* eslint-enable */
      result = renderMethod.apply(this,
      // eslint-disable-next-line prefer-rest-params
      arguments);
    }

    return renderOptions.componentDidRender.call(this, result);
  }

  function hotComponentUpdate() {
    renderOptions.componentWillRender(this);
    proxiedUpdate.call(this);
  }

  function proxiedRender() {
    renderOptions.componentWillRender(this);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return hotComponentRender.call.apply(hotComponentRender, [this].concat(args));
  }

  var defineProxyMethods = function defineProxyMethods(Proxy) {
    var Base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    defineClassMembers(Proxy, _extends({}, fakeBasePrototype(Base), proxyConfig.pureRender ? {} : { render: proxiedRender }, {
      hotComponentRender: hotComponentRender,
      hotComponentUpdate: hotComponentUpdate,
      componentDidMount: componentDidMount,
      componentDidUpdate: componentDidUpdate,
      componentWillUnmount: componentWillUnmount
    }));
  };

  var _ProxyFacade = void 0;
  var ProxyComponent = null;
  var proxy = void 0;

  if (!isFunctionalComponent) {
    // Component
    ProxyComponent = proxyClassCreator(InitialComponent, postConstructionAction);

    defineProxyMethods(ProxyComponent, InitialComponent.prototype);

    knownClassComponents.push(ProxyComponent);

    _ProxyFacade = ProxyComponent;
  } else if (!proxyConfig.allowSFC) {
    proxyConfig.pureRender = false;
    // SFC Converted to component. Does not support returning precreated instances from render.
    ProxyComponent = proxyClassCreator(React.Component, postConstructionAction);

    defineProxyMethods(ProxyComponent);
    _ProxyFacade = ProxyComponent;
  } else {
    // SFC

    // This function only gets called for the initial mount. The actual
    // rendered component instance will be the return value.

    // eslint-disable-next-line func-names
    _ProxyFacade = function ProxyFacade(props, context) {
      /*
         ! THIS IS NOT YOUR COMPONENT !
        !  THIS IS REACT-HOT-LOADER  !
         And you are probably looking for a function component of yours
        It's hidden, but there is a way to fix this - just reconfigure your application a bit
        see https://github.com/gaearon/react-hot-loader/issues/1311
        */

      var result = CurrentComponent(props, context);

      // This is a Relay-style container constructor. We can't do the prototype-
      // style wrapping for this as we do elsewhere, so just we just pass it
      // through as-is.
      if (isReactClassInstance(result)) {
        ProxyComponent = null;

        // Relay lazily sets statics like getDerivedStateFromProps on initial
        // render in lazy construction, so we need to do the same here.
        transferStaticProps(_ProxyFacade, savedDescriptors, null, CurrentComponent);

        return result;
      }

      // simple SFC, could continue to be SFC
      if (proxyConfig.pureSFC) {
        if (!CurrentComponent.contextTypes) {
          if (!_ProxyFacade.isStatelessFunctionalProxy) {
            setSFPFlag(_ProxyFacade, true);
          }

          return renderOptions.componentDidRender(result);
        }
      }
      setSFPFlag(_ProxyFacade, false);
      proxyConfig.pureRender = false;

      // Otherwise, it's a normal functional component. Build the real proxy
      // and use it going forward.
      ProxyComponent = proxyClassCreator(React.Component, postConstructionAction);

      defineProxyMethods(ProxyComponent);

      var determinateResult = new ProxyComponent(props, context);

      // Cache the initial render result so we don't call the component function
      // a second time for the initial render.
      determinateResult[CACHED_RESULT] = result;
      return determinateResult;
    };
  }

  function get$$1() {
    return _ProxyFacade;
  }

  function getCurrent() {
    return CurrentComponent;
  }

  safeDefineProperty(_ProxyFacade, UNWRAP_PROXY, {
    configurable: false,
    writable: false,
    enumerable: false,
    value: getCurrent
  });

  safeDefineProperty(_ProxyFacade, PROXY_KEY, {
    configurable: false,
    writable: false,
    enumerable: false,
    value: proxyKey
  });

  safeDefineProperty(_ProxyFacade, 'toString', {
    configurable: true,
    writable: false,
    enumerable: false,
    value: function toString() {
      return String(CurrentComponent);
    }
  });

  function update(NextComponent) {
    if (typeof NextComponent !== 'function') {
      throw new Error('Expected a constructor.');
    }

    if (NextComponent === CurrentComponent) {
      return false;
    }

    // Prevent proxy cycles
    var existingProxy = proxies.get(NextComponent);
    if (existingProxy) {
      return false;
    }

    isFunctionalComponent = !isReactClass(NextComponent);

    proxies.set(NextComponent, proxy);

    proxyGeneration++;

    // Save the next constructor so we call it
    var PreviousComponent = CurrentComponent;
    CurrentComponent = NextComponent;

    // Try to infer displayName
    var displayName = getComponentDisplayName(CurrentComponent);

    safeDefineProperty(_ProxyFacade, 'displayName', {
      configurable: true,
      writable: false,
      enumerable: true,
      value: displayName
    });

    if (ProxyComponent) {
      safeDefineProperty(ProxyComponent, 'name', {
        value: displayName
      });
    }

    savedDescriptors = transferStaticProps(_ProxyFacade, savedDescriptors, PreviousComponent, NextComponent);

    if (isFunctionalComponent || !ProxyComponent) ; else {
      var classHotReplacement = function classHotReplacement() {
        checkLifeCycleMethods(ProxyComponent, NextComponent);
        if (proxyGeneration > 1) {
          getElementCloseHook(ProxyComponent);
          filteredPrototypeMethods(ProxyComponent.prototype).forEach(function (methodName) {
            if (!has.call(NextComponent.prototype, methodName)) {
              delete ProxyComponent.prototype[methodName];
            }
          });
        }
        Object.setPrototypeOf(ProxyComponent.prototype, NextComponent.prototype);
        defineProxyMethods(ProxyComponent, NextComponent.prototype);
        if (proxyGeneration > 1) {
          injectedMembers = mergeComponents(ProxyComponent, NextComponent, InitialComponent, lastInstance, injectedMembers);
          getElementComparisonHook(ProxyComponent);
        }
      };

      // Was constructed once
      if (instancesCount > 0) {
        classHotReplacement();
      } else {
        classUpdatePostponed = classHotReplacement;
      }
    }

    return true;
  }

  update(InitialComponent);

  var dereference = function dereference() {
    proxies.delete(InitialComponent);
    proxies.delete(_ProxyFacade);
    proxies.delete(CurrentComponent);
  };

  proxy = { get: get$$1, update: update, dereference: dereference, getCurrent: function getCurrent() {
      return CurrentComponent;
    } };

  proxies.set(InitialComponent, proxy);
  proxies.set(_ProxyFacade, proxy);

  safeDefineProperty(proxy, UNWRAP_PROXY, {
    configurable: false,
    writable: false,
    enumerable: false,
    value: getCurrent
  });

  return proxy;
}

// this counter tracks `register` invocations.
// works good, but code splitting is breaking it
var generation = 1;

// these counters are aimed to mitigate the "first render"
var hotComparisonCounter = 0;
var hotComparisonRuns = 0;
var hotReplacementGeneration = 0;

var nullFunction = function nullFunction() {
  return {};
};

// these callbacks would be called on component update
var onHotComparisonOpen = nullFunction;
var onHotComparisonElement = nullFunction;
var onHotComparisonClose = nullFunction;

// inversion of control
var setComparisonHooks = function setComparisonHooks(open, element, close) {
  onHotComparisonOpen = open;
  onHotComparisonElement = element;
  onHotComparisonClose = close;
};

var getElementComparisonHook = function getElementComparisonHook(component) {
  return onHotComparisonElement(component);
};
var getElementCloseHook = function getElementCloseHook(component) {
  return onHotComparisonClose(component);
};

var hotComparisonOpen = function hotComparisonOpen() {
  return hotComparisonCounter > 0 && hotComparisonRuns > 0 && hotReplacementGeneration > 0;
};

var openGeneration = function openGeneration() {
  return forEachKnownClass(onHotComparisonElement);
};

var closeGeneration = function closeGeneration() {
  return forEachKnownClass(onHotComparisonClose);
};

var incrementHot = function incrementHot() {
  if (!hotComparisonCounter) {
    openGeneration();
    onHotComparisonOpen();
  }
  hotComparisonCounter++;
};
var decrementHot = function decrementHot() {
  hotComparisonCounter--;
  if (!hotComparisonCounter) {
    closeGeneration();
    hotComparisonRuns++;
  }
};

// TODO: shall it be called from incrementHotGeneration?
var enterHotUpdate = function enterHotUpdate() {
  Promise.resolve(incrementHot()).then(function () {
    return setTimeout(decrementHot, 0);
  });
};

// TODO: deprecate?
var increment = function increment() {
  enterHotUpdate();
  return generation++;
};
var get$1 = function get() {
  return generation;
};

// These counters tracks HMR generations, and probably should be used instead of the old one
var incrementHotGeneration = function incrementHotGeneration() {
  return hotReplacementGeneration++;
};
var getHotGeneration = function getHotGeneration() {
  return hotReplacementGeneration;
};

// some `empty` names, React can autoset display name to...
var UNDEFINED_NAMES = {
  Unknown: true,
  Component: true
};

var areNamesEqual = function areNamesEqual(a, b) {
  return a === b || UNDEFINED_NAMES[a] && UNDEFINED_NAMES[b];
};

var isFunctional = function isFunctional(fn) {
  return typeof fn === 'function';
};
var getTypeOf = function getTypeOf(type) {
  if (isReactClass(type)) return 'ReactComponent';
  if (isFunctional(type)) return 'StatelessFunctional';
  return 'Fragment'; // ?
};

function clearStringFast(str) {
  return str.length < 12 ? str : (' ' + str).slice(1);
}

var haveTextSimilarity = function haveTextSimilarity(a, b) {
  return (
    // equal or slight changed
    a === b || levenshtein.get(clearStringFast(a), clearStringFast(b)) < a.length * 0.2
  );
};

var getBaseProto = function getBaseProto(source) {
  return source.prototype.hotComponentRender ? Object.getPrototypeOf(source.prototype) : source.prototype;
};

var equalClasses = function equalClasses(a, b) {
  var prototypeA = getBaseProto(a);
  var prototypeB = getBaseProto(b);

  var hits = 0;
  var misses = 0;
  var comparisons = 0;
  Object.getOwnPropertyNames(prototypeA).forEach(function (key) {
    var descriptorA = Object.getOwnPropertyDescriptor(prototypeA, key);
    var valueA = descriptorA && (descriptorA.value || descriptorA.get || descriptorA.set);
    var descriptorB = Object.getOwnPropertyDescriptor(prototypeB, key);
    var valueB = descriptorB && (descriptorB.value || descriptorB.get || descriptorB.set);

    if (typeof valueA === 'function' && key !== 'constructor') {
      comparisons++;
      if (haveTextSimilarity(String(valueA), String(valueB))) {
        hits++;
      } else {
        misses++;
        if (key === 'render') {
          misses++;
        }
      }
    }
  });
  // allow to add or remove one function
  return hits > 0 && misses <= 1 || comparisons === 0;
};

var areSwappable = function areSwappable(a, b) {
  // both are registered components and have the same name
  if (getIdByType(b) && getIdByType(a) === getIdByType(b)) {
    return true;
  }
  if (getTypeOf(a) !== getTypeOf(b)) {
    return false;
  }
  if (isReactClass(a)) {
    return areNamesEqual(getComponentDisplayName(a), getComponentDisplayName(b)) && equalClasses(a, b);
  }

  if (isFunctional(a)) {
    var nameA = getComponentDisplayName(a);
    if (!areNamesEqual(nameA, getComponentDisplayName(b))) {
      return false;
    }
    return nameA !== 'Component' || haveTextSimilarity(String(a), String(b));
  }
  return false;
};

function merge() {
  var acc = {};

  for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
    sources[_key] = arguments[_key];
  }

  for (var _iterator = sources, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var source = _ref;

    if (source instanceof Array) {
      if (!(acc instanceof Array)) {
        acc = [];
      }
      acc = [].concat(acc, source);
    } else if (source instanceof Object) {
      for (var _iterator2 = Object.keys(source), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _babelHelpers$extends;

        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var key = _ref2;

        var value = source[key];
        if (value instanceof Object && key in acc) {
          value = merge(acc[key], value);
        }
        acc = _extends({}, acc, (_babelHelpers$extends = {}, _babelHelpers$extends[key] = value, _babelHelpers$extends));
      }
    }
  }
  return acc;
}

var signatures = void 0;
var proxiesByID = void 0;
var blackListedProxies = void 0;
var registeredComponents = void 0;
var idsByType = void 0;

var elementCount = 0;
var renderOptions = {};

var componentOptions = void 0;

var generateTypeId = function generateTypeId() {
  return 'auto-' + elementCount++;
};

var getIdByType = function getIdByType(type) {
  return idsByType.get(type);
};
var isProxyType = function isProxyType(type) {
  return type[PROXY_KEY];
};

var getProxyById = function getProxyById(id) {
  return proxiesByID[id];
};
var getProxyByType = function getProxyByType(type) {
  return getProxyById(getIdByType(type));
};

var registerComponent = function registerComponent(type) {
  return registeredComponents.set(type, 1);
};
var isRegisteredComponent = function isRegisteredComponent(type) {
  return registeredComponents.has(type);
};

var setStandInOptions = function setStandInOptions(options) {
  renderOptions = options;
};

var updateFunctionProxyById = function updateFunctionProxyById(id, type, updater) {
  // Remember the ID.
  idsByType.set(type, id);
  var proxy = proxiesByID[id];
  if (!proxy) {
    proxiesByID[id] = type;
  }
  updater(proxiesByID[id], type);
  // proxiesByID[id] = type; // keep the first ref

  return proxiesByID[id];
};

var updateProxyById = function updateProxyById(id, type) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!id) {
    return null;
  }
  // Remember the ID.
  idsByType.set(type, id);

  if (!proxiesByID[id]) {
    proxiesByID[id] = createClassProxy(type, id, merge({}, renderOptions, { proxy: componentOptions.get(type) || {} }, options));
  } else if (proxiesByID[id].update(type)) {
    // proxy could be registered again only in case of HMR
    incrementHotGeneration();
  }
  return proxiesByID[id];
};

var createProxyForType = function createProxyForType(type, options) {
  return getProxyByType(type) || updateProxyById(generateTypeId(), type, options);
};

var isColdType = function isColdType(type) {
  return blackListedProxies.has(type);
};

var isTypeBlacklisted = function isTypeBlacklisted(type) {
  return isColdType(type) || isCompositeComponent(type) && (configuration.ignoreSFC && !isReactClass(type) || configuration.ignoreComponents && isReactClass(type));
};
var blacklistByType = function blacklistByType(type) {
  return blackListedProxies.set(type, true);
};

var setComponentOptions = function setComponentOptions(component, options) {
  return componentOptions.set(component, options);
};

var addSignature = function addSignature(type, signature) {
  return signatures.set(type, signature);
};
var getSignature = function getSignature(type) {
  return signatures.get(type);
};

var resetProxies = function resetProxies() {
  proxiesByID = {};
  idsByType = new WeakMap();
  blackListedProxies = new WeakMap();
  registeredComponents = new WeakMap();
  componentOptions = new WeakMap();
  signatures = new WeakMap();
  resetClassProxies();
};

resetProxies();

var tune = {
  allowSFC: false
};

var preactAdapter = function preactAdapter(instance, resolveType) {
  var oldHandler = instance.options.vnode;

  setConfiguration(tune);

  instance.options.vnode = function (vnode) {
    if (vnode.type) {
      vnode.type = resolveType(vnode.type);
    } else if (vnode.nodeName) {
      vnode.nodeName = resolveType(vnode.nodeName);
    }
    if (oldHandler) {
      oldHandler(vnode);
    }
  };
};

/* global document */

var lastError = [];

var overlayStyle = {
  position: 'fixed',
  left: 0,
  top: 0,
  right: 0,

  backgroundColor: 'rgba(255,200,200,0.9)',

  color: '#000',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  fontSize: '12px',
  margin: 0,
  padding: '16px',
  maxHeight: '50%',
  overflow: 'auto',
  zIndex: 10000
};

var inlineErrorStyle = {
  backgroundColor: '#FEE'
};

var liCounter = {
  position: 'absolute',
  left: '10px'
};

var listStyle = {};

var EmptyErrorPlaceholder = function EmptyErrorPlaceholder(_ref) {
  var component = _ref.component;
  return React__default.createElement(
    'span',
    { style: inlineErrorStyle, role: 'img', 'aria-label': 'Rect-Hot-Loader Error' },
    '\u269B\uFE0F\uD83D\uDD25\uD83E\uDD15 (',
    component ? getComponentDisplayName(component.constructor || component) : 'Unknown location',
    ')',
    component && component.retryHotLoaderError && React__default.createElement(
      'button',
      { onClick: function onClick() {
          return component.retryHotLoaderError();
        }, title: 'Retry' },
      '\u27F3'
    )
  );
};

var errorHeader = function errorHeader(component, componentStack) {
  if (component || componentStack) {
    return React__default.createElement(
      'span',
      null,
      '(',
      component ? getComponentDisplayName(component.constructor || component) : 'Unknown location',
      component && ', ',
      componentStack && componentStack.split('\n').filter(Boolean)[0],
      ')'
    );
  }
  return null;
};

var mapError = function mapError(_ref2) {
  var error = _ref2.error,
      errorInfo = _ref2.errorInfo,
      component = _ref2.component;

  if (!error) {
    error = { message: 'undefined error' };
  }

  return React__default.createElement(
    React__default.Fragment,
    null,
    React__default.createElement(
      'p',
      { style: { color: 'red' } },
      errorHeader(component, errorInfo && errorInfo.componentStack),
      ' ',
      error.toString ? error.toString() : error && error.message || 'undefined error'
    ),
    errorInfo && errorInfo.componentStack ? React__default.createElement(
      'div',
      null,
      React__default.createElement(
        'div',
        null,
        'Stack trace:'
      ),
      React__default.createElement(
        'ul',
        { style: { color: 'red', marginTop: '10px' } },
        error.stack.split('\n').slice(1, 2).map(function (line, i) {
          return React__default.createElement(
            'li',
            { key: String(i) },
            line
          );
        }),
        React__default.createElement('hr', null),
        errorInfo.componentStack.split('\n').filter(Boolean).map(function (line, i) {
          return React__default.createElement(
            'li',
            { key: String(i) },
            line
          );
        })
      )
    ) : error.stack && React__default.createElement(
      'div',
      null,
      React__default.createElement(
        'div',
        null,
        'Stack trace:'
      ),
      React__default.createElement(
        'ul',
        { style: { color: 'red', marginTop: '10px' } },
        error.stack.split('\n').map(function (line, i) {
          return React__default.createElement(
            'li',
            { key: String(i) },
            line
          );
        })
      )
    )
  );
};

var ErrorOverlay = function (_React$Component) {
  inherits(ErrorOverlay, _React$Component);

  function ErrorOverlay() {
    var _temp, _this, _ret;

    classCallCheck(this, ErrorOverlay);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      visible: true
    }, _this.toggle = function () {
      return _this.setState({ visible: !_this.state.visible });
    }, _this.retry = function () {
      return _this.setState(function () {
        var errors = _this.props.errors;

        enterHotUpdate();
        clearExceptions();
        errors.map(function (_ref3) {
          var component = _ref3.component;
          return component;
        }).filter(Boolean).filter(function (_ref4) {
          var retryHotLoaderError = _ref4.retryHotLoaderError;
          return !!retryHotLoaderError;
        }).forEach(function (component) {
          return component.retryHotLoaderError();
        });

        return {};
      });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  ErrorOverlay.prototype.render = function render() {
    var errors = this.props.errors;

    if (!errors.length) {
      return null;
    }
    var visible = this.state.visible;

    return React__default.createElement(
      'div',
      { style: overlayStyle },
      React__default.createElement(
        'h2',
        { style: { margin: 0 } },
        '\u269B\uFE0F\uD83D\uDD25\uD83D\uDE2D: hot update was not successful ',
        React__default.createElement(
          'button',
          { onClick: this.toggle },
          visible ? 'collapse' : 'expand'
        ),
        React__default.createElement(
          'button',
          { onClick: this.retry },
          'Retry'
        )
      ),
      visible && React__default.createElement(
        'ul',
        { style: listStyle },
        errors.map(function (err, i) {
          return React__default.createElement(
            'li',
            { key: i },
            React__default.createElement(
              'span',
              { style: liCounter },
              '(',
              i + 1,
              '/',
              errors.length,
              ')'
            ),
            mapError(err)
          );
        })
      )
    );
  };

  return ErrorOverlay;
}(React__default.Component);

var initErrorOverlay = function initErrorOverlay() {
  if (typeof document === 'undefined' || !document.body) {
    return;
  }
  var div = document.querySelector('.react-hot-loader-error-overlay');
  if (!div) {
    div = document.createElement('div');
    div.className = 'react-hot-loader-error-overlay';
    document.body.appendChild(div);
  }
  if (lastError.length) {
    var Overlay = configuration.ErrorOverlay || ErrorOverlay;
    ReactDOM.render(React__default.createElement(Overlay, { errors: lastError }), div);
  } else {
    div.parentNode.removeChild(div);
  }
};

function clearExceptions() {
  if (lastError.length) {
    lastError = [];
    initErrorOverlay();
  }
}

function logException(error, errorInfo, component) {
  // do not suppress error

  /* eslint-disable no-console */
  console.error(error);
  /* eslint-enable */

  lastError.push({ error: error, errorInfo: errorInfo, component: component });
  initErrorOverlay();
}

/* eslint-disable no-underscore-dangle */

var hotRenderWithHooks = ReactDOM.hotRenderWithHooks || function (fiber, render) {
  return render();
};

function pushStack(stack, node) {
  stack.type = node.type;
  stack.elementType = node.elementType || node.type;
  stack.children = [];
  stack.instance = typeof node.type === 'function' ? node.stateNode : stack;
  stack.fiber = node;

  if (!stack.instance) {
    stack.instance = {
      SFC_fake: stack.type,
      props: {},
      render: function render() {
        return hotRenderWithHooks(node, function () {
          return stack.type(stack.instance.props);
        });
      }
    };
  }
}

function hydrateFiberStack(node, stack) {
  pushStack(stack, node);
  if (node.child) {
    var child = node.child;

    do {
      var childStack = {};
      hydrateFiberStack(child, childStack);
      stack.children.push(childStack);
      child = child.sibling;
    } while (child);
  }
}

/* eslint-disable no-underscore-dangle */

function pushState(stack, type, instance) {
  stack.type = type;
  stack.elementType = type;
  stack.children = [];
  stack.instance = instance || stack;

  if (typeof type === 'function' && type.isStatelessFunctionalProxy) {
    // In React 15 SFC is wrapped by component. We have to detect our proxies and change the way it works
    stack.instance = {
      SFC_fake: type,
      props: {},
      render: function render() {
        return type(stack.instance.props);
      }
    };
  }
}

function hydrateLegacyStack(node, stack) {
  if (node._currentElement) {
    pushState(stack, node._currentElement.type, node._instance || stack);
  }

  if (node._renderedComponent) {
    var childStack = {};
    hydrateLegacyStack(node._renderedComponent, childStack);
    stack.children.push(childStack);
  } else if (node._renderedChildren) {
    Object.keys(node._renderedChildren).forEach(function (key) {
      var childStack = {};
      hydrateLegacyStack(node._renderedChildren[key], childStack);
      stack.children.push(childStack);
    });
  }
}

var shouldNotPatchComponent = function shouldNotPatchComponent(type) {
  return isTypeBlacklisted(type);
};

function resolveUtility(type) {
  // all "utility" types are resolved to their __initial__ shapes
  // that enables to never change reference to them, and gives the ability to maintain React Tree on HMR

  // all operations could be skipped with react-hot-dom enabled

  if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object') {
    if (configuration.integratedComparator) {
      return type;
    }
    var element = { type: type };
    if (isLazyType(element) || isMemoType(element) || isForwardType(element) || isContextType(element)) {
      return getProxyByType(type) || type;
    }
  }

  return undefined;
}

function resolveComponent(type) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var existingProxy = getProxyByType(type);

  // cold API
  if (shouldNotPatchComponent(type)) {
    return existingProxy ? existingProxy.getCurrent() : type;
  }

  if (!existingProxy && configuration.onComponentCreate) {
    configuration.onComponentCreate(type, getComponentDisplayName(type));
    if (shouldNotPatchComponent(type)) {
      return type;
    }
  }

  var proxy = internalConfiguration.disableProxyCreation ? existingProxy : createProxyForType(type, options);

  return proxy ? proxy.get() : undefined;
}

function resolveProxy(type) {
  if (isProxyType(type)) {
    return type;
  }

  return undefined;
}

function resolveNotComponent(type) {
  if (!isCompositeComponent(type)) {
    return type;
  }

  return undefined;
}

var getLatestTypeVersion = function getLatestTypeVersion(type) {
  var existingProxy = getProxyByType(type);
  return existingProxy && existingProxy.getCurrent && existingProxy.getCurrent();
};

var resolveSimpleType = function resolveSimpleType(type) {
  if (!type) {
    return type;
  }

  var simpleResult = resolveProxy(type) || resolveUtility(type) || resolveNotComponent(type);
  if (simpleResult) {
    return simpleResult;
  }

  var lastType = getLatestTypeVersion(type);

  // only lazy loaded components any now failing into this branch

  // if (lastType && lastType !== type) {
  //   console.warn('RHL: used type', type, 'is obsolete. Something is wrong with HMR.');
  // }

  return lastType || type;
};

var resolveType = function resolveType(type) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!type) {
    return type;
  }

  return resolveProxy(type) || resolveUtility(type) || resolveNotComponent(type) || resolveComponent(type, options) || type;
};

/* eslint-disable no-underscore-dangle */

function getReactStack(instance) {
  var rootNode = getInternalInstance(instance);
  var stack = {};
  if (rootNode) {
    // React stack
    var isFiber = typeof rootNode.tag === 'number';
    if (isFiber) {
      hydrateFiberStack(rootNode, stack);
    } else {
      hydrateLegacyStack(rootNode, stack);
    }
  }

  return stack;
}

var markUpdate = function markUpdate(_ref) {
  var fiber = _ref.fiber;

  // do not update what we should not
  if (!fiber || typeof fiber.type === 'string') {
    return;
  }

  var mostResentType = resolveType(fiber.type) || fiber.type;
  fiber.type = mostResentType;
  // do not change fiber.elementType to keep old information for the hot-update

  fiber.expirationTime = 1;
  if (fiber.alternate) {
    fiber.alternate.expirationTime = 1;
    fiber.alternate.type = fiber.type;
  }

  if (fiber.memoizedProps && _typeof(fiber.memoizedProps) === 'object') {
    fiber.memoizedProps = _extends({
      cacheBusterProp: true
    }, fiber.memoizedProps);
  }

  if (fiber.stateNode) ;
};

var cleanupReact = function cleanupReact() {
  if (ReactDOM.hotCleanup) {
    ReactDOM.hotCleanup();
  }
};

var deepMarkUpdate = function deepMarkUpdate(stack) {
  markUpdate(stack);
  if (stack.children) {
    stack.children.forEach(deepMarkUpdate);
  }
};

var renderStack = [];

var stackReport = function stackReport() {
  var rev = renderStack.slice().reverse();
  logger.warn('in', rev[0].name, rev);
};

var emptyMap = new Map();
var stackContext = function stackContext() {
  return (renderStack[renderStack.length - 1] || {}).context || emptyMap;
};

var shouldUseRenderMethod = function shouldUseRenderMethod(fn) {
  return fn && (isReactClassInstance(fn) || fn.SFC_fake);
};

var getElementType$1 = function getElementType$$1(child) {
  return child.type[UNWRAP_PROXY] ? child.type[UNWRAP_PROXY]() : child.type;
};

var filterNullArray = function filterNullArray(a) {
  if (!a) return [];
  return a.filter(function (x) {
    return !!x;
  });
};

var unflatten = function unflatten(a) {
  return a.reduce(function (acc, a) {
    if (Array.isArray(a)) {
      acc.push.apply(acc, unflatten(a));
    } else {
      acc.push(a);
    }
    return acc;
  }, []);
};

var isArray = function isArray(fn) {
  return Array.isArray(fn);
};
var asArray = function asArray(a) {
  return isArray(a) ? a : [a];
};

var render = function render(component, stack) {
  if (!component) {
    return [];
  }
  if (component.hotComponentUpdate) {
    component.hotComponentUpdate();
  }
  if (shouldUseRenderMethod(component)) {
    // not calling real render method to prevent call recursion.
    // stateless components does not have hotComponentRender
    return component.hotComponentRender ? component.hotComponentRender() : component.render();
  }
  if (isForwardType(component)) {
    // render forward type in a sandbox
    return hotRenderWithHooks(stack.fiber, function () {
      return component.type.render(component.props, null);
    });
  }
  if (isArray(component)) {
    return component.map(render);
  }
  if (component.children) {
    return component.children;
  }

  return [];
};

var NO_CHILDREN = { children: [] };
var mapChildren = function mapChildren(children, instances) {
  return {
    children: children.filter(function (c) {
      return c;
    }).map(function (child, index) {
      if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) !== 'object' || child.isMerged) {
        return child;
      }
      var instanceLine = instances[index] || {};
      var oldChildren = asArray(instanceLine.children || []);

      if (Array.isArray(child)) {
        return _extends({
          type: null
        }, mapChildren(child, oldChildren));
      }

      var newChildren = asArray(child.props && child.props.children || child.children || []);
      var nextChildren = child.type !== 'function' && oldChildren.length && mapChildren(newChildren, oldChildren);

      return _extends({
        nextProps: child.props,
        isMerged: true
      }, instanceLine, nextChildren || {}, {
        type: child.type
      });
    })
  };
};

var mergeInject = function mergeInject(a, b, instance) {
  if (a && !Array.isArray(a)) {
    return mergeInject([a], b);
  }
  if (b && !Array.isArray(b)) {
    return mergeInject(a, [b]);
  }

  if (!a || !b) {
    return NO_CHILDREN;
  }
  if (a.length === b.length) {
    return mapChildren(a, b);
  }

  // in some cases (no confidence here) B could contain A except null children
  // in some cases - could not.
  // this depends on React version and the way you build component.

  var nonNullA = filterNullArray(a);
  if (nonNullA.length === b.length) {
    return mapChildren(nonNullA, b);
  }

  var flatA = unflatten(nonNullA);
  var flatB = unflatten(b);
  if (flatA.length === flatB.length) {
    return mapChildren(flatA, flatB);
  }
  if (flatB.length === 0 && flatA.length === 1 && _typeof(flatA[0]) !== 'object') ; else if (!configuration.IS_REACT_MERGE_ENABLED) {
    logger.warn('React-hot-loader: unable to merge ', a, 'and children of ', instance);
    stackReport();
  }
  return NO_CHILDREN;
};

var transformFlowNode = function transformFlowNode(flow) {
  return flow.reduce(function (acc, node) {
    if (node && isFragmentNode(node)) {
      if (node.props && node.props.children) {
        return [].concat(acc, filterNullArray(asArray(node.props.children)));
      }
      if (node.children) {
        return [].concat(acc, filterNullArray(asArray(node.children)));
      }
    }
    return [].concat(acc, [node]);
  }, []);
};

var scheduledUpdates = [];
var scheduledUpdate = 0;

var flushScheduledUpdates = function flushScheduledUpdates() {
  var instances = scheduledUpdates;
  scheduledUpdates = [];
  scheduledUpdate = 0;
  instances.forEach(function (instance) {
    return instance[PROXY_IS_MOUNTED] && updateInstance(instance);
  });
};

var unscheduleUpdate = function unscheduleUpdate(instance) {
  scheduledUpdates = scheduledUpdates.filter(function (inst) {
    return inst !== instance;
  });
};

var scheduleInstanceUpdate = function scheduleInstanceUpdate(instance) {
  scheduledUpdates.push(instance);
  if (!scheduledUpdate) {
    scheduledUpdate = setTimeout(flushScheduledUpdates, 4);
  }
};

var hotReplacementRender = function hotReplacementRender(instance, stack) {
  if (isReactClassInstance(instance)) {
    var type = getElementType$1(stack);

    renderStack.push({
      name: getComponentDisplayName(type),
      type: type,
      props: stack.instance.props,
      context: stackContext()
    });
  }

  try {
    var flow = transformFlowNode(filterNullArray(asArray(render(instance, stack))));

    var children = stack.children;


    flow.forEach(function (child, index) {
      var childType = child.type;
      var stackChild = children[index];
      var next = function next(instance) {
        // copy over props as long new component may be hidden inside them
        // child does not have all props, as long some of them can be calculated on componentMount.
        var realProps = instance.props;
        var nextProps = _extends({}, realProps, child.nextProps || {}, child.props || {});

        if (isReactClassInstance(instance) && instance.componentWillUpdate) {
          // Force-refresh component (bypass redux renderedComponent)
          instance.componentWillUpdate(_extends({}, realProps), instance.state);
        }
        instance.props = nextProps;
        hotReplacementRender(instance, stackChild);
        instance.props = realProps;
      };

      // text node
      if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) !== 'object' || !stackChild || !stackChild.instance) {
        if (stackChild && stackChild.children && stackChild.children.length) {
          logger.error('React-hot-loader: reconciliation failed', 'could not dive into [', child, '] while some elements are still present in the tree.');
          stackReport();
        }
        return;
      }

      // comparing rendered type to fiber.ElementType
      if ((typeof childType === 'undefined' ? 'undefined' : _typeof(childType)) !== _typeof(stackChild.elementType)) {
        // Portals could generate undefined !== null
        if (childType && stackChild.type) {
          logger.warn('React-hot-loader: got ', childType, 'instead of', stackChild.type);
          stackReport();
        }
        return;
      }

      if (isMemoType(child) || isLazyType(child)) {
        // force update memo children
        if (stackChild.children && stackChild.children[0]) {
          scheduleInstanceUpdate(stackChild.children[0].instance);
        }
        childType = childType.type || childType;
      }

      if (isForwardType(child)) {
        next(stackChild.instance);
      } else if (isContextConsumer(child)) {
        try {
          var contextValue = stackContext().get(getContextProvider(childType));
          next({
            children: (child.props ? child.props.children : child.children[0])(contextValue !== undefined ? contextValue : childType[CONTEXT_CURRENT_VALUE])
          });
        } catch (e) {
          // do nothing, yet
        }
      } else if (typeof childType !== 'function') {
        // React
        var childName = childType ? getComponentDisplayName(childType) : 'empty';
        var extraContext = stackContext();

        if (isContextProvider(child)) {
          extraContext = new Map(extraContext);
          extraContext.set(getContextProvider(childType), _extends({}, child.nextProps || {}, child.props || {}).value);
          childName = 'ContextProvider';
        }

        renderStack.push({
          name: childName,
          type: childType,
          props: stack.instance.props,
          context: extraContext
        });

        next(
        // move types from render to the instances of hydrated tree
        mergeInject(transformFlowNode(asArray(child.props ? child.props.children : child.children)), stackChild.instance.children, stackChild.instance));
        renderStack.pop();
      } else {
        if (childType === stackChild.type) {
          next(stackChild.instance);
        } else {
          // unwrap proxy
          var _childType = getElementType$1(child);

          if (isMemoType(child)) {
            _childType = _childType.type || _childType;
          }

          if (!stackChild.type[PROXY_KEY]) {
            if (!configuration.IS_REACT_MERGE_ENABLED) {
              if (isTypeBlacklisted(stackChild.type)) {
                logger.warn('React-hot-loader: cold element got updated ', stackChild.type);
              }
            }
          }

          if (isRegisteredComponent(_childType) || isRegisteredComponent(stackChild.type)) {
            // one of elements are registered via babel plugin, and should not be handled by hot swap
            if (resolveType(_childType) === resolveType(stackChild.type)) {
              next(stackChild.instance);
            }
          } else if (areSwappable(_childType, stackChild.type)) {
            // they are both registered, or have equal code/displayname/signature

            // update proxy using internal PROXY_KEY
            updateProxyById(stackChild.type[PROXY_KEY] || getIdByType(stackChild.type), _childType);

            next(stackChild.instance);
          } else {
            logger.warn('React-hot-loader: a ' + getComponentDisplayName(_childType) + ' was found where a ' + getComponentDisplayName(stackChild) + ' was expected.\n          ' + _childType);
            stackReport();
          }
        }

        scheduleInstanceUpdate(stackChild.instance);
      }
    });
  } catch (e) {
    if (e.then) ; else {
      logger.warn('React-hot-loader: run time error during reconciliation', e);
    }
  }

  if (isReactClassInstance(instance)) {
    renderStack.pop();
  }
};

var hotReplacementRender$1 = (function (instance, stack) {
  if (configuration.disableHotRenderer) {
    return;
  }
  try {
    // disable reconciler to prevent upcoming components from proxying.
    internalConfiguration.disableProxyCreation = true;
    renderStack = [];
    hotReplacementRender(instance, stack);
  } catch (e) {
    logger.warn('React-hot-loader: reconcilation failed due to error', e);
  } finally {
    internalConfiguration.disableProxyCreation = false;
  }
});

var reconcileHotReplacement = function reconcileHotReplacement(ReactInstance) {
  var stack = getReactStack(ReactInstance);
  hotReplacementRender$1(ReactInstance, stack);
  cleanupReact();
  deepMarkUpdate(stack);
};

var renderReconciler = function renderReconciler(target, force) {
  // we are not inside parent reconcilation
  var currentGeneration = get$1();
  var componentGeneration = target[RENDERED_GENERATION];

  target[RENDERED_GENERATION] = currentGeneration;

  if (!internalConfiguration.disableProxyCreation) {
    if ((componentGeneration || force) && componentGeneration !== currentGeneration) {
      enterHotUpdate();
      reconcileHotReplacement(target);
      return true;
    }
  }
  return false;
};

function asyncReconciledRender(target) {
  renderReconciler(target, false);
}

function proxyWrapper(element) {
  // post wrap on post render
  if (!internalConfiguration.disableProxyCreation) {
    unscheduleUpdate(this);
  }

  if (!element) {
    return element;
  }
  if (Array.isArray(element)) {
    return element.map(proxyWrapper);
  }
  if (typeof element.type === 'function') {
    var proxy = getProxyByType(element.type);
    if (proxy) {
      return _extends({}, element, {
        type: proxy.get()
      });
    }
  }
  return element;
}

var ERROR_STATE = 'react_hot_loader_catched_error';
var ERROR_STATE_PROTO = 'react_hot_loader_catched_error-prototype';
var OLD_RENDER = 'react_hot_loader_original_render';

function componentDidCatch(error, errorInfo) {
  this[ERROR_STATE] = {
    location: 'boundary',
    error: error,
    errorInfo: errorInfo,
    generation: get$1()
  };
  Object.getPrototypeOf(this)[ERROR_STATE_PROTO] = this[ERROR_STATE];
  if (!configuration.errorReporter) {
    logException(error, errorInfo, this);
  }
  this.forceUpdate();
}

function componentRender() {
  var _ref = this[ERROR_STATE] || {},
      error = _ref.error,
      errorInfo = _ref.errorInfo,
      generation = _ref.generation;

  if (error && generation === get$1()) {
    return React__default.createElement(configuration.errorReporter || EmptyErrorPlaceholder, {
      error: error,
      errorInfo: errorInfo,
      component: this
    });
  }

  if (this.hotComponentUpdate) {
    this.hotComponentUpdate();
  }
  try {
    var _OLD_RENDER$render;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_OLD_RENDER$render = this[OLD_RENDER].render).call.apply(_OLD_RENDER$render, [this].concat(args));
  } catch (renderError) {
    this[ERROR_STATE] = {
      location: 'render',
      error: renderError,
      generation: get$1()
    };
    if (!configuration.errorReporter) {
      logException(renderError, undefined, this);
    }
    return componentRender.call(this);
  }
}

function retryHotLoaderError() {
  delete this[ERROR_STATE];
  this.forceUpdate();
}

setComparisonHooks(function () {
  return {};
}, function (component) {
  if (!hotComparisonOpen()) {
    return;
  }
  var prototype = component.prototype;

  if (!prototype[OLD_RENDER]) {
    var renderDescriptior = Object.getOwnPropertyDescriptor(prototype, 'render');
    prototype[OLD_RENDER] = {
      descriptor: renderDescriptior ? renderDescriptior.value : undefined,
      render: prototype.render
    };
    prototype.componentDidCatch = componentDidCatch;
    prototype.retryHotLoaderError = retryHotLoaderError;

    prototype.render = componentRender;
  }
  delete prototype[ERROR_STATE];
}, function (_ref2) {
  var prototype = _ref2.prototype;

  if (prototype[OLD_RENDER]) {
    var _ref3 = prototype[ERROR_STATE_PROTO] || {},
        generation = _ref3.generation;

    if (generation === get$1()) ; else {
      delete prototype.componentDidCatch;
      delete prototype.retryHotLoaderError;

      // undo only what we did
      if (prototype.render === componentRender) {
        if (!prototype[OLD_RENDER].descriptor) {
          delete prototype.render;
        } else {
          prototype.render = prototype[OLD_RENDER].descriptor;
        }
      } else {
        console.error('React-Hot-Loader: something unexpectedly mutated Component', prototype);
      }
      delete prototype[ERROR_STATE_PROTO];
      delete prototype[OLD_RENDER];
    }
  }
});

setStandInOptions({
  componentWillRender: asyncReconciledRender,
  componentDidRender: proxyWrapper,
  componentDidUpdate: function componentDidUpdate(component) {
    component[RENDERED_GENERATION] = get$1();
    flushScheduledUpdates();
  }
});

var AppContainer = function (_React$Component) {
  inherits(AppContainer, _React$Component);

  AppContainer.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.generation !== get$1()) {
      // Hot reload is happening.
      return {
        error: null,
        generation: get$1()
      };
    }
    return null;
  };

  function AppContainer(props) {
    classCallCheck(this, AppContainer);

    var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

    if (configuration.showReactDomPatchNotification) {
      configuration.showReactDomPatchNotification = false;
      console.warn('React-Hot-Loader: react-🔥-dom patch is not detected. React 16.6+ features may not work.');
    }

    _this.state = {
      error: null,
      errorInfo: null,
      // eslint-disable-next-line react/no-unused-state
      generation: 0
    };
    return _this;
  }

  AppContainer.prototype.shouldComponentUpdate = function shouldComponentUpdate(prevProps, prevState) {
    // Don't update the component if the state had an error and still has one.
    // This allows to break an infinite loop of error -> render -> error -> render
    // https://github.com/gaearon/react-hot-loader/issues/696
    if (prevState.error && this.state.error) {
      return false;
    }

    return true;
  };

  AppContainer.prototype.componentDidCatch = function componentDidCatch(error, errorInfo) {
    logger.error(error);

    if (!hotComparisonOpen()) {
      // do not log error outside of HMR cycle

      // trigger update to kick error
      this.setState({});
      throw error;
    }
    var _props$errorReporter = this.props.errorReporter,
        errorReporter = _props$errorReporter === undefined ? configuration.errorReporter : _props$errorReporter;

    if (!errorReporter) {
      logException(error, errorInfo, this);
    }
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  };

  AppContainer.prototype.retryHotLoaderError = function retryHotLoaderError$$1() {
    var _this2 = this;

    this.setState({ error: null }, function () {
      retryHotLoaderError.call(_this2);
    });
  };

  AppContainer.prototype.render = function render() {
    var _state = this.state,
        error = _state.error,
        errorInfo = _state.errorInfo;
    var _props$errorReporter2 = this.props.errorReporter,
        ErrorReporter = _props$errorReporter2 === undefined ? configuration.errorReporter || EmptyErrorPlaceholder : _props$errorReporter2;


    if (error && this.props.errorBoundary) {
      return React__default.createElement(ErrorReporter, { error: error, errorInfo: errorInfo, component: this });
    }

    if (this.hotComponentUpdate) {
      this.hotComponentUpdate();
    } else {
      throw new Error('React-Hot-Loader: AppContainer should be patched');
    }

    return React__default.Children.only(this.props.children);
  };

  return AppContainer;
}(React__default.Component);

AppContainer.reactHotLoadable = false;


AppContainer.propTypes = {
  children: function children(props) {
    if (React__default.Children.count(props.children) !== 1) {
      return new Error('Invalid prop "children" supplied to AppContainer. ' + 'Expected a single React element with your app’s root component, e.g. <App />.');
    }

    return undefined;
  },

  errorReporter: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  errorBoundary: PropTypes.bool
};

AppContainer.defaultProps = {
  errorBoundary: true
};

//  trying first react-lifecycles-compat.polyfill, then trying react-lifecycles-compat, which could be .default
var realPolyfill = defaultPolyfill.polyfill || defaultPolyfill__default;
realPolyfill(AppContainer);

var lazyConstructor = '_ctor';

var patchLazyConstructor = function patchLazyConstructor(target) {
  if (!configuration.trackTailUpdates && !target[lazyConstructor].isPatchedByReactHotLoader) {
    var ctor = target[lazyConstructor];
    target[lazyConstructor] = function () {
      return ctor().then(function (m) {
        var C = resolveType(m.default);
        // chunks has been updated - new hot loader process is taking a place
        enterHotUpdate();
        if (!React__default.forwardRef) {
          return {
            default: function _default(props) {
              return React__default.createElement(
                AppContainer,
                null,
                React__default.createElement(C, props)
              );
            }
          };
        }
        return {
          default: React__default.forwardRef(function (props, ref) {
            return React__default.createElement(
              AppContainer,
              null,
              React__default.createElement(C, _extends({}, props, { ref: ref }))
            );
          })
        };
      });
    };
    target[lazyConstructor].isPatchedByReactHotLoader = true;
  }
};

var updateLazy = function updateLazy(target, type) {
  var ctor = type[lazyConstructor];
  if (target[lazyConstructor] !== type[lazyConstructor]) {
    // just execute `import` and RHL.register will do the job
    ctor();
  }
  patchLazyConstructor(target);
  patchLazyConstructor(type);
};

var updateMemo = function updateMemo(target, _ref) {
  var type = _ref.type;

  target.type = resolveType(type);
};

var updateForward = function updateForward(target, _ref2) {
  var render = _ref2.render;

  target.render = render;
};

var updateContext = function updateContext() {
  // nil
};

var getInnerComponentType = function getInnerComponentType(component) {
  var unwrapper = component[UNWRAP_PROXY];
  return unwrapper ? unwrapper() : component;
};

function haveEqualSignatures(prevType, nextType) {
  try {
    var prevSignature = getSignature(prevType);
    var nextSignature = getSignature(nextType);

    if (prevSignature === undefined && nextSignature === undefined) {
      return true;
    }
    if (prevSignature === undefined || nextSignature === undefined) {
      return false;
    }
    if (prevSignature.key !== nextSignature.key) {
      return false;
    }

    // TODO: we might need to calculate previous signature earlier in practice,
    // such as during the first time a component is resolved. We'll revisit this.
    var prevCustomHooks = prevSignature.getCustomHooks();
    var nextCustomHooks = nextSignature.getCustomHooks();
    if (prevCustomHooks.length !== nextCustomHooks.length) {
      return false;
    }

    for (var i = 0; i < nextCustomHooks.length; i++) {
      if (!haveEqualSignatures(prevCustomHooks[i], nextCustomHooks[i])) {
        return false;
      }
    }
  } catch (e) {
    logger.error('React-Hot-Loader: error occurred while comparing hook signature', e);
    return false;
  }

  return true;
}

var areSignaturesCompatible = function areSignaturesCompatible(a, b) {
  // compare signatures of two components
  // non-equal component have to remount and there is two options to do it
  // - fail the comparison, remounting all tree below
  // - fulfill it, but set `_debugNeedsRemount` on a fiber to drop only local state
  // the second way is not published yet, so going with the first one
  if (!haveEqualSignatures(a, b)) {
    logger.warn('⚛️🔥🎣 Hook order change detected: component', a, 'has been remounted');
    return false;
  }
  return true;
};

var compareRegistered = function compareRegistered(a, b) {
  return getIdByType(a) === getIdByType(b) && getProxyByType(a) === getProxyByType(b) && areSignaturesCompatible(a, b);
};

var areDeepSwappable = function areDeepSwappable(oldType, newType) {
  var type = { type: oldType };

  if (typeof oldType === 'function') {
    return areSwappable(oldType, newType);
  }

  if (isForwardType(type)) {
    return areDeepSwappable(oldType.render, newType.render);
  }

  if (isMemoType(type)) {
    return areDeepSwappable(oldType.type, newType.type);
  }

  // that's not safe
  // if (isLazyType(type)) {
  //   return areDeepSwappable(oldType._ctor, newType._ctor)
  // }

  return false;
};

var compareComponents = function compareComponents(oldType, newType, setNewType, baseType) {
  var defaultResult = oldType === newType;

  if (oldType && !newType || !oldType && newType || (typeof oldType === 'undefined' ? 'undefined' : _typeof(oldType)) !== (typeof newType === 'undefined' ? 'undefined' : _typeof(newType)) || getElementType(oldType) !== getElementType(newType) || 0) {
    return defaultResult;
  }

  if (getIdByType(newType) || getIdByType(oldType)) {
    if (!compareRegistered(oldType, newType)) {
      return false;
    }
    defaultResult = true;
  }

  if (isForwardType({ type: oldType }) && isForwardType({ type: newType })) {
    if (!compareRegistered(oldType.render, newType.render)) {
      return false;
    }
    if (oldType.render === newType.render || areDeepSwappable(oldType, newType)) {
      setNewType(newType);
      return true;
    }
    return defaultResult;
  }

  if (isMemoType({ type: oldType }) && isMemoType({ type: newType })) {
    if (!compareRegistered(oldType.type, newType.type)) {
      return false;
    }
    if (oldType.type === newType.type || areDeepSwappable(oldType, newType)) {
      if (baseType) {
        // memo form different fibers, why?
        if (baseType.$$typeof === newType.$$typeof) {
          setNewType(newType);
        } else {
          setNewType(newType.type);
        }
      } else {
        logger.warn('Please update hot-loader/react-dom');
        if (isReactClass(newType.type)) {
          setNewType(newType);
        } else {
          setNewType(newType.type);
        }
      }

      return true;
    }
    return defaultResult;
  }

  if (isLazyType({ type: oldType })) {
    updateLazy(oldType, newType);
    // no need to update
    // setNewType(newType);
    return defaultResult;
  }

  if (isContextType({ type: oldType })) {
    // update provider
    setNewType(newType);
    return defaultResult;
  }

  if (typeof newType === 'function' && (defaultResult || newType !== oldType && areSignaturesCompatible(newType, oldType) && areSwappable(newType, oldType))) {
    var unwrapFactory = newType[UNWRAP_PROXY];
    var oldProxy = unwrapFactory && getProxyByType(unwrapFactory());
    if (oldProxy) {
      oldProxy.dereference();
      updateProxyById(oldType[PROXY_KEY] || getIdByType(oldType), getInnerComponentType(newType));
    } else {
      setNewType(newType);
    }
    return true;
  }

  return defaultResult;
};

var knownPairs = new WeakMap();
var emptyMap$1 = new WeakMap();

var getKnownPair = function getKnownPair(oldType, newType) {
  var pair = knownPairs.get(oldType) || emptyMap$1;
  return pair.get(newType);
};

var hotComponentCompare = function hotComponentCompare(oldType, preNewType, setNewType, baseType) {
  var hotActive = hotComparisonOpen();
  var newType = configuration.integratedResolver ? resolveType(preNewType) : preNewType;

  // TODO: find out the root cause
  // we could not use "fast result" here - go a full part to update a fiber.
  // const knownType = getKnownPair(oldType, newType);
  // if (knownType !== undefined) {
  //   return knownType;
  // }

  var result = oldType === newType;

  if (hotActive) {
    // pre fail components which could not be merged
    if (!isReloadableComponent(oldType) || !isReloadableComponent(newType) || isColdType(oldType) || isColdType(oldType) || !oldType || !newType || 0) {
      return result;
    }

    result = compareComponents(oldType, newType, setNewType, baseType);
    var pair = knownPairs.get(oldType) || new WeakMap();
    pair.set(newType, result);
    knownPairs.set(oldType, pair);
    return result;
  }

  // result - true if components are equal, or were "equal" at any point in the past
  return result || getKnownPair(oldType, newType) || false;
};

/* eslint-disable no-use-before-define */

var forceSimpleSFC = { proxy: { pureSFC: true } };

var hookWrapper = function hookWrapper(hook) {
  var wrappedHook = function wrappedHook(cb, deps) {
    if (configuration.reloadHooks && deps) {
      var inputs = [].concat(deps);

      // reload hooks which have changed string representation
      if (configuration.reloadHooksOnBodyChange) {
        inputs.push(String(cb));
      }

      if (
      // reload hooks with dependencies
      deps.length > 0 ||
      // reload all hooks of option is set
      configuration.reloadLifeCycleHooks && deps.length === 0) {
        inputs.push(getHotGeneration());
      }

      return hook(cb, inputs);
    }
    return hook(cb, deps);
  };
  wrappedHook.isPatchedByReactHotLoader = true;
  return wrappedHook;
};

var noDeps = function noDeps() {
  return [];
};

var reactHotLoader = {
  signature: function signature(type, key) {
    var getCustomHooks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : noDeps;

    addSignature(type, { key: key, getCustomHooks: getCustomHooks });
    return type;
  },
  register: function register(type, uniqueLocalName, fileName) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    var id = fileName + '#' + uniqueLocalName;

    if (isCompositeComponent(type) && typeof uniqueLocalName === 'string' && uniqueLocalName && typeof fileName === 'string' && fileName) {
      var proxy = getProxyById(id);

      if (proxy && proxy.getCurrent() !== type) {
        if (!configuration.IS_REACT_MERGE_ENABLED) {
          if (isTypeBlacklisted(type) || isTypeBlacklisted(proxy.getCurrent())) {
            logger.error('React-hot-loader: Cold component', uniqueLocalName, 'at', fileName, 'has been updated');
          }
        }
      }

      if (configuration.onComponentRegister) {
        configuration.onComponentRegister(type, uniqueLocalName, fileName);
      }
      if (configuration.onComponentCreate) {
        configuration.onComponentCreate(type, getComponentDisplayName(type));
      }

      registerComponent(updateProxyById(id, type, options).get(), 2);
      registerComponent(type);
      increment();
    }
    if (isContextType({ type: type })) {
      // possible options - Context, Consumer, Provider.
      ['Provider', 'Consumer'].forEach(function (prop) {
        var descriptor = Object.getOwnPropertyDescriptor(type, prop);
        if (descriptor && descriptor.value) {
          updateFunctionProxyById(id + ':' + prop, descriptor.value, updateContext);
        }
      });
      updateFunctionProxyById(id, type, updateContext);
      increment();
    }
    if (isLazyType({ type: type })) {
      updateFunctionProxyById(id, type, updateLazy);
      increment();
    }
    if (isForwardType({ type: type })) {
      reactHotLoader.register(type.render, uniqueLocalName + ':render', fileName, forceSimpleSFC);
      updateFunctionProxyById(id, type, updateForward);
      increment();
    }
    if (isMemoType({ type: type })) {
      reactHotLoader.register(type.type, uniqueLocalName + ':memo', fileName, forceSimpleSFC);
      updateFunctionProxyById(id, type, updateMemo);
      increment();
    }
  },
  reset: function reset() {
    resetProxies();
  },
  preact: function preact(instance) {
    preactAdapter(instance, resolveType);
  },
  resolveType: function resolveType$$1(type) {
    return resolveType(type);
  },
  patch: function patch(React$$1, ReactDOM$$1) {
    var typeResolver = resolveType;
    /* eslint-disable no-console */
    if (ReactDOM$$1 && !ReactDOM$$1.render) {
      logger.error('React-Hot-Loader: broken state detected, please import React-Hot-Loader before react-dom, see https://github.com/gaearon/react-hot-loader/issues/1315');
    }
    if (ReactDOM$$1 && ReactDOM$$1.setHotElementComparator) {
      ReactDOM$$1.setHotElementComparator(hotComponentCompare);
      configuration.disableHotRenderer = configuration.disableHotRendererWhenInjected;

      configuration.ignoreSFC = configuration.ignoreSFCWhenInjected;

      configuration.IS_REACT_MERGE_ENABLED = true;
      configuration.showReactDomPatchNotification = false;
      configuration.integratedComparator = true;

      if (ReactDOM$$1.setHotTypeResolver) {
        configuration.integratedResolver = true;
        typeResolver = resolveSimpleType;
        ReactDOM$$1.setHotTypeResolver(resolveType);
      }
    }

    // PATCH REACT METHODS

    /* eslint-enable */
    if (!React$$1.createElement.isPatchedByReactHotLoader) {
      var originalCreateElement = React$$1.createElement;
      // Trick React into rendering a proxy so that
      // its state is preserved when the class changes.
      // This will update the proxy if it's for a known type.
      React$$1.createElement = function (type) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return originalCreateElement.apply(undefined, [typeResolver(type)].concat(args));
      };
      React$$1.createElement.isPatchedByReactHotLoader = true;
    }

    if (!React$$1.cloneElement.isPatchedByReactHotLoader) {
      var originalCloneElement = React$$1.cloneElement;

      React$$1.cloneElement = function (element) {
        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        var newType = element.type && typeResolver(element.type);
        if (newType && newType !== element.type) {
          return originalCloneElement.apply(undefined, [_extends({}, element, {
            type: newType
          })].concat(args));
        }
        return originalCloneElement.apply(undefined, [element].concat(args));
      };

      React$$1.cloneElement.isPatchedByReactHotLoader = true;
    }

    if (!React$$1.createFactory.isPatchedByReactHotLoader) {
      // Patch React.createFactory to use patched createElement
      // because the original implementation uses the internal,
      // unpatched ReactElement.createElement
      React$$1.createFactory = function (type) {
        var factory = React$$1.createElement.bind(null, type);
        factory.type = type;
        return factory;
      };
      React$$1.createFactory.isPatchedByReactHotLoader = true;
    }

    if (!React$$1.Children.only.isPatchedByReactHotLoader) {
      var originalChildrenOnly = React$$1.Children.only;
      // Use the same trick as React.createElement
      React$$1.Children.only = function (children) {
        return originalChildrenOnly(_extends({}, children, {
          type: typeResolver(children.type)
        }));
      };
      React$$1.Children.only.isPatchedByReactHotLoader = true;
    }

    // PATCH REACT HOOKS

    if (React$$1.useEffect && !React$$1.useEffect.isPatchedByReactHotLoader) {
      React$$1.useEffect = hookWrapper(React$$1.useEffect);
      React$$1.useLayoutEffect = hookWrapper(React$$1.useLayoutEffect);
      React$$1.useCallback = hookWrapper(React$$1.useCallback);
      React$$1.useMemo = hookWrapper(React$$1.useMemo);

      // transform context for useContext
      var useContext = React$$1.useContext;

      React$$1.useContext = function (context) {
        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }

        return useContext.apply(undefined, [typeResolver(context)].concat(args));
      };
    }

    // reactHotLoader.reset()
  }
};

var openedModules = {};
var lastModuleOpened = '';
var getLastModuleOpened = function getLastModuleOpened() {
  return lastModuleOpened;
};

var hotModules = {};

var createHotModule = function createHotModule() {
  return { instances: [], updateTimeout: 0 };
};

var hotModule = function hotModule(moduleId) {
  if (!hotModules[moduleId]) {
    hotModules[moduleId] = createHotModule();
  }
  return hotModules[moduleId];
};

var isOpened = function isOpened(sourceModule) {
  return sourceModule && !!openedModules[sourceModule.id];
};

var enter = function enter(sourceModule) {
  if (sourceModule && sourceModule.id) {
    lastModuleOpened = sourceModule.id;
    openedModules[sourceModule.id] = true;
  } else {
    logger.warn('React-hot-loader: no `module` variable found. Did you shadow a system variable?');
  }
};

var leave = function leave(sourceModule) {
  if (sourceModule && sourceModule.id) {
    delete openedModules[sourceModule.id];
  }
};

var createQueue = function createQueue() {
  var runner = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (a) {
    return a();
  };

  var promise = void 0;
  var queue = [];

  var runAll = function runAll() {
    var oldQueue = queue;
    oldQueue.forEach(function (cb) {
      return cb();
    });
    queue = [];
  };

  var add = function add(cb) {
    if (queue.length === 0) {
      promise = Promise.resolve().then(function () {
        return runner(runAll);
      });
    }
    queue.push(cb);

    return promise;
  };

  return add;
};

/* eslint-disable camelcase, no-undef */
var requireIndirect =  true ? __webpack_require__ : undefined;
/* eslint-enable */

var chargeFailbackTimer = function chargeFailbackTimer(id) {
  return setTimeout(function () {
    var error = 'hot update failed for module "' + id + '". Last file processed: "' + getLastModuleOpened() + '".';
    logger.error(error);
    logException({
      toString: function toString() {
        return error;
      }
    });
    // 100 ms more "code" tolerant that 0, and would catch error in any case
  }, 100);
};

var clearFailbackTimer = function clearFailbackTimer(timerId) {
  return clearTimeout(timerId);
};

var createHoc = function createHoc(SourceComponent, TargetComponent) {
  hoistNonReactStatic(TargetComponent, SourceComponent);
  TargetComponent.displayName = 'HotExported' + getComponentDisplayName(SourceComponent);
  return TargetComponent;
};

var runInRequireQueue = createQueue();
var runInRenderQueue = createQueue(function (cb) {
  if (ReactDOM.unstable_batchedUpdates) {
    ReactDOM.unstable_batchedUpdates(cb);
  } else {
    cb();
  }
});

var makeHotExport = function makeHotExport(sourceModule, moduleId) {
  var updateInstances = function updateInstances(possibleError) {
    if (possibleError && possibleError instanceof Error) {
      console.error(possibleError);
      return;
    }
    var module = hotModule(moduleId);

    var deepUpdate = function deepUpdate() {
      // force flush all updates
      runInRenderQueue(function () {
        enterHotUpdate();
        var gen = getHotGeneration();
        module.instances.forEach(function (inst) {
          return inst.forceUpdate();
        });

        if (configuration.trackTailUpdates) {
          var runLimit = 0;
          var checkTailUpdates = function checkTailUpdates() {
            setTimeout(function () {
              if (getHotGeneration() !== gen) {
                // we know that some components were updated, but not tracking which ones
                // even if their updates might be incorporated automatically (like lazy)
                // we dont know which one should be tracked, and which updates are important
                logger.warn('React-Hot-Loader: some components were updated out-of-bound. Updating your app to reconcile the changes.');
                deepUpdate();
              } else if (++runLimit < 5) {
                checkTailUpdates();
              }
            }, 16);
          };

          checkTailUpdates();
        }
      });
    };

    // require all modules
    runInRequireQueue(function () {
      try {
        // webpack will require everything by this time
        // but let's double check...
        requireIndirect(moduleId);
      } catch (e) {
        console.error('React-Hot-Loader: error detected while loading', moduleId);
        console.error(e);
      }
    }).then(deepUpdate);
  };

  if (sourceModule.hot) {
    // Mark as self-accepted for Webpack (callback is an Error Handler)
    // Update instances for Parcel (callback is an Accept Handler)
    sourceModule.hot.accept(updateInstances);

    // Webpack way
    if (sourceModule.hot.addStatusHandler) {
      if (sourceModule.hot.status() === 'idle') {
        sourceModule.hot.addStatusHandler(function (status) {
          if (status === 'apply') {
            clearExceptions();
            updateInstances();
          }
        });
      }
    }
  } else {
    logger.warn('React-hot-loader: Hot Module Replacement is not enabled');
  }
};

var hot = function hot(sourceModule) {
  if (!sourceModule) {
    // this is fatal
    throw new Error('React-hot-loader: `hot` was called without any argument provided');
  }
  var moduleId = sourceModule.id || sourceModule.i || sourceModule.filename;
  if (!moduleId) {
    console.error('`module` provided', sourceModule);
    throw new Error('React-hot-loader: `hot` could not find the `name` of the the `module` you have provided');
  }
  var module = hotModule(moduleId);
  makeHotExport(sourceModule, moduleId);

  clearExceptions();
  var failbackTimer = chargeFailbackTimer(moduleId);
  var firstHotRegistered = false;

  // TODO: Ensure that all exports from this file are react components.

  return function (WrappedComponent, props) {
    clearFailbackTimer(failbackTimer);
    // register proxy for wrapped component
    // only one hot per file would use this registration
    if (!firstHotRegistered) {
      firstHotRegistered = true;
      reactHotLoader.register(WrappedComponent, getComponentDisplayName(WrappedComponent), 'RHL' + moduleId);
    }

    return createHoc(WrappedComponent, function (_Component) {
      inherits(ExportedComponent, _Component);

      function ExportedComponent() {
        classCallCheck(this, ExportedComponent);
        return possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      ExportedComponent.prototype.componentDidMount = function componentDidMount() {
        module.instances.push(this);
      };

      ExportedComponent.prototype.componentWillUnmount = function componentWillUnmount() {
        var _this2 = this;

        if (isOpened(sourceModule)) {
          var componentName = getComponentDisplayName(WrappedComponent);
          logger.error('React-hot-loader: Detected AppContainer unmount on module \'' + moduleId + '\' update.\n' + ('Did you use "hot(' + componentName + ')" and "ReactDOM.render()" in the same file?\n') + ('"hot(' + componentName + ')" shall only be used as export.\n') + 'Please refer to "Getting Started" (https://github.com/gaearon/react-hot-loader/).');
        }
        module.instances = module.instances.filter(function (a) {
          return a !== _this2;
        });
      };

      ExportedComponent.prototype.render = function render() {
        return React__default.createElement(
          AppContainer,
          props,
          React__default.createElement(WrappedComponent, this.props)
        );
      };

      return ExportedComponent;
    }(React.Component));
  };
};

var getProxyOrType = function getProxyOrType(type) {
  var proxy = getProxyByType(type);
  return proxy ? proxy.get() : type;
};

var areComponentsEqual = function areComponentsEqual(a, b) {
  return getProxyOrType(a) === getProxyOrType(b);
};

var compareOrSwap = function compareOrSwap(oldType, newType) {
  return hotComponentCompare(oldType, newType);
};

var cold = function cold(type) {
  blacklistByType(type);
  return type;
};

var configureComponent = function configureComponent(component, options) {
  return setComponentOptions(component, options);
};

var setConfig = function setConfig(config) {
  return setConfiguration(config);
};

reactHotLoader.patch(React__default, ReactDOM);

exports.default = reactHotLoader;
exports.AppContainer = AppContainer;
exports.hot = hot;
exports.enterModule = enter;
exports.leaveModule = leave;
exports.areComponentsEqual = areComponentsEqual;
exports.compareOrSwap = compareOrSwap;
exports.cold = cold;
exports.configureComponent = configureComponent;
exports.setConfig = setConfig;


/***/ }),

/***/ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=_interopDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));function AppContainer(e){return AppContainer.warnAboutHMRDisabled&&(AppContainer.warnAboutHMRDisabled=!0,console.error("React-Hot-Loader: misconfiguration detected, using production version in non-production environment."),console.error("React-Hot-Loader: Hot Module Replacement is not enabled.")),React.Children.only(e.children)}AppContainer.warnAboutHMRDisabled=!1;var hot=function e(){return e.shouldWrapWithAppContainer?function(e){return function(n){return React.createElement(AppContainer,null,React.createElement(e,n))}}:function(e){return e}};hot.shouldWrapWithAppContainer=!1;var areComponentsEqual=function(e,n){return e===n},setConfig=function(){},cold=function(e){return e},configureComponent=function(){};exports.AppContainer=AppContainer,exports.hot=hot,exports.areComponentsEqual=areComponentsEqual,exports.setConfig=setConfig,exports.cold=cold,exports.configureComponent=configureComponent;


/***/ }),

/***/ "./node_modules/react-hot-loader/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-hot-loader/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else if (false) {} else if (typeof window === 'undefined') {
  // this is just server environment
  module.exports = __webpack_require__(/*! ./dist/react-hot-loader.production.min.js */ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js");
} else if (false) {} else {
  var evalAllowed = false;
  var evalError = null;
  try {
    eval('evalAllowed = true');
  } catch (e) {
    // eval not allowed due to CSP
    evalError = e && e.message ? e.message : 'unknown reason';
  }

  // TODO: dont use eval to update methods. see #1273
  // RHL needs setPrototypeOf to operate Component inheritance, and eval to patch methods
  var jsFeaturesPresent = !!Object.setPrototypeOf;

  if (!jsFeaturesPresent || !evalAllowed) {
    // we are not in prod mode, but RHL could not be activated
    console.warn(
      'React-Hot-Loader is not supported in this environment:',
      [
        !jsFeaturesPresent && "some JS features are missing",
        !evalAllowed && "`eval` is not allowed(" + evalError + ")"
      ].join(','),
      '.'
    );
    module.exports = __webpack_require__(/*! ./dist/react-hot-loader.production.min.js */ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js");
  } else {
    module.exports = window.reactHotLoaderGlobal = __webpack_require__(/*! ./dist/react-hot-loader.development.js */ "./node_modules/react-hot-loader/dist/react-hot-loader.development.js");
  }
}


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/react-slider/es/components/ReactSlider/ReactSlider.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-slider/es/components/ReactSlider/ReactSlider.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/bstone/git/react-slider/src/components/ReactSlider/ReactSlider.jsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }



/**
 * To prevent text selection while dragging.
 * http://stackoverflow.com/questions/5429827/how-can-i-prevent-text-element-selection-with-cursor-drag
 */

function pauseEvent(e) {
  if (e && e.stopPropagation) {
    e.stopPropagation();
  }

  if (e && e.preventDefault) {
    e.preventDefault();
  }

  return false;
}

function stopPropagation(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
}

function ensureArray(x) {
  if (x == null) {
    return [];
  }

  return Array.isArray(x) ? x : [x];
}

function undoEnsureArray(x) {
  return x !== null && x.length === 1 ? x[0] : x;
}

function trimSucceeding(length, nextValue, minDistance, max) {
  for (var i = 0; i < length; i += 1) {
    var padding = max - i * minDistance;

    if (nextValue[length - 1 - i] > padding) {
      // eslint-disable-next-line no-param-reassign
      nextValue[length - 1 - i] = padding;
    }
  }
}

function trimPreceding(length, nextValue, minDistance, min) {
  for (var i = 0; i < length; i += 1) {
    var padding = min + i * minDistance;

    if (nextValue[i] < padding) {
      // eslint-disable-next-line no-param-reassign
      nextValue[i] = padding;
    }
  }
}

function addHandlers(eventMap) {
  Object.keys(eventMap).forEach(function (key) {
    if (typeof document !== 'undefined') {
      document.addEventListener(key, eventMap[key], false);
    }
  });
}

function removeHandlers(eventMap) {
  Object.keys(eventMap).forEach(function (key) {
    if (typeof document !== 'undefined') {
      document.removeEventListener(key, eventMap[key], false);
    }
  });
}

var ReactSlider =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReactSlider, _React$Component);

  function ReactSlider(_props) {
    var _this;

    _this = _React$Component.call(this, _props) || this;

    _this.onKeyUp = function () {
      _this.onEnd();
    };

    _this.onMouseUp = function () {
      _this.onEnd(_this.getMouseEventMap());
    };

    _this.onTouchEnd = function () {
      _this.onEnd(_this.getTouchEventMap());
    };

    _this.onBlur = function () {
      _this.setState({
        index: -1
      }, _this.onEnd(_this.getKeyDownEventMap()));
    };

    _this.onMouseMove = function (e) {
      var position = _this.getMousePosition(e);

      var diffPosition = _this.getDiffPosition(position[0]);

      var newValue = _this.getValueFromPosition(diffPosition);

      _this.move(newValue);
    };

    _this.onTouchMove = function (e) {
      if (e.touches.length > 1) {
        return;
      }

      var position = _this.getTouchPosition(e);

      if (typeof _this.isScrolling === 'undefined') {
        var diffMainDir = position[0] - _this.startPosition[0];
        var diffScrollDir = position[1] - _this.startPosition[1];
        _this.isScrolling = Math.abs(diffScrollDir) > Math.abs(diffMainDir);
      }

      if (_this.isScrolling) {
        _this.setState({
          index: -1
        });

        return;
      }

      var diffPosition = _this.getDiffPosition(position[0]);

      var newValue = _this.getValueFromPosition(diffPosition);

      _this.move(newValue);
    };

    _this.onKeyDown = function (e) {
      if (e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }

      switch (e.key) {
        case 'ArrowLeft':
        case 'ArrowDown':
        case 'Left':
        case 'Down':
          e.preventDefault();

          _this.moveDownByStep();

          break;

        case 'ArrowRight':
        case 'ArrowUp':
        case 'Right':
        case 'Up':
          e.preventDefault();

          _this.moveUpByStep();

          break;

        case 'Home':
          e.preventDefault();

          _this.move(_this.props.min);

          break;

        case 'End':
          e.preventDefault();

          _this.move(_this.props.max);

          break;

        case 'PageDown':
          e.preventDefault();

          _this.moveDownByStep(_this.props.pageFn(_this.props.step));

          break;

        case 'PageUp':
          e.preventDefault();

          _this.moveUpByStep(_this.props.pageFn(_this.props.step));

          break;

        default:
      }
    };

    _this.onSliderMouseDown = function (e) {
      // do nothing if disabled or right click
      if (_this.props.disabled || e.button === 2) {
        return;
      }

      _this.hasMoved = false;

      if (!_this.props.snapDragDisabled) {
        var position = _this.getMousePosition(e);

        _this.forceValueFromPosition(position[0], function (i) {
          _this.start(i, position[0]);

          _this.fireChangeEvent('onChange');

          addHandlers(_this.getMouseEventMap());
        });
      }

      pauseEvent(e);
    };

    _this.onSliderClick = function (e) {
      if (_this.props.disabled) {
        return;
      }

      if (_this.props.onSliderClick && !_this.hasMoved) {
        var position = _this.getMousePosition(e);

        var valueAtPos = _this.trimAlignValue(_this.calcValue(_this.calcOffsetFromPosition(position[0])));

        _this.props.onSliderClick(valueAtPos);
      }
    };

    _this.createOnKeyDown = function (i) {
      return function (e) {
        if (_this.props.disabled) {
          return;
        }

        _this.start(i);

        addHandlers(_this.getKeyDownEventMap());
        pauseEvent(e);
      };
    };

    _this.createOnMouseDown = function (i) {
      return function (e) {
        // do nothing if disabled or right click
        if (_this.props.disabled || e.button === 2) {
          return;
        }

        var position = _this.getMousePosition(e);

        _this.start(i, position[0]);

        addHandlers(_this.getMouseEventMap());
        pauseEvent(e);
      };
    };

    _this.createOnTouchStart = function (i) {
      return function (e) {
        if (_this.props.disabled || e.touches.length > 1) {
          return;
        }

        var position = _this.getTouchPosition(e);

        _this.startPosition = position; // don't know yet if the user is trying to scroll

        _this.isScrolling = undefined;

        _this.start(i, position[0]);

        addHandlers(_this.getTouchEventMap());
        stopPropagation(e);
      };
    };

    _this.handleResize = function () {
      // setTimeout of 0 gives element enough time to have assumed its new size if
      // it is being resized
      var resizeTimeout = window.setTimeout(function () {
        // drop this timeout from pendingResizeTimeouts to reduce memory usage
        _this.pendingResizeTimeouts.shift();

        _this.resize();
      }, 0);

      _this.pendingResizeTimeouts.push(resizeTimeout);
    };

    _this.renderThumb = function (style, i) {
      var className = _this.props.thumbClassName + " " + _this.props.thumbClassName + "-" + i + " " + (_this.state.index === i ? _this.props.thumbActiveClassName : '');
      var props = {
        'ref': function ref(r) {
          _this["thumb" + i] = r;
        },
        'key': _this.props.thumbClassName + "-" + i,
        className: className,
        style: style,
        'onMouseDown': _this.createOnMouseDown(i),
        'onTouchStart': _this.createOnTouchStart(i),
        'onFocus': _this.createOnKeyDown(i),
        'tabIndex': 0,
        'role': 'slider',
        'aria-orientation': _this.props.orientation,
        'aria-valuenow': _this.state.value[i],
        'aria-valuemin': _this.props.min,
        'aria-valuemax': _this.props.max,
        'aria-label': Array.isArray(_this.props.ariaLabel) ? _this.props.ariaLabel[i] : _this.props.ariaLabel
      };
      var state = {
        index: i,
        value: undoEnsureArray(_this.state.value),
        valueNow: _this.state.value[i]
      };

      if (_this.props.ariaValuetext) {
        props['aria-valuetext'] = typeof _this.props.ariaValuetext === 'string' ? _this.props.ariaValuetext : _this.props.ariaValuetext(state);
      }

      return _this.props.renderThumb(props, state);
    };

    _this.renderTrack = function (i, offsetFrom, offsetTo) {
      var props = {
        key: _this.props.trackClassName + "-" + i,
        className: _this.props.trackClassName + " " + _this.props.trackClassName + "-" + i,
        style: _this.buildTrackStyle(offsetFrom, _this.state.upperBound - offsetTo)
      };
      var state = {
        index: i,
        value: undoEnsureArray(_this.state.value)
      };
      return _this.props.renderTrack(props, state);
    };

    var value = ensureArray(_props.value);

    if (!value.length) {
      value = ensureArray(_props.defaultValue);
    } // reused throughout the component to store results of iterations over `value`


    _this.tempArray = value.slice(); // array for storing resize timeouts ids

    _this.pendingResizeTimeouts = [];
    var zIndices = [];

    for (var i = 0; i < value.length; i += 1) {
      value[i] = _this.trimAlignValue(value[i], _props);
      zIndices.push(i);
    }

    _this.state = {
      index: -1,
      upperBound: 0,
      sliderLength: 0,
      value: value,
      zIndices: zIndices
    };
    return _this;
  }

  var _proto = ReactSlider.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.handleResize);
      this.resize();
    }
  } // Keep the internal `value` consistent with an outside `value` if present.
  // This basically allows the slider to be a controlled component.
  ;

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(newProps) {
    var value = ensureArray(newProps.value);

    if (!value.length) {
      // eslint-disable-next-line prefer-destructuring
      value = this.state.value;
    } // ensure the array keeps the same size as `value`


    this.tempArray = value.slice();

    for (var i = 0; i < value.length; i += 1) {
      this.state.value[i] = this.trimAlignValue(value[i], newProps);
    }

    if (this.state.value.length > value.length) {
      this.state.value.length = value.length;
    } // If an upperBound has not yet been determined (due to the component being hidden
    // during the mount event, or during the last resize), then calculate it now


    if (this.state.upperBound === 0) {
      this.resize();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.clearPendingResizeTimeouts();

    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.handleResize);
    }
  };

  _proto.onEnd = function onEnd(eventMap) {
    if (eventMap) {
      removeHandlers(eventMap);
    }

    if (this.hasMoved) {
      this.fireChangeEvent('onAfterChange');
    }

    this.hasMoved = false;
  };

  _proto.getValue = function getValue() {
    return undoEnsureArray(this.state.value);
  };

  _proto.getClosestIndex = function getClosestIndex(pixelOffset) {
    var minDist = Number.MAX_VALUE;
    var closestIndex = -1;
    var value = this.state.value;
    var l = value.length;

    for (var i = 0; i < l; i += 1) {
      var offset = this.calcOffset(value[i]);
      var dist = Math.abs(pixelOffset - offset);

      if (dist < minDist) {
        minDist = dist;
        closestIndex = i;
      }
    }

    return closestIndex;
  };

  _proto.getMousePosition = function getMousePosition(e) {
    return [e["page" + this.axisKey()], e["page" + this.orthogonalAxisKey()]];
  };

  _proto.getTouchPosition = function getTouchPosition(e) {
    var touch = e.touches[0];
    return [touch["page" + this.axisKey()], touch["page" + this.orthogonalAxisKey()]];
  };

  _proto.getKeyDownEventMap = function getKeyDownEventMap() {
    return {
      keydown: this.onKeyDown,
      keyup: this.onKeyUp,
      focusout: this.onBlur
    };
  };

  _proto.getMouseEventMap = function getMouseEventMap() {
    return {
      mousemove: this.onMouseMove,
      mouseup: this.onMouseUp
    };
  };

  _proto.getTouchEventMap = function getTouchEventMap() {
    return {
      touchmove: this.onTouchMove,
      touchend: this.onTouchEnd
    };
  };

  _proto.getValueFromPosition = function getValueFromPosition(position) {
    var diffValue = position / (this.state.sliderLength - this.state.thumbSize) * (this.props.max - this.props.min);
    return this.trimAlignValue(this.state.startValue + diffValue);
  };

  _proto.getDiffPosition = function getDiffPosition(position) {
    var diffPosition = position - this.state.startPosition;

    if (this.props.invert) {
      diffPosition *= -1;
    }

    return diffPosition;
  } // create the `keydown` handler for the i-th thumb
  ;

  _proto.resize = function resize() {
    var slider = this.slider,
        thumb = this.thumb0;
    var sizeKey = this.sizeKey(); // For the slider size, we want to use the client width/height, excluding any borders

    var sliderRect = slider.getBoundingClientRect();
    var sliderSize = slider[sizeKey];
    var sliderMax = sliderRect[this.posMaxKey()];
    var sliderMin = sliderRect[this.posMinKey()]; // For the thumb size, we want to use the outer width/height, including any borders

    var thumbRect = thumb.getBoundingClientRect();
    var thumbSize = thumbRect[sizeKey.replace('client', '').toLowerCase()];
    this.setState({
      upperBound: sliderSize - thumbSize,
      sliderLength: Math.abs(sliderMax - sliderMin),
      thumbSize: thumbSize
    });
  } // calculates the offset of a thumb in pixels based on its value.
  ;

  _proto.calcOffset = function calcOffset(value) {
    var range = this.props.max - this.props.min;

    if (range === 0) {
      return 0;
    }

    var ratio = (value - this.props.min) / range;
    return ratio * this.state.upperBound;
  } // calculates the value corresponding to a given pixel offset, i.e. the inverse of `calcOffset`.
  ;

  _proto.calcValue = function calcValue(offset) {
    var ratio = offset / this.state.upperBound;
    return ratio * (this.props.max - this.props.min) + this.props.min;
  };

  _proto.calcOffsetFromPosition = function calcOffsetFromPosition(position) {
    var slider = this.slider;
    var sliderRect = slider.getBoundingClientRect();
    var sliderMax = sliderRect[this.posMaxKey()];
    var sliderMin = sliderRect[this.posMinKey()]; // The `position` value passed in is the mouse position based on the window height.
    // The slider bounding rect is based on the viewport, so we must add the window scroll
    // offset to normalize the values.

    var windowOffset = window["scroll" + this.axisKey()];
    var sliderStart = windowOffset + (this.props.invert ? sliderMax : sliderMin);
    var pixelOffset = position - sliderStart;

    if (this.props.invert) {
      pixelOffset = this.state.sliderLength - pixelOffset;
    }

    pixelOffset -= this.state.thumbSize / 2;
    return pixelOffset;
  } // Snaps the nearest thumb to the value corresponding to `position`
  // and calls `callback` with that thumb's index.
  ;

  _proto.forceValueFromPosition = function forceValueFromPosition(position, callback) {
    var pixelOffset = this.calcOffsetFromPosition(position);
    var closestIndex = this.getClosestIndex(pixelOffset);
    var nextValue = this.trimAlignValue(this.calcValue(pixelOffset)); // Clone this.state.value since we'll modify it temporarily
    // eslint-disable-next-line zillow/react/no-access-state-in-setstate

    var value = this.state.value.slice();
    value[closestIndex] = nextValue; // Prevents the slider from shrinking below `props.minDistance`

    for (var i = 0; i < value.length - 1; i += 1) {
      if (value[i + 1] - value[i] < this.props.minDistance) {
        return;
      }
    }

    this.setState({
      value: value
    }, callback.bind(this, closestIndex));
  } // clear all pending timeouts to avoid error messages after unmounting
  ;

  _proto.clearPendingResizeTimeouts = function clearPendingResizeTimeouts() {
    do {
      var nextTimeout = this.pendingResizeTimeouts.shift();
      clearTimeout(nextTimeout);
    } while (this.pendingResizeTimeouts.length);
  };

  _proto.start = function start(i, position) {
    var thumbRef = this["thumb" + i];

    if (thumbRef) {
      thumbRef.focus();
    }

    this.hasMoved = false;
    var zIndices = this.state.zIndices; // remove wherever the element is

    zIndices.splice(zIndices.indexOf(i), 1); // add to end

    zIndices.push(i);
    this.setState(function (prevState) {
      return {
        startValue: prevState.value[i],
        startPosition: position !== undefined ? position : prevState.startPosition,
        index: i,
        zIndices: zIndices
      };
    });
  };

  _proto.moveUpByStep = function moveUpByStep(step) {
    if (step === void 0) {
      step = this.props.step;
    }

    var oldValue = this.state.value[this.state.index];
    var newValue = oldValue + step;
    this.move(Math.min(newValue, this.props.max));
  };

  _proto.moveDownByStep = function moveDownByStep(step) {
    if (step === void 0) {
      step = this.props.step;
    }

    var oldValue = this.state.value[this.state.index];
    var newValue = oldValue - step;
    this.move(Math.max(newValue, this.props.min));
  };

  _proto.move = function move(newValue) {
    var _this$state = this.state,
        index = _this$state.index,
        value = _this$state.value;
    var length = value.length; // Short circuit if the value is not changing

    var oldValue = value[index];

    if (newValue === oldValue) {
      return;
    } // Trigger only before the first movement


    if (!this.hasMoved) {
      this.fireChangeEvent('onBeforeChange');
    }

    this.hasMoved = true; // if "pearling" (= thumbs pushing each other) is disabled,
    // prevent the thumb from getting closer than `minDistance` to the previous or next thumb.

    var _this$props = this.props,
        pearling = _this$props.pearling,
        max = _this$props.max,
        min = _this$props.min,
        minDistance = _this$props.minDistance;

    if (!pearling) {
      if (index > 0) {
        var valueBefore = value[index - 1];

        if (newValue < valueBefore + minDistance) {
          // eslint-disable-next-line no-param-reassign
          newValue = valueBefore + minDistance;
        }
      }

      if (index < length - 1) {
        var valueAfter = value[index + 1];

        if (newValue > valueAfter - minDistance) {
          // eslint-disable-next-line no-param-reassign
          newValue = valueAfter - minDistance;
        }
      }
    }

    value[index] = newValue; // if "pearling" is enabled, let the current thumb push the pre- and succeeding thumbs.

    if (pearling && length > 1) {
      if (newValue > oldValue) {
        this.pushSucceeding(value, minDistance, index);
        trimSucceeding(length, value, minDistance, max);
      } else if (newValue < oldValue) {
        this.pushPreceding(value, minDistance, index);
        trimPreceding(length, value, minDistance, min);
      }
    } // Normally you would use `shouldComponentUpdate`,
    // but since the slider is a low-level component,
    // the extra complexity might be worth the extra performance.


    this.setState({
      value: value
    }, this.fireChangeEvent.bind(this, 'onChange'));
  };

  _proto.pushSucceeding = function pushSucceeding(value, minDistance, index) {
    var i;
    var padding;

    for (i = index, padding = value[i] + minDistance; value[i + 1] !== null && padding > value[i + 1]; i += 1, padding = value[i] + minDistance) {
      // eslint-disable-next-line no-param-reassign
      value[i + 1] = this.alignValue(padding);
    }
  };

  _proto.pushPreceding = function pushPreceding(value, minDistance, index) {
    for (var i = index, padding = value[i] - minDistance; value[i - 1] !== null && padding < value[i - 1]; i -= 1, padding = value[i] - minDistance) {
      // eslint-disable-next-line no-param-reassign
      value[i - 1] = this.alignValue(padding);
    }
  };

  _proto.axisKey = function axisKey() {
    if (this.props.orientation === 'vertical') {
      return 'Y';
    } // Defaults to 'horizontal';


    return 'X';
  };

  _proto.orthogonalAxisKey = function orthogonalAxisKey() {
    if (this.props.orientation === 'vertical') {
      return 'X';
    } // Defaults to 'horizontal'


    return 'Y';
  };

  _proto.posMinKey = function posMinKey() {
    if (this.props.orientation === 'vertical') {
      return this.props.invert ? 'bottom' : 'top';
    } // Defaults to 'horizontal'


    return this.props.invert ? 'right' : 'left';
  };

  _proto.posMaxKey = function posMaxKey() {
    if (this.props.orientation === 'vertical') {
      return this.props.invert ? 'top' : 'bottom';
    } // Defaults to 'horizontal'


    return this.props.invert ? 'left' : 'right';
  };

  _proto.sizeKey = function sizeKey() {
    if (this.props.orientation === 'vertical') {
      return 'clientHeight';
    } // Defaults to 'horizontal'


    return 'clientWidth';
  };

  _proto.trimAlignValue = function trimAlignValue(val, props) {
    return this.alignValue(this.trimValue(val, props), props);
  };

  _proto.trimValue = function trimValue(val, props) {
    if (props === void 0) {
      props = this.props;
    }

    var trimmed = val;

    if (trimmed <= props.min) {
      trimmed = props.min;
    }

    if (trimmed >= props.max) {
      trimmed = props.max;
    }

    return trimmed;
  };

  _proto.alignValue = function alignValue(val, props) {
    if (props === void 0) {
      props = this.props;
    }

    var valModStep = (val - props.min) % props.step;
    var alignValue = val - valModStep;

    if (Math.abs(valModStep) * 2 >= props.step) {
      alignValue += valModStep > 0 ? props.step : -props.step;
    }

    return parseFloat(alignValue.toFixed(5));
  };

  _proto.fireChangeEvent = function fireChangeEvent(event) {
    if (this.props[event]) {
      this.props[event](undoEnsureArray(this.state.value));
    }
  };

  _proto.buildThumbStyle = function buildThumbStyle(offset, i) {
    var style = {
      position: 'absolute',
      willChange: this.state.index >= 0 ? this.posMinKey() : '',
      zIndex: this.state.zIndices.indexOf(i) + 1
    };
    style[this.posMinKey()] = offset + "px";
    return style;
  };

  _proto.buildTrackStyle = function buildTrackStyle(min, max) {
    var obj = {
      position: 'absolute',
      willChange: this.state.index >= 0 ? this.posMinKey() + "," + this.posMaxKey() : ''
    };
    obj[this.posMinKey()] = min;
    obj[this.posMaxKey()] = max;
    return obj;
  };

  _proto.renderThumbs = function renderThumbs(offset) {
    var length = offset.length;
    var styles = this.tempArray;

    for (var i = 0; i < length; i += 1) {
      styles[i] = this.buildThumbStyle(offset[i], i);
    }

    var res = [];

    for (var _i = 0; _i < length; _i += 1) {
      res[_i] = this.renderThumb(styles[_i], _i);
    }

    return res;
  };

  _proto.renderTracks = function renderTracks(offset) {
    var tracks = [];
    var lastIndex = offset.length - 1;
    tracks.push(this.renderTrack(0, 0, offset[0]));

    for (var i = 0; i < lastIndex; i += 1) {
      tracks.push(this.renderTrack(i + 1, offset[i], offset[i + 1]));
    }

    tracks.push(this.renderTrack(lastIndex + 1, offset[lastIndex], this.state.upperBound));
    return tracks;
  };

  _proto.render = function render() {
    var _this2 = this;

    var offset = this.tempArray;
    var value = this.state.value;
    var l = value.length;

    for (var i = 0; i < l; i += 1) {
      offset[i] = this.calcOffset(value[i], i);
    }

    var tracks = this.props.withTracks ? this.renderTracks(offset) : null;
    var thumbs = this.renderThumbs(offset);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
      ref: function ref(r) {
        _this2.slider = r;
      },
      style: {
        position: 'relative'
      },
      className: this.props.className + (this.props.disabled ? ' disabled' : ''),
      onMouseDown: this.onSliderMouseDown,
      onClick: this.onSliderClick
    }, tracks, thumbs);
  };

  return ReactSlider;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

ReactSlider.displayName = 'ReactSlider';
ReactSlider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  pageFn: function pageFn(step) {
    return step * 10;
  },
  minDistance: 0,
  defaultValue: 0,
  orientation: 'horizontal',
  className: 'slider',
  thumbClassName: 'thumb',
  thumbActiveClassName: 'active',
  trackClassName: 'track',
  withTracks: true,
  pearling: false,
  disabled: false,
  snapDragDisabled: false,
  invert: false,
  renderThumb: function renderThumb(props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284
      },
      __self: this
    }));
  },
  renderTrack: function renderTrack(props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285
      },
      __self: this
    }));
  }
};
ReactSlider.propTypes =  true ? {
  /**
   * The minimum value of the slider.
   */
  min: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * The maximum value of the slider.
   */
  max: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Value to be added or subtracted on each step the slider makes.
   * Must be greater than zero.
   * `max - min` should be evenly divisible by the step value.
   */
  step: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * The result of the function is the value to be added or subtracted
   * when the `Page Up` or `Page Down` keys are pressed.
   *
   * The current `step` value will be passed as the only argument.
   * By default, paging will modify `step` by a factor of 10.
   */
  pageFn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * The minimal distance between any pair of thumbs.
   * Must be positive, but zero means they can sit on top of each other.
   */
  minDistance: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Determines the initial positions of the thumbs and the number of thumbs.
   *
   * If a number is passed a slider with one thumb will be rendered.
   * If an array is passed each value will determine the position of one thumb.
   * The values in the array must be sorted.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number)]),

  /**
   * Like `defaultValue` but for
   * [controlled components](http://facebook.github.io/react/docs/forms.html#controlled-components).
   */
  // eslint-disable-next-line zillow/react/require-default-props
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number)]),

  /**
   * Determines whether the slider moves horizontally (from left to right)
   * or vertically (from top to bottom).
   */
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['horizontal', 'vertical']),

  /**
   * The css class set on the slider node.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The css class set on each thumb node.
   *
   * In addition each thumb will receive a numbered css class of the form
   * `${thumbClassName}-${i}`, e.g. `thumb-0`, `thumb-1`, ...
   */
  thumbClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The css class set on the thumb that is currently being moved.
   */
  thumbActiveClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * If `true` tracks between the thumbs will be rendered.
   */
  withTracks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * The css class set on the tracks between the thumbs.
   * In addition track fragment will receive a numbered css class of the form
   * `${trackClassName}-${i}`, e.g. `track-0`, `track-1`, ...
   */
  trackClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * If `true` the active thumb will push other thumbs
   * within the constraints of `min`, `max`, `step` and `minDistance`.
   */
  pearling: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * If `true` the thumbs can't be moved.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Disables thumb move when clicking the slider track
   */
  snapDragDisabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Inverts the slider.
   */
  invert: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Callback called before starting to move a thumb. The callback will only be called if the
   * action will result in a change. The function will be called with one argument,
   * the initial value(s).
   */
  // eslint-disable-next-line max-len
  // eslint-disable-next-line zillow/react/require-default-props, zillow/react/no-unused-prop-types
  onBeforeChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Callback called on every value change.
   * The function will be called with one argument, the new value(s).
   */
  // eslint-disable-next-line max-len
  // eslint-disable-next-line zillow/react/require-default-props, zillow/react/no-unused-prop-types
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Callback called only after moving a thumb has ended. The callback will only be called if
   * the action resulted in a change. The function will be called with one argument,
   * the result value(s).
   */
  // eslint-disable-next-line max-len
  // eslint-disable-next-line zillow/react/require-default-props, zillow/react/no-unused-prop-types
  onAfterChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Callback called when the the slider is clicked (thumb or tracks).
   * Receives the value at the clicked position as argument.
   */
  // eslint-disable-next-line zillow/react/require-default-props
  onSliderClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * aria-label for screen-readers to apply to the thumbs.
   * Use an array for more than one thumb.
   * The length of the array must match the number of thumbs in the value array.
   */
  // eslint-disable-next-line zillow/react/require-default-props
  ariaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string)]),

  /**
   * aria-valuetext for screen-readers.
   * Can be a static string, or a function that returns a string.
   * The function will be passed a single argument,
   * an object with the following properties:
   *
   *     state => `Value: ${state.value}`
   *
   * - `state.index` {`number`} the index of the thumb
   * - `state.value` {`number` | `array`} the current value state
   * - `state.valueNow` {`number`} the value of the thumb (i.e. aria-valuenow)
   */
  // eslint-disable-next-line zillow/react/require-default-props
  ariaValuetext: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),

  /**
   * Provide a custom render function for the track node.
   * The render function will be passed two arguments,
   * an object with props that should be added to your handle node,
   * and an object with track and slider state:
   *
   *     (props, state) => <div {...props} />
   *
   * - `props` {`object`} props to be spread into your track node
   * - `state.index` {`number`} the index of the track
   * - `state.value` {`number` | `array`} the current value state
   */
  renderTrack: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Provide a custom render function for dynamic thumb content.
   * The render function will be passed two arguments,
   * an object with props that should be added to your thumb node,
   * and an object with thumb and slider state:
   *
   *     (props, state) => <div {...props} />
   *
   * - `props` {`object`} props to be spread into your thumb node
   * - `state.index` {`number`} the index of the thumb
   * - `state.value` {`number` | `array`} the current value state
   * - `state.valueNow` {`number`} the value of the thumb (i.e. aria-valuenow)
   */
  // eslint-disable-next-line zillow/react/require-default-props
  renderThumb: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (ReactSlider);

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-audio-player */ "./node_modules/react-audio-player/dist/bundle.js");
/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_audio_player__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slider */ "./node_modules/react-slider/es/components/ReactSlider/ReactSlider.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);


var _this = undefined,
    _jsxFileName = "C:\\www\\habbobr-manutencao\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var toggle = function toggle() {
  var audio = document.querySelector('.react-audio-player');

  if (audio.volume == 0) {
    audio.volume = 1;
  } else {
    audio.volume = 0;
  }
};

var Index = function Index(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_audio_player__WEBPACK_IMPORTED_MODULE_2___default.a, {
    src: "https://player.audiovox.pw/proxy/6768/;type=mp3",
    autoPlay: true,
    controls: true,
    listenInterval: "1000",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "background",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "radial",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "player",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "radio-status",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "radio-status-avatar",
    style: {
      backgroundImage: "url(https://www.habbo.com.br/habbo-imaging/avatarimage?img_format=gif&user=".concat(props.radio.servertitle, "&direction=2&head_direction=2&gesture=sml&size=b)")
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "radio-status-data",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, props.radio.servertitle), __jsx("div", {
    className: "radio-status-data",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, props.radio.servergenre)), __jsx(react_slider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "radio-slider",
    trackClassName: "radio-slider-control",
    onChange: function onChange(value) {
      return document.querySelector('.react-audio-player').volume = value / 100;
    },
    defaultValue: 100,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "radio-status-data-listeners",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, props.radio.currentlisteners, __jsx("div", {
    className: "radio-status-data-listeners-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, "ouvintes"))), __jsx("div", {
    className: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "vacancies",
    onClick: function onClick() {
      return alert('Not now!');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, "Vagas"), __jsx("div", {
    className: "control play",
    onClick: function onClick() {
      return toggle();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "team",
    onClick: function onClick() {
      return alert('Not now!');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, "Equipe"))));
};

Index.getInitialProps = function _callee() {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('http://serv3.audiovox.pw:6768/stats?sid=1&json=1'));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 5:
          data = _context.sent;
          return _context.abrupt("return", {
            radio: data
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 1:
/*!*******************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5Cwww%5Chabbobr-manutencao%5Cpages%5Cindex.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5Cwww%5Chabbobr-manutencao%5Cpages%5Cindex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5Cwww%5Chabbobr-manutencao%5Cpages%5Cindex.js!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map