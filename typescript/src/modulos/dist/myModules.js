"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomNumeber = exports.PI = void 0;
// variable 
const PI = 3.14;
exports.PI = PI;
//fuction 
function generateRandomNumeber() {
    return Math.floor(Math.random() * 100);
}
exports.generateRandomNumeber = generateRandomNumeber;
