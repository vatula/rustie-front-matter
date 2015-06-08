(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'babel-runtime/helpers/inherits', 'babel-runtime/helpers/create-class', 'babel-runtime/helpers/class-call-check', 'babel-runtime/core-js/object/define-property', 'babel-runtime/regenerator', 'babel-runtime/core-js/object/keys', 'babel-runtime/core-js/object/create', 'rustie', './js-yaml', 'babel-runtime/helpers/interop-require-default'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports, require('babel-runtime/helpers/inherits'), require('babel-runtime/helpers/create-class'), require('babel-runtime/helpers/class-call-check'), require('babel-runtime/core-js/object/define-property'), require('babel-runtime/regenerator'), require('babel-runtime/core-js/object/keys'), require('babel-runtime/core-js/object/create'), require('rustie'), require('./js-yaml'), require('babel-runtime/helpers/interop-require-default'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._inherits, global._createClass, global._classCallCheck, global._Object$defineProperty, global._regeneratorRuntime, global._Object$keys, global._Object$create, global.rustie, global.jsyaml, global._interopRequireDefault);
    global.index = mod.exports;
  }
})(this, function (exports, _babelRuntimeHelpersInherits, _babelRuntimeHelpersCreateClass, _babelRuntimeHelpersClassCallCheck, _babelRuntimeCoreJsObjectDefineProperty, _babelRuntimeRegenerator, _babelRuntimeCoreJsObjectKeys, _babelRuntimeCoreJsObjectCreate, _rustie, _jsYaml, _babelRuntimeHelpersInteropRequireDefault) {
  'use strict';

  (0, _babelRuntimeCoreJsObjectDefineProperty['default'])(exports, '__esModule', {
    value: true
  });

  var _jsyaml = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_jsYaml);

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
      (0, _babelRuntimeHelpersClassCallCheck['default'])(this, FrontMatter);

      if (_Plugin != null) {
        _Plugin.apply(this, arguments);
      }
    }

    (0, _babelRuntimeHelpersInherits['default'])(FrontMatter, _Plugin);
    (0, _babelRuntimeHelpersCreateClass['default'])(FrontMatter, [{
      key: 'process',
      value: function process(files) {
        var delimiter, yamlSnippet;
        return _babelRuntimeRegenerator['default'].async(function process$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              delimiter = '---', yamlSnippet = undefined;

              (0, _babelRuntimeCoreJsObjectKeys['default'])(files).forEach(function (path) {
                var frontmatter = (0, _babelRuntimeCoreJsObjectCreate['default'])(null);
                var file = files[path];
                var contentString = uint8ToString(file.content);
                var lastDelimiter = getPosition(contentString, delimiter, 2);
                if (lastDelimiter) {
                  yamlSnippet = contentString.substring(delimiter.length, lastDelimiter);
                  frontmatter = _jsyaml['default'].load(yamlSnippet);
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
});