'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.find = find;
exports.findAll = findAll;
exports.default = pandora;
Array.prototype.flatMap = function (fn, ctx) {
  return this.reduce(function (k, v) {
    return k.concat(fn.call(ctx, v));
  }, []);
};
function find(host) {
  var visited = arguments.length <= 1 || arguments[1] === undefined ? new Set() : arguments[1];

  visited.add(host);
  return host ? Object.keys(host).flatMap(function (key) {
    return typeof host[key] === 'function' ? function () {
      return host[key].apply(host, arguments);
    } : visited.has(host[key]) ? [] : find(host[key], visited);
  }) : [];
}
function findAll(host) {
  var visited = arguments.length <= 1 || arguments[1] === undefined ? new Set() : arguments[1];

  return find(host, visited).flatMap(function (fn) {
    try {
      return find(fn(), visited).concat(fn);
    } catch (e) {
      return find(e, visited).concat(fn);
    }
  });
}
function pandora() {
  var _this = this;

  var box = arguments.length <= 0 || arguments[0] === undefined ? findAll(global) : arguments[0];

  return function () {
    var _box$Math$floor;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_box$Math$floor = box[Math.floor(Math.random() * box.length)]).call.apply(_box$Math$floor, [_this].concat(args));
  };
};

