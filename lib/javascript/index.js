(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'rustie', './js-yaml'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports, require('rustie'), require('./js-yaml'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.rustie, global.jsyaml);
    global.index = mod.exports;
  }
})(this, function (exports, _rustie, _jsYaml) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  var _jsyaml = _interopRequireDefault(_jsYaml);

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
        return regeneratorRuntime.async(function process$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              delimiter = '---', yamlSnippet = undefined;

              Object.keys(files).forEach(function (path) {
                var frontmatter = Object.create(null);
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