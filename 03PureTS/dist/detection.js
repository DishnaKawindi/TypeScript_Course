"use strict";
// Documentation - Narrowinf
// problem - typeof [1,2,3] and null are detected as "object"
// simple example
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}
// below function is Ok but it does not check for empty string
function printAll(strs) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // !!!!!!!!!!!!!!!!
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
// narrowing down only to Admin interface
function isAdminAccount(account) {
    // in operator
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
// instanceof narrowing
// when an object is created using "new" keyword, instanceof can be used
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
// confirming if it is actually a fish and returning pet is fish, rather than boolean
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
// this functions does not give an error is another shape is added in future
function gettrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.raduis ** 2;
    }
    // return shape.side ** 2
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.raduis ** 2;
        case "square":
            return shape.side ** 2;
        case "rectangle":
            return shape.length * shape.width;
        // by adding this default, if another shape is added in future, this gives an error
        default:
            const _defaultForShape = shape;
            return _defaultForShape;
    }
}
