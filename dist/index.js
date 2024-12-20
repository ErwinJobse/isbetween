"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

exports.isbetween = isbetweennumbers;

function isbetweennumbers(value, lowerBound, upperBound) {

    return value > lowerBound && value < upperBound;

}

exports.default = isbetweennumbers