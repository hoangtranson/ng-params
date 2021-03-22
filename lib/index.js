"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var splitOnFirst_helper_1 = require("./utils/splitOnFirst.helper");
var PARAMS = /** @class */ (function () {
    function PARAMS(_option) {
        if (_option === void 0) { _option = {}; }
        if (typeof window === 'undefined') {
            throw new Error('window is not defined yet!!!');
        }
        if (typeof window.location.search !== 'string' || !window.location.search) {
            throw new Error('location search is not string type!!!');
        }
        this._l = window.location.search.trim().replace(/^[?#&]/, '');
    }
    Object.defineProperty(PARAMS.prototype, "location", {
        get: function () {
            return this._l;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PARAMS.prototype, "queries", {
        get: function () {
            return this._l
                .split('&')
                .filter(function (item) { return item; })
                .reduce(function (acc, current) {
                var _a = splitOnFirst_helper_1.default(current, '='), key = _a[0], value = _a[1];
                acc[key] = value;
                return acc;
            }, Object.create(null));
        },
        enumerable: false,
        configurable: true
    });
    PARAMS.prototype.pick = function (list) { };
    PARAMS.prototype.exclude = function (list) { };
    PARAMS.prototype.remake = function (object) { };
    return PARAMS;
}());
exports.default = PARAMS;
