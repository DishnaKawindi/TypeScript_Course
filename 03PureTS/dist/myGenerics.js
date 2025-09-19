"use strict";
// Valid but not recommended for generics
function identityOne(val) {
    return val;
}
// valid but prob: can be accepting string and returning number
function identityTwo(val) {
    return val;
}
// Correct one - Automatically takes return type is same as input type
function identityThree(val) {
    return val;
}
// identityThree("Dishna")
// same as above. valid
function identityFour(val) {
    return val;
}
// then call the function
identityFour({ brand: "water", bottletype: 3 });
// taking arrays as input
// T[] = Array<T>
// Here the function takes an array as input but returns only one value from that array. It is valid
function getSearchProducts(products) {
    // do osme db operations
    const myIndex = 3;
    return products[myIndex];
}
// Arrow functions (same example as above but arrow function)
// <T,> - comma is used to indicate that this is not a JSX syntax but a generics type
const getMoreSearchProducts = (products) => {
    const myIndex = 4;
    return products[myIndex];
};
// A restriction is added to the second parameter
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFunction(3, { connection: "asasdasdasd", username: "dishna", password: "123456" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
