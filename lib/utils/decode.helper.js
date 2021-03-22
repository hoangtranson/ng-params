"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (encodedURI, options) {
    if (typeof encodedURI !== 'string') {
        throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
    }
    try {
        if (options.decode) {
            encodedURI = encodedURI.replace(/\+/g, ' ');
            return decodeURIComponent(encodedURI);
        }
        else {
            return encodedURI;
        }
    }
    catch (err) {
        return encodedURI;
    }
});
