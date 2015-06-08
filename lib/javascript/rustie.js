(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _inherits = __webpack_require__(8)['default'];

	var _createClass = __webpack_require__(11)['default'];

	var _classCallCheck = __webpack_require__(14)['default'];

	var _Object$defineProperty = __webpack_require__(12)['default'];

	var _regeneratorRuntime = __webpack_require__(15)['default'];

	var _Object$keys = __webpack_require__(1)['default'];

	var _Object$create = __webpack_require__(9)['default'];

	var _interopRequireDefault = __webpack_require__(53)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	var _rustie = __webpack_require__(54);

	var _jsYaml = __webpack_require__(55);

	var _jsYaml2 = _interopRequireDefault(_jsYaml);

	function uint8ToString(u8a) {
	  var CHUNK_SIZE = 32768;
	  var c = [];
	  for (var i = 0, j = u8a.length; i < j; i += CHUNK_SIZE) {
	    c.push(String.fromCharCode.apply(null, u8a.subarray(i, i + CHUNK_SIZE)));
	  }
	  return c.join('');
	}

	function stringToUint8(str) {
	  var result = new Uint8Array(str.length);
	  for (var i = 0, j = str.length; i < j; ++i) {
	    result[i] = str.charCodeAt(i);
	  }
	  return result;
	}

	function getPosition(str, m, i) {
	  return str.split(m, i).join(m).length;
	}

	var FrontMatter = (function (_Plugin) {
	  function FrontMatter() {
	    _classCallCheck(this, FrontMatter);

	    if (_Plugin != null) {
	      _Plugin.apply(this, arguments);
	    }
	  }

	  _inherits(FrontMatter, _Plugin);

	  _createClass(FrontMatter, [{
	    key: 'process',
	    value: function process(files) {
	      var delimiter, yamlSnippet;
	      return _regeneratorRuntime.async(function process$(context$2$0) {
	        while (1) switch (context$2$0.prev = context$2$0.next) {
	          case 0:
	            delimiter = '---', yamlSnippet = undefined;

	            _Object$keys(files).forEach(function (path) {
	              var frontmatter = _Object$create(null);
	              var file = files[path];
	              var contentString = uint8ToString(file.content);
	              var lastDelimiter = getPosition(contentString, delimiter, 2);
	              if (lastDelimiter) {
	                yamlSnippet = contentString.substring(delimiter.length, lastDelimiter);
	                frontmatter = _jsYaml2['default'].load(yamlSnippet);
	                contentString = contentString.substring(lastDelimiter + delimiter.length).trim();
	              }
	              file.content = stringToUint8(contentString);
	              file.metadata.frontmatter = frontmatter;
	            });
	            return context$2$0.abrupt('return', files);

	          case 3:
	          case 'end':
	            return context$2$0.stop();
	        }
	      }, null, this);
	    }
	  }]);

	  return FrontMatter;
	})(_rustie.Plugin);

	exports.FrontMatter = FrontMatter;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	module.exports = __webpack_require__(4).core.Object.keys;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(4)
	  , $def     = __webpack_require__(6)
	  , isObject = $.isObject
	  , toObject = $.toObject;
	$.each.call(('freeze,seal,preventExtensions,isFrozen,isSealed,isExtensible,' +
	  'getOwnPropertyDescriptor,getPrototypeOf,keys,getOwnPropertyNames').split(',')
	, function(KEY, ID){
	  var fn     = ($.core.Object || {})[KEY] || Object[KEY]
	    , forced = 0
	    , method = {};
	  method[KEY] = ID == 0 ? function freeze(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 1 ? function seal(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 2 ? function preventExtensions(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 3 ? function isFrozen(it){
	    return isObject(it) ? fn(it) : true;
	  } : ID == 4 ? function isSealed(it){
	    return isObject(it) ? fn(it) : true;
	  } : ID == 5 ? function isExtensible(it){
	    return isObject(it) ? fn(it) : false;
	  } : ID == 6 ? function getOwnPropertyDescriptor(it, key){
	    return fn(toObject(it), key);
	  } : ID == 7 ? function getPrototypeOf(it){
	    return fn(Object($.assertDefined(it)));
	  } : ID == 8 ? function keys(it){
	    return fn(toObject(it));
	  } : __webpack_require__(7).get;
	  try {
	    fn('z');
	  } catch(e){
	    forced = 1;
	  }
	  $def($def.S + $def.F * forced, 'Object', method);
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global = typeof self != 'undefined' ? self : Function('return this')()
	  , core   = {}
	  , defineProperty = Object.defineProperty
	  , hasOwnProperty = {}.hasOwnProperty
	  , ceil  = Math.ceil
	  , floor = Math.floor
	  , max   = Math.max
	  , min   = Math.min;
	// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
	var DESC = !!function(){
	  try {
	    return defineProperty({}, 'a', {get: function(){ return 2; }}).a == 2;
	  } catch(e){ /* empty */ }
	}();
	var hide = createDefiner(1);
	// 7.1.4 ToInteger
	function toInteger(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	}
	function desc(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	}
	function simpleSet(object, key, value){
	  object[key] = value;
	  return object;
	}
	function createDefiner(bitmap){
	  return DESC ? function(object, key, value){
	    return $.setDesc(object, key, desc(bitmap, value));
	  } : simpleSet;
	}

	function isObject(it){
	  return it !== null && (typeof it == 'object' || typeof it == 'function');
	}
	function isFunction(it){
	  return typeof it == 'function';
	}
	function assertDefined(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	}

	var $ = module.exports = __webpack_require__(5)({
	  g: global,
	  core: core,
	  html: global.document && document.documentElement,
	  // http://jsperf.com/core-js-isobject
	  isObject:   isObject,
	  isFunction: isFunction,
	  that: function(){
	    return this;
	  },
	  // 7.1.4 ToInteger
	  toInteger: toInteger,
	  // 7.1.15 ToLength
	  toLength: function(it){
	    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	  },
	  toIndex: function(index, length){
	    index = toInteger(index);
	    return index < 0 ? max(index + length, 0) : min(index, length);
	  },
	  has: function(it, key){
	    return hasOwnProperty.call(it, key);
	  },
	  create:     Object.create,
	  getProto:   Object.getPrototypeOf,
	  DESC:       DESC,
	  desc:       desc,
	  getDesc:    Object.getOwnPropertyDescriptor,
	  setDesc:    defineProperty,
	  setDescs:   Object.defineProperties,
	  getKeys:    Object.keys,
	  getNames:   Object.getOwnPropertyNames,
	  getSymbols: Object.getOwnPropertySymbols,
	  assertDefined: assertDefined,
	  // Dummy, fix for not array-like ES3 string in es5 module
	  ES5Object: Object,
	  toObject: function(it){
	    return $.ES5Object(assertDefined(it));
	  },
	  hide: hide,
	  def: createDefiner(0),
	  set: global.Symbol ? simpleSet : hide,
	  each: [].forEach
	});
	/* eslint-disable no-undef */
	if(typeof __e != 'undefined')__e = core;
	if(typeof __g != 'undefined')__g = global;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function($){
	  $.FW   = false;
	  $.path = $.core;
	  return $;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(4)
	  , global     = $.g
	  , core       = $.core
	  , isFunction = $.isFunction;
	function ctx(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	}
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	function $def(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {}).prototype
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && !isFunction(target[key]))exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp.prototype = C.prototype;
	    }(out);
	    else exp = isProto && isFunction(out) ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports.prototype || (exports.prototype = {}))[key] = out;
	  }
	}
	module.exports = $def;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var $ = __webpack_require__(4)
	  , toString = {}.toString
	  , getNames = $.getNames;

	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	function getWindowNames(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	}

	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames($.toObject(it));
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$create = __webpack_require__(9)["default"];

	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) subClass.__proto__ = superClass;
	};

	exports.__esModule = true;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(10), __esModule: true };

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$defineProperty = __webpack_require__(12)["default"];

	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;

	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

	exports.__esModule = true;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(13), __esModule: true };

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	exports.__esModule = true;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g =
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this;

	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;

	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;

	module.exports = __webpack_require__(16);

	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  delete g.regeneratorRuntime;
	}

	module.exports = { "default": module.exports, __esModule: true };

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	"use strict";

	var _Symbol = __webpack_require__(18)["default"];

	var _Symbol$iterator = __webpack_require__(29)["default"];

	var _Object$create = __webpack_require__(9)["default"];

	var _Promise = __webpack_require__(38)["default"];

	!(function (global) {
	  "use strict";

	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var iteratorSymbol = typeof _Symbol === "function" && _Symbol$iterator || "@@iterator";

	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = _Object$create((outerFn || Generator).prototype);

	    generator._invoke = makeInvokeMethod(innerFn, self || null, new Context(tryLocsList || []));

	    return generator;
	  }
	  runtime.wrap = wrap;

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

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function (method) {
	      prototype[method] = function (arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function (genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor ? ctor === GeneratorFunction ||
	    // For the native GeneratorFunction constructor, the best we can
	    // do is to check its .name property.
	    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
	  };

	  runtime.mark = function (genFun) {
	    genFun.__proto__ = GeneratorFunctionPrototype;
	    genFun.prototype = _Object$create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function (arg) {
	    return new AwaitArgument(arg);
	  };

	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }

	  function AsyncIterator(generator) {
	    // This invoke function is written in a style that assumes some
	    // calling function (or Promise) will handle exceptions.
	    function invoke(method, arg) {
	      var result = generator[method](arg);
	      var value = result.value;
	      return value instanceof AwaitArgument ? _Promise.resolve(value.arg).then(invokeNext, invokeThrow) : result;
	    }

	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }

	    var invokeNext = invoke.bind(generator, "next");
	    var invokeThrow = invoke.bind(generator, "throw");
	    var invokeReturn = invoke.bind(generator, "return");
	    var previousPromise;

	    function enqueue(method, arg) {
	      var enqueueResult =
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
	      previousPromise ? previousPromise.then(function () {
	        return invoke(method, arg);
	      }) : new _Promise(function (resolve) {
	        resolve(invoke(method, arg));
	      });

	      // Avoid propagating enqueueResult failures to Promises returned by
	      // later invocations of the iterator, and call generator.return() to
	      // allow the generator a chance to clean up.
	      previousPromise = enqueueResult["catch"](invokeReturn);

	      return enqueueResult;
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

	    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
	    : iter.next().then(function (result) {
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
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;

	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }

	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }

	          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

	          if (record.type === "throw") {
	            context.delegate = null;

	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }

	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;

	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }

	          context.delegate = null;
	        }

	        if (method === "next") {
	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            delete context.sent;
	          }
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }

	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

	          var info = {
	            value: record.arg,
	            done: context.done
	          };

	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[iteratorSymbol] = function () {
	    return this;
	  };

	  Gp.toString = function () {
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
	    this.reset();
	  }

	  runtime.keys = function (object) {
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
	        var i = -1,
	            next = function next() {
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
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function reset() {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.tryEntries.forEach(resetTryEntry);

	      // Pre-initialize at least 20 temporary variables to enable hidden
	      // class optimizations for simple generators.
	      for (var tempIndex = 0, tempName; hasOwn.call(this, tempName = "t" + tempIndex) || tempIndex < 20; ++tempIndex) {
	        this[tempName] = null;
	      }
	    },

	    stop: function stop() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function dispatchException(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
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

	    abrupt: function abrupt(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }

	      return ContinueSentinel;
	    },

	    complete: function complete(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" || record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },

	    finish: function finish(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function _catch(tryLoc) {
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

	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      return ContinueSentinel;
	    }
	  };
	})(
	// Among the various tricks for obtaining a reference to the global
	// object, this seems to be the most reliable technique that does not
	// use indirect eval (which violates Content Security Policy).
	typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(17)))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            currentQueue[queueIndex].run();
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(19), __esModule: true };

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(20);
	module.exports = __webpack_require__(4).core.Symbol;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $        = __webpack_require__(4)
	  , setTag   = __webpack_require__(21).set
	  , uid      = __webpack_require__(24)
	  , shared   = __webpack_require__(23)
	  , $def     = __webpack_require__(6)
	  , $redef   = __webpack_require__(25)
	  , keyOf    = __webpack_require__(26)
	  , enumKeys = __webpack_require__(27)
	  , assertObject = __webpack_require__(28).obj
	  , ObjectProto = Object.prototype
	  , DESC     = $.DESC
	  , has      = $.has
	  , $create  = $.create
	  , getDesc  = $.getDesc
	  , setDesc  = $.setDesc
	  , desc     = $.desc
	  , $names   = __webpack_require__(7)
	  , getNames = $names.get
	  , toObject = $.toObject
	  , $Symbol  = $.g.Symbol
	  , setter   = false
	  , TAG      = uid('tag')
	  , HIDDEN   = uid('hidden')
	  , _propertyIsEnumerable = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols = shared('symbols')
	  , useNative = $.isFunction($Symbol);

	var setSymbolDesc = DESC ? function(){ // fallback for old Android
	  try {
	    return $create(setDesc({}, HIDDEN, {
	      get: function(){
	        return setDesc(this, HIDDEN, {value: false})[HIDDEN];
	      }
	    }))[HIDDEN] || setDesc;
	  } catch(e){
	    return function(it, key, D){
	      var protoDesc = getDesc(ObjectProto, key);
	      if(protoDesc)delete ObjectProto[key];
	      setDesc(it, key, D);
	      if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	    };
	  }
	}() : setDesc;

	function wrap(tag){
	  var sym = AllSymbols[tag] = $.set($create($Symbol.prototype), TAG, tag);
	  DESC && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, desc(1, value));
	    }
	  });
	  return sym;
	}

	function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, desc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = $create(D, {enumerable: desc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	}
	function defineProperties(it, P){
	  assertObject(it);
	  var keys = enumKeys(P = toObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)defineProperty(it, key = keys[i++], P[key]);
	  return it;
	}
	function create(it, P){
	  return P === undefined ? $create(it) : defineProperties($create(it), P);
	}
	function propertyIsEnumerable(key){
	  var E = _propertyIsEnumerable.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	}
	function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	}
	function getOwnPropertyNames(it){
	  var names  = getNames(toObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	}
	function getOwnPropertySymbols(it){
	  var names  = getNames(toObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	}

	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments[0]));
	  };
	  $redef($Symbol.prototype, 'toString', function(){
	    return this[TAG];
	  });

	  $.create     = create;
	  $.setDesc    = defineProperty;
	  $.getDesc    = getOwnPropertyDescriptor;
	  $.setDescs   = defineProperties;
	  $.getNames   = $names.get = getOwnPropertyNames;
	  $.getSymbols = getOwnPropertySymbols;

	  if($.DESC && $.FW)$redef(ObjectProto, 'propertyIsEnumerable', propertyIsEnumerable, true);
	}

	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	    'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	    'species,split,toPrimitive,toStringTag,unscopables'
	  ).split(','), function(it){
	    var sym = __webpack_require__(22)(it);
	    symbolStatics[it] = useNative ? sym : wrap(sym);
	  }
	);

	setter = true;

	$def($def.G + $def.W, {Symbol: $Symbol});

	$def($def.S, 'Symbol', symbolStatics);

	$def($def.S + $def.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: getOwnPropertySymbols
	});

	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setTag($.g.JSON, 'JSON', true);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(4)
	  , TAG      = __webpack_require__(22)('toStringTag')
	  , toString = {}.toString;
	function cof(it){
	  return toString.call(it).slice(8, -1);
	}
	cof.classof = function(it){
	  var O, T;
	  return it == undefined ? it === undefined ? 'Undefined' : 'Null'
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T : cof(O);
	};
	cof.set = function(it, tag, stat){
	  if(it && !$.has(it = stat ? it : it.prototype, TAG))$.hide(it, TAG, tag);
	};
	module.exports = cof;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4).g
	  , store  = __webpack_require__(23)('wks');
	module.exports = function(name){
	  return store[name] || (store[name] =
	    global.Symbol && global.Symbol[name] || __webpack_require__(24).safe('Symbol.' + name));
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var $      = __webpack_require__(4)
	  , SHARED = '__core-js_shared__'
	  , store  = $.g[SHARED] || $.hide($.g, SHARED, {})[SHARED];
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var sid = 0;
	function uid(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++sid + Math.random()).toString(36));
	}
	uid.safe = __webpack_require__(4).g.Symbol || uid;
	module.exports = uid;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4).hide;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);
	module.exports = function(object, el){
	  var O      = $.toObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getDesc    = $.getDesc
	    , getSymbols = $.getSymbols;
	  if(getSymbols)$.each.call(getSymbols(it), function(key){
	    if(getDesc(it, key).enumerable)keys.push(key);
	  });
	  return keys;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);
	function assert(condition, msg1, msg2){
	  if(!condition)throw TypeError(msg2 ? msg1 + msg2 : msg1);
	}
	assert.def = $.assertDefined;
	assert.fn = function(it){
	  if(!$.isFunction(it))throw TypeError(it + ' is not a function!');
	  return it;
	};
	assert.obj = function(it){
	  if(!$.isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};
	assert.inst = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};
	module.exports = assert;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(30), __esModule: true };

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(31);
	__webpack_require__(35);
	module.exports = __webpack_require__(22)('iterator');

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var set   = __webpack_require__(4).set
	  , $at   = __webpack_require__(32)(true)
	  , ITER  = __webpack_require__(24).safe('iter')
	  , $iter = __webpack_require__(33)
	  , step  = $iter.step;

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(34)(String, 'String', function(iterated){
	  set(this, ITER, {o: String(iterated), i: 0});
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var iter  = this[ITER]
	    , O     = iter.o
	    , index = iter.i
	    , point;
	  if(index >= O.length)return step(1);
	  point = $at(O, index);
	  iter.i += point.length;
	  return step(0, point);
	});

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// true  -> String#at
	// false -> String#codePointAt
	var $ = __webpack_require__(4);
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String($.assertDefined(that))
	      , i = $.toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l
	      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	        ? TO_STRING ? s.charAt(i) : a
	        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $                 = __webpack_require__(4)
	  , cof               = __webpack_require__(21)
	  , classof           = cof.classof
	  , assert            = __webpack_require__(28)
	  , assertObject      = assert.obj
	  , SYMBOL_ITERATOR   = __webpack_require__(22)('iterator')
	  , FF_ITERATOR       = '@@iterator'
	  , Iterators         = __webpack_require__(23)('iterators')
	  , IteratorPrototype = {};
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	setIterator(IteratorPrototype, $.that);
	function setIterator(O, value){
	  $.hide(O, SYMBOL_ITERATOR, value);
	  // Add iterator for FF iterator protocol
	  if(FF_ITERATOR in [])$.hide(O, FF_ITERATOR, value);
	}

	module.exports = {
	  // Safari has buggy iterators w/o `next`
	  BUGGY: 'keys' in [] && !('next' in [].keys()),
	  Iterators: Iterators,
	  step: function(done, value){
	    return {value: value, done: !!done};
	  },
	  is: function(it){
	    var O      = Object(it)
	      , Symbol = $.g.Symbol;
	    return (Symbol && Symbol.iterator || FF_ITERATOR) in O
	      || SYMBOL_ITERATOR in O
	      || $.has(Iterators, classof(O));
	  },
	  get: function(it){
	    var Symbol = $.g.Symbol
	      , getIter;
	    if(it != undefined){
	      getIter = it[Symbol && Symbol.iterator || FF_ITERATOR]
	        || it[SYMBOL_ITERATOR]
	        || Iterators[classof(it)];
	    }
	    assert($.isFunction(getIter), it, ' is not iterable!');
	    return assertObject(getIter.call(it));
	  },
	  set: setIterator,
	  create: function(Constructor, NAME, next, proto){
	    Constructor.prototype = $.create(proto || IteratorPrototype, {next: $.desc(1, next)});
	    cof.set(Constructor, NAME + ' Iterator');
	  }
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var $def            = __webpack_require__(6)
	  , $redef          = __webpack_require__(25)
	  , $               = __webpack_require__(4)
	  , cof             = __webpack_require__(21)
	  , $iter           = __webpack_require__(33)
	  , SYMBOL_ITERATOR = __webpack_require__(22)('iterator')
	  , FF_ITERATOR     = '@@iterator'
	  , KEYS            = 'keys'
	  , VALUES          = 'values'
	  , Iterators       = $iter.Iterators;
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
	  $iter.create(Constructor, NAME, next);
	  function createMethod(kind){
	    function $$(that){
	      return new Constructor(that, kind);
	    }
	    switch(kind){
	      case KEYS: return function keys(){ return $$(this); };
	      case VALUES: return function values(){ return $$(this); };
	    } return function entries(){ return $$(this); };
	  }
	  var TAG      = NAME + ' Iterator'
	    , proto    = Base.prototype
	    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , _default = _native || createMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if(_native){
	    var IteratorPrototype = $.getProto(_default.call(new Base));
	    // Set @@toStringTag to native iterators
	    cof.set(IteratorPrototype, TAG, true);
	    // FF fix
	    if($.FW && $.has(proto, FF_ITERATOR))$iter.set(IteratorPrototype, $.that);
	  }
	  // Define iterator
	  if($.FW)$iter.set(proto, _default);
	  // Plug for library
	  Iterators[NAME] = _default;
	  Iterators[TAG]  = $.that;
	  if(DEFAULT){
	    methods = {
	      keys:    IS_SET            ? _default : createMethod(KEYS),
	      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
	      entries: DEFAULT != VALUES ? _default : createMethod('entries')
	    };
	    if(FORCE)for(key in methods){
	      if(!(key in proto))$redef(proto, key, methods[key]);
	    } else $def($def.P + $def.F * $iter.BUGGY, NAME, methods);
	  }
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(36);
	var $           = __webpack_require__(4)
	  , Iterators   = __webpack_require__(33).Iterators
	  , ITERATOR    = __webpack_require__(22)('iterator')
	  , ArrayValues = Iterators.Array
	  , NL          = $.g.NodeList
	  , HTC         = $.g.HTMLCollection
	  , NLProto     = NL && NL.prototype
	  , HTCProto    = HTC && HTC.prototype;
	if($.FW){
	  if(NL && !(ITERATOR in NLProto))$.hide(NLProto, ITERATOR, ArrayValues);
	  if(HTC && !(ITERATOR in HTCProto))$.hide(HTCProto, ITERATOR, ArrayValues);
	}
	Iterators.NodeList = Iterators.HTMLCollection = ArrayValues;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(4)
	  , setUnscope = __webpack_require__(37)
	  , ITER       = __webpack_require__(24).safe('iter')
	  , $iter      = __webpack_require__(33)
	  , step       = $iter.step
	  , Iterators  = $iter.Iterators;

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	__webpack_require__(34)(Array, 'Array', function(iterated, kind){
	  $.set(this, ITER, {o: $.toObject(iterated), i: 0, k: kind});
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var iter  = this[ITER]
	    , O     = iter.o
	    , kind  = iter.k
	    , index = iter.i++;
	  if(!O || index >= O.length){
	    iter.o = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	setUnscope('keys');
	setUnscope('values');
	setUnscope('entries');

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var $           = __webpack_require__(4)
	  , UNSCOPABLES = __webpack_require__(22)('unscopables');
	if($.FW && !(UNSCOPABLES in []))$.hide(Array.prototype, UNSCOPABLES, {});
	module.exports = function(key){
	  if($.FW)[][UNSCOPABLES][key] = true;
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(39), __esModule: true };

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(40);
	__webpack_require__(31);
	__webpack_require__(35);
	__webpack_require__(41);
	module.exports = __webpack_require__(4).core.Promise;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(21)
	  , tmp = {};
	tmp[__webpack_require__(22)('toStringTag')] = 'z';
	if(__webpack_require__(4).FW && cof(tmp) != 'z'){
	  __webpack_require__(25)(Object.prototype, 'toString', function toString(){
	    return '[object ' + cof.classof(this) + ']';
	  }, true);
	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $        = __webpack_require__(4)
	  , ctx      = __webpack_require__(43)
	  , cof      = __webpack_require__(21)
	  , $def     = __webpack_require__(6)
	  , assert   = __webpack_require__(28)
	  , forOf    = __webpack_require__(44)
	  , setProto = __webpack_require__(46).set
	  , same     = __webpack_require__(42)
	  , species  = __webpack_require__(47)
	  , SPECIES  = __webpack_require__(22)('species')
	  , RECORD   = __webpack_require__(24).safe('record')
	  , PROMISE  = 'Promise'
	  , global   = $.g
	  , process  = global.process
	  , asap     = process && process.nextTick || __webpack_require__(48).set
	  , P        = global[PROMISE]
	  , isFunction     = $.isFunction
	  , isObject       = $.isObject
	  , assertFunction = assert.fn
	  , assertObject   = assert.obj
	  , Wrapper;

	function testResolve(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	}

	var useNative = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = isFunction(P) && isFunction(P.resolve) && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();

	// helpers
	function isPromise(it){
	  return isObject(it) && (useNative ? cof.classof(it) == 'Promise' : RECORD in it);
	}
	function sameConstructor(a, b){
	  // library wrapper special case
	  if(!$.FW && a === P && b === Wrapper)return true;
	  return same(a, b);
	}
	function getConstructor(C){
	  var S = assertObject(C)[SPECIES];
	  return S != undefined ? S : C;
	}
	function isThenable(it){
	  var then;
	  if(isObject(it))then = it.then;
	  return isFunction(then) ? then : false;
	}
	function notify(record){
	  var chain = record.c;
	  if(chain.length)asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    function run(react){
	      var cb = ok ? react.ok : react.fail
	        , ret, then;
	      try {
	        if(cb){
	          if(!ok)record.h = true;
	          ret = cb === true ? value : cb(value);
	          if(ret === react.P){
	            react.rej(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(ret)){
	            then.call(ret, react.res, react.rej);
	          } else react.res(ret);
	        } else react.rej(value);
	      } catch(err){
	        react.rej(err);
	      }
	    }
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	  });
	}
	function isUnhandled(promise){
	  var record = promise[RECORD]
	    , chain  = record.a || record.c
	    , i      = 0
	    , react;
	  if(record.h)return false;
	  while(chain.length > i){
	    react = chain[i++];
	    if(react.fail || !isUnhandled(react.P))return false;
	  } return true;
	}
	function $reject(value){
	  var record = this
	    , promise;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  setTimeout(function(){
	    asap(function(){
	      if(isUnhandled(promise = record.p)){
	        if(cof(process) == 'process'){
	          process.emit('unhandledRejection', value, promise);
	        } else if(global.console && isFunction(console.error)){
	          console.error('Unhandled promise rejection', value);
	        }
	      }
	      record.a = undefined;
	    });
	  }, 1);
	  notify(record);
	}
	function $resolve(value){
	  var record = this
	    , then, wrapper;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(then = isThenable(value)){
	      wrapper = {r: record, d: false}; // wrap
	      then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record);
	    }
	  } catch(err){
	    $reject.call(wrapper || {r: record, d: false}, err); // wrap
	  }
	}

	// constructor polyfill
	if(!useNative){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    assertFunction(executor);
	    var record = {
	      p: assert.inst(this, P, PROMISE),       // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false                                // <- handled rejection
	    };
	    $.hide(this, RECORD, record);
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(51)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var S = assertObject(assertObject(this).constructor)[SPECIES];
	      var react = {
	        ok:   isFunction(onFulfilled) ? onFulfilled : true,
	        fail: isFunction(onRejected)  ? onRejected  : false
	      };
	      var promise = react.P = new (S != undefined ? S : P)(function(res, rej){
	        react.res = assertFunction(res);
	        react.rej = assertFunction(rej);
	      });
	      var record = this[RECORD];
	      record.c.push(react);
	      if(record.a)record.a.push(react);
	      if(record.s)notify(record);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}

	// export
	$def($def.G + $def.W + $def.F * !useNative, {Promise: P});
	cof.set(P, PROMISE);
	species(P);
	species(Wrapper = $.core[PROMISE]);

	// statics
	$def($def.S + $def.F * !useNative, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    return new (getConstructor(this))(function(res, rej){ rej(r); });
	  }
	});
	$def($def.S + $def.F * (!useNative || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    return isPromise(x) && sameConstructor(x.constructor, this)
	      ? x : new this(function(res){ res(x); });
	  }
	});
	$def($def.S + $def.F * !(useNative && __webpack_require__(52)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C      = getConstructor(this)
	      , values = [];
	    return new C(function(res, rej){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        C.resolve(promise).then(function(value){
	          results[index] = value;
	          --remaining || res(results);
	        }, rej);
	      });
	      else res(results);
	    });
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C = getConstructor(this);
	    return new C(function(res, rej){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(res, rej);
	      });
	    });
	  }
	});

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// Optional / simple context binding
	var assertFunction = __webpack_require__(28).fn;
	module.exports = function(fn, that, length){
	  assertFunction(fn);
	  if(~length && that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  } return function(/* ...args */){
	      return fn.apply(that, arguments);
	    };
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var ctx  = __webpack_require__(43)
	  , get  = __webpack_require__(33).get
	  , call = __webpack_require__(45);
	module.exports = function(iterable, entries, fn, that){
	  var iterator = get(iterable)
	    , f        = ctx(fn, that, entries ? 2 : 1)
	    , step;
	  while(!(step = iterator.next()).done){
	    if(call(iterator, f, step.value, entries) === false){
	      return call.close(iterator);
	    }
	  }
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var assertObject = __webpack_require__(28).obj;
	function close(iterator){
	  var ret = iterator['return'];
	  if(ret !== undefined)assertObject(ret.call(iterator));
	}
	function call(iterator, fn, value, entries){
	  try {
	    return entries ? fn(assertObject(value)[0], value[1]) : fn(value);
	  } catch(e){
	    close(iterator);
	    throw e;
	  }
	}
	call.close = close;
	module.exports = call;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var $      = __webpack_require__(4)
	  , assert = __webpack_require__(28);
	function check(O, proto){
	  assert.obj(O);
	  assert(proto === null || $.isObject(proto), proto, ": can't set as prototype!");
	}
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} // eslint-disable-line
	    ? function(buggy, set){
	        try {
	          set = __webpack_require__(43)(Function.call, $.getDesc(Object.prototype, '__proto__').set, 2);
	          set({}, []);
	        } catch(e){ buggy = true; }
	        return function setPrototypeOf(O, proto){
	          check(O, proto);
	          if(buggy)O.__proto__ = proto;
	          else set(O, proto);
	          return O;
	        };
	      }()
	    : undefined),
	  check: check
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var $       = __webpack_require__(4)
	  , SPECIES = __webpack_require__(22)('species');
	module.exports = function(C){
	  if($.DESC && !(SPECIES in C))$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: $.that
	  });
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $      = __webpack_require__(4)
	  , ctx    = __webpack_require__(43)
	  , cof    = __webpack_require__(21)
	  , invoke = __webpack_require__(49)
	  , cel    = __webpack_require__(50)
	  , global             = $.g
	  , isFunction         = $.isFunction
	  , html               = $.html
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , postMessage        = global.postMessage
	  , addEventListener   = global.addEventListener
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	function run(){
	  var id = +this;
	  if($.has(queue, id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	}
	function listner(event){
	  run.call(event.data);
	}
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!isFunction(setTask) || !isFunction(clearTask)){
	  setTask = function(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(isFunction(fn) ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(cof(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Modern browsers, skip implementation for WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is object
	  } else if(addEventListener && isFunction(postMessage) && !global.importScripts){
	    defer = function(id){
	      postMessage(id, '*');
	    };
	    addEventListener('message', listner, false);
	  // WebWorkers
	  } else if(isFunction(MessageChannel)){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// Fast apply
	// http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	    case 5: return un ? fn(args[0], args[1], args[2], args[3], args[4])
	                      : fn.call(that, args[0], args[1], args[2], args[3], args[4]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(4)
	  , document = $.g.document
	  , isObject = $.isObject
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var $redef = __webpack_require__(25);
	module.exports = function(target, src){
	  for(var key in src)$redef(target, key, src[key]);
	  return target;
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var SYMBOL_ITERATOR = __webpack_require__(22)('iterator')
	  , SAFE_CLOSING    = false;
	try {
	  var riter = [7][SYMBOL_ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	module.exports = function(exec){
	  if(!SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[SYMBOL_ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[SYMBOL_ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define(factory);
		else {
			var a = factory();
			for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
		}
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var _Object$defineProperty = __webpack_require__(1)['default'];

		_Object$defineProperty(exports, '__esModule', {
		  value: true
		});

		var _errors = __webpack_require__(5);

		var _rustie = __webpack_require__(15);

		var _plugin = __webpack_require__(61);

		var _dalReader = __webpack_require__(62);

		var _dalWriter = __webpack_require__(63);

		var _data = __webpack_require__(64);

		exports.Rustie = _rustie.Rustie;
		exports.RustieAbstractClassError = _errors.RustieAbstractClassError;
		exports.Data = _data.Data;
		exports.Plugin = _plugin.Plugin;
		exports.Reader = _dalReader.Reader;
		exports.Writer = _dalWriter.Writer;

	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(2), __esModule: true };

	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		var $ = __webpack_require__(3);
		module.exports = function defineProperty(it, key, desc){
		  return $.setDesc(it, key, desc);
		};

	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		var global = typeof self != 'undefined' ? self : Function('return this')()
		  , core   = {}
		  , defineProperty = Object.defineProperty
		  , hasOwnProperty = {}.hasOwnProperty
		  , ceil  = Math.ceil
		  , floor = Math.floor
		  , max   = Math.max
		  , min   = Math.min;
		// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
		var DESC = !!function(){
		  try {
		    return defineProperty({}, 'a', {get: function(){ return 2; }}).a == 2;
		  } catch(e){ /* empty */ }
		}();
		var hide = createDefiner(1);
		// 7.1.4 ToInteger
		function toInteger(it){
		  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
		}
		function desc(bitmap, value){
		  return {
		    enumerable  : !(bitmap & 1),
		    configurable: !(bitmap & 2),
		    writable    : !(bitmap & 4),
		    value       : value
		  };
		}
		function simpleSet(object, key, value){
		  object[key] = value;
		  return object;
		}
		function createDefiner(bitmap){
		  return DESC ? function(object, key, value){
		    return $.setDesc(object, key, desc(bitmap, value));
		  } : simpleSet;
		}

		function isObject(it){
		  return it !== null && (typeof it == 'object' || typeof it == 'function');
		}
		function isFunction(it){
		  return typeof it == 'function';
		}
		function assertDefined(it){
		  if(it == undefined)throw TypeError("Can't call method on  " + it);
		  return it;
		}

		var $ = module.exports = __webpack_require__(4)({
		  g: global,
		  core: core,
		  html: global.document && document.documentElement,
		  // http://jsperf.com/core-js-isobject
		  isObject:   isObject,
		  isFunction: isFunction,
		  that: function(){
		    return this;
		  },
		  // 7.1.4 ToInteger
		  toInteger: toInteger,
		  // 7.1.15 ToLength
		  toLength: function(it){
		    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
		  },
		  toIndex: function(index, length){
		    index = toInteger(index);
		    return index < 0 ? max(index + length, 0) : min(index, length);
		  },
		  has: function(it, key){
		    return hasOwnProperty.call(it, key);
		  },
		  create:     Object.create,
		  getProto:   Object.getPrototypeOf,
		  DESC:       DESC,
		  desc:       desc,
		  getDesc:    Object.getOwnPropertyDescriptor,
		  setDesc:    defineProperty,
		  setDescs:   Object.defineProperties,
		  getKeys:    Object.keys,
		  getNames:   Object.getOwnPropertyNames,
		  getSymbols: Object.getOwnPropertySymbols,
		  assertDefined: assertDefined,
		  // Dummy, fix for not array-like ES3 string in es5 module
		  ES5Object: Object,
		  toObject: function(it){
		    return $.ES5Object(assertDefined(it));
		  },
		  hide: hide,
		  def: createDefiner(0),
		  set: global.Symbol ? simpleSet : hide,
		  each: [].forEach
		});
		/* eslint-disable no-undef */
		if(typeof __e != 'undefined')__e = core;
		if(typeof __g != 'undefined')__g = global;

	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = function($){
		  $.FW   = false;
		  $.path = $.core;
		  return $;
		};

	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";

		var _inherits = __webpack_require__(6)["default"];

		var _get = __webpack_require__(9)["default"];

		var _classCallCheck = __webpack_require__(14)["default"];

		var _Object$defineProperty = __webpack_require__(1)["default"];

		_Object$defineProperty(exports, "__esModule", {
		  value: true
		});

		var RustieAbstractClassError = (function (_Error) {
		  function RustieAbstractClassError(message, id) {
		    _classCallCheck(this, RustieAbstractClassError);

		    _get(Object.getPrototypeOf(RustieAbstractClassError.prototype), "constructor", this).call(this, message, id);
		  }

		  _inherits(RustieAbstractClassError, _Error);

		  return RustieAbstractClassError;
		})(Error);

		exports.RustieAbstractClassError = RustieAbstractClassError;

	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";

		var _Object$create = __webpack_require__(7)["default"];

		exports["default"] = function (subClass, superClass) {
		  if (typeof superClass !== "function" && superClass !== null) {
		    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		  }

		  subClass.prototype = _Object$create(superClass && superClass.prototype, {
		    constructor: {
		      value: subClass,
		      enumerable: false,
		      writable: true,
		      configurable: true
		    }
		  });
		  if (superClass) subClass.__proto__ = superClass;
		};

		exports.__esModule = true;

	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(8), __esModule: true };

	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

		var $ = __webpack_require__(3);
		module.exports = function create(P, D){
		  return $.create(P, D);
		};

	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";

		var _Object$getOwnPropertyDescriptor = __webpack_require__(10)["default"];

		exports["default"] = function get(_x, _x2, _x3) {
		  var _again = true;

		  _function: while (_again) {
		    var object = _x,
		        property = _x2,
		        receiver = _x3;
		    desc = parent = getter = undefined;
		    _again = false;

		    var desc = _Object$getOwnPropertyDescriptor(object, property);

		    if (desc === undefined) {
		      var parent = Object.getPrototypeOf(object);

		      if (parent === null) {
		        return undefined;
		      } else {
		        _x = parent;
		        _x2 = property;
		        _x3 = receiver;
		        _again = true;
		        continue _function;
		      }
		    } else if ("value" in desc) {
		      return desc.value;
		    } else {
		      var getter = desc.get;

		      if (getter === undefined) {
		        return undefined;
		      }

		      return getter.call(receiver);
		    }
		  }
		};

		exports.__esModule = true;

	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(11), __esModule: true };

	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {

		var $ = __webpack_require__(3);
		__webpack_require__(12);
		module.exports = function getOwnPropertyDescriptor(it, key){
		  return $.getDesc(it, key);
		};

	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {

		var $        = __webpack_require__(3)
		  , $def     = __webpack_require__(13)
		  , isObject = $.isObject
		  , toObject = $.toObject;
		$.each.call(('freeze,seal,preventExtensions,isFrozen,isSealed,isExtensible,' +
		  'getOwnPropertyDescriptor,getPrototypeOf,keys,getOwnPropertyNames').split(',')
		, function(KEY, ID){
		  var fn     = ($.core.Object || {})[KEY] || Object[KEY]
		    , forced = 0
		    , method = {};
		  method[KEY] = ID == 0 ? function freeze(it){
		    return isObject(it) ? fn(it) : it;
		  } : ID == 1 ? function seal(it){
		    return isObject(it) ? fn(it) : it;
		  } : ID == 2 ? function preventExtensions(it){
		    return isObject(it) ? fn(it) : it;
		  } : ID == 3 ? function isFrozen(it){
		    return isObject(it) ? fn(it) : true;
		  } : ID == 4 ? function isSealed(it){
		    return isObject(it) ? fn(it) : true;
		  } : ID == 5 ? function isExtensible(it){
		    return isObject(it) ? fn(it) : false;
		  } : ID == 6 ? function getOwnPropertyDescriptor(it, key){
		    return fn(toObject(it), key);
		  } : ID == 7 ? function getPrototypeOf(it){
		    return fn(Object($.assertDefined(it)));
		  } : ID == 8 ? function keys(it){
		    return fn(toObject(it));
		  } : function getOwnPropertyNames(it){
		    return fn(toObject(it));
		  };
		  try {
		    fn('z');
		  } catch(e){
		    forced = 1;
		  }
		  $def($def.S + $def.F * forced, 'Object', method);
		});

	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {

		var $          = __webpack_require__(3)
		  , global     = $.g
		  , core       = $.core
		  , isFunction = $.isFunction;
		function ctx(fn, that){
		  return function(){
		    return fn.apply(that, arguments);
		  };
		}
		// type bitmap
		$def.F = 1;  // forced
		$def.G = 2;  // global
		$def.S = 4;  // static
		$def.P = 8;  // proto
		$def.B = 16; // bind
		$def.W = 32; // wrap
		function $def(type, name, source){
		  var key, own, out, exp
		    , isGlobal = type & $def.G
		    , isProto  = type & $def.P
		    , target   = isGlobal ? global : type & $def.S
		        ? global[name] : (global[name] || {}).prototype
		    , exports  = isGlobal ? core : core[name] || (core[name] = {});
		  if(isGlobal)source = name;
		  for(key in source){
		    // contains in native
		    own = !(type & $def.F) && target && key in target;
		    if(own && key in exports)continue;
		    // export native or passed
		    out = own ? target[key] : source[key];
		    // prevent global pollution for namespaces
		    if(isGlobal && !isFunction(target[key]))exp = source[key];
		    // bind timers to global for call from export context
		    else if(type & $def.B && own)exp = ctx(out, global);
		    // wrap global constructors for prevent change them in library
		    else if(type & $def.W && target[key] == out)!function(C){
		      exp = function(param){
		        return this instanceof C ? new C(param) : C(param);
		      };
		      exp.prototype = C.prototype;
		    }(out);
		    else exp = isProto && isFunction(out) ? ctx(Function.call, out) : out;
		    // export
		    exports[key] = exp;
		    if(isProto)(exports.prototype || (exports.prototype = {}))[key] = out;
		  }
		}
		module.exports = $def;

	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";

		exports["default"] = function (instance, Constructor) {
		  if (!(instance instanceof Constructor)) {
		    throw new TypeError("Cannot call a class as a function");
		  }
		};

		exports.__esModule = true;

	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var _createClass = __webpack_require__(16)['default'];

		var _classCallCheck = __webpack_require__(14)['default'];

		var _Object$defineProperty = __webpack_require__(1)['default'];

		var _regeneratorRuntime = __webpack_require__(17)['default'];

		_Object$defineProperty(exports, '__esModule', {
		  value: true
		});

		var _pipeline2 = __webpack_require__(53);

		var Rustie = (function () {
		  function Rustie(reader, writer) {
		    _classCallCheck(this, Rustie);

		    this._reader = reader;
		    this._writer = writer;
		    this._pipeline = new _pipeline2.Pipeline();
		  }

		  _createClass(Rustie, [{
		    key: 'addPlugins',
		    value: function addPlugins() {
		      var _pipeline;

		      for (var _len = arguments.length, plugins = Array(_len), _key = 0; _key < _len; _key++) {
		        plugins[_key] = arguments[_key];
		      }

		      (_pipeline = this._pipeline).addProcessors.apply(_pipeline, plugins);
		    }
		  }, {
		    key: 'build',
		    value: function build(from, to) {
		      var files, processed;
		      return _regeneratorRuntime.async(function build$(context$2$0) {
		        while (1) switch (context$2$0.prev = context$2$0.next) {
		          case 0:
		            context$2$0.next = 2;
		            return this._reader.read(from);

		          case 2:
		            files = context$2$0.sent;
		            context$2$0.next = 5;
		            return this._pipeline.process(files);

		          case 5:
		            processed = context$2$0.sent;
		            context$2$0.next = 8;
		            return this._writer.write(to, processed);

		          case 8:
		            return context$2$0.abrupt('return', context$2$0.sent);

		          case 9:
		          case 'end':
		            return context$2$0.stop();
		        }
		      }, null, this);
		    }
		  }]);

		  return Rustie;
		})();

		exports.Rustie = Rustie;

	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";

		var _Object$defineProperty = __webpack_require__(1)["default"];

		exports["default"] = (function () {
		  function defineProperties(target, props) {
		    for (var i = 0; i < props.length; i++) {
		      var descriptor = props[i];
		      descriptor.enumerable = descriptor.enumerable || false;
		      descriptor.configurable = true;
		      if ("value" in descriptor) descriptor.writable = true;

		      _Object$defineProperty(target, descriptor.key, descriptor);
		    }
		  }

		  return function (Constructor, protoProps, staticProps) {
		    if (protoProps) defineProperties(Constructor.prototype, protoProps);
		    if (staticProps) defineProperties(Constructor, staticProps);
		    return Constructor;
		  };
		})();

		exports.__esModule = true;

	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
		// kept identical to the way it is obtained in runtime.js
		var g =
		  typeof global === "object" ? global :
		  typeof window === "object" ? window :
		  typeof self === "object" ? self : this;

		// Use `getOwnPropertyNames` because not all browsers support calling
		// `hasOwnProperty` on the global `self` object in a worker. See #183.
		var hadRuntime = g.regeneratorRuntime &&
		  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

		// Save the old regeneratorRuntime in case it needs to be restored later.
		var oldRuntime = hadRuntime && g.regeneratorRuntime;

		// Force reevalutation of runtime.js.
		g.regeneratorRuntime = undefined;

		module.exports = __webpack_require__(18);

		if (hadRuntime) {
		  // Restore the original runtime.
		  g.regeneratorRuntime = oldRuntime;
		} else {
		  // Remove the global property added by runtime.js.
		  delete g.regeneratorRuntime;
		}

		module.exports = { "default": module.exports, __esModule: true };

		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global) {/**
		 * Copyright (c) 2014, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
		 * additional grant of patent rights can be found in the PATENTS file in
		 * the same directory.
		 */

		"use strict";

		var _Symbol = __webpack_require__(19)["default"];

		var _Symbol$iterator = __webpack_require__(30)["default"];

		var _Object$create = __webpack_require__(7)["default"];

		var _Promise = __webpack_require__(39)["default"];

		!(function (global) {
		  "use strict";

		  var hasOwn = Object.prototype.hasOwnProperty;
		  var undefined; // More compressible than void 0.
		  var iteratorSymbol = typeof _Symbol === "function" && _Symbol$iterator || "@@iterator";

		  var inModule = typeof module === "object";
		  var runtime = global.regeneratorRuntime;
		  if (runtime) {
		    if (inModule) {
		      // If regeneratorRuntime is defined globally and we're in a module,
		      // make the exports object identical to regeneratorRuntime.
		      module.exports = runtime;
		    }
		    // Don't bother evaluating the rest of this file if the runtime was
		    // already defined globally.
		    return;
		  }

		  // Define the runtime globally (as expected by generated code) as either
		  // module.exports (if we're in a module) or a new, empty object.
		  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

		  function wrap(innerFn, outerFn, self, tryLocsList) {
		    // If outerFn provided, then outerFn.prototype instanceof Generator.
		    var generator = _Object$create((outerFn || Generator).prototype);

		    generator._invoke = makeInvokeMethod(innerFn, self || null, new Context(tryLocsList || []));

		    return generator;
		  }
		  runtime.wrap = wrap;

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

		  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
		  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
		  GeneratorFunctionPrototype.constructor = GeneratorFunction;
		  GeneratorFunction.displayName = "GeneratorFunction";

		  runtime.isGeneratorFunction = function (genFun) {
		    var ctor = typeof genFun === "function" && genFun.constructor;
		    return ctor ? ctor === GeneratorFunction ||
		    // For the native GeneratorFunction constructor, the best we can
		    // do is to check its .name property.
		    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
		  };

		  runtime.mark = function (genFun) {
		    genFun.__proto__ = GeneratorFunctionPrototype;
		    genFun.prototype = _Object$create(Gp);
		    return genFun;
		  };

		  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
		    return new _Promise(function (resolve, reject) {
		      var generator = wrap(innerFn, outerFn, self, tryLocsList);
		      var callNext = step.bind(generator, "next");
		      var callThrow = step.bind(generator, "throw");

		      function step(method, arg) {
		        var record = tryCatch(generator[method], generator, arg);
		        if (record.type === "throw") {
		          reject(record.arg);
		          return;
		        }

		        var info = record.arg;
		        if (info.done) {
		          resolve(info.value);
		        } else {
		          _Promise.resolve(info.value).then(callNext, callThrow);
		        }
		      }

		      callNext();
		    });
		  };

		  function makeInvokeMethod(innerFn, self, context) {
		    var state = GenStateSuspendedStart;

		    return function invoke(method, arg) {
		      if (state === GenStateExecuting) {
		        throw new Error("Generator is already running");
		      }

		      if (state === GenStateCompleted) {
		        // Be forgiving, per 25.3.3.3.3 of the spec:
		        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
		        return doneResult();
		      }

		      while (true) {
		        var delegate = context.delegate;
		        if (delegate) {
		          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
		            // A return or throw (when the delegate iterator has no throw
		            // method) always terminates the yield* loop.
		            context.delegate = null;

		            // If the delegate iterator has a return method, give it a
		            // chance to clean up.
		            var returnMethod = delegate.iterator["return"];
		            if (returnMethod) {
		              var record = tryCatch(returnMethod, delegate.iterator, arg);
		              if (record.type === "throw") {
		                // If the return method threw an exception, let that
		                // exception prevail over the original return or throw.
		                method = "throw";
		                arg = record.arg;
		                continue;
		              }
		            }

		            if (method === "return") {
		              // Continue with the outer return, now that the delegate
		              // iterator has been terminated.
		              continue;
		            }
		          }

		          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

		          if (record.type === "throw") {
		            context.delegate = null;

		            // Like returning generator.throw(uncaught), but without the
		            // overhead of an extra function call.
		            method = "throw";
		            arg = record.arg;
		            continue;
		          }

		          // Delegate generator ran and handled its own exceptions so
		          // regardless of what the method was, we continue as if it is
		          // "next" with an undefined arg.
		          method = "next";
		          arg = undefined;

		          var info = record.arg;
		          if (info.done) {
		            context[delegate.resultName] = info.value;
		            context.next = delegate.nextLoc;
		          } else {
		            state = GenStateSuspendedYield;
		            return info;
		          }

		          context.delegate = null;
		        }

		        if (method === "next") {
		          if (state === GenStateSuspendedYield) {
		            context.sent = arg;
		          } else {
		            delete context.sent;
		          }
		        } else if (method === "throw") {
		          if (state === GenStateSuspendedStart) {
		            state = GenStateCompleted;
		            throw arg;
		          }

		          if (context.dispatchException(arg)) {
		            // If the dispatched exception was caught by a catch block,
		            // then let that catch block handle the exception normally.
		            method = "next";
		            arg = undefined;
		          }
		        } else if (method === "return") {
		          context.abrupt("return", arg);
		        }

		        state = GenStateExecuting;

		        var record = tryCatch(innerFn, self, context);
		        if (record.type === "normal") {
		          // If an exception is thrown from innerFn, we leave state ===
		          // GenStateExecuting and loop back for another invocation.
		          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

		          var info = {
		            value: record.arg,
		            done: context.done
		          };

		          if (record.arg === ContinueSentinel) {
		            if (context.delegate && method === "next") {
		              // Deliberately forget the last sent value so that we don't
		              // accidentally pass it on to the delegate.
		              arg = undefined;
		            }
		          } else {
		            return info;
		          }
		        } else if (record.type === "throw") {
		          state = GenStateCompleted;
		          // Dispatch the exception by looping back around to the
		          // context.dispatchException(arg) call above.
		          method = "throw";
		          arg = record.arg;
		        }
		      }
		    };
		  }

		  function defineGeneratorMethod(method) {
		    Gp[method] = function (arg) {
		      return this._invoke(method, arg);
		    };
		  }
		  defineGeneratorMethod("next");
		  defineGeneratorMethod("throw");
		  defineGeneratorMethod("return");

		  Gp[iteratorSymbol] = function () {
		    return this;
		  };

		  Gp.toString = function () {
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
		    this.reset();
		  }

		  runtime.keys = function (object) {
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
		        var i = -1,
		            next = function next() {
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
		  runtime.values = values;

		  function doneResult() {
		    return { value: undefined, done: true };
		  }

		  Context.prototype = {
		    constructor: Context,

		    reset: function reset() {
		      this.prev = 0;
		      this.next = 0;
		      this.sent = undefined;
		      this.done = false;
		      this.delegate = null;

		      this.tryEntries.forEach(resetTryEntry);

		      // Pre-initialize at least 20 temporary variables to enable hidden
		      // class optimizations for simple generators.
		      for (var tempIndex = 0, tempName; hasOwn.call(this, tempName = "t" + tempIndex) || tempIndex < 20; ++tempIndex) {
		        this[tempName] = null;
		      }
		    },

		    stop: function stop() {
		      this.done = true;

		      var rootEntry = this.tryEntries[0];
		      var rootRecord = rootEntry.completion;
		      if (rootRecord.type === "throw") {
		        throw rootRecord.arg;
		      }

		      return this.rval;
		    },

		    dispatchException: function dispatchException(exception) {
		      if (this.done) {
		        throw exception;
		      }

		      var context = this;
		      function handle(loc, caught) {
		        record.type = "throw";
		        record.arg = exception;
		        context.next = loc;
		        return !!caught;
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

		    abrupt: function abrupt(type, arg) {
		      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
		        var entry = this.tryEntries[i];
		        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
		          var finallyEntry = entry;
		          break;
		        }
		      }

		      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
		        // Ignore the finally entry if control is not jumping to a
		        // location outside the try/catch block.
		        finallyEntry = null;
		      }

		      var record = finallyEntry ? finallyEntry.completion : {};
		      record.type = type;
		      record.arg = arg;

		      if (finallyEntry) {
		        this.next = finallyEntry.finallyLoc;
		      } else {
		        this.complete(record);
		      }

		      return ContinueSentinel;
		    },

		    complete: function complete(record, afterLoc) {
		      if (record.type === "throw") {
		        throw record.arg;
		      }

		      if (record.type === "break" || record.type === "continue") {
		        this.next = record.arg;
		      } else if (record.type === "return") {
		        this.rval = record.arg;
		        this.next = "end";
		      } else if (record.type === "normal" && afterLoc) {
		        this.next = afterLoc;
		      }
		    },

		    finish: function finish(finallyLoc) {
		      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
		        var entry = this.tryEntries[i];
		        if (entry.finallyLoc === finallyLoc) {
		          this.complete(entry.completion, entry.afterLoc);
		          resetTryEntry(entry);
		          return ContinueSentinel;
		        }
		      }
		    },

		    "catch": function _catch(tryLoc) {
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

		    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
		      this.delegate = {
		        iterator: values(iterable),
		        resultName: resultName,
		        nextLoc: nextLoc
		      };

		      return ContinueSentinel;
		    }
		  };
		})(
		// Among the various tricks for obtaining a reference to the global
		// object, this seems to be the most reliable technique that does not
		// use indirect eval (which violates Content Security Policy).
		typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : undefined);
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(20), __esModule: true };

	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(21);
		module.exports = __webpack_require__(3).core.Symbol;

	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		// ECMAScript 6 symbols shim
		var $        = __webpack_require__(3)
		  , setTag   = __webpack_require__(23).set
		  , uid      = __webpack_require__(26)
		  , shared   = __webpack_require__(25)
		  , $def     = __webpack_require__(13)
		  , $redef   = __webpack_require__(22)
		  , keyOf    = __webpack_require__(27)
		  , enumKeys = __webpack_require__(28)
		  , assertObject = __webpack_require__(29).obj
		  , ObjectProto = Object.prototype
		  , DESC     = $.DESC
		  , has      = $.has
		  , $create  = $.create
		  , getDesc  = $.getDesc
		  , setDesc  = $.setDesc
		  , desc     = $.desc
		  , getNames = $.getNames
		  , toObject = $.toObject
		  , $Symbol  = $.g.Symbol
		  , setter   = false
		  , TAG      = uid('tag')
		  , HIDDEN   = uid('hidden')
		  , _propertyIsEnumerable = {}.propertyIsEnumerable
		  , SymbolRegistry = shared('symbol-registry')
		  , AllSymbols = shared('symbols')
		  , useNative = $.isFunction($Symbol);

		var setSymbolDesc = DESC ? function(){ // fallback for old Android
		  try {
		    return $create(setDesc({}, HIDDEN, {
		      get: function(){
		        return setDesc(this, HIDDEN, {value: false})[HIDDEN];
		      }
		    }))[HIDDEN] || setDesc;
		  } catch(e){
		    return function(it, key, D){
		      var protoDesc = getDesc(ObjectProto, key);
		      if(protoDesc)delete ObjectProto[key];
		      setDesc(it, key, D);
		      if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
		    };
		  }
		}() : setDesc;

		function wrap(tag){
		  var sym = AllSymbols[tag] = $.set($create($Symbol.prototype), TAG, tag);
		  DESC && setter && setSymbolDesc(ObjectProto, tag, {
		    configurable: true,
		    set: function(value){
		      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
		      setSymbolDesc(this, tag, desc(1, value));
		    }
		  });
		  return sym;
		}

		function defineProperty(it, key, D){
		  if(D && has(AllSymbols, key)){
		    if(!D.enumerable){
		      if(!has(it, HIDDEN))setDesc(it, HIDDEN, desc(1, {}));
		      it[HIDDEN][key] = true;
		    } else {
		      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
		      D = $create(D, {enumerable: desc(0, false)});
		    } return setSymbolDesc(it, key, D);
		  } return setDesc(it, key, D);
		}
		function defineProperties(it, P){
		  assertObject(it);
		  var keys = enumKeys(P = toObject(P))
		    , i    = 0
		    , l = keys.length
		    , key;
		  while(l > i)defineProperty(it, key = keys[i++], P[key]);
		  return it;
		}
		function create(it, P){
		  return P === undefined ? $create(it) : defineProperties($create(it), P);
		}
		function propertyIsEnumerable(key){
		  var E = _propertyIsEnumerable.call(this, key);
		  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
		    ? E : true;
		}
		function getOwnPropertyDescriptor(it, key){
		  var D = getDesc(it = toObject(it), key);
		  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
		  return D;
		}
		function getOwnPropertyNames(it){
		  var names  = getNames(toObject(it))
		    , result = []
		    , i      = 0
		    , key;
		  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
		  return result;
		}
		function getOwnPropertySymbols(it){
		  var names  = getNames(toObject(it))
		    , result = []
		    , i      = 0
		    , key;
		  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
		  return result;
		}

		// 19.4.1.1 Symbol([description])
		if(!useNative){
		  $Symbol = function Symbol(){
		    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor');
		    return wrap(uid(arguments[0]));
		  };
		  $redef($Symbol.prototype, 'toString', function(){
		    return this[TAG];
		  });

		  $.create     = create;
		  $.setDesc    = defineProperty;
		  $.getDesc    = getOwnPropertyDescriptor;
		  $.setDescs   = defineProperties;
		  $.getNames   = getOwnPropertyNames;
		  $.getSymbols = getOwnPropertySymbols;

		  if($.DESC && $.FW)$redef(Object.prototype, 'propertyIsEnumerable', propertyIsEnumerable, true);
		}

		var symbolStatics = {
		  // 19.4.2.1 Symbol.for(key)
		  'for': function(key){
		    return has(SymbolRegistry, key += '')
		      ? SymbolRegistry[key]
		      : SymbolRegistry[key] = $Symbol(key);
		  },
		  // 19.4.2.5 Symbol.keyFor(sym)
		  keyFor: function keyFor(key){
		    return keyOf(SymbolRegistry, key);
		  },
		  useSetter: function(){ setter = true; },
		  useSimple: function(){ setter = false; }
		};
		// 19.4.2.2 Symbol.hasInstance
		// 19.4.2.3 Symbol.isConcatSpreadable
		// 19.4.2.4 Symbol.iterator
		// 19.4.2.6 Symbol.match
		// 19.4.2.8 Symbol.replace
		// 19.4.2.9 Symbol.search
		// 19.4.2.10 Symbol.species
		// 19.4.2.11 Symbol.split
		// 19.4.2.12 Symbol.toPrimitive
		// 19.4.2.13 Symbol.toStringTag
		// 19.4.2.14 Symbol.unscopables
		$.each.call((
		    'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
		    'species,split,toPrimitive,toStringTag,unscopables'
		  ).split(','), function(it){
		    var sym = __webpack_require__(24)(it);
		    symbolStatics[it] = useNative ? sym : wrap(sym);
		  }
		);

		setter = true;

		$def($def.G + $def.W, {Symbol: $Symbol});

		$def($def.S, 'Symbol', symbolStatics);

		$def($def.S + $def.F * !useNative, 'Object', {
		  // 19.1.2.2 Object.create(O [, Properties])
		  create: create,
		  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
		  defineProperty: defineProperty,
		  // 19.1.2.3 Object.defineProperties(O, Properties)
		  defineProperties: defineProperties,
		  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
		  getOwnPropertyDescriptor: getOwnPropertyDescriptor,
		  // 19.1.2.7 Object.getOwnPropertyNames(O)
		  getOwnPropertyNames: getOwnPropertyNames,
		  // 19.1.2.8 Object.getOwnPropertySymbols(O)
		  getOwnPropertySymbols: getOwnPropertySymbols
		});

		// 19.4.3.5 Symbol.prototype[@@toStringTag]
		setTag($Symbol, 'Symbol');
		// 20.2.1.9 Math[@@toStringTag]
		setTag(Math, 'Math', true);
		// 24.3.3 JSON[@@toStringTag]
		setTag($.g.JSON, 'JSON', true);

	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(3).hide;

	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {

		var $        = __webpack_require__(3)
		  , TAG      = __webpack_require__(24)('toStringTag')
		  , toString = {}.toString;
		function cof(it){
		  return toString.call(it).slice(8, -1);
		}
		cof.classof = function(it){
		  var O, T;
		  return it == undefined ? it === undefined ? 'Undefined' : 'Null'
		    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T : cof(O);
		};
		cof.set = function(it, tag, stat){
		  if(it && !$.has(it = stat ? it : it.prototype, TAG))$.hide(it, TAG, tag);
		};
		module.exports = cof;

	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {

		var global = __webpack_require__(3).g
		  , store  = __webpack_require__(25)('wks');
		module.exports = function(name){
		  return store[name] || (store[name] =
		    global.Symbol && global.Symbol[name] || __webpack_require__(26).safe('Symbol.' + name));
		};

	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {

		var $      = __webpack_require__(3)
		  , SHARED = '__core-js_shared__'
		  , store  = $.g[SHARED] || $.hide($.g, SHARED, {})[SHARED];
		module.exports = function(key){
		  return store[key] || (store[key] = {});
		};

	/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {

		var sid = 0;
		function uid(key){
		  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++sid + Math.random()).toString(36));
		}
		uid.safe = __webpack_require__(3).g.Symbol || uid;
		module.exports = uid;

	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {

		var $ = __webpack_require__(3);
		module.exports = function(object, el){
		  var O      = $.toObject(object)
		    , keys   = $.getKeys(O)
		    , length = keys.length
		    , index  = 0
		    , key;
		  while(length > index)if(O[key = keys[index++]] === el)return key;
		};

	/***/ },
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {

		var $ = __webpack_require__(3);
		module.exports = function(it){
		  var keys       = $.getKeys(it)
		    , getDesc    = $.getDesc
		    , getSymbols = $.getSymbols;
		  if(getSymbols)$.each.call(getSymbols(it), function(key){
		    if(getDesc(it, key).enumerable)keys.push(key);
		  });
		  return keys;
		};

	/***/ },
	/* 29 */
	/***/ function(module, exports, __webpack_require__) {

		var $ = __webpack_require__(3);
		function assert(condition, msg1, msg2){
		  if(!condition)throw TypeError(msg2 ? msg1 + msg2 : msg1);
		}
		assert.def = $.assertDefined;
		assert.fn = function(it){
		  if(!$.isFunction(it))throw TypeError(it + ' is not a function!');
		  return it;
		};
		assert.obj = function(it){
		  if(!$.isObject(it))throw TypeError(it + ' is not an object!');
		  return it;
		};
		assert.inst = function(it, Constructor, name){
		  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
		  return it;
		};
		module.exports = assert;

	/***/ },
	/* 30 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(31), __esModule: true };

	/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(32);
		__webpack_require__(36);
		module.exports = __webpack_require__(24)('iterator');

	/***/ },
	/* 32 */
	/***/ function(module, exports, __webpack_require__) {

		var set   = __webpack_require__(3).set
		  , $at   = __webpack_require__(33)(true)
		  , ITER  = __webpack_require__(26).safe('iter')
		  , $iter = __webpack_require__(34)
		  , step  = $iter.step;

		// 21.1.3.27 String.prototype[@@iterator]()
		__webpack_require__(35)(String, 'String', function(iterated){
		  set(this, ITER, {o: String(iterated), i: 0});
		// 21.1.5.2.1 %StringIteratorPrototype%.next()
		}, function(){
		  var iter  = this[ITER]
		    , O     = iter.o
		    , index = iter.i
		    , point;
		  if(index >= O.length)return step(1);
		  point = $at(O, index);
		  iter.i += point.length;
		  return step(0, point);
		});

	/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {

		// true  -> String#at
		// false -> String#codePointAt
		var $ = __webpack_require__(3);
		module.exports = function(TO_STRING){
		  return function(that, pos){
		    var s = String($.assertDefined(that))
		      , i = $.toInteger(pos)
		      , l = s.length
		      , a, b;
		    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
		    a = s.charCodeAt(i);
		    return a < 0xd800 || a > 0xdbff || i + 1 === l
		      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
		        ? TO_STRING ? s.charAt(i) : a
		        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
		  };
		};

	/***/ },
	/* 34 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		var $                 = __webpack_require__(3)
		  , cof               = __webpack_require__(23)
		  , assertObject      = __webpack_require__(29).obj
		  , SYMBOL_ITERATOR   = __webpack_require__(24)('iterator')
		  , FF_ITERATOR       = '@@iterator'
		  , Iterators         = __webpack_require__(25)('iterators')
		  , IteratorPrototype = {};
		// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
		setIterator(IteratorPrototype, $.that);
		function setIterator(O, value){
		  $.hide(O, SYMBOL_ITERATOR, value);
		  // Add iterator for FF iterator protocol
		  if(FF_ITERATOR in [])$.hide(O, FF_ITERATOR, value);
		}

		module.exports = {
		  // Safari has buggy iterators w/o `next`
		  BUGGY: 'keys' in [] && !('next' in [].keys()),
		  Iterators: Iterators,
		  step: function(done, value){
		    return {value: value, done: !!done};
		  },
		  is: function(it){
		    var O      = Object(it)
		      , Symbol = $.g.Symbol
		      , SYM    = Symbol && Symbol.iterator || FF_ITERATOR;
		    return SYM in O || SYMBOL_ITERATOR in O || $.has(Iterators, cof.classof(O));
		  },
		  get: function(it){
		    var Symbol  = $.g.Symbol
		      , ext     = it[Symbol && Symbol.iterator || FF_ITERATOR]
		      , getIter = ext || it[SYMBOL_ITERATOR] || Iterators[cof.classof(it)];
		    return assertObject(getIter.call(it));
		  },
		  set: setIterator,
		  create: function(Constructor, NAME, next, proto){
		    Constructor.prototype = $.create(proto || IteratorPrototype, {next: $.desc(1, next)});
		    cof.set(Constructor, NAME + ' Iterator');
		  }
		};

	/***/ },
	/* 35 */
	/***/ function(module, exports, __webpack_require__) {

		var $def            = __webpack_require__(13)
		  , $redef          = __webpack_require__(22)
		  , $               = __webpack_require__(3)
		  , cof             = __webpack_require__(23)
		  , $iter           = __webpack_require__(34)
		  , SYMBOL_ITERATOR = __webpack_require__(24)('iterator')
		  , FF_ITERATOR     = '@@iterator'
		  , KEYS            = 'keys'
		  , VALUES          = 'values'
		  , Iterators       = $iter.Iterators;
		module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
		  $iter.create(Constructor, NAME, next);
		  function createMethod(kind){
		    function $$(that){
		      return new Constructor(that, kind);
		    }
		    switch(kind){
		      case KEYS: return function keys(){ return $$(this); };
		      case VALUES: return function values(){ return $$(this); };
		    } return function entries(){ return $$(this); };
		  }
		  var TAG      = NAME + ' Iterator'
		    , proto    = Base.prototype
		    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
		    , _default = _native || createMethod(DEFAULT)
		    , methods, key;
		  // Fix native
		  if(_native){
		    var IteratorPrototype = $.getProto(_default.call(new Base));
		    // Set @@toStringTag to native iterators
		    cof.set(IteratorPrototype, TAG, true);
		    // FF fix
		    if($.FW && $.has(proto, FF_ITERATOR))$iter.set(IteratorPrototype, $.that);
		  }
		  // Define iterator
		  if($.FW)$iter.set(proto, _default);
		  // Plug for library
		  Iterators[NAME] = _default;
		  Iterators[TAG]  = $.that;
		  if(DEFAULT){
		    methods = {
		      keys:    IS_SET            ? _default : createMethod(KEYS),
		      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
		      entries: DEFAULT != VALUES ? _default : createMethod('entries')
		    };
		    if(FORCE)for(key in methods){
		      if(!(key in proto))$redef(proto, key, methods[key]);
		    } else $def($def.P + $def.F * $iter.BUGGY, NAME, methods);
		  }
		};

	/***/ },
	/* 36 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(37);
		var $           = __webpack_require__(3)
		  , Iterators   = __webpack_require__(34).Iterators
		  , ITERATOR    = __webpack_require__(24)('iterator')
		  , ArrayValues = Iterators.Array
		  , NL          = $.g.NodeList
		  , HTC         = $.g.HTMLCollection
		  , NLProto     = NL && NL.prototype
		  , HTCProto    = HTC && HTC.prototype;
		if($.FW){
		  if(NL && !(ITERATOR in NLProto))$.hide(NLProto, ITERATOR, ArrayValues);
		  if(HTC && !(ITERATOR in HTCProto))$.hide(HTCProto, ITERATOR, ArrayValues);
		}
		Iterators.NodeList = Iterators.HTMLCollection = ArrayValues;

	/***/ },
	/* 37 */
	/***/ function(module, exports, __webpack_require__) {

		var $          = __webpack_require__(3)
		  , setUnscope = __webpack_require__(38)
		  , ITER       = __webpack_require__(26).safe('iter')
		  , $iter      = __webpack_require__(34)
		  , step       = $iter.step
		  , Iterators  = $iter.Iterators;

		// 22.1.3.4 Array.prototype.entries()
		// 22.1.3.13 Array.prototype.keys()
		// 22.1.3.29 Array.prototype.values()
		// 22.1.3.30 Array.prototype[@@iterator]()
		__webpack_require__(35)(Array, 'Array', function(iterated, kind){
		  $.set(this, ITER, {o: $.toObject(iterated), i: 0, k: kind});
		// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
		}, function(){
		  var iter  = this[ITER]
		    , O     = iter.o
		    , kind  = iter.k
		    , index = iter.i++;
		  if(!O || index >= O.length){
		    iter.o = undefined;
		    return step(1);
		  }
		  if(kind == 'keys'  )return step(0, index);
		  if(kind == 'values')return step(0, O[index]);
		  return step(0, [index, O[index]]);
		}, 'values');

		// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
		Iterators.Arguments = Iterators.Array;

		setUnscope('keys');
		setUnscope('values');
		setUnscope('entries');

	/***/ },
	/* 38 */
	/***/ function(module, exports, __webpack_require__) {

		// 22.1.3.31 Array.prototype[@@unscopables]
		var $           = __webpack_require__(3)
		  , UNSCOPABLES = __webpack_require__(24)('unscopables');
		if($.FW && !(UNSCOPABLES in []))$.hide(Array.prototype, UNSCOPABLES, {});
		module.exports = function(key){
		  if($.FW)[][UNSCOPABLES][key] = true;
		};

	/***/ },
	/* 39 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(40), __esModule: true };

	/***/ },
	/* 40 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(41);
		__webpack_require__(32);
		__webpack_require__(36);
		__webpack_require__(42);
		module.exports = __webpack_require__(3).core.Promise;

	/***/ },
	/* 41 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		// 19.1.3.6 Object.prototype.toString()
		var cof = __webpack_require__(23)
		  , tmp = {};
		tmp[__webpack_require__(24)('toStringTag')] = 'z';
		if(__webpack_require__(3).FW && cof(tmp) != 'z'){
		  __webpack_require__(22)(Object.prototype, 'toString', function toString(){
		    return '[object ' + cof.classof(this) + ']';
		  }, true);
		}

	/***/ },
	/* 42 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		var $        = __webpack_require__(3)
		  , ctx      = __webpack_require__(43)
		  , cof      = __webpack_require__(23)
		  , $def     = __webpack_require__(13)
		  , assert   = __webpack_require__(29)
		  , forOf    = __webpack_require__(44)
		  , setProto = __webpack_require__(46).set
		  , species  = __webpack_require__(47)
		  , SPECIES  = __webpack_require__(24)('species')
		  , RECORD   = __webpack_require__(26).safe('record')
		  , PROMISE  = 'Promise'
		  , global   = $.g
		  , process  = global.process
		  , asap     = process && process.nextTick || __webpack_require__(48).set
		  , P        = global[PROMISE]
		  , isFunction     = $.isFunction
		  , isObject       = $.isObject
		  , assertFunction = assert.fn
		  , assertObject   = assert.obj;

		var useNative = function(){
		  var test, works = false;
		  function P2(x){
		    var self = new P(x);
		    setProto(self, P2.prototype);
		    return self;
		  }
		  try {
		    works = isFunction(P) && isFunction(P.resolve) && P.resolve(test = new P(function(){})) == test;
		    setProto(P2, P);
		    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
		    // actual Firefox has broken subclass support, test that
		    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
		      works = false;
		    }
		  } catch(e){ works = false; }
		  return works;
		}();

		// helpers
		function getConstructor(C){
		  var S = assertObject(C)[SPECIES];
		  return S != undefined ? S : C;
		}
		function isThenable(it){
		  var then;
		  if(isObject(it))then = it.then;
		  return isFunction(then) ? then : false;
		}
		function notify(record){
		  var chain = record.c;
		  if(chain.length)asap(function(){
		    var value = record.v
		      , ok    = record.s == 1
		      , i     = 0;
		    function run(react){
		      var cb = ok ? react.ok : react.fail
		        , ret, then;
		      try {
		        if(cb){
		          if(!ok)record.h = true;
		          ret = cb === true ? value : cb(value);
		          if(ret === react.P){
		            react.rej(TypeError('Promise-chain cycle'));
		          } else if(then = isThenable(ret)){
		            then.call(ret, react.res, react.rej);
		          } else react.res(ret);
		        } else react.rej(value);
		      } catch(err){
		        react.rej(err);
		      }
		    }
		    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
		    chain.length = 0;
		  });
		}
		function isUnhandled(promise){
		  var record = promise[RECORD]
		    , chain  = record.a || record.c
		    , i      = 0
		    , react;
		  if(record.h)return false;
		  while(chain.length > i){
		    react = chain[i++];
		    if(react.fail || !isUnhandled(react.P))return false;
		  } return true;
		}
		function $reject(value){
		  var record = this
		    , promise;
		  if(record.d)return;
		  record.d = true;
		  record = record.r || record; // unwrap
		  record.v = value;
		  record.s = 2;
		  record.a = record.c.slice();
		  setTimeout(function(){
		    asap(function(){
		      if(isUnhandled(promise = record.p)){
		        if(cof(process) == 'process'){
		          process.emit('unhandledRejection', value, promise);
		        } else if(global.console && isFunction(console.error)){
		          console.error('Unhandled promise rejection', value);
		        }
		      }
		      record.a = undefined;
		    });
		  }, 1);
		  notify(record);
		}
		function $resolve(value){
		  var record = this
		    , then, wrapper;
		  if(record.d)return;
		  record.d = true;
		  record = record.r || record; // unwrap
		  try {
		    if(then = isThenable(value)){
		      wrapper = {r: record, d: false}; // wrap
		      then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
		    } else {
		      record.v = value;
		      record.s = 1;
		      notify(record);
		    }
		  } catch(err){
		    $reject.call(wrapper || {r: record, d: false}, err); // wrap
		  }
		}

		// constructor polyfill
		if(!useNative){
		  // 25.4.3.1 Promise(executor)
		  P = function Promise(executor){
		    assertFunction(executor);
		    var record = {
		      p: assert.inst(this, P, PROMISE),       // <- promise
		      c: [],                                  // <- awaiting reactions
		      a: undefined,                           // <- checked in isUnhandled reactions
		      s: 0,                                   // <- state
		      d: false,                               // <- done
		      v: undefined,                           // <- value
		      h: false                                // <- handled rejection
		    };
		    $.hide(this, RECORD, record);
		    try {
		      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
		    } catch(err){
		      $reject.call(record, err);
		    }
		  };
		  __webpack_require__(51)(P.prototype, {
		    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
		    then: function then(onFulfilled, onRejected){
		      var S = assertObject(assertObject(this).constructor)[SPECIES];
		      var react = {
		        ok:   isFunction(onFulfilled) ? onFulfilled : true,
		        fail: isFunction(onRejected)  ? onRejected  : false
		      };
		      var promise = react.P = new (S != undefined ? S : P)(function(res, rej){
		        react.res = assertFunction(res);
		        react.rej = assertFunction(rej);
		      });
		      var record = this[RECORD];
		      record.c.push(react);
		      if(record.a)record.a.push(react);
		      record.s && notify(record);
		      return promise;
		    },
		    // 25.4.5.1 Promise.prototype.catch(onRejected)
		    'catch': function(onRejected){
		      return this.then(undefined, onRejected);
		    }
		  });
		}

		// export
		$def($def.G + $def.W + $def.F * !useNative, {Promise: P});
		cof.set(P, PROMISE);
		species(P);
		species($.core[PROMISE]); // for wrapper

		// statics
		$def($def.S + $def.F * !useNative, PROMISE, {
		  // 25.4.4.5 Promise.reject(r)
		  reject: function reject(r){
		    return new (getConstructor(this))(function(res, rej){
		      rej(r);
		    });
		  },
		  // 25.4.4.6 Promise.resolve(x)
		  resolve: function resolve(x){
		    return isObject(x) && RECORD in x && $.getProto(x) === this.prototype
		      ? x : new (getConstructor(this))(function(res){
		        res(x);
		      });
		  }
		});
		$def($def.S + $def.F * !(useNative && __webpack_require__(52)(function(iter){
		  P.all(iter)['catch'](function(){});
		})), PROMISE, {
		  // 25.4.4.1 Promise.all(iterable)
		  all: function all(iterable){
		    var C      = getConstructor(this)
		      , values = [];
		    return new C(function(res, rej){
		      forOf(iterable, false, values.push, values);
		      var remaining = values.length
		        , results   = Array(remaining);
		      if(remaining)$.each.call(values, function(promise, index){
		        C.resolve(promise).then(function(value){
		          results[index] = value;
		          --remaining || res(results);
		        }, rej);
		      });
		      else res(results);
		    });
		  },
		  // 25.4.4.4 Promise.race(iterable)
		  race: function race(iterable){
		    var C = getConstructor(this);
		    return new C(function(res, rej){
		      forOf(iterable, false, function(promise){
		        C.resolve(promise).then(res, rej);
		      });
		    });
		  }
		});

	/***/ },
	/* 43 */
	/***/ function(module, exports, __webpack_require__) {

		// Optional / simple context binding
		var assertFunction = __webpack_require__(29).fn;
		module.exports = function(fn, that, length){
		  assertFunction(fn);
		  if(~length && that === undefined)return fn;
		  switch(length){
		    case 1: return function(a){
		      return fn.call(that, a);
		    };
		    case 2: return function(a, b){
		      return fn.call(that, a, b);
		    };
		    case 3: return function(a, b, c){
		      return fn.call(that, a, b, c);
		    };
		  } return function(/* ...args */){
		      return fn.apply(that, arguments);
		    };
		};

	/***/ },
	/* 44 */
	/***/ function(module, exports, __webpack_require__) {

		var ctx  = __webpack_require__(43)
		  , get  = __webpack_require__(34).get
		  , call = __webpack_require__(45);
		module.exports = function(iterable, entries, fn, that){
		  var iterator = get(iterable)
		    , f        = ctx(fn, that, entries ? 2 : 1)
		    , step;
		  while(!(step = iterator.next()).done){
		    if(call(iterator, f, step.value, entries) === false){
		      return call.close(iterator);
		    }
		  }
		};

	/***/ },
	/* 45 */
	/***/ function(module, exports, __webpack_require__) {

		var assertObject = __webpack_require__(29).obj;
		function close(iterator){
		  var ret = iterator['return'];
		  if(ret !== undefined)assertObject(ret.call(iterator));
		}
		function call(iterator, fn, value, entries){
		  try {
		    return entries ? fn(assertObject(value)[0], value[1]) : fn(value);
		  } catch(e){
		    close(iterator);
		    throw e;
		  }
		}
		call.close = close;
		module.exports = call;

	/***/ },
	/* 46 */
	/***/ function(module, exports, __webpack_require__) {

		// Works with __proto__ only. Old v8 can't work with null proto objects.
		/* eslint-disable no-proto */
		var $      = __webpack_require__(3)
		  , assert = __webpack_require__(29);
		function check(O, proto){
		  assert.obj(O);
		  assert(proto === null || $.isObject(proto), proto, ": can't set as prototype!");
		}
		module.exports = {
		  set: Object.setPrototypeOf || ('__proto__' in {} // eslint-disable-line
		    ? function(buggy, set){
		        try {
		          set = __webpack_require__(43)(Function.call, $.getDesc(Object.prototype, '__proto__').set, 2);
		          set({}, []);
		        } catch(e){ buggy = true; }
		        return function setPrototypeOf(O, proto){
		          check(O, proto);
		          if(buggy)O.__proto__ = proto;
		          else set(O, proto);
		          return O;
		        };
		      }()
		    : undefined),
		  check: check
		};

	/***/ },
	/* 47 */
	/***/ function(module, exports, __webpack_require__) {

		var $       = __webpack_require__(3)
		  , SPECIES = __webpack_require__(24)('species');
		module.exports = function(C){
		  if($.DESC && !(SPECIES in C))$.setDesc(C, SPECIES, {
		    configurable: true,
		    get: $.that
		  });
		};

	/***/ },
	/* 48 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		var $      = __webpack_require__(3)
		  , ctx    = __webpack_require__(43)
		  , cof    = __webpack_require__(23)
		  , invoke = __webpack_require__(49)
		  , cel    = __webpack_require__(50)
		  , global             = $.g
		  , isFunction         = $.isFunction
		  , html               = $.html
		  , process            = global.process
		  , setTask            = global.setImmediate
		  , clearTask          = global.clearImmediate
		  , postMessage        = global.postMessage
		  , addEventListener   = global.addEventListener
		  , MessageChannel     = global.MessageChannel
		  , counter            = 0
		  , queue              = {}
		  , ONREADYSTATECHANGE = 'onreadystatechange'
		  , defer, channel, port;
		function run(){
		  var id = +this;
		  if($.has(queue, id)){
		    var fn = queue[id];
		    delete queue[id];
		    fn();
		  }
		}
		function listner(event){
		  run.call(event.data);
		}
		// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
		if(!isFunction(setTask) || !isFunction(clearTask)){
		  setTask = function(fn){
		    var args = [], i = 1;
		    while(arguments.length > i)args.push(arguments[i++]);
		    queue[++counter] = function(){
		      invoke(isFunction(fn) ? fn : Function(fn), args);
		    };
		    defer(counter);
		    return counter;
		  };
		  clearTask = function(id){
		    delete queue[id];
		  };
		  // Node.js 0.8-
		  if(cof(process) == 'process'){
		    defer = function(id){
		      process.nextTick(ctx(run, id, 1));
		    };
		  // Modern browsers, skip implementation for WebWorkers
		  // IE8 has postMessage, but it's sync & typeof its postMessage is object
		  } else if(addEventListener && isFunction(postMessage) && !global.importScripts){
		    defer = function(id){
		      postMessage(id, '*');
		    };
		    addEventListener('message', listner, false);
		  // WebWorkers
		  } else if(isFunction(MessageChannel)){
		    channel = new MessageChannel;
		    port    = channel.port2;
		    channel.port1.onmessage = listner;
		    defer = ctx(port.postMessage, port, 1);
		  // IE8-
		  } else if(ONREADYSTATECHANGE in cel('script')){
		    defer = function(id){
		      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
		        html.removeChild(this);
		        run.call(id);
		      };
		    };
		  // Rest old browsers
		  } else {
		    defer = function(id){
		      setTimeout(ctx(run, id, 1), 0);
		    };
		  }
		}
		module.exports = {
		  set:   setTask,
		  clear: clearTask
		};

	/***/ },
	/* 49 */
	/***/ function(module, exports, __webpack_require__) {

		// Fast apply
		// http://jsperf.lnkit.com/fast-apply/5
		module.exports = function(fn, args, that){
		  var un = that === undefined;
		  switch(args.length){
		    case 0: return un ? fn()
		                      : fn.call(that);
		    case 1: return un ? fn(args[0])
		                      : fn.call(that, args[0]);
		    case 2: return un ? fn(args[0], args[1])
		                      : fn.call(that, args[0], args[1]);
		    case 3: return un ? fn(args[0], args[1], args[2])
		                      : fn.call(that, args[0], args[1], args[2]);
		    case 4: return un ? fn(args[0], args[1], args[2], args[3])
		                      : fn.call(that, args[0], args[1], args[2], args[3]);
		    case 5: return un ? fn(args[0], args[1], args[2], args[3], args[4])
		                      : fn.call(that, args[0], args[1], args[2], args[3], args[4]);
		  } return              fn.apply(that, args);
		};

	/***/ },
	/* 50 */
	/***/ function(module, exports, __webpack_require__) {

		var $        = __webpack_require__(3)
		  , document = $.g.document
		  , isObject = $.isObject
		  // in old IE typeof document.createElement is 'object'
		  , is = isObject(document) && isObject(document.createElement);
		module.exports = function(it){
		  return is ? document.createElement(it) : {};
		};

	/***/ },
	/* 51 */
	/***/ function(module, exports, __webpack_require__) {

		var $redef = __webpack_require__(22);
		module.exports = function(target, src){
		  for(var key in src)$redef(target, key, src[key]);
		  return target;
		};

	/***/ },
	/* 52 */
	/***/ function(module, exports, __webpack_require__) {

		var SYMBOL_ITERATOR = __webpack_require__(24)('iterator')
		  , SAFE_CLOSING    = false;
		try {
		  var riter = [7][SYMBOL_ITERATOR]();
		  riter['return'] = function(){ SAFE_CLOSING = true; };
		  Array.from(riter, function(){ throw 2; });
		} catch(e){ /* empty */ }
		module.exports = function(exec){
		  if(!SAFE_CLOSING)return false;
		  var safe = false;
		  try {
		    var arr  = [7]
		      , iter = arr[SYMBOL_ITERATOR]();
		    iter.next = function(){ safe = true; };
		    arr[SYMBOL_ITERATOR] = function(){ return iter; };
		    exec(arr);
		  } catch(e){ /* empty */ }
		  return safe;
		};

	/***/ },
	/* 53 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";

		var _createClass = __webpack_require__(16)["default"];

		var _classCallCheck = __webpack_require__(14)["default"];

		var _Object$defineProperty = __webpack_require__(1)["default"];

		var _regeneratorRuntime = __webpack_require__(17)["default"];

		var _Object$assign = __webpack_require__(54)["default"];

		var _Object$create = __webpack_require__(7)["default"];

		var _getIterator = __webpack_require__(58)["default"];

		_Object$defineProperty(exports, "__esModule", {
		  value: true
		});

		var Pipeline = (function () {
		  function Pipeline() {
		    _classCallCheck(this, Pipeline);

		    this._processors = [];
		  }

		  _createClass(Pipeline, [{
		    key: "addProcessors",
		    value: function addProcessors() {
		      var _processors;

		      for (var _len = arguments.length, plugins = Array(_len), _key = 0; _key < _len; _key++) {
		        plugins[_key] = arguments[_key];
		      }

		      (_processors = this._processors).push.apply(_processors, plugins);
		    }
		  }, {
		    key: "process",
		    value: function process(files) {
		      var list, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, processor;

		      return _regeneratorRuntime.async(function process$(context$2$0) {
		        while (1) switch (context$2$0.prev = context$2$0.next) {
		          case 0:
		            list = _Object$assign(_Object$create(null), files);
		            _iteratorNormalCompletion = true;
		            _didIteratorError = false;
		            _iteratorError = undefined;
		            context$2$0.prev = 4;
		            _iterator = _getIterator(this._processors);

		          case 6:
		            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
		              context$2$0.next = 14;
		              break;
		            }

		            processor = _step.value;
		            context$2$0.next = 10;
		            return processor.process(list);

		          case 10:
		            list = context$2$0.sent;

		          case 11:
		            _iteratorNormalCompletion = true;
		            context$2$0.next = 6;
		            break;

		          case 14:
		            context$2$0.next = 20;
		            break;

		          case 16:
		            context$2$0.prev = 16;
		            context$2$0.t0 = context$2$0["catch"](4);
		            _didIteratorError = true;
		            _iteratorError = context$2$0.t0;

		          case 20:
		            context$2$0.prev = 20;
		            context$2$0.prev = 21;

		            if (!_iteratorNormalCompletion && _iterator["return"]) {
		              _iterator["return"]();
		            }

		          case 23:
		            context$2$0.prev = 23;

		            if (!_didIteratorError) {
		              context$2$0.next = 26;
		              break;
		            }

		            throw _iteratorError;

		          case 26:
		            return context$2$0.finish(23);

		          case 27:
		            return context$2$0.finish(20);

		          case 28:
		            return context$2$0.abrupt("return", list);

		          case 29:
		          case "end":
		            return context$2$0.stop();
		        }
		      }, null, this, [[4, 16, 20, 28], [21,, 23, 27]]);
		    }
		  }]);

		  return Pipeline;
		})();

		exports.Pipeline = Pipeline;

	/***/ },
	/* 54 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(55), __esModule: true };

	/***/ },
	/* 55 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(56);
		module.exports = __webpack_require__(3).core.Object.assign;

	/***/ },
	/* 56 */
	/***/ function(module, exports, __webpack_require__) {

		// 19.1.3.1 Object.assign(target, source)
		var $def = __webpack_require__(13);
		$def($def.S, 'Object', {assign: __webpack_require__(57)});

	/***/ },
	/* 57 */
	/***/ function(module, exports, __webpack_require__) {

		var $        = __webpack_require__(3)
		  , enumKeys = __webpack_require__(28);
		// 19.1.2.1 Object.assign(target, source, ...)
		/* eslint-disable no-unused-vars */
		module.exports = Object.assign || function assign(target, source){
		/* eslint-enable no-unused-vars */
		  var T = Object($.assertDefined(target))
		    , l = arguments.length
		    , i = 1;
		  while(l > i){
		    var S      = $.ES5Object(arguments[i++])
		      , keys   = enumKeys(S)
		      , length = keys.length
		      , j      = 0
		      , key;
		    while(length > j)T[key = keys[j++]] = S[key];
		  }
		  return T;
		};

	/***/ },
	/* 58 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(59), __esModule: true };

	/***/ },
	/* 59 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(36);
		__webpack_require__(32);
		__webpack_require__(60);
		module.exports = __webpack_require__(3).core.getIterator;

	/***/ },
	/* 60 */
	/***/ function(module, exports, __webpack_require__) {

		var core  = __webpack_require__(3).core
		  , $iter = __webpack_require__(34);
		core.isIterable  = $iter.is;
		core.getIterator = $iter.get;

	/***/ },
	/* 61 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var _createClass = __webpack_require__(16)['default'];

		var _classCallCheck = __webpack_require__(14)['default'];

		var _Object$defineProperty = __webpack_require__(1)['default'];

		var _regeneratorRuntime = __webpack_require__(17)['default'];

		_Object$defineProperty(exports, '__esModule', {
		  value: true
		});

		var _errors = __webpack_require__(5);

		var Plugin = (function () {
		  function Plugin() {
		    _classCallCheck(this, Plugin);

		    if (this.constructor === Plugin) {
		      throw new _errors.RustieAbstractClassError('cannot instantiate class Plugin. Plugin is an abstract class');
		    }
		  }

		  _createClass(Plugin, [{
		    key: 'process',

		    //noinspection JSMethodCanBeStatic
		    value: function process(files) {
		      return _regeneratorRuntime.async(function process$(context$2$0) {
		        while (1) switch (context$2$0.prev = context$2$0.next) {
		          case 0:
		            return context$2$0.abrupt('return', files);

		          case 1:
		          case 'end':
		            return context$2$0.stop();
		        }
		      }, null, this);
		    }
		  }]);

		  return Plugin;
		})();

		exports.Plugin = Plugin;

	/***/ },
	/* 62 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var _createClass = __webpack_require__(16)['default'];

		var _classCallCheck = __webpack_require__(14)['default'];

		var _Object$defineProperty = __webpack_require__(1)['default'];

		var _regeneratorRuntime = __webpack_require__(17)['default'];

		var _Object$create = __webpack_require__(7)['default'];

		_Object$defineProperty(exports, '__esModule', {
		  value: true
		});

		var _errors = __webpack_require__(5);

		var Reader = (function () {
		  function Reader() {
		    _classCallCheck(this, Reader);

		    if (this.constructor === Reader) {
		      throw new _errors.RustieAbstractClassError('cannot instantiate class Reader. Reader is an abstract class');
		    }
		  }

		  _createClass(Reader, [{
		    key: 'read',

		    //noinspection JSMethodCanBeStatic
		    value: function read() {
		      return _regeneratorRuntime.async(function read$(context$2$0) {
		        while (1) switch (context$2$0.prev = context$2$0.next) {
		          case 0:
		            return context$2$0.abrupt('return', _Object$create(null));

		          case 1:
		          case 'end':
		            return context$2$0.stop();
		        }
		      }, null, this);
		    }
		  }]);

		  return Reader;
		})();

		exports.Reader = Reader;
		/*from*/

	/***/ },
	/* 63 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var _createClass = __webpack_require__(16)['default'];

		var _classCallCheck = __webpack_require__(14)['default'];

		var _Object$defineProperty = __webpack_require__(1)['default'];

		var _regeneratorRuntime = __webpack_require__(17)['default'];

		_Object$defineProperty(exports, '__esModule', {
		  value: true
		});

		var _errors = __webpack_require__(5);

		var Writer = (function () {
		  function Writer() {
		    _classCallCheck(this, Writer);

		    if (this.constructor === Writer) {
		      throw new _errors.RustieAbstractClassError('cannot instantiate class Writer. Writer is an abstract class');
		    }
		  }

		  _createClass(Writer, [{
		    key: 'write',

		    //noinspection JSMethodCanBeStatic
		    value: function write() {
		      return _regeneratorRuntime.async(function write$(context$2$0) {
		        while (1) switch (context$2$0.prev = context$2$0.next) {
		          case 0:
		            return context$2$0.abrupt('return', true);

		          case 1:
		          case 'end':
		            return context$2$0.stop();
		        }
		      }, null, this);
		    }
		  }]);

		  return Writer;
		})();

		exports.Writer = Writer;
		/*to, files*/

	/***/ },
	/* 64 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";

		var _createClass = __webpack_require__(16)["default"];

		var _classCallCheck = __webpack_require__(14)["default"];

		var _Object$defineProperty = __webpack_require__(1)["default"];

		var _Object$create = __webpack_require__(7)["default"];

		_Object$defineProperty(exports, "__esModule", {
		  value: true
		});

		var Data = (function () {
		  /**
		   *
		   * @param {Uint8Array} content
		   */

		  function Data(content) {
		    _classCallCheck(this, Data);

		    this._content = content;
		    this._metadata = _Object$create(null);
		  }

		  _createClass(Data, [{
		    key: "content",
		    get: function () {
		      return this._content;
		    },
		    set: function (value) {
		      this._content = value;
		    }
		  }, {
		    key: "metadata",
		    get: function () {
		      return this._metadata;
		    }
		  }]);

		  return Data;
		})();

		exports.Data = Data;

	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var require;var require;"use strict";var _Object$keys=__webpack_require__(1)["default"];(function(f){if(true){module.exports = f();}else if(typeof define === "function" && define.amd){define([], f);}else {var g;if(typeof window !== "undefined"){g = window;}else if(typeof global !== "undefined"){g = global;}else if(typeof self !== "undefined"){g = self;}else {g = this;}g.jsyaml = f();}})(function(){var define, module, exports;return (function e(t, n, r){function s(o, u){if(!n[o]){if(!t[o]){var a=typeof require == "function" && require;if(!u && a)return require(o, !0);if(i)return i(o, !0);var f=new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);}var l=n[o] = {exports:{}};t[o][0].call(l.exports, function(e){var n=t[o][1][e];return s(n?n:e);}, l, l.exports, e, t, n, r);}return n[o].exports;}var i=typeof require == "function" && require;for(var o=0; o < r.length; o++) s(r[o]);return s;})({1:[function(require, module, exports){"use strict";var loader=require("./js-yaml/loader");var dumper=require("./js-yaml/dumper");function deprecated(name){return function(){throw new Error("Function " + name + " is deprecated and cannot be used.");};}module.exports.Type = require("./js-yaml/type");module.exports.Schema = require("./js-yaml/schema");module.exports.FAILSAFE_SCHEMA = require("./js-yaml/schema/failsafe");module.exports.JSON_SCHEMA = require("./js-yaml/schema/json");module.exports.CORE_SCHEMA = require("./js-yaml/schema/core");module.exports.DEFAULT_SAFE_SCHEMA = require("./js-yaml/schema/default_safe");module.exports.DEFAULT_FULL_SCHEMA = require("./js-yaml/schema/default_full");module.exports.load = loader.load;module.exports.loadAll = loader.loadAll;module.exports.safeLoad = loader.safeLoad;module.exports.safeLoadAll = loader.safeLoadAll;module.exports.dump = dumper.dump;module.exports.safeDump = dumper.safeDump;module.exports.YAMLException = require("./js-yaml/exception");module.exports.MINIMAL_SCHEMA = require("./js-yaml/schema/failsafe");module.exports.SAFE_SCHEMA = require("./js-yaml/schema/default_safe");module.exports.DEFAULT_SCHEMA = require("./js-yaml/schema/default_full");module.exports.scan = deprecated("scan");module.exports.parse = deprecated("parse");module.exports.compose = deprecated("compose");module.exports.addConstructor = deprecated("addConstructor");}, {"./js-yaml/dumper":3, "./js-yaml/exception":4, "./js-yaml/loader":5, "./js-yaml/schema":7, "./js-yaml/schema/core":8, "./js-yaml/schema/default_full":9, "./js-yaml/schema/default_safe":10, "./js-yaml/schema/failsafe":11, "./js-yaml/schema/json":12, "./js-yaml/type":13}], 2:[function(require, module, exports){"use strict";function isNothing(subject){return typeof subject === "undefined" || null === subject;}function isObject(subject){return typeof subject === "object" && null !== subject;}function toArray(sequence){if(Array.isArray(sequence)){return sequence;}else if(isNothing(sequence)){return [];}return [sequence];}function extend(target, source){var index, length, key, sourceKeys;if(source){sourceKeys = _Object$keys(source);for(index = 0, length = sourceKeys.length; index < length; index += 1) {key = sourceKeys[index];target[key] = source[key];}}return target;}function repeat(string, count){var result="", cycle;for(cycle = 0; cycle < count; cycle += 1) {result += string;}return result;}function isNegativeZero(number){return 0 === number && Number.NEGATIVE_INFINITY === 1 / number;}module.exports.isNothing = isNothing;module.exports.isObject = isObject;module.exports.toArray = toArray;module.exports.repeat = repeat;module.exports.isNegativeZero = isNegativeZero;module.exports.extend = extend;}, {}], 3:[function(require, module, exports){"use strict";var common=require("./common");var YAMLException=require("./exception");var DEFAULT_FULL_SCHEMA=require("./schema/default_full");var DEFAULT_SAFE_SCHEMA=require("./schema/default_safe");var _toString=Object.prototype.toString;var _hasOwnProperty=Object.prototype.hasOwnProperty;var CHAR_TAB=9;var CHAR_LINE_FEED=10;var CHAR_CARRIAGE_RETURN=13;var CHAR_SPACE=32;var CHAR_EXCLAMATION=33;var CHAR_DOUBLE_QUOTE=34;var CHAR_SHARP=35;var CHAR_PERCENT=37;var CHAR_AMPERSAND=38;var CHAR_SINGLE_QUOTE=39;var CHAR_ASTERISK=42;var CHAR_COMMA=44;var CHAR_MINUS=45;var CHAR_COLON=58;var CHAR_GREATER_THAN=62;var CHAR_QUESTION=63;var CHAR_COMMERCIAL_AT=64;var CHAR_LEFT_SQUARE_BRACKET=91;var CHAR_RIGHT_SQUARE_BRACKET=93;var CHAR_GRAVE_ACCENT=96;var CHAR_LEFT_CURLY_BRACKET=123;var CHAR_VERTICAL_LINE=124;var CHAR_RIGHT_CURLY_BRACKET=125;var ESCAPE_SEQUENCES={};ESCAPE_SEQUENCES[0] = "\\0";ESCAPE_SEQUENCES[7] = "\\a";ESCAPE_SEQUENCES[8] = "\\b";ESCAPE_SEQUENCES[9] = "\\t";ESCAPE_SEQUENCES[10] = "\\n";ESCAPE_SEQUENCES[11] = "\\v";ESCAPE_SEQUENCES[12] = "\\f";ESCAPE_SEQUENCES[13] = "\\r";ESCAPE_SEQUENCES[27] = "\\e";ESCAPE_SEQUENCES[34] = "\\\"";ESCAPE_SEQUENCES[92] = "\\\\";ESCAPE_SEQUENCES[133] = "\\N";ESCAPE_SEQUENCES[160] = "\\_";ESCAPE_SEQUENCES[8232] = "\\L";ESCAPE_SEQUENCES[8233] = "\\P";var DEPRECATED_BOOLEANS_SYNTAX=["y", "Y", "yes", "Yes", "YES", "on", "On", "ON", "n", "N", "no", "No", "NO", "off", "Off", "OFF"];function compileStyleMap(schema, map){var result, keys, index, length, tag, style, type;if(null === map){return {};}result = {};keys = _Object$keys(map);for(index = 0, length = keys.length; index < length; index += 1) {tag = keys[index];style = String(map[tag]);if("!!" === tag.slice(0, 2)){tag = "tag:yaml.org,2002:" + tag.slice(2);}type = schema.compiledTypeMap[tag];if(type && _hasOwnProperty.call(type.styleAliases, style)){style = type.styleAliases[style];}result[tag] = style;}return result;}function encodeHex(character){var string, handle, length;string = character.toString(16).toUpperCase();if(character <= 255){handle = "x";length = 2;}else if(character <= 65535){handle = "u";length = 4;}else if(character <= 4294967295){handle = "U";length = 8;}else {throw new YAMLException("code point within a string may not be greater than 0xFFFFFFFF");}return "\\" + handle + common.repeat("0", length - string.length) + string;}function State(options){this.schema = options["schema"] || DEFAULT_FULL_SCHEMA;this.indent = Math.max(1, options["indent"] || 2);this.skipInvalid = options["skipInvalid"] || false;this.flowLevel = common.isNothing(options["flowLevel"])?-1:options["flowLevel"];this.styleMap = compileStyleMap(this.schema, options["styles"] || null);this.sortKeys = options["sortKeys"] || false;this.implicitTypes = this.schema.compiledImplicit;this.explicitTypes = this.schema.compiledExplicit;this.tag = null;this.result = "";this.duplicates = [];this.usedDuplicates = null;}function indentString(string, spaces){var ind=common.repeat(" ", spaces), position=0, next=-1, result="", line, length=string.length;while(position < length) {next = string.indexOf("\n", position);if(next === -1){line = string.slice(position);position = length;}else {line = string.slice(position, next + 1);position = next + 1;}if(line.length && line !== "\n"){result += ind;}result += line;}return result;}function generateNextLine(state, level){return "\n" + common.repeat(" ", state.indent * level);}function testImplicitResolving(state, str){var index, length, type;for(index = 0, length = state.implicitTypes.length; index < length; index += 1) {type = state.implicitTypes[index];if(type.resolve(str)){return true;}}return false;}function StringBuilder(source){this.source = source;this.result = "";this.checkpoint = 0;}StringBuilder.prototype.takeUpTo = function(position){var er;if(position < this.checkpoint){er = new Error("position should be > checkpoint");er.position = position;er.checkpoint = this.checkpoint;throw er;}this.result += this.source.slice(this.checkpoint, position);this.checkpoint = position;return this;};StringBuilder.prototype.escapeChar = function(){var character, esc;character = this.source.charCodeAt(this.checkpoint);esc = ESCAPE_SEQUENCES[character] || encodeHex(character);this.result += esc;this.checkpoint += 1;return this;};StringBuilder.prototype.finish = function(){if(this.source.length > this.checkpoint){this.takeUpTo(this.source.length);}};function writeScalar(state, object, level){var simple, first, spaceWrap, folded, literal, single, double, sawLineFeed, linePosition, longestLine, indent, max, character, position, escapeSeq, hexEsc, previous, lineLength, modifier, trailingLineBreaks, result;if(0 === object.length){state.dump = "''";return;}if(-1 !== DEPRECATED_BOOLEANS_SYNTAX.indexOf(object)){state.dump = "'" + object + "'";return;}simple = true;first = object.length?object.charCodeAt(0):0;spaceWrap = CHAR_SPACE === first || CHAR_SPACE === object.charCodeAt(object.length - 1);if(CHAR_MINUS === first || CHAR_QUESTION === first || CHAR_COMMERCIAL_AT === first || CHAR_GRAVE_ACCENT === first){simple = false;}if(spaceWrap){simple = false;folded = false;literal = false;}else {folded = true;literal = true;}single = true;double = new StringBuilder(object);sawLineFeed = false;linePosition = 0;longestLine = 0;indent = state.indent * level;max = 80;if(indent < 40){max -= indent;}else {max = 40;}for(position = 0; position < object.length; position++) {character = object.charCodeAt(position);if(simple){if(!simpleChar(character)){simple = false;}else {continue;}}if(single && character === CHAR_SINGLE_QUOTE){single = false;}escapeSeq = ESCAPE_SEQUENCES[character];hexEsc = needsHexEscape(character);if(!escapeSeq && !hexEsc){continue;}if(character !== CHAR_LINE_FEED && character !== CHAR_DOUBLE_QUOTE && character !== CHAR_SINGLE_QUOTE){folded = false;literal = false;}else if(character === CHAR_LINE_FEED){sawLineFeed = true;single = false;if(position > 0){previous = object.charCodeAt(position - 1);if(previous === CHAR_SPACE){literal = false;folded = false;}}if(folded){lineLength = position - linePosition;linePosition = position;if(lineLength > longestLine){longestLine = lineLength;}}}if(character !== CHAR_DOUBLE_QUOTE){single = false;}double.takeUpTo(position);double.escapeChar();}if(simple && testImplicitResolving(state, object)){simple = false;}modifier = "";if(folded || literal){trailingLineBreaks = 0;if(object.charCodeAt(object.length - 1) === CHAR_LINE_FEED){trailingLineBreaks += 1;if(object.charCodeAt(object.length - 2) === CHAR_LINE_FEED){trailingLineBreaks += 1;}}if(trailingLineBreaks === 0){modifier = "-";}else if(trailingLineBreaks === 2){modifier = "+";}}if(literal && longestLine < max){folded = false;}if(!sawLineFeed){literal = false;}if(simple){state.dump = object;}else if(single){state.dump = "'" + object + "'";}else if(folded){result = fold(object, max);state.dump = ">" + modifier + "\n" + indentString(result, indent);}else if(literal){if(!modifier){object = object.replace(/\n$/, "");}state.dump = "|" + modifier + "\n" + indentString(object, indent);}else if(double){double.finish();state.dump = "\"" + double.result + "\"";}else {throw new Error("Failed to dump scalar value");}return;}function fold(object, max){var result="", position=0, length=object.length, trailing=/\n+$/.exec(object), newLine;if(trailing){length = trailing.index + 1;}while(position < length) {newLine = object.indexOf("\n", position);if(newLine > length || newLine === -1){if(result){result += "\n\n";}result += foldLine(object.slice(position, length), max);position = length;}else {if(result){result += "\n\n";}result += foldLine(object.slice(position, newLine), max);position = newLine + 1;}}if(trailing && trailing[0] !== "\n"){result += trailing[0];}return result;}function foldLine(line, max){if(line === ""){return line;}var foldRe=/[^\s] [^\s]/g, result="", prevMatch=0, foldStart=0, match=foldRe.exec(line), index, foldEnd, folded;while(match) {index = match.index;if(index - foldStart > max){if(prevMatch !== foldStart){foldEnd = prevMatch;}else {foldEnd = index;}if(result){result += "\n";}folded = line.slice(foldStart, foldEnd);result += folded;foldStart = foldEnd + 1;}prevMatch = index + 1;match = foldRe.exec(line);}if(result){result += "\n";}if(foldStart !== prevMatch && line.length - foldStart > max){result += line.slice(foldStart, prevMatch) + "\n" + line.slice(prevMatch + 1);}else {result += line.slice(foldStart);}return result;}function simpleChar(character){return CHAR_TAB !== character && CHAR_LINE_FEED !== character && CHAR_CARRIAGE_RETURN !== character && CHAR_COMMA !== character && CHAR_LEFT_SQUARE_BRACKET !== character && CHAR_RIGHT_SQUARE_BRACKET !== character && CHAR_LEFT_CURLY_BRACKET !== character && CHAR_RIGHT_CURLY_BRACKET !== character && CHAR_SHARP !== character && CHAR_AMPERSAND !== character && CHAR_ASTERISK !== character && CHAR_EXCLAMATION !== character && CHAR_VERTICAL_LINE !== character && CHAR_GREATER_THAN !== character && CHAR_SINGLE_QUOTE !== character && CHAR_DOUBLE_QUOTE !== character && CHAR_PERCENT !== character && CHAR_COLON !== character && !ESCAPE_SEQUENCES[character] && !needsHexEscape(character);}function needsHexEscape(character){return !(32 <= character && character <= 126 || 133 === character || 160 <= character && character <= 55295 || 57344 <= character && character <= 65533 || 65536 <= character && character <= 1114111);}function writeFlowSequence(state, level, object){var _result="", _tag=state.tag, index, length;for(index = 0, length = object.length; index < length; index += 1) {if(writeNode(state, level, object[index], false, false)){if(0 !== index){_result += ", ";}_result += state.dump;}}state.tag = _tag;state.dump = "[" + _result + "]";}function writeBlockSequence(state, level, object, compact){var _result="", _tag=state.tag, index, length;for(index = 0, length = object.length; index < length; index += 1) {if(writeNode(state, level + 1, object[index], true, true)){if(!compact || 0 !== index){_result += generateNextLine(state, level);}_result += "- " + state.dump;}}state.tag = _tag;state.dump = _result || "[]";}function writeFlowMapping(state, level, object){var _result="", _tag=state.tag, objectKeyList=_Object$keys(object), index, length, objectKey, objectValue, pairBuffer;for(index = 0, length = objectKeyList.length; index < length; index += 1) {pairBuffer = "";if(0 !== index){pairBuffer += ", ";}objectKey = objectKeyList[index];objectValue = object[objectKey];if(!writeNode(state, level, objectKey, false, false)){continue;}if(state.dump.length > 1024){pairBuffer += "? ";}pairBuffer += state.dump + ": ";if(!writeNode(state, level, objectValue, false, false)){continue;}pairBuffer += state.dump;_result += pairBuffer;}state.tag = _tag;state.dump = "{" + _result + "}";}function writeBlockMapping(state, level, object, compact){var _result="", _tag=state.tag, objectKeyList=_Object$keys(object), index, length, objectKey, objectValue, explicitPair, pairBuffer;if(state.sortKeys === true){objectKeyList.sort();}else if(typeof state.sortKeys === "function"){objectKeyList.sort(state.sortKeys);}else if(state.sortKeys){throw new YAMLException("sortKeys must be a boolean or a function");}for(index = 0, length = objectKeyList.length; index < length; index += 1) {pairBuffer = "";if(!compact || 0 !== index){pairBuffer += generateNextLine(state, level);}objectKey = objectKeyList[index];objectValue = object[objectKey];if(!writeNode(state, level + 1, objectKey, true, true)){continue;}explicitPair = null !== state.tag && "?" !== state.tag || state.dump && state.dump.length > 1024;if(explicitPair){if(state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)){pairBuffer += "?";}else {pairBuffer += "? ";}}pairBuffer += state.dump;if(explicitPair){pairBuffer += generateNextLine(state, level);}if(!writeNode(state, level + 1, objectValue, true, explicitPair)){continue;}if(state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)){pairBuffer += ":";}else {pairBuffer += ": ";}pairBuffer += state.dump;_result += pairBuffer;}state.tag = _tag;state.dump = _result || "{}";}function detectType(state, object, explicit){var _result, typeList, index, length, type, style;typeList = explicit?state.explicitTypes:state.implicitTypes;for(index = 0, length = typeList.length; index < length; index += 1) {type = typeList[index];if((type.instanceOf || type.predicate) && (!type.instanceOf || "object" === typeof object && object instanceof type.instanceOf) && (!type.predicate || type.predicate(object))){state.tag = explicit?type.tag:"?";if(type.represent){style = state.styleMap[type.tag] || type.defaultStyle;if("[object Function]" === _toString.call(type.represent)){_result = type.represent(object, style);}else if(_hasOwnProperty.call(type.represent, style)){_result = type.represent[style](object, style);}else {throw new YAMLException("!<" + type.tag + "> tag resolver accepts not \"" + style + "\" style");}state.dump = _result;}return true;}}return false;}function writeNode(state, level, object, block, compact){state.tag = null;state.dump = object;if(!detectType(state, object, false)){detectType(state, object, true);}var type=_toString.call(state.dump);if(block){block = 0 > state.flowLevel || state.flowLevel > level;}if(null !== state.tag && "?" !== state.tag || 2 !== state.indent && level > 0){compact = false;}var objectOrArray="[object Object]" === type || "[object Array]" === type, duplicateIndex, duplicate;if(objectOrArray){duplicateIndex = state.duplicates.indexOf(object);duplicate = duplicateIndex !== -1;}if(duplicate && state.usedDuplicates[duplicateIndex]){state.dump = "*ref_" + duplicateIndex;}else {if(objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]){state.usedDuplicates[duplicateIndex] = true;}if("[object Object]" === type){if(block && 0 !== _Object$keys(state.dump).length){writeBlockMapping(state, level, state.dump, compact);if(duplicate){state.dump = "&ref_" + duplicateIndex + (0 === level?"\n":"") + state.dump;}}else {writeFlowMapping(state, level, state.dump);if(duplicate){state.dump = "&ref_" + duplicateIndex + " " + state.dump;}}}else if("[object Array]" === type){if(block && 0 !== state.dump.length){writeBlockSequence(state, level, state.dump, compact);if(duplicate){state.dump = "&ref_" + duplicateIndex + (0 === level?"\n":"") + state.dump;}}else {writeFlowSequence(state, level, state.dump);if(duplicate){state.dump = "&ref_" + duplicateIndex + " " + state.dump;}}}else if("[object String]" === type){if("?" !== state.tag){writeScalar(state, state.dump, level);}}else {if(state.skipInvalid){return false;}throw new YAMLException("unacceptable kind of an object to dump " + type);}if(null !== state.tag && "?" !== state.tag){state.dump = "!<" + state.tag + "> " + state.dump;}}return true;}function getDuplicateReferences(object, state){var objects=[], duplicatesIndexes=[], index, length;inspectNode(object, objects, duplicatesIndexes);for(index = 0, length = duplicatesIndexes.length; index < length; index += 1) {state.duplicates.push(objects[duplicatesIndexes[index]]);}state.usedDuplicates = new Array(length);}function inspectNode(object, objects, duplicatesIndexes){var type=_toString.call(object), objectKeyList, index, length;if(null !== object && "object" === typeof object){index = objects.indexOf(object);if(-1 !== index){if(-1 === duplicatesIndexes.indexOf(index)){duplicatesIndexes.push(index);}}else {objects.push(object);if(Array.isArray(object)){for(index = 0, length = object.length; index < length; index += 1) {inspectNode(object[index], objects, duplicatesIndexes);}}else {objectKeyList = _Object$keys(object);for(index = 0, length = objectKeyList.length; index < length; index += 1) {inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);}}}}}function dump(input, options){options = options || {};var state=new State(options);getDuplicateReferences(input, state);if(writeNode(state, 0, input, true, true)){return state.dump + "\n";}return "";}function safeDump(input, options){return dump(input, common.extend({schema:DEFAULT_SAFE_SCHEMA}, options));}module.exports.dump = dump;module.exports.safeDump = safeDump;}, {"./common":2, "./exception":4, "./schema/default_full":9, "./schema/default_safe":10}], 4:[function(require, module, exports){"use strict";function YAMLException(reason, mark){this.name = "YAMLException";this.reason = reason;this.mark = mark;this.message = this.toString(false);}YAMLException.prototype.toString = function toString(compact){var result;result = "JS-YAML: " + (this.reason || "(unknown reason)");if(!compact && this.mark){result += " " + this.mark.toString();}return result;};module.exports = YAMLException;}, {}], 5:[function(require, module, exports){"use strict";var common=require("./common");var YAMLException=require("./exception");var Mark=require("./mark");var DEFAULT_SAFE_SCHEMA=require("./schema/default_safe");var DEFAULT_FULL_SCHEMA=require("./schema/default_full");var _hasOwnProperty=Object.prototype.hasOwnProperty;var CONTEXT_FLOW_IN=1;var CONTEXT_FLOW_OUT=2;var CONTEXT_BLOCK_IN=3;var CONTEXT_BLOCK_OUT=4;var CHOMPING_CLIP=1;var CHOMPING_STRIP=2;var CHOMPING_KEEP=3;var PATTERN_NON_PRINTABLE=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;var PATTERN_NON_ASCII_LINE_BREAKS=/[\x85\u2028\u2029]/;var PATTERN_FLOW_INDICATORS=/[,\[\]\{\}]/;var PATTERN_TAG_HANDLE=/^(?:!|!!|![a-z\-]+!)$/i;var PATTERN_TAG_URI=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function is_EOL(c){return c === 10 || c === 13;}function is_WHITE_SPACE(c){return c === 9 || c === 32;}function is_WS_OR_EOL(c){return c === 9 || c === 32 || c === 10 || c === 13;}function is_FLOW_INDICATOR(c){return 44 === c || 91 === c || 93 === c || 123 === c || 125 === c;}function fromHexCode(c){var lc;if(48 <= c && c <= 57){return c - 48;}lc = c | 32;if(97 <= lc && lc <= 102){return lc - 97 + 10;}return -1;}function escapedHexLen(c){if(c === 120){return 2;}if(c === 117){return 4;}if(c === 85){return 8;}return 0;}function fromDecimalCode(c){if(48 <= c && c <= 57){return c - 48;}return -1;}function simpleEscapeSequence(c){return c === 48?"\u0000":c === 97?"\u0007":c === 98?"\b":c === 116?"\t":c === 9?"\t":c === 110?"\n":c === 118?"\u000b":c === 102?"\f":c === 114?"\r":c === 101?"\u001b":c === 32?" ":c === 34?"\"":c === 47?"/":c === 92?"\\":c === 78?"":c === 95?" ":c === 76?"\u2028":c === 80?"\u2029":"";}function charFromCodepoint(c){if(c <= 65535){return String.fromCharCode(c);}return String.fromCharCode((c - 65536 >> 10) + 55296, (c - 65536 & 1023) + 56320);}var simpleEscapeCheck=new Array(256);var simpleEscapeMap=new Array(256);for(var i=0; i < 256; i++) {simpleEscapeCheck[i] = simpleEscapeSequence(i)?1:0;simpleEscapeMap[i] = simpleEscapeSequence(i);}function State(input, options){this.input = input;this.filename = options["filename"] || null;this.schema = options["schema"] || DEFAULT_FULL_SCHEMA;this.onWarning = options["onWarning"] || null;this.legacy = options["legacy"] || false;this.implicitTypes = this.schema.compiledImplicit;this.typeMap = this.schema.compiledTypeMap;this.length = input.length;this.position = 0;this.line = 0;this.lineStart = 0;this.lineIndent = 0;this.documents = [];}function generateError(state, message){return new YAMLException(message, new Mark(state.filename, state.input, state.position, state.line, state.position - state.lineStart));}function throwError(state, message){throw generateError(state, message);}function throwWarning(state, message){var error=generateError(state, message);if(state.onWarning){state.onWarning.call(null, error);}else {throw error;}}var directiveHandlers={YAML:function handleYamlDirective(state, name, args){var match, major, minor;if(null !== state.version){throwError(state, "duplication of %YAML directive");}if(1 !== args.length){throwError(state, "YAML directive accepts exactly one argument");}match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);if(null === match){throwError(state, "ill-formed argument of the YAML directive");}major = parseInt(match[1], 10);minor = parseInt(match[2], 10);if(1 !== major){throwError(state, "unacceptable YAML version of the document");}state.version = args[0];state.checkLineBreaks = minor < 2;if(1 !== minor && 2 !== minor){throwWarning(state, "unsupported YAML version of the document");}}, TAG:function handleTagDirective(state, name, args){var handle, prefix;if(2 !== args.length){throwError(state, "TAG directive accepts exactly two arguments");}handle = args[0];prefix = args[1];if(!PATTERN_TAG_HANDLE.test(handle)){throwError(state, "ill-formed tag handle (first argument) of the TAG directive");}if(_hasOwnProperty.call(state.tagMap, handle)){throwError(state, "there is a previously declared suffix for \"" + handle + "\" tag handle");}if(!PATTERN_TAG_URI.test(prefix)){throwError(state, "ill-formed tag prefix (second argument) of the TAG directive");}state.tagMap[handle] = prefix;}};function captureSegment(state, start, end, checkJson){var _position, _length, _character, _result;if(start < end){_result = state.input.slice(start, end);if(checkJson){for(_position = 0, _length = _result.length; _position < _length; _position += 1) {_character = _result.charCodeAt(_position);if(!(9 === _character || 32 <= _character && _character <= 1114111)){throwError(state, "expected valid JSON character");}}}state.result += _result;}}function mergeMappings(state, destination, source){var sourceKeys, key, index, quantity;if(!common.isObject(source)){throwError(state, "cannot merge mappings; the provided source object is unacceptable");}sourceKeys = _Object$keys(source);for(index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {key = sourceKeys[index];if(!_hasOwnProperty.call(destination, key)){destination[key] = source[key];}}}function storeMappingPair(state, _result, keyTag, keyNode, valueNode){var index, quantity;keyNode = String(keyNode);if(null === _result){_result = {};}if("tag:yaml.org,2002:merge" === keyTag){if(Array.isArray(valueNode)){for(index = 0, quantity = valueNode.length; index < quantity; index += 1) {mergeMappings(state, _result, valueNode[index]);}}else {mergeMappings(state, _result, valueNode);}}else {_result[keyNode] = valueNode;}return _result;}function readLineBreak(state){var ch;ch = state.input.charCodeAt(state.position);if(10 === ch){state.position++;}else if(13 === ch){state.position++;if(10 === state.input.charCodeAt(state.position)){state.position++;}}else {throwError(state, "a line break is expected");}state.line += 1;state.lineStart = state.position;}function skipSeparationSpace(state, allowComments, checkIndent){var lineBreaks=0, ch=state.input.charCodeAt(state.position);while(0 !== ch) {while(is_WHITE_SPACE(ch)) {ch = state.input.charCodeAt(++state.position);}if(allowComments && 35 === ch){do {ch = state.input.charCodeAt(++state.position);}while(ch !== 10 && ch !== 13 && 0 !== ch);}if(is_EOL(ch)){readLineBreak(state);ch = state.input.charCodeAt(state.position);lineBreaks++;state.lineIndent = 0;while(32 === ch) {state.lineIndent++;ch = state.input.charCodeAt(++state.position);}}else {break;}}if(-1 !== checkIndent && 0 !== lineBreaks && state.lineIndent < checkIndent){throwWarning(state, "deficient indentation");}return lineBreaks;}function testDocumentSeparator(state){var _position=state.position, ch;ch = state.input.charCodeAt(_position);if((45 === ch || 46 === ch) && state.input.charCodeAt(_position + 1) === ch && state.input.charCodeAt(_position + 2) === ch){_position += 3;ch = state.input.charCodeAt(_position);if(ch === 0 || is_WS_OR_EOL(ch)){return true;}}return false;}function writeFoldedLines(state, count){if(1 === count){state.result += " ";}else if(count > 1){state.result += common.repeat("\n", count - 1);}}function readPlainScalar(state, nodeIndent, withinFlowCollection){var preceding, following, captureStart, captureEnd, hasPendingContent, _line, _lineStart, _lineIndent, _kind=state.kind, _result=state.result, ch;ch = state.input.charCodeAt(state.position);if(is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || 35 === ch || 38 === ch || 42 === ch || 33 === ch || 124 === ch || 62 === ch || 39 === ch || 34 === ch || 37 === ch || 64 === ch || 96 === ch){return false;}if(63 === ch || 45 === ch){following = state.input.charCodeAt(state.position + 1);if(is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)){return false;}}state.kind = "scalar";state.result = "";captureStart = captureEnd = state.position;hasPendingContent = false;while(0 !== ch) {if(58 === ch){following = state.input.charCodeAt(state.position + 1);if(is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)){break;}}else if(35 === ch){preceding = state.input.charCodeAt(state.position - 1);if(is_WS_OR_EOL(preceding)){break;}}else if(state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && is_FLOW_INDICATOR(ch)){break;}else if(is_EOL(ch)){_line = state.line;_lineStart = state.lineStart;_lineIndent = state.lineIndent;skipSeparationSpace(state, false, -1);if(state.lineIndent >= nodeIndent){hasPendingContent = true;ch = state.input.charCodeAt(state.position);continue;}else {state.position = captureEnd;state.line = _line;state.lineStart = _lineStart;state.lineIndent = _lineIndent;break;}}if(hasPendingContent){captureSegment(state, captureStart, captureEnd, false);writeFoldedLines(state, state.line - _line);captureStart = captureEnd = state.position;hasPendingContent = false;}if(!is_WHITE_SPACE(ch)){captureEnd = state.position + 1;}ch = state.input.charCodeAt(++state.position);}captureSegment(state, captureStart, captureEnd, false);if(state.result){return true;}state.kind = _kind;state.result = _result;return false;}function readSingleQuotedScalar(state, nodeIndent){var ch, captureStart, captureEnd;ch = state.input.charCodeAt(state.position);if(39 !== ch){return false;}state.kind = "scalar";state.result = "";state.position++;captureStart = captureEnd = state.position;while(0 !== (ch = state.input.charCodeAt(state.position))) {if(39 === ch){captureSegment(state, captureStart, state.position, true);ch = state.input.charCodeAt(++state.position);if(39 === ch){captureStart = captureEnd = state.position;state.position++;}else {return true;}}else if(is_EOL(ch)){captureSegment(state, captureStart, captureEnd, true);writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));captureStart = captureEnd = state.position;}else if(state.position === state.lineStart && testDocumentSeparator(state)){throwError(state, "unexpected end of the document within a single quoted scalar");}else {state.position++;captureEnd = state.position;}}throwError(state, "unexpected end of the stream within a single quoted scalar");}function readDoubleQuotedScalar(state, nodeIndent){var captureStart, captureEnd, hexLength, hexResult, tmp, tmpEsc, ch;ch = state.input.charCodeAt(state.position);if(34 !== ch){return false;}state.kind = "scalar";state.result = "";state.position++;captureStart = captureEnd = state.position;while(0 !== (ch = state.input.charCodeAt(state.position))) {if(34 === ch){captureSegment(state, captureStart, state.position, true);state.position++;return true;}else if(92 === ch){captureSegment(state, captureStart, state.position, true);ch = state.input.charCodeAt(++state.position);if(is_EOL(ch)){skipSeparationSpace(state, false, nodeIndent);}else if(ch < 256 && simpleEscapeCheck[ch]){state.result += simpleEscapeMap[ch];state.position++;}else if((tmp = escapedHexLen(ch)) > 0){hexLength = tmp;hexResult = 0;for(; hexLength > 0; hexLength--) {ch = state.input.charCodeAt(++state.position);if((tmp = fromHexCode(ch)) >= 0){hexResult = (hexResult << 4) + tmp;}else {throwError(state, "expected hexadecimal character");}}state.result += charFromCodepoint(hexResult);state.position++;}else {throwError(state, "unknown escape sequence");}captureStart = captureEnd = state.position;}else if(is_EOL(ch)){captureSegment(state, captureStart, captureEnd, true);writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));captureStart = captureEnd = state.position;}else if(state.position === state.lineStart && testDocumentSeparator(state)){throwError(state, "unexpected end of the document within a double quoted scalar");}else {state.position++;captureEnd = state.position;}}throwError(state, "unexpected end of the stream within a double quoted scalar");}function readFlowCollection(state, nodeIndent){var readNext=true, _line, _tag=state.tag, _result, _anchor=state.anchor, following, terminator, isPair, isExplicitPair, isMapping, keyNode, keyTag, valueNode, ch;ch = state.input.charCodeAt(state.position);if(ch === 91){terminator = 93;isMapping = false;_result = [];}else if(ch === 123){terminator = 125;isMapping = true;_result = {};}else {return false;}if(null !== state.anchor){state.anchorMap[state.anchor] = _result;}ch = state.input.charCodeAt(++state.position);while(0 !== ch) {skipSeparationSpace(state, true, nodeIndent);ch = state.input.charCodeAt(state.position);if(ch === terminator){state.position++;state.tag = _tag;state.anchor = _anchor;state.kind = isMapping?"mapping":"sequence";state.result = _result;return true;}else if(!readNext){throwError(state, "missed comma between flow collection entries");}keyTag = keyNode = valueNode = null;isPair = isExplicitPair = false;if(63 === ch){following = state.input.charCodeAt(state.position + 1);if(is_WS_OR_EOL(following)){isPair = isExplicitPair = true;state.position++;skipSeparationSpace(state, true, nodeIndent);}}_line = state.line;composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);keyTag = state.tag;keyNode = state.result;skipSeparationSpace(state, true, nodeIndent);ch = state.input.charCodeAt(state.position);if((isExplicitPair || state.line === _line) && 58 === ch){isPair = true;ch = state.input.charCodeAt(++state.position);skipSeparationSpace(state, true, nodeIndent);composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);valueNode = state.result;}if(isMapping){storeMappingPair(state, _result, keyTag, keyNode, valueNode);}else if(isPair){_result.push(storeMappingPair(state, null, keyTag, keyNode, valueNode));}else {_result.push(keyNode);}skipSeparationSpace(state, true, nodeIndent);ch = state.input.charCodeAt(state.position);if(44 === ch){readNext = true;ch = state.input.charCodeAt(++state.position);}else {readNext = false;}}throwError(state, "unexpected end of the stream within a flow collection");}function readBlockScalar(state, nodeIndent){var captureStart, folding, chomping=CHOMPING_CLIP, detectedIndent=false, textIndent=nodeIndent, emptyLines=0, atMoreIndented=false, tmp, ch;ch = state.input.charCodeAt(state.position);if(ch === 124){folding = false;}else if(ch === 62){folding = true;}else {return false;}state.kind = "scalar";state.result = "";while(0 !== ch) {ch = state.input.charCodeAt(++state.position);if(43 === ch || 45 === ch){if(CHOMPING_CLIP === chomping){chomping = 43 === ch?CHOMPING_KEEP:CHOMPING_STRIP;}else {throwError(state, "repeat of a chomping mode identifier");}}else if((tmp = fromDecimalCode(ch)) >= 0){if(tmp === 0){throwError(state, "bad explicit indentation width of a block scalar; it cannot be less than one");}else if(!detectedIndent){textIndent = nodeIndent + tmp - 1;detectedIndent = true;}else {throwError(state, "repeat of an indentation width identifier");}}else {break;}}if(is_WHITE_SPACE(ch)){do {ch = state.input.charCodeAt(++state.position);}while(is_WHITE_SPACE(ch));if(35 === ch){do {ch = state.input.charCodeAt(++state.position);}while(!is_EOL(ch) && 0 !== ch);}}while(0 !== ch) {readLineBreak(state);state.lineIndent = 0;ch = state.input.charCodeAt(state.position);while((!detectedIndent || state.lineIndent < textIndent) && 32 === ch) {state.lineIndent++;ch = state.input.charCodeAt(++state.position);}if(!detectedIndent && state.lineIndent > textIndent){textIndent = state.lineIndent;}if(is_EOL(ch)){emptyLines++;continue;}if(state.lineIndent < textIndent){if(chomping === CHOMPING_KEEP){state.result += common.repeat("\n", emptyLines);}else if(chomping === CHOMPING_CLIP){if(detectedIndent){state.result += "\n";}}break;}if(folding){if(is_WHITE_SPACE(ch)){atMoreIndented = true;state.result += common.repeat("\n", emptyLines + 1);}else if(atMoreIndented){atMoreIndented = false;state.result += common.repeat("\n", emptyLines + 1);}else if(0 === emptyLines){if(detectedIndent){state.result += " ";}}else {state.result += common.repeat("\n", emptyLines);}}else if(detectedIndent){state.result += common.repeat("\n", emptyLines + 1);}else {}detectedIndent = true;emptyLines = 0;captureStart = state.position;while(!is_EOL(ch) && 0 !== ch) {ch = state.input.charCodeAt(++state.position);}captureSegment(state, captureStart, state.position, false);}return true;}function readBlockSequence(state, nodeIndent){var _line, _tag=state.tag, _anchor=state.anchor, _result=[], following, detected=false, ch;if(null !== state.anchor){state.anchorMap[state.anchor] = _result;}ch = state.input.charCodeAt(state.position);while(0 !== ch) {if(45 !== ch){break;}following = state.input.charCodeAt(state.position + 1);if(!is_WS_OR_EOL(following)){break;}detected = true;state.position++;if(skipSeparationSpace(state, true, -1)){if(state.lineIndent <= nodeIndent){_result.push(null);ch = state.input.charCodeAt(state.position);continue;}}_line = state.line;composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);_result.push(state.result);skipSeparationSpace(state, true, -1);ch = state.input.charCodeAt(state.position);if((state.line === _line || state.lineIndent > nodeIndent) && 0 !== ch){throwError(state, "bad indentation of a sequence entry");}else if(state.lineIndent < nodeIndent){break;}}if(detected){state.tag = _tag;state.anchor = _anchor;state.kind = "sequence";state.result = _result;return true;}return false;}function readBlockMapping(state, nodeIndent, flowIndent){var following, allowCompact, _line, _tag=state.tag, _anchor=state.anchor, _result={}, keyTag=null, keyNode=null, valueNode=null, atExplicitKey=false, detected=false, ch;if(null !== state.anchor){state.anchorMap[state.anchor] = _result;}ch = state.input.charCodeAt(state.position);while(0 !== ch) {following = state.input.charCodeAt(state.position + 1);_line = state.line;if((63 === ch || 58 === ch) && is_WS_OR_EOL(following)){if(63 === ch){if(atExplicitKey){storeMappingPair(state, _result, keyTag, keyNode, null);keyTag = keyNode = valueNode = null;}detected = true;atExplicitKey = true;allowCompact = true;}else if(atExplicitKey){atExplicitKey = false;allowCompact = true;}else {throwError(state, "incomplete explicit mapping pair; a key node is missed");}state.position += 1;ch = following;}else if(composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)){if(state.line === _line){ch = state.input.charCodeAt(state.position);while(is_WHITE_SPACE(ch)) {ch = state.input.charCodeAt(++state.position);}if(58 === ch){ch = state.input.charCodeAt(++state.position);if(!is_WS_OR_EOL(ch)){throwError(state, "a whitespace character is expected after the key-value separator within a block mapping");}if(atExplicitKey){storeMappingPair(state, _result, keyTag, keyNode, null);keyTag = keyNode = valueNode = null;}detected = true;atExplicitKey = false;allowCompact = false;keyTag = state.tag;keyNode = state.result;}else if(detected){throwError(state, "can not read an implicit mapping pair; a colon is missed");}else {state.tag = _tag;state.anchor = _anchor;return true;}}else if(detected){throwError(state, "can not read a block mapping entry; a multiline key may not be an implicit key");}else {state.tag = _tag;state.anchor = _anchor;return true;}}else {break;}if(state.line === _line || state.lineIndent > nodeIndent){if(composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)){if(atExplicitKey){keyNode = state.result;}else {valueNode = state.result;}}if(!atExplicitKey){storeMappingPair(state, _result, keyTag, keyNode, valueNode);keyTag = keyNode = valueNode = null;}skipSeparationSpace(state, true, -1);ch = state.input.charCodeAt(state.position);}if(state.lineIndent > nodeIndent && 0 !== ch){throwError(state, "bad indentation of a mapping entry");}else if(state.lineIndent < nodeIndent){break;}}if(atExplicitKey){storeMappingPair(state, _result, keyTag, keyNode, null);}if(detected){state.tag = _tag;state.anchor = _anchor;state.kind = "mapping";state.result = _result;}return detected;}function readTagProperty(state){var _position, isVerbatim=false, isNamed=false, tagHandle, tagName, ch;ch = state.input.charCodeAt(state.position);if(33 !== ch){return false;}if(null !== state.tag){throwError(state, "duplication of a tag property");}ch = state.input.charCodeAt(++state.position);if(60 === ch){isVerbatim = true;ch = state.input.charCodeAt(++state.position);}else if(33 === ch){isNamed = true;tagHandle = "!!";ch = state.input.charCodeAt(++state.position);}else {tagHandle = "!";}_position = state.position;if(isVerbatim){do {ch = state.input.charCodeAt(++state.position);}while(0 !== ch && 62 !== ch);if(state.position < state.length){tagName = state.input.slice(_position, state.position);ch = state.input.charCodeAt(++state.position);}else {throwError(state, "unexpected end of the stream within a verbatim tag");}}else {while(0 !== ch && !is_WS_OR_EOL(ch)) {if(33 === ch){if(!isNamed){tagHandle = state.input.slice(_position - 1, state.position + 1);if(!PATTERN_TAG_HANDLE.test(tagHandle)){throwError(state, "named tag handle cannot contain such characters");}isNamed = true;_position = state.position + 1;}else {throwError(state, "tag suffix cannot contain exclamation marks");}}ch = state.input.charCodeAt(++state.position);}tagName = state.input.slice(_position, state.position);if(PATTERN_FLOW_INDICATORS.test(tagName)){throwError(state, "tag suffix cannot contain flow indicator characters");}}if(tagName && !PATTERN_TAG_URI.test(tagName)){throwError(state, "tag name cannot contain such characters: " + tagName);}if(isVerbatim){state.tag = tagName;}else if(_hasOwnProperty.call(state.tagMap, tagHandle)){state.tag = state.tagMap[tagHandle] + tagName;}else if("!" === tagHandle){state.tag = "!" + tagName;}else if("!!" === tagHandle){state.tag = "tag:yaml.org,2002:" + tagName;}else {throwError(state, "undeclared tag handle \"" + tagHandle + "\"");}return true;}function readAnchorProperty(state){var _position, ch;ch = state.input.charCodeAt(state.position);if(38 !== ch){return false;}if(null !== state.anchor){throwError(state, "duplication of an anchor property");}ch = state.input.charCodeAt(++state.position);_position = state.position;while(0 !== ch && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {ch = state.input.charCodeAt(++state.position);}if(state.position === _position){throwError(state, "name of an anchor node must contain at least one character");}state.anchor = state.input.slice(_position, state.position);return true;}function readAlias(state){var _position, alias, len=state.length, input=state.input, ch;ch = state.input.charCodeAt(state.position);if(42 !== ch){return false;}ch = state.input.charCodeAt(++state.position);_position = state.position;while(0 !== ch && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {ch = state.input.charCodeAt(++state.position);}if(state.position === _position){throwError(state, "name of an alias node must contain at least one character");}alias = state.input.slice(_position, state.position);if(!state.anchorMap.hasOwnProperty(alias)){throwError(state, "unidentified alias \"" + alias + "\"");}state.result = state.anchorMap[alias];skipSeparationSpace(state, true, -1);return true;}function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact){var allowBlockStyles, allowBlockScalars, allowBlockCollections, indentStatus=1, atNewLine=false, hasContent=false, typeIndex, typeQuantity, type, flowIndent, blockIndent, _result;state.tag = null;state.anchor = null;state.kind = null;state.result = null;allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;if(allowToSeek){if(skipSeparationSpace(state, true, -1)){atNewLine = true;if(state.lineIndent > parentIndent){indentStatus = 1;}else if(state.lineIndent === parentIndent){indentStatus = 0;}else if(state.lineIndent < parentIndent){indentStatus = -1;}}}if(1 === indentStatus){while(readTagProperty(state) || readAnchorProperty(state)) {if(skipSeparationSpace(state, true, -1)){atNewLine = true;allowBlockCollections = allowBlockStyles;if(state.lineIndent > parentIndent){indentStatus = 1;}else if(state.lineIndent === parentIndent){indentStatus = 0;}else if(state.lineIndent < parentIndent){indentStatus = -1;}}else {allowBlockCollections = false;}}}if(allowBlockCollections){allowBlockCollections = atNewLine || allowCompact;}if(1 === indentStatus || CONTEXT_BLOCK_OUT === nodeContext){if(CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext){flowIndent = parentIndent;}else {flowIndent = parentIndent + 1;}blockIndent = state.position - state.lineStart;if(1 === indentStatus){if(allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)){hasContent = true;}else {if(allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)){hasContent = true;}else if(readAlias(state)){hasContent = true;if(null !== state.tag || null !== state.anchor){throwError(state, "alias node should not have any properties");}}else if(readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)){hasContent = true;if(null === state.tag){state.tag = "?";}}if(null !== state.anchor){state.anchorMap[state.anchor] = state.result;}}}else if(0 === indentStatus){hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);}}if(null !== state.tag && "!" !== state.tag){if("?" === state.tag){for(typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {type = state.implicitTypes[typeIndex];if(type.resolve(state.result)){state.result = type.construct(state.result);state.tag = type.tag;if(null !== state.anchor){state.anchorMap[state.anchor] = state.result;}break;}}}else if(_hasOwnProperty.call(state.typeMap, state.tag)){type = state.typeMap[state.tag];if(null !== state.result && type.kind !== state.kind){throwError(state, "unacceptable node kind for !<" + state.tag + "> tag; it should be \"" + type.kind + "\", not \"" + state.kind + "\"");}if(!type.resolve(state.result)){throwError(state, "cannot resolve a node with !<" + state.tag + "> explicit tag");}else {state.result = type.construct(state.result);if(null !== state.anchor){state.anchorMap[state.anchor] = state.result;}}}else {throwWarning(state, "unknown tag !<" + state.tag + ">");}}return null !== state.tag || null !== state.anchor || hasContent;}function readDocument(state){var documentStart=state.position, _position, directiveName, directiveArgs, hasDirectives=false, ch;state.version = null;state.checkLineBreaks = state.legacy;state.tagMap = {};state.anchorMap = {};while(0 !== (ch = state.input.charCodeAt(state.position))) {skipSeparationSpace(state, true, -1);ch = state.input.charCodeAt(state.position);if(state.lineIndent > 0 || 37 !== ch){break;}hasDirectives = true;ch = state.input.charCodeAt(++state.position);_position = state.position;while(0 !== ch && !is_WS_OR_EOL(ch)) {ch = state.input.charCodeAt(++state.position);}directiveName = state.input.slice(_position, state.position);directiveArgs = [];if(directiveName.length < 1){throwError(state, "directive name must not be less than one character in length");}while(0 !== ch) {while(is_WHITE_SPACE(ch)) {ch = state.input.charCodeAt(++state.position);}if(35 === ch){do {ch = state.input.charCodeAt(++state.position);}while(0 !== ch && !is_EOL(ch));break;}if(is_EOL(ch)){break;}_position = state.position;while(0 !== ch && !is_WS_OR_EOL(ch)) {ch = state.input.charCodeAt(++state.position);}directiveArgs.push(state.input.slice(_position, state.position));}if(0 !== ch){readLineBreak(state);}if(_hasOwnProperty.call(directiveHandlers, directiveName)){directiveHandlers[directiveName](state, directiveName, directiveArgs);}else {throwWarning(state, "unknown document directive \"" + directiveName + "\"");}}skipSeparationSpace(state, true, -1);if(0 === state.lineIndent && 45 === state.input.charCodeAt(state.position) && 45 === state.input.charCodeAt(state.position + 1) && 45 === state.input.charCodeAt(state.position + 2)){state.position += 3;skipSeparationSpace(state, true, -1);}else if(hasDirectives){throwError(state, "directives end mark is expected");}composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);skipSeparationSpace(state, true, -1);if(state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))){throwWarning(state, "non-ASCII line breaks are interpreted as content");}state.documents.push(state.result);if(state.position === state.lineStart && testDocumentSeparator(state)){if(46 === state.input.charCodeAt(state.position)){state.position += 3;skipSeparationSpace(state, true, -1);}return;}if(state.position < state.length - 1){throwError(state, "end of the stream or a document separator is expected");}else {return;}}function loadDocuments(input, options){input = String(input);options = options || {};if(input.length !== 0){if(10 !== input.charCodeAt(input.length - 1) && 13 !== input.charCodeAt(input.length - 1)){input += "\n";}if(input.charCodeAt(0) === 65279){input = input.slice(1);}}var state=new State(input, options);if(PATTERN_NON_PRINTABLE.test(state.input)){throwError(state, "the stream contains non-printable characters");}state.input += "\u0000";while(32 === state.input.charCodeAt(state.position)) {state.lineIndent += 1;state.position += 1;}while(state.position < state.length - 1) {readDocument(state);}return state.documents;}function loadAll(input, iterator, options){var documents=loadDocuments(input, options), index, length;for(index = 0, length = documents.length; index < length; index += 1) {iterator(documents[index]);}}function load(input, options){var documents=loadDocuments(input, options), index, length;if(0 === documents.length){return undefined;}else if(1 === documents.length){return documents[0];}throw new YAMLException("expected a single document in the stream, but found more");}function safeLoadAll(input, output, options){loadAll(input, output, common.extend({schema:DEFAULT_SAFE_SCHEMA}, options));}function safeLoad(input, options){return load(input, common.extend({schema:DEFAULT_SAFE_SCHEMA}, options));}module.exports.loadAll = loadAll;module.exports.load = load;module.exports.safeLoadAll = safeLoadAll;module.exports.safeLoad = safeLoad;}, {"./common":2, "./exception":4, "./mark":6, "./schema/default_full":9, "./schema/default_safe":10}], 6:[function(require, module, exports){"use strict";var common=require("./common");function Mark(name, buffer, position, line, column){this.name = name;this.buffer = buffer;this.position = position;this.line = line;this.column = column;}Mark.prototype.getSnippet = function getSnippet(indent, maxLength){var head, start, tail, end, snippet;if(!this.buffer){return null;}indent = indent || 4;maxLength = maxLength || 75;head = "";start = this.position;while(start > 0 && -1 === "\u0000\r\n\u2028\u2029".indexOf(this.buffer.charAt(start - 1))) {start -= 1;if(this.position - start > maxLength / 2 - 1){head = " ... ";start += 5;break;}}tail = "";end = this.position;while(end < this.buffer.length && -1 === "\u0000\r\n\u2028\u2029".indexOf(this.buffer.charAt(end))) {end += 1;if(end - this.position > maxLength / 2 - 1){tail = " ... ";end -= 5;break;}}snippet = this.buffer.slice(start, end);return common.repeat(" ", indent) + head + snippet + tail + "\n" + common.repeat(" ", indent + this.position - start + head.length) + "^";};Mark.prototype.toString = function toString(compact){var snippet, where="";if(this.name){where += "in \"" + this.name + "\" ";}where += "at line " + (this.line + 1) + ", column " + (this.column + 1);if(!compact){snippet = this.getSnippet();if(snippet){where += ":\n" + snippet;}}return where;};module.exports = Mark;}, {"./common":2}], 7:[function(require, module, exports){"use strict";var common=require("./common");var YAMLException=require("./exception");var Type=require("./type");function compileList(schema, name, result){var exclude=[];schema.include.forEach(function(includedSchema){result = compileList(includedSchema, name, result);});schema[name].forEach(function(currentType){result.forEach(function(previousType, previousIndex){if(previousType.tag === currentType.tag){exclude.push(previousIndex);}});result.push(currentType);});return result.filter(function(type, index){return -1 === exclude.indexOf(index);});}function compileMap(){var result={}, index, length;function collectType(type){result[type.tag] = type;}for(index = 0, length = arguments.length; index < length; index += 1) {arguments[index].forEach(collectType);}return result;}function Schema(definition){this.include = definition.include || [];this.implicit = definition.implicit || [];this.explicit = definition.explicit || [];this.implicit.forEach(function(type){if(type.loadKind && "scalar" !== type.loadKind){throw new YAMLException("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");}});this.compiledImplicit = compileList(this, "implicit", []);this.compiledExplicit = compileList(this, "explicit", []);this.compiledTypeMap = compileMap(this.compiledImplicit, this.compiledExplicit);}Schema.DEFAULT = null;Schema.create = function createSchema(){var schemas, types;switch(arguments.length){case 1:schemas = Schema.DEFAULT;types = arguments[0];break;case 2:schemas = arguments[0];types = arguments[1];break;default:throw new YAMLException("Wrong number of arguments for Schema.create function");}schemas = common.toArray(schemas);types = common.toArray(types);if(!schemas.every(function(schema){return schema instanceof Schema;})){throw new YAMLException("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");}if(!types.every(function(type){return type instanceof Type;})){throw new YAMLException("Specified list of YAML types (or a single Type object) contains a non-Type object.");}return new Schema({include:schemas, explicit:types});};module.exports = Schema;}, {"./common":2, "./exception":4, "./type":13}], 8:[function(require, module, exports){"use strict";var Schema=require("../schema");module.exports = new Schema({include:[require("./json")]});}, {"../schema":7, "./json":12}], 9:[function(require, module, exports){"use strict";var Schema=require("../schema");module.exports = Schema.DEFAULT = new Schema({include:[require("./default_safe")], explicit:[require("../type/js/undefined"), require("../type/js/regexp"), require("../type/js/function")]});}, {"../schema":7, "../type/js/function":18, "../type/js/regexp":19, "../type/js/undefined":20, "./default_safe":10}], 10:[function(require, module, exports){"use strict";var Schema=require("../schema");module.exports = new Schema({include:[require("./core")], implicit:[require("../type/timestamp"), require("../type/merge")], explicit:[require("../type/binary"), require("../type/omap"), require("../type/pairs"), require("../type/set")]});}, {"../schema":7, "../type/binary":14, "../type/merge":22, "../type/omap":24, "../type/pairs":25, "../type/set":27, "../type/timestamp":29, "./core":8}], 11:[function(require, module, exports){"use strict";var Schema=require("../schema");module.exports = new Schema({explicit:[require("../type/str"), require("../type/seq"), require("../type/map")]});}, {"../schema":7, "../type/map":21, "../type/seq":26, "../type/str":28}], 12:[function(require, module, exports){"use strict";var Schema=require("../schema");module.exports = new Schema({include:[require("./failsafe")], implicit:[require("../type/null"), require("../type/bool"), require("../type/int"), require("../type/float")]});}, {"../schema":7, "../type/bool":15, "../type/float":16, "../type/int":17, "../type/null":23, "./failsafe":11}], 13:[function(require, module, exports){"use strict";var YAMLException=require("./exception");var TYPE_CONSTRUCTOR_OPTIONS=["kind", "resolve", "construct", "instanceOf", "predicate", "represent", "defaultStyle", "styleAliases"];var YAML_NODE_KINDS=["scalar", "sequence", "mapping"];function compileStyleAliases(map){var result={};if(null !== map){_Object$keys(map).forEach(function(style){map[style].forEach(function(alias){result[String(alias)] = style;});});}return result;}function Type(tag, options){options = options || {};_Object$keys(options).forEach(function(name){if(-1 === TYPE_CONSTRUCTOR_OPTIONS.indexOf(name)){throw new YAMLException("Unknown option \"" + name + "\" is met in definition of \"" + tag + "\" YAML type.");}});this.tag = tag;this.kind = options["kind"] || null;this.resolve = options["resolve"] || function(){return true;};this.construct = options["construct"] || function(data){return data;};this.instanceOf = options["instanceOf"] || null;this.predicate = options["predicate"] || null;this.represent = options["represent"] || null;this.defaultStyle = options["defaultStyle"] || null;this.styleAliases = compileStyleAliases(options["styleAliases"] || null);if(-1 === YAML_NODE_KINDS.indexOf(this.kind)){throw new YAMLException("Unknown kind \"" + this.kind + "\" is specified for \"" + tag + "\" YAML type.");}}module.exports = Type;}, {"./exception":4}], 14:[function(require, module, exports){"use strict";var NodeBuffer=require("buffer").Buffer;var Type=require("../type");var BASE64_MAP="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";function resolveYamlBinary(data){if(null === data){return false;}var code, idx, bitlen=0, len=0, max=data.length, map=BASE64_MAP;for(idx = 0; idx < max; idx++) {code = map.indexOf(data.charAt(idx));if(code > 64){continue;}if(code < 0){return false;}bitlen += 6;}return bitlen % 8 === 0;}function constructYamlBinary(data){var code, idx, tailbits, input=data.replace(/[\r\n=]/g, ""), max=input.length, map=BASE64_MAP, bits=0, result=[];for(idx = 0; idx < max; idx++) {if(idx % 4 === 0 && idx){result.push(bits >> 16 & 255);result.push(bits >> 8 & 255);result.push(bits & 255);}bits = bits << 6 | map.indexOf(input.charAt(idx));}tailbits = max % 4 * 6;if(tailbits === 0){result.push(bits >> 16 & 255);result.push(bits >> 8 & 255);result.push(bits & 255);}else if(tailbits === 18){result.push(bits >> 10 & 255);result.push(bits >> 2 & 255);}else if(tailbits === 12){result.push(bits >> 4 & 255);}if(NodeBuffer){return new NodeBuffer(result);}return result;}function representYamlBinary(object){var result="", bits=0, idx, tail, max=object.length, map=BASE64_MAP;for(idx = 0; idx < max; idx++) {if(idx % 3 === 0 && idx){result += map[bits >> 18 & 63];result += map[bits >> 12 & 63];result += map[bits >> 6 & 63];result += map[bits & 63];}bits = (bits << 8) + object[idx];}tail = max % 3;if(tail === 0){result += map[bits >> 18 & 63];result += map[bits >> 12 & 63];result += map[bits >> 6 & 63];result += map[bits & 63];}else if(tail === 2){result += map[bits >> 10 & 63];result += map[bits >> 4 & 63];result += map[bits << 2 & 63];result += map[64];}else if(tail === 1){result += map[bits >> 2 & 63];result += map[bits << 4 & 63];result += map[64];result += map[64];}return result;}function isBinary(object){return NodeBuffer && NodeBuffer.isBuffer(object);}module.exports = new Type("tag:yaml.org,2002:binary", {kind:"scalar", resolve:resolveYamlBinary, construct:constructYamlBinary, predicate:isBinary, represent:representYamlBinary});}, {"../type":13, "buffer":30}], 15:[function(require, module, exports){"use strict";var Type=require("../type");function resolveYamlBoolean(data){if(null === data){return false;}var max=data.length;return max === 4 && (data === "true" || data === "True" || data === "TRUE") || max === 5 && (data === "false" || data === "False" || data === "FALSE");}function constructYamlBoolean(data){return data === "true" || data === "True" || data === "TRUE";}function isBoolean(object){return "[object Boolean]" === Object.prototype.toString.call(object);}module.exports = new Type("tag:yaml.org,2002:bool", {kind:"scalar", resolve:resolveYamlBoolean, construct:constructYamlBoolean, predicate:isBoolean, represent:{lowercase:function lowercase(object){return object?"true":"false";}, uppercase:function uppercase(object){return object?"TRUE":"FALSE";}, camelcase:function camelcase(object){return object?"True":"False";}}, defaultStyle:"lowercase"});}, {"../type":13}], 16:[function(require, module, exports){"use strict";var common=require("../common");var Type=require("../type");var YAML_FLOAT_PATTERN=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)\\.[0-9_]*(?:[eE][-+][0-9]+)?" + "|\\.[0-9_]+(?:[eE][-+][0-9]+)?" + "|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*" + "|[-+]?\\.(?:inf|Inf|INF)" + "|\\.(?:nan|NaN|NAN))$");function resolveYamlFloat(data){if(null === data){return false;}var value, sign, base, digits;if(!YAML_FLOAT_PATTERN.test(data)){return false;}return true;}function constructYamlFloat(data){var value, sign, base, digits;value = data.replace(/_/g, "").toLowerCase();sign = "-" === value[0]?-1:1;digits = [];if(0 <= "+-".indexOf(value[0])){value = value.slice(1);}if(".inf" === value){return 1 === sign?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;}else if(".nan" === value){return NaN;}else if(0 <= value.indexOf(":")){value.split(":").forEach(function(v){digits.unshift(parseFloat(v, 10));});value = 0;base = 1;digits.forEach(function(d){value += d * base;base *= 60;});return sign * value;}return sign * parseFloat(value, 10);}function representYamlFloat(object, style){if(isNaN(object)){switch(style){case "lowercase":return ".nan";case "uppercase":return ".NAN";case "camelcase":return ".NaN";}}else if(Number.POSITIVE_INFINITY === object){switch(style){case "lowercase":return ".inf";case "uppercase":return ".INF";case "camelcase":return ".Inf";}}else if(Number.NEGATIVE_INFINITY === object){switch(style){case "lowercase":return "-.inf";case "uppercase":return "-.INF";case "camelcase":return "-.Inf";}}else if(common.isNegativeZero(object)){return "-0.0";}return object.toString(10);}function isFloat(object){return "[object Number]" === Object.prototype.toString.call(object) && (0 !== object % 1 || common.isNegativeZero(object));}module.exports = new Type("tag:yaml.org,2002:float", {kind:"scalar", resolve:resolveYamlFloat, construct:constructYamlFloat, predicate:isFloat, represent:representYamlFloat, defaultStyle:"lowercase"});}, {"../common":2, "../type":13}], 17:[function(require, module, exports){"use strict";var common=require("../common");var Type=require("../type");function isHexCode(c){return 48 <= c && c <= 57 || 65 <= c && c <= 70 || 97 <= c && c <= 102;}function isOctCode(c){return 48 <= c && c <= 55;}function isDecCode(c){return 48 <= c && c <= 57;}function resolveYamlInteger(data){if(null === data){return false;}var max=data.length, index=0, hasDigits=false, ch;if(!max){return false;}ch = data[index];if(ch === "-" || ch === "+"){ch = data[++index];}if(ch === "0"){if(index + 1 === max){return true;}ch = data[++index];if(ch === "b"){index++;for(; index < max; index++) {ch = data[index];if(ch === "_"){continue;}if(ch !== "0" && ch !== "1"){return false;}hasDigits = true;}return hasDigits;}if(ch === "x"){index++;for(; index < max; index++) {ch = data[index];if(ch === "_"){continue;}if(!isHexCode(data.charCodeAt(index))){return false;}hasDigits = true;}return hasDigits;}for(; index < max; index++) {ch = data[index];if(ch === "_"){continue;}if(!isOctCode(data.charCodeAt(index))){return false;}hasDigits = true;}return hasDigits;}for(; index < max; index++) {ch = data[index];if(ch === "_"){continue;}if(ch === ":"){break;}if(!isDecCode(data.charCodeAt(index))){return false;}hasDigits = true;}if(!hasDigits){return false;}if(ch !== ":"){return true;}return /^(:[0-5]?[0-9])+$/.test(data.slice(index));}function constructYamlInteger(data){var value=data, sign=1, ch, base, digits=[];if(value.indexOf("_") !== -1){value = value.replace(/_/g, "");}ch = value[0];if(ch === "-" || ch === "+"){if(ch === "-"){sign = -1;}value = value.slice(1);ch = value[0];}if("0" === value){return 0;}if(ch === "0"){if(value[1] === "b"){return sign * parseInt(value.slice(2), 2);}if(value[1] === "x"){return sign * parseInt(value, 16);}return sign * parseInt(value, 8);}if(value.indexOf(":") !== -1){value.split(":").forEach(function(v){digits.unshift(parseInt(v, 10));});value = 0;base = 1;digits.forEach(function(d){value += d * base;base *= 60;});return sign * value;}return sign * parseInt(value, 10);}function isInteger(object){return "[object Number]" === Object.prototype.toString.call(object) && (0 === object % 1 && !common.isNegativeZero(object));}module.exports = new Type("tag:yaml.org,2002:int", {kind:"scalar", resolve:resolveYamlInteger, construct:constructYamlInteger, predicate:isInteger, represent:{binary:function binary(object){return "0b" + object.toString(2);}, octal:function octal(object){return "0" + object.toString(8);}, decimal:function decimal(object){return object.toString(10);}, hexadecimal:function hexadecimal(object){return "0x" + object.toString(16).toUpperCase();}}, defaultStyle:"decimal", styleAliases:{binary:[2, "bin"], octal:[8, "oct"], decimal:[10, "dec"], hexadecimal:[16, "hex"]}});}, {"../common":2, "../type":13}], 18:[function(require, module, exports){"use strict";var esprima;try{esprima = require("esprima");}catch(_) {if(typeof window !== "undefined"){esprima = window.esprima;}}var Type=require("../../type");function resolveJavascriptFunction(data){if(null === data){return false;}try{var source="(" + data + ")", ast=esprima.parse(source, {range:true}), params=[], body;if("Program" !== ast.type || 1 !== ast.body.length || "ExpressionStatement" !== ast.body[0].type || "FunctionExpression" !== ast.body[0].expression.type){return false;}return true;}catch(err) {return false;}}function constructJavascriptFunction(data){var source="(" + data + ")", ast=esprima.parse(source, {range:true}), params=[], body;if("Program" !== ast.type || 1 !== ast.body.length || "ExpressionStatement" !== ast.body[0].type || "FunctionExpression" !== ast.body[0].expression.type){throw new Error("Failed to resolve function");}ast.body[0].expression.params.forEach(function(param){params.push(param.name);});body = ast.body[0].expression.body.range;return new Function(params, source.slice(body[0] + 1, body[1] - 1));}function representJavascriptFunction(object){return object.toString();}function isFunction(object){return "[object Function]" === Object.prototype.toString.call(object);}module.exports = new Type("tag:yaml.org,2002:js/function", {kind:"scalar", resolve:resolveJavascriptFunction, construct:constructJavascriptFunction, predicate:isFunction, represent:representJavascriptFunction});}, {"../../type":13, "esprima":"esprima"}], 19:[function(require, module, exports){"use strict";var Type=require("../../type");function resolveJavascriptRegExp(data){if(null === data){return false;}if(0 === data.length){return false;}var regexp=data, tail=/\/([gim]*)$/.exec(data), modifiers="";if("/" === regexp[0]){if(tail){modifiers = tail[1];}if(modifiers.length > 3){return false;}if(regexp[regexp.length - modifiers.length - 1] !== "/"){return false;}regexp = regexp.slice(1, regexp.length - modifiers.length - 1);}try{var dummy=new RegExp(regexp, modifiers);return true;}catch(error) {return false;}}function constructJavascriptRegExp(data){var regexp=data, tail=/\/([gim]*)$/.exec(data), modifiers="";if("/" === regexp[0]){if(tail){modifiers = tail[1];}regexp = regexp.slice(1, regexp.length - modifiers.length - 1);}return new RegExp(regexp, modifiers);}function representJavascriptRegExp(object){var result="/" + object.source + "/";if(object.global){result += "g";}if(object.multiline){result += "m";}if(object.ignoreCase){result += "i";}return result;}function isRegExp(object){return "[object RegExp]" === Object.prototype.toString.call(object);}module.exports = new Type("tag:yaml.org,2002:js/regexp", {kind:"scalar", resolve:resolveJavascriptRegExp, construct:constructJavascriptRegExp, predicate:isRegExp, represent:representJavascriptRegExp});}, {"../../type":13}], 20:[function(require, module, exports){"use strict";var Type=require("../../type");function resolveJavascriptUndefined(){return true;}function constructJavascriptUndefined(){return undefined;}function representJavascriptUndefined(){return "";}function isUndefined(object){return "undefined" === typeof object;}module.exports = new Type("tag:yaml.org,2002:js/undefined", {kind:"scalar", resolve:resolveJavascriptUndefined, construct:constructJavascriptUndefined, predicate:isUndefined, represent:representJavascriptUndefined});}, {"../../type":13}], 21:[function(require, module, exports){"use strict";var Type=require("../type");module.exports = new Type("tag:yaml.org,2002:map", {kind:"mapping", construct:function construct(data){return null !== data?data:{};}});}, {"../type":13}], 22:[function(require, module, exports){"use strict";var Type=require("../type");function resolveYamlMerge(data){return "<<" === data || null === data;}module.exports = new Type("tag:yaml.org,2002:merge", {kind:"scalar", resolve:resolveYamlMerge});}, {"../type":13}], 23:[function(require, module, exports){"use strict";var Type=require("../type");function resolveYamlNull(data){if(null === data){return true;}var max=data.length;return max === 1 && data === "~" || max === 4 && (data === "null" || data === "Null" || data === "NULL");}function constructYamlNull(){return null;}function isNull(object){return null === object;}module.exports = new Type("tag:yaml.org,2002:null", {kind:"scalar", resolve:resolveYamlNull, construct:constructYamlNull, predicate:isNull, represent:{canonical:function canonical(){return "~";}, lowercase:function lowercase(){return "null";}, uppercase:function uppercase(){return "NULL";}, camelcase:function camelcase(){return "Null";}}, defaultStyle:"lowercase"});}, {"../type":13}], 24:[function(require, module, exports){"use strict";var Type=require("../type");var _hasOwnProperty=Object.prototype.hasOwnProperty;var _toString=Object.prototype.toString;function resolveYamlOmap(data){if(null === data){return true;}var objectKeys=[], index, length, pair, pairKey, pairHasKey, object=data;for(index = 0, length = object.length; index < length; index += 1) {pair = object[index];pairHasKey = false;if("[object Object]" !== _toString.call(pair)){return false;}for(pairKey in pair) {if(_hasOwnProperty.call(pair, pairKey)){if(!pairHasKey){pairHasKey = true;}else {return false;}}}if(!pairHasKey){return false;}if(-1 === objectKeys.indexOf(pairKey)){objectKeys.push(pairKey);}else {return false;}}return true;}function constructYamlOmap(data){return null !== data?data:[];}module.exports = new Type("tag:yaml.org,2002:omap", {kind:"sequence", resolve:resolveYamlOmap, construct:constructYamlOmap});}, {"../type":13}], 25:[function(require, module, exports){"use strict";var Type=require("../type");var _toString=Object.prototype.toString;function resolveYamlPairs(data){if(null === data){return true;}var index, length, pair, keys, result, object=data;result = new Array(object.length);for(index = 0, length = object.length; index < length; index += 1) {pair = object[index];if("[object Object]" !== _toString.call(pair)){return false;}keys = _Object$keys(pair);if(1 !== keys.length){return false;}result[index] = [keys[0], pair[keys[0]]];}return true;}function constructYamlPairs(data){if(null === data){return [];}var index, length, pair, keys, result, object=data;result = new Array(object.length);for(index = 0, length = object.length; index < length; index += 1) {pair = object[index];keys = _Object$keys(pair);result[index] = [keys[0], pair[keys[0]]];}return result;}module.exports = new Type("tag:yaml.org,2002:pairs", {kind:"sequence", resolve:resolveYamlPairs, construct:constructYamlPairs});}, {"../type":13}], 26:[function(require, module, exports){"use strict";var Type=require("../type");module.exports = new Type("tag:yaml.org,2002:seq", {kind:"sequence", construct:function construct(data){return null !== data?data:[];}});}, {"../type":13}], 27:[function(require, module, exports){"use strict";var Type=require("../type");var _hasOwnProperty=Object.prototype.hasOwnProperty;function resolveYamlSet(data){if(null === data){return true;}var key, object=data;for(key in object) {if(_hasOwnProperty.call(object, key)){if(null !== object[key]){return false;}}}return true;}function constructYamlSet(data){return null !== data?data:{};}module.exports = new Type("tag:yaml.org,2002:set", {kind:"mapping", resolve:resolveYamlSet, construct:constructYamlSet});}, {"../type":13}], 28:[function(require, module, exports){"use strict";var Type=require("../type");module.exports = new Type("tag:yaml.org,2002:str", {kind:"scalar", construct:function construct(data){return null !== data?data:"";}});}, {"../type":13}], 29:[function(require, module, exports){"use strict";var Type=require("../type");var YAML_TIMESTAMP_REGEXP=new RegExp("^([0-9][0-9][0-9][0-9])" + "-([0-9][0-9]?)" + "-([0-9][0-9]?)" + "(?:(?:[Tt]|[ \\t]+)" + "([0-9][0-9]?)" + ":([0-9][0-9])" + ":([0-9][0-9])" + "(?:\\.([0-9]*))?" + "(?:[ \\t]*(Z|([-+])([0-9][0-9]?)" + "(?::([0-9][0-9]))?))?)?$");function resolveYamlTimestamp(data){if(null === data){return false;}var match, year, month, day, hour, minute, second, fraction=0, delta=null, tz_hour, tz_minute, date;match = YAML_TIMESTAMP_REGEXP.exec(data);if(null === match){return false;}return true;}function constructYamlTimestamp(data){var match, year, month, day, hour, minute, second, fraction=0, delta=null, tz_hour, tz_minute, date;match = YAML_TIMESTAMP_REGEXP.exec(data);if(null === match){throw new Error("Date resolve error");}year = +match[1];month = +match[2] - 1;day = +match[3];if(!match[4]){return new Date(Date.UTC(year, month, day));}hour = +match[4];minute = +match[5];second = +match[6];if(match[7]){fraction = match[7].slice(0, 3);while(fraction.length < 3) {fraction += "0";}fraction = +fraction;}if(match[9]){tz_hour = +match[10];tz_minute = +(match[11] || 0);delta = (tz_hour * 60 + tz_minute) * 60000;if("-" === match[9]){delta = -delta;}}date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));if(delta){date.setTime(date.getTime() - delta);}return date;}function representYamlTimestamp(object){return object.toISOString();}module.exports = new Type("tag:yaml.org,2002:timestamp", {kind:"scalar", resolve:resolveYamlTimestamp, construct:constructYamlTimestamp, instanceOf:Date, represent:representYamlTimestamp});}, {"../type":13}], 30:[function(require, module, exports){}, {}], "/":[function(require, module, exports){"use strict";var yaml=require("./lib/js-yaml.js");module.exports = yaml;}, {"./lib/js-yaml.js":1}]}, {}, [])("/");});

/***/ }
/******/ ])
});
;