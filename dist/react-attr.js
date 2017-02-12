'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _attr = require('./attr');

var _attr2 = _interopRequireDefault(_attr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function normalize() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var real = args;

    if (args.length == 0) {
        real = Array.of({ if: true, val: '' });
    }

    if (args.length > 1 && typeof args[1] === 'string') {
        real = Array.of({ if: args[0], val: args[1], else: args[2] });
    }

    var maped = real.map(argFilter);

    return maped;
}

function argFilter(arg, ind, arr) {
    var real = null;
    if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) !== 'object') {
        real = { val: arg };
    } else {
        real = Object.assign(arg);
    }

    if (!real.hasOwnProperty('if')) {
        real.if = true;
    }

    if (!real.hasOwnProperty('val')) {
        real.val = '';
    }

    if (ind == arr.length - 1 && !real.hasOwnProperty('else')) {
        real.else = '';
    }

    return real;
}

function attr() {
    var realArgs = normalize.apply(undefined, arguments);
    return _attr2.default.apply(undefined, _toConsumableArray(realArgs));
}

exports.default = attr;