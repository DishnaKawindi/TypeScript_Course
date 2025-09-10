"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // :number next to input parameter is the return type. there are ways that can return more than 1 type
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    // isPaid is given a default value
};
addTwo(5);
getUpper("Dishna");
signUpUser("Dishna", "dk.com", true);
loginUser("Dishna", "dk.com");
// return type declaration in arrow functions
var getHello = function (s) {
    return "Hello";
};
var heros = ["thor", "spider man", "iron man"];
// const heros = [1,2,3];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
// no return
function consoleError(errmsg) {
    console.log(errmsg);
}
// some functions never return a value
function handleError(errmsg) {
    throw new Error(errmsg);
}
