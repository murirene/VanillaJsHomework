"use strict";

function isInteger(value) {
    var regEx = /^[0-9]+$/;

    return regEx.test(value);
}

function isFloat(value) {
    var regEx = /^[0-9]*\.{0,1}[0-9]+$/;

    return regEx.test(value);
}

function isMonetary(value) {
    var regEx = /^[0-9]*\.{0,1}[0-9]{0,2}$/;

    return regEx.test(value);
}

exports.isMonetary = isMonetary;
exports.isInteger = isInteger;
exports.isFloat = isFloat;
