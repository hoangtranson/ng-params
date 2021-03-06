"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (_string, _separator) {
    if (!(typeof _string === 'string' && typeof _separator === 'string')) {
        throw new TypeError('Expected the arguments to be of type `string`');
    }
    if (_string === '' || _separator === '') {
        return [];
    }
    var separatorIndex = _string.indexOf(_separator);
    if (separatorIndex === -1) {
        return [];
    }
    return [_string.slice(0, separatorIndex), _string.slice(separatorIndex + _separator.length)];
});
