"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var splitOnFirst_helper_1 = require("./utils/splitOnFirst.helper");
var decode_helper_1 = require("./utils/decode.helper");
var PARAMS = /** @class */ (function () {
    function PARAMS(_option) {
        if (_option === void 0) { _option = {}; }
        if (typeof window === 'undefined') {
            throw new Error("window is not defined yet!!!");
        }
        if (typeof window.location.search !== 'string' || !window.location.search) {
            throw new Error("location search is not string type!!!");
        }
        this._l = window.location.search.trim().replace(/^[?#&]/, '');
        var defaultConfigs = {
            decode: true,
            arrayFormat: 'none',
            arrayFormatSeparator: ',',
            parseNumbers: false,
            parseBooleans: false,
        };
        this._opt = __assign(__assign({}, defaultConfigs), _option);
        if (typeof defaultConfigs.arrayFormatSeparator !== 'string' || defaultConfigs.arrayFormatSeparator.length !== 1) {
            throw new TypeError('arrayFormatSeparator must be single character string');
        }
    }
    Object.defineProperty(PARAMS.prototype, "location", {
        get: function () {
            return this._l;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PARAMS.prototype, "configuration", {
        get: function () {
            return this._opt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PARAMS.prototype, "queries", {
        get: function () {
            var _this = this;
            return this._l.split('&').filter(function (item) { return item; }).reduce(function (acc, current) {
                var _a = splitOnFirst_helper_1.default(_this._opt.decode ? current.replace(/\+/g, ' ') : current, '='), key = _a[0], value = _a[1];
                var _value = decode_helper_1.default(value, _this._opt);
                var _key = decode_helper_1.default(key, _this._opt);
                acc[_key] = _this.parseValue(_value);
                return acc;
            }, Object.create(null));
        },
        enumerable: false,
        configurable: true
    });
    PARAMS.prototype.parseValue = function (value) {
        var _v = value;
        if (this._opt.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
            _v = Number(value);
        }
        else if (this._opt.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
            _v = value.toLowerCase() === 'true';
        }
        return _v;
    };
    return PARAMS;
}());
exports.default = PARAMS;
